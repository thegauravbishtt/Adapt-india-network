<?php
// Contact Form Handler for Adapt India Network on Hostinger
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? 'Not provided');
$countryCode = trim($data['countryCode'] ?? '+91');
$companyName = trim($data['companyName'] ?? 'Individual / Direct Inquiry');
$service = trim($data['service'] ?? 'Enterprise Telecom Solution');
$budget = trim($data['budget'] ?? 'Not specified');
$requirement = trim($data['requirement'] ?? 'Consultation Request');
$source = trim($data['source'] ?? 'Website Contact Form');
$location = trim($data['location'] ?? '');

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide your name and email address.']);
    exit;
}

if (!empty($data['website'])) { // hidden field only bots fill in
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you.']);
    exit;
}

if (mb_strlen($location) < 3 && ($data['newsletter'] ?? '') === '' && stripos($source, 'newsletter') === false) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter your location (area, city or PIN code).']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid email address.']);
    exit;
}

$to = 'info@adapt-india.net';
$subject = "🔥 New Lead: " . $name . " (" . $companyName . ") - " . $service;

$message = "NEW CLIENT INQUIRY - ADAPT INDIA NETWORK\n";
$message .= "========================================\n\n";
$message .= "Name: " . $name . "\n";
$message .= "Company: " . $companyName . "\n";
$message .= "Email: " . $email . "\n";
$message .= "Phone: " . $countryCode . " " . $phone . "\n";
$message .= "Location: " . ($location !== '' ? $location : 'Not given') . "\n";
$message .= "Service: " . $service . "\n";
$message .= "Budget: " . $budget . "\n";
$message .= "Source: " . $source . "\n\n";
$message .= "PROJECT REQUIREMENT:\n";
$message .= "----------------------------------------\n";
$message .= $requirement . "\n";
$message .= "----------------------------------------\n";

$headers = "From: Adapt India Network <info@adapt-india.net>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = @mail($to, $subject, $message, $headers);

// Also log leads to a secure text file on server
$logEntry = date('Y-m-d H:i:s') . " | " . $name . " | " . $email . " | " . $phone . " | " . $location . " | " . $service . "\n";
@file_put_contents(__DIR__ . '/leads_log.txt', $logEntry, FILE_APPEND | LOCK_EX);

// ---- Send the lead straight into the CRM (it is assigned to the Admin there) ----
// Uses the public website key: it can only ADD website leads, never read them.
// Never blocks or breaks the form: any error here is ignored.
// If the CRM can't be reached, the lead goes to the Google Sheet inbox instead,
// and the CRM picks it up from there.
$crmPhone = ($phone === 'Not provided' || $phone === '') ? '' : trim($countryCode . ' ' . $phone);
$isNewsletter = stripos($source, 'newsletter') !== false;
function ain_post($url, $body, $type) {
    if (!function_exists('curl_init')) {
        $ctx = stream_context_create(['http' => ['method' => 'POST', 'header' => "Content-Type: $type\r\n", 'content' => $body, 'timeout' => 6, 'ignore_errors' => true]]);
        $r = @file_get_contents($url, false, $ctx);
        $code = 0;
        if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) $code = (int)$m[1];
        return [$code, $r];
    }
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_HTTPHEADER => ["Content-Type: $type"],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_TIMEOUT => 6,
    ]);
    $r = @curl_exec($ch);
    $code = (int)@curl_getinfo($ch, CURLINFO_HTTP_CODE);
    @curl_close($ch);
    return [$code, $r];
}
if (!$isNewsletter) {
    try {
        [$code] = ain_post('https://crm.adapt-india.net/api/lead', json_encode([
            'key'         => 'website2026',
            'name'        => $name,
            'phone'       => $crmPhone,
            'email'       => $email,
            'location'    => $location,
            'service'     => $service,
            'company'     => $companyName,
            'requirement' => $requirement,
            'budget'      => $budget,
            'form'        => $source,
        ]), 'application/json');
        if ($code < 200 || $code >= 300) {
            ain_post('https://script.google.com/macros/s/AKfycbzO09B9X9A4yzIWf_O6zEMDooJwC-wIXzNp11tJLq_06BDuRVQsNL7BocRCXgc7NYLZpg/exec', http_build_query([
                'key'     => 'website2026',
                'name'    => $name,
                'phone'   => $crmPhone,
                'email'   => $email,
                'message' => "Location: $location | Service: $service | Company: $companyName | Budget: $budget | Form: $source\n$requirement",
            ]), 'application/x-www-form-urlencoded');
        }
    } catch (\Throwable $e) {
        // ignore: the email and log above have already been handled
    }
}

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Your project brief has been received successfully!'
]);

