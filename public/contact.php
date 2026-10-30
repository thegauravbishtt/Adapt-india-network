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

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide your name and email address.']);
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
$logEntry = date('Y-m-d H:i:s') . " | " . $name . " | " . $email . " | " . $phone . " | " . $service . "\n";
@file_put_contents(__DIR__ . '/leads_log.txt', $logEntry, FILE_APPEND | LOCK_EX);

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Your project brief has been received successfully!'
]);

