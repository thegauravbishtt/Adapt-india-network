import type { SubServiceExtra } from "../types";

export const businessCommExtras: Record<string, SubServiceExtra> = {
  "smartflo-ccaas": {
    outcome:
      "Supervisors stop guessing how the floor is doing. They can see queues build up in real time, move agents between teams in a few clicks, and listen back to any call when a customer complains. New agents can start from home on day one with just a laptop and a headset.",
    prep: ["Number of agents and supervisors, and your busiest hours", "The call flow you want (menu options, teams, languages)", "The CRM or helpdesk you'd like calls linked to"],
    faqs: [
      { question: "How long does it take to go live?", answer: "A basic setup with IVR, queues and recording can be ready quickly once numbers are in place. CRM integrations and complex routing take longer; we'll give you a plan after the requirement call." },
      { question: "Can supervisors listen to live calls?", answer: "Yes. Supervisors can monitor live calls and, where enabled, whisper to the agent or join the call." },
    ],
  },
  "smartflo-cpaas": {
    outcome:
      "Your product team can add calling and messaging features in days instead of months, without negotiating with telecom operators or managing infrastructure. Every OTP, alert and call is tracked, so support teams can answer 'I didn't get the message' questions with facts.",
    prep: ["Which channels you need: voice, SMS, WhatsApp or all three", "Your expected monthly volumes", "A developer contact for API access and testing"],
    faqs: [
      { question: "Is there a sandbox for testing?", answer: "Yes. Developers get test access to build and try integrations before going live." },
      { question: "Can we use one API for SMS and WhatsApp?", answer: "The platform offers APIs for each channel, and fallback logic (for example, WhatsApp first, then SMS) can be set up in your flow." },
    ],
  },
  "smartflo-ucaas": {
    outcome:
      "Staff can take office calls from anywhere, so a missed call at reception no longer means a missed customer. Opening a new branch becomes a matter of adding users in the admin panel rather than buying and wiring a new phone system.",
    prep: ["List of users and the extensions or numbers they need", "Your current numbers and provider details for porting", "How calls should route during and after office hours"],
    faqs: [
      { question: "Do employees need to share their personal mobile number?", answer: "No. Calls made through the mobile app show your business number, not the employee's personal number." },
      { question: "Can we record calls?", answer: "Yes. Call recording can be enabled for specific users or teams." },
    ],
  },
  "microsoft-operator-connect": {
    outcome:
      "Teams becomes the single place where people chat, meet and call. You can retire desk phones and the old PBX, and IT manages phone numbers in the same admin centre they already use for Microsoft 365 users.",
    prep: ["Your Microsoft 365 tenant details and current licences", "Numbers to port or new numbers required", "Users who need calling, and any shared or reception lines"],
    faqs: [
      { question: "Do users need a separate app for calling?", answer: "No. Calls are made and received in the Microsoft Teams app on desktop, mobile or Teams-certified phones." },
      { question: "What happens to our existing PBX?", answer: "You can move everyone to Teams at once or in phases. Some companies keep the PBX for a while during the transition." },
    ],
  },
  "webex-calling": {
    outcome:
      "Calling, meetings and messaging sit in one Cisco app, and you no longer need to maintain on-premise call managers. Adding or moving users across locations is done from one web console.",
    prep: ["Number of users and sites", "Your existing Cisco phones and their model numbers", "Current numbers and call routing rules"],
    faqs: [
      { question: "Is Webex Calling suitable for small businesses?", answer: "Yes. It scales from small offices to large enterprises, and you pay per user." },
      { question: "Can we have a receptionist console?", answer: "Webex offers receptionist and auto attendant features for handling and transferring incoming calls." },
    ],
  },
  "smartflo-ai": {
    outcome:
      "Instead of reviewing a handful of recorded calls each week, quality teams can see trends across every call. Recurring complaints and product questions surface quickly, and simple queries are handled automatically outside office hours.",
    prep: ["Sample call recordings and the main call types you handle", "Languages your customers use", "What you want to track: complaints, sales outcomes, compliance phrases"],
    faqs: [
      { question: "Is customer data kept private?", answer: "Recordings and transcripts are processed under agreed data policies. We'll share how data is stored and who can access it." },
      { question: "Can AI insights connect to our CRM?", answer: "In many setups, summaries and tags can be pushed to your CRM. We'll check what your CRM supports." },
    ],
  },
  "smart-single-number": {
    outcome:
      "Customers remember one number, and every call reaches someone who can help. You can see which branches answer quickly and which miss calls, and fix staffing before it costs you business.",
    prep: ["List of branches or teams that should receive calls", "Office hours and after-hours routing for each", "Who should get missed-call alerts"],
    faqs: [
      { question: "Can calls go to the branch nearest the caller?", answer: "Routing based on the caller's region or the menu option they choose can be configured." },
      { question: "Can we change routing ourselves?", answer: "Yes. Routing rules can be updated from a web panel without calling support." },
    ],
  },
  "sip-trunk-services": {
    outcome:
      "You stop paying for idle PRI capacity and can add call channels the same day you need them. Calls between your offices can also travel over your own network, and adding numbers for a new team no longer needs a site visit.",
    prep: ["Your PBX make and model", "Number of simultaneous calls at peak", "Existing numbers you want to keep"],
    faqs: [
      { question: "How many channels do we need?", answer: "Check how many calls run at the same time during your busiest hour. We size trunks with some headroom above that." },
      { question: "Does SIP support fax?", answer: "Fax over SIP is possible with the right equipment and settings, but many businesses move to email-based alternatives." },
    ],
  },
  "toll-free-number-services": {
    outcome:
      "More customers call when it's free for them. With routing and reports, you can see which campaigns bring in calls and make sure every enquiry is answered by the right team.",
    prep: ["Business KYC documents", "Where calls should be delivered: office lines, contact centre or mobiles", "Expected monthly call minutes"],
    faqs: [
      { question: "Can we choose a memorable number?", answer: "Number availability varies. We'll share the options available when you apply." },
      { question: "Can a toll-free number ring on mobiles?", answer: "Yes. Calls can be forwarded to mobile phones or answered through a cloud contact centre app." },
    ],
  },
  "call-register-services": {
    outcome:
      "Missed calls turn into callbacks instead of lost leads. Managers get a simple daily view of how many calls came in, how many were answered, and which ones still need a response.",
    prep: ["Numbers you want to track", "Who should see the reports", "Whether you need exports to a CRM or spreadsheet"],
    faqs: [
      { question: "Can we get missed-call alerts on WhatsApp or SMS?", answer: "Alert options depend on the setup; email and SMS alerts are common. We'll confirm what's possible for your numbers." },
      { question: "How long is call data kept?", answer: "Retention periods are agreed during setup, based on your needs and policies." },
    ],
  },
  "pri-lines": {
    outcome:
      "Your EPABX gets a dependable, high-capacity connection with direct-dial numbers for teams and individuals, so callers reach the right person without going through reception.",
    prep: ["EPABX make and PRI card details", "Number of DID numbers required", "Installation address and floor details"],
    faqs: [
      { question: "How many DID numbers come with a PRI line?", answer: "PRI lines usually come with a block of DID numbers. The exact block size depends on the plan." },
      { question: "Can a PRI line be moved to a new office?", answer: "Yes, subject to feasibility at the new address. Plan the move early to avoid downtime." },
    ],
  },
  "centrex-systems": {
    outcome:
      "You get office phone features without owning the hardware, so there's no PBX to fix when it fails and no upgrade project every few years. Branches feel like one office because they share extension dialling.",
    prep: ["Number of users and locations", "Features you rely on today (hunt groups, pickup, conferencing)", "Your current phone handsets"],
    faqs: [
      { question: "Is Centrex suitable for a single office?", answer: "Yes, though its advantages are greatest for organisations with several locations." },
      { question: "Can Centrex users work remotely?", answer: "Remote options depend on the setup. If remote working is a priority, a cloud PBX may suit better." },
    ],
  },
  "smart-internet-telephony": {
    outcome:
      "New or temporary offices get working business phone lines quickly, and staff can carry their extension on a laptop or phone. When you move premises, your numbers move with you.",
    prep: ["Internet connection details at the site", "Number of lines and users", "Devices you'd like to use: IP phones, softphones or mobile apps"],
    faqs: [
      { question: "What happens if the internet goes down?", answer: "Calls can be diverted to mobiles or other numbers automatically until the connection is back." },
      { question: "Can we use our existing broadband?", answer: "Usually yes, if it's stable. For many simultaneous calls, a leased line or traffic priority is recommended." },
    ],
  },
  "1600-series-support": {
    outcome:
      "Customers can recognise genuine service and transactional calls from your organisation, which builds trust and makes them more likely to answer. Your call flows stay in line with regulator directions.",
    prep: ["The types of calls you make: service, transactional, collections", "Your current calling setup (dialler, PBX, cloud contact centre)", "The compliance contact at your organisation"],
    faqs: [
      { question: "Will customers see the 1600 number when we call?", answer: "Yes. Calls made through the series show the 1600 number on the customer's phone." },
      { question: "Can 1600 numbers be used for promotional calls?", answer: "The series is intended for service and transactional calls. Promotional calls follow separate rules." },
    ],
  },
  "whatsapp-business-platform": {
    outcome:
      "Customers get updates and answers on the app they already check all day, and your support team handles chats from a shared inbox instead of passing one phone around. Common questions are answered automatically, even at night.",
    prep: ["A phone number to register for WhatsApp", "Your Meta Business account (we help create one)", "Message templates for the updates you want to send"],
    faqs: [
      { question: "How are WhatsApp messages charged?", answer: "Meta charges per conversation, with rates depending on the category (utility, marketing, authentication or service). We'll explain the current pricing." },
      { question: "Can we get the green verified tick?", answer: "Verification badges are granted by Meta based on its criteria. We can help you apply when eligible." },
    ],
  },
  "smartflo-enterprise-rcs": {
    outcome:
      "Your messages look like they're from a real brand, not a random sender, and customers can act on them with a tap. That usually means better engagement than plain SMS for offers, reminders and confirmations.",
    prep: ["Brand name, logo and colours for your verified profile", "The campaigns or alerts you want to send", "Your existing SMS setup for fallback"],
    faqs: [
      { question: "Do RCS messages work on iPhones?", answer: "RCS support depends on the device, operating system and network. Where RCS isn't supported, an SMS fallback can be used." },
      { question: "Can customers reply to RCS messages?", answer: "Yes. Messages can include suggested replies and buttons, and customers can respond." },
    ],
  },
  "sms-solutions": {
    outcome:
      "OTPs and alerts reach customers reliably, even without mobile data, and your messages stay compliant so they aren't blocked. Delivery reports make it easy to investigate when a customer says a message didn't arrive.",
    prep: ["Business registration details for DLT", "Sender ID you'd like to use", "Message templates for each type of SMS"],
    faqs: [
      { question: "How quickly are OTPs delivered?", answer: "Transactional and OTP routes are prioritised for fast delivery. Actual speed depends on the operator network at the time." },
      { question: "Can we send SMS in Hindi or regional languages?", answer: "Yes. Unicode SMS supports Indian languages, though each message holds fewer characters." },
    ],
  },
  "smartflo-obd": {
    outcome:
      "Reminders and alerts reach thousands of customers in minutes without tying up agents. Keypress responses show exactly who confirmed, who wants a callback and who didn't answer, so your team follows up only where needed.",
    prep: ["The message script and language", "Your contact list and consent records", "What each keypress should do"],
    faqs: [
      { question: "Can unanswered calls be retried automatically?", answer: "Yes. Retry attempts and timing can be configured for each campaign." },
      { question: "Can we use text-to-speech instead of recording?", answer: "Text-to-speech is often available, which is useful for personalised messages like amounts or dates." },
    ],
  },
  "truecaller-business-verified": {
    outcome:
      "Customers who see your verified name and logo are more likely to answer, which means fewer missed deliveries, faster collections and less time redialling. It also helps protect your brand from people impersonating you.",
    prep: ["Business registration documents", "The phone numbers you call customers from", "Your logo and preferred display name"],
    faqs: [
      { question: "How long does verification take?", answer: "It depends on Truecaller's review of your documents. We'll keep you updated during the process." },
      { question: "Will it stop our numbers being marked as spam?", answer: "A verified profile helps customers trust your calls. Following good calling practices also matters." },
    ],
  },
  "pri-dialing": {
    outcome:
      "Your outbound team gets steady, high-capacity lines that can keep up with a full shift of calls, and capacity grows as you add agents without changing your dialler.",
    prep: ["Number of agents and expected concurrent calls", "Dialler or EPABX details", "Campaign types and calling hours"],
    faqs: [
      { question: "Can outbound calls show a single number?", answer: "Calling line identity can be configured within operator rules, so customers see a consistent business number." },
      { question: "Can we add lines during busy seasons?", answer: "Yes, subject to feasibility and lead time. Plan seasonal capacity in advance." },
    ],
  },
  "smartflo-email-platform": {
    outcome:
      "Invoices and alerts land in the inbox instead of spam, and you can see exactly what was delivered and opened. Marketing and transactional email stop sharing the same reputation, so a campaign doesn't hurt your order emails.",
    prep: ["The domain you send email from, and DNS access", "The types of emails you send and monthly volumes", "Your current email tool, if any"],
    faqs: [
      { question: "Can we send from our existing website or app?", answer: "Yes, through SMTP or API integration." },
      { question: "Do you handle unsubscribes?", answer: "Yes. Unsubscribe links and suppression lists are managed so people who opt out aren't emailed again." },
    ],
  },
};
