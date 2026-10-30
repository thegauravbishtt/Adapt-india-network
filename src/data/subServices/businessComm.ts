import type { SubService } from "./types";

const P = "business-communications";

export const businessComm: SubService[] = [
  // ---------------- Integrated solutions ----------------
  {
    slug: "smartflo-ccaas",
    name: "Smartflo CCaaS",
    parent: P,
    group: "Integrated Solutions",
    headline: "Run your call centre from the cloud, with agents in the office or at home",
    summary:
      "Smartflo CCaaS cloud contact centre for Indian businesses: IVR, call queues, recording, live dashboards and agents working from anywhere. Get a demo.",
    intro: [
      "Contact Center as a Service (CCaaS) moves your call centre software to the cloud. There's no server or PBX to install; agents log in through a browser or app and take calls from the office or from home.",
      "Supervisors see queues, waiting times and agent status on a live dashboard, and every call can be recorded and reviewed. You add or remove agent seats as your call volumes change, which helps during seasonal peaks.",
    ],
    features: [
      { title: "IVR and smart routing", text: "Send callers to the right team by language, product or customer type." },
      { title: "Live dashboards", text: "See calls waiting, agents available and service levels in real time." },
      { title: "Call recording", text: "Record calls for training, quality checks and dispute resolution." },
      { title: "CRM integration", text: "Show the customer's details on screen as soon as the call connects." },
    ],
    goodFor: ["Customer support teams", "Inside sales and telecalling", "E-commerce and delivery helplines", "Hospitals and booking desks"],
    faqs: [
      {
        question: "Do agents need special phones for a cloud contact centre?",
        answer: "No. Agents can use a browser, a softphone app with a headset, or a mobile app. Desk IP phones are optional.",
      },
      {
        question: "Can we start small and add agents later?",
        answer: "Yes. Seats can be added or reduced as your call volumes change.",
      },
    ],
  },
  {
    slug: "smartflo-cpaas",
    name: "Smartflo CPaaS",
    parent: P,
    group: "Integrated Solutions",
    headline: "Add calling, SMS and WhatsApp to your own app or website through APIs",
    summary:
      "Smartflo CPaaS APIs let Indian businesses build voice calls, OTPs, SMS and WhatsApp messages into their apps, CRMs and websites. Talk to our team.",
    intro: [
      "Communications Platform as a Service (CPaaS) gives your developers ready-made APIs for voice, SMS and WhatsApp. Instead of building telecom connections yourself, your app calls the API and the platform handles delivery.",
      "Common uses include OTPs, order and delivery updates, click-to-call buttons, masked calling between customers and delivery partners, and automated reminders.",
    ],
    features: [
      { title: "Voice APIs", text: "Click-to-call, masked numbers and automated calls from your app." },
      { title: "SMS APIs", text: "OTPs and transactional alerts sent through registered templates." },
      { title: "WhatsApp APIs", text: "Order updates and support conversations on WhatsApp." },
      { title: "Delivery reports", text: "Track which messages and calls went through, and when." },
    ],
    goodFor: ["Apps and marketplaces", "Fintech and lending platforms", "Logistics and delivery companies", "SaaS products that need notifications"],
    faqs: [
      {
        question: "What is number masking?",
        answer:
          "It connects two people, such as a customer and a delivery rider, without showing either of them the other's real phone number.",
      },
      {
        question: "Do SMS templates need to be registered?",
        answer: "Yes. In India, commercial SMS templates and sender IDs must be registered on the DLT platform. We help with this.",
      },
    ],
  },
  {
    slug: "smartflo-ucaas",
    name: "Smartflo UCaaS",
    parent: P,
    group: "Integrated Solutions",
    headline: "Office phones, chat and meetings in one app, on any device",
    summary:
      "Smartflo UCaaS unified communications: cloud office phone system with extensions, calling, chat and meetings on desk phones, laptops and mobiles.",
    intro: [
      "Unified Communications as a Service (UCaaS) replaces the office PBX with a cloud phone system. Every employee gets an extension that works on a desk phone, a laptop app or their mobile, so calls reach them wherever they are.",
      "Because it's in the cloud, offices in different cities share one system. Transfers, conferencing and voicemail work the same everywhere, and there's no hardware to maintain.",
    ],
    features: [
      { title: "Extensions everywhere", text: "One business number per person that rings on desk, laptop and mobile." },
      { title: "Multi-office", text: "Branches in different cities share one phone system and dial each other by extension." },
      { title: "Call features", text: "Transfers, hunt groups, voicemail, call recording and conferencing." },
      { title: "Web admin", text: "Add users and change call flows yourself from a browser." },
    ],
    goodFor: ["Companies with several offices", "Hybrid and remote teams", "Businesses replacing an old EPABX", "Growing SMEs"],
    faqs: [
      {
        question: "Can we keep our existing office numbers?",
        answer: "In most cases, yes. We check porting eligibility for your numbers before migration.",
      },
      {
        question: "What happens if the office internet goes down?",
        answer: "Calls can be diverted to mobile apps or other numbers automatically, so customers can still reach you.",
      },
    ],
  },
  {
    slug: "microsoft-operator-connect",
    name: "Microsoft Operator Connect",
    parent: P,
    group: "Integrated Solutions",
    headline: "Make and receive normal phone calls directly in Microsoft Teams",
    summary:
      "Microsoft Operator Connect for Teams in India: call landlines and mobiles from Microsoft Teams with operator numbers, managed from the Teams admin centre.",
    intro: [
      "If your company already uses Microsoft Teams, Operator Connect lets employees call any landline or mobile number from inside Teams, and receive calls on their business number in Teams.",
      "Numbers and calling are provided by a telecom operator and connected to your Teams tenant, so you don't need an on-premise gateway. IT assigns numbers to users from the Teams admin centre.",
    ],
    features: [
      { title: "Calling inside Teams", text: "Users dial out and take calls in the same app they already use for chat and meetings." },
      { title: "No extra hardware", text: "The connection is between the operator and Microsoft; no session border controller on site." },
      { title: "Simple number management", text: "Assign numbers to users from the Teams admin centre." },
      { title: "Works on any device", text: "Calls follow users on desktop, mobile and Teams desk phones." },
    ],
    goodFor: ["Microsoft 365 organisations", "Companies replacing desk phones", "Hybrid teams", "IT teams wanting fewer phone systems"],
    faqs: [
      {
        question: "Which Microsoft licences are needed?",
        answer:
          "Users need a Teams Phone licence, either included in some Microsoft 365 plans or added separately. We check your current licences first.",
      },
      {
        question: "Can we keep our existing numbers?",
        answer: "Usually, yes. We check porting eligibility before moving numbers into Teams.",
      },
    ],
  },
  {
    slug: "webex-calling",
    name: "Webex Calling",
    parent: P,
    group: "Integrated Solutions",
    headline: "Cisco's cloud phone system, with business numbers and calling across India",
    summary:
      "Webex Calling for Indian businesses: Cisco cloud phone system with business numbers, desk phones and apps, plus Webex meetings and messaging.",
    intro: [
      "Webex Calling is Cisco's cloud phone system. Employees get business numbers and extensions that work on Cisco desk phones, the Webex app on laptops and mobiles, and in Webex meetings.",
      "It suits organisations that already use Cisco equipment or Webex meetings and want calling in the same place, without maintaining a PBX.",
    ],
    features: [
      { title: "Cloud PBX", text: "Extensions, hunt groups, auto attendants and voicemail without on-site servers." },
      { title: "Cisco desk phones", text: "Use supported Cisco IP phones alongside the Webex app." },
      { title: "Meetings and messaging", text: "Move from a call to a video meeting or chat in one click." },
      { title: "Central admin", text: "Manage users and locations from the Webex Control Hub." },
    ],
    goodFor: ["Cisco and Webex users", "Multi-location organisations", "Companies moving off on-premise Cisco PBX", "Hybrid teams"],
    faqs: [
      {
        question: "Can we reuse our Cisco IP phones?",
        answer: "Many Cisco IP phone models are supported. We check your models before migration.",
      },
      {
        question: "Does Webex Calling work with Microsoft Teams?",
        answer: "Webex offers integrations for Teams users. We can explain the options for your setup.",
      },
    ],
  },
  {
    slug: "smartflo-ai",
    name: "Smartflo AI",
    parent: P,
    group: "Integrated Solutions",
    headline: "Use AI to understand your calls and handle routine customer queries",
    summary:
      "Smartflo AI for Indian businesses: call transcription, speech analytics, sentiment insights and voice bots for routine queries in your contact centre.",
    intro: [
      "Most call centres record calls but only review a small sample. AI tools can transcribe every call, flag complaints and missed sales opportunities, and show what customers ask about most.",
      "Voice bots can also answer simple, repetitive questions such as order status or appointment booking, so your agents spend more time on calls that need a person.",
    ],
    features: [
      { title: "Call transcription", text: "Turn recorded calls into searchable text." },
      { title: "Speech analytics", text: "Spot common topics, complaints and script compliance across all calls." },
      { title: "Sentiment insights", text: "See which calls went badly so supervisors can follow up." },
      { title: "Voice bots", text: "Handle routine queries automatically and pass complex ones to agents." },
    ],
    goodFor: ["Large contact centres", "Quality and compliance teams", "Sales teams reviewing pitches", "Businesses with many repetitive calls"],
    faqs: [
      {
        question: "Does it work with Indian languages?",
        answer: "Support varies by language and feature. We'll confirm what's available for the languages your customers use.",
      },
      {
        question: "Will a voice bot replace our agents?",
        answer: "No. Bots handle simple, repetitive questions and hand over to an agent when a caller needs help.",
      },
    ],
  },

  // ---------------- Inbound communications ----------------
  {
    slug: "smart-single-number",
    name: "Smart Single Number Solution",
    parent: P,
    group: "Inbound Communications",
    headline: "One easy number for customers, routed to the right office or person",
    summary:
      "Smart Single Number for Indian businesses: one memorable number for all your branches, with routing by location, time and team. Never miss a customer call.",
    intro: [
      "Customers shouldn't need a different number for every branch. A single business number can ring the right office, team or mobile based on where the caller is, the time of day or the option they choose.",
      "It's easy to put on ads, vehicles and invoices, and it stays the same even if you move offices or change staff.",
    ],
    features: [
      { title: "One number, many destinations", text: "Route calls to branches, departments or mobiles." },
      { title: "Time-based routing", text: "Send after-hours calls to a duty phone or voicemail." },
      { title: "Missed-call alerts", text: "Get notified so no enquiry goes unanswered." },
      { title: "Call reports", text: "See how many calls each branch received and answered." },
    ],
    goodFor: ["Multi-branch retailers and service businesses", "Franchise networks", "Clinics and diagnostic chains", "Businesses advertising one number nationally"],
    faqs: [
      {
        question: "Do we need new phones?",
        answer: "No. Calls can be delivered to your existing landlines, office phone system or mobile phones.",
      },
      {
        question: "Can callers choose a department?",
        answer: "Yes. You can add a simple menu (press 1 for sales, 2 for support) in front of the routing.",
      },
    ],
  },
  {
    slug: "sip-trunk-services",
    name: "SIP Trunk Services",
    parent: P,
    group: "Inbound Communications",
    headline: "Phone lines for your IP PBX, delivered over your data connection",
    summary:
      "SIP trunk provider in India: connect your IP PBX or contact centre to the phone network over data. Scale call channels easily and keep your numbers.",
    intro: [
      "A SIP trunk connects your office phone system (IP PBX) or contact centre to the public phone network using your data connection instead of copper or PRI lines.",
      "You choose how many calls can run at the same time and can increase it without new cabling. It's usually the first step when replacing PRI lines.",
    ],
    features: [
      { title: "Flexible channels", text: "Increase or reduce simultaneous calls as needs change." },
      { title: "Number blocks", text: "DID numbers for direct dialling to people and departments." },
      { title: "Works with common PBXs", text: "Compatible with most IP PBX and contact centre platforms." },
      { title: "Quality over a managed link", text: "Run it on a leased line or MPLS for clear, stable calls." },
    ],
    goodFor: ["Offices with an IP PBX", "Contact centres", "Companies replacing PRI lines", "Businesses with high call volumes"],
    faqs: [
      {
        question: "Do we need a leased line for SIP trunks?",
        answer: "A dedicated or managed connection gives the most reliable call quality, especially for many simultaneous calls.",
      },
      {
        question: "Can we keep our PRI numbers?",
        answer: "In many cases numbers can be moved to SIP. We check this before migration.",
      },
    ],
  },
  {
    slug: "toll-free-number-services",
    name: "Toll Free Number Services",
    parent: P,
    group: "Inbound Communications",
    headline: "An 1800 number customers can call free from anywhere in India",
    summary:
      "Get a toll-free 1800 number for your business in India. Free calls for customers, routing to your teams, IVR and call reports. Apply with our help.",
    intro: [
      "With a toll-free 1800 number, callers don't pay for the call; your business does. It makes customers more likely to call, and it signals that you're an established company.",
      "Calls can be routed to your office lines, contact centre or mobiles, with a menu, business-hours rules and reports on every call.",
    ],
    features: [
      { title: "Free for callers", text: "Customers call from any phone without being charged." },
      { title: "Routing and IVR", text: "Direct callers to sales, support or the nearest branch." },
      { title: "Call reports", text: "See call counts, peak times and missed calls." },
      { title: "Easy to remember", text: "One national number for all your marketing." },
    ],
    goodFor: ["Customer care helplines", "Brands advertising nationally", "Banks and insurers", "E-commerce and consumer products"],
    faqs: [
      {
        question: "How are toll-free calls charged?",
        answer: "The business pays for incoming calls, usually per minute. We'll share the plan options for your expected volumes.",
      },
      {
        question: "What documents are needed?",
        answer: "Standard business KYC documents. We'll give you the exact list when you apply.",
      },
    ],
  },
  {
    slug: "call-register-services",
    name: "Call Register Services",
    parent: P,
    group: "Inbound Communications",
    headline: "A complete record of incoming calls, including the ones nobody answered",
    summary:
      "Call Register Services for businesses: log every incoming call, see missed calls and follow up on enquiries with simple reports by number, time and team.",
    intro: [
      "Many businesses don't know how many calls they miss. A call register keeps a record of every incoming call (who called, when, and whether it was answered) so missed enquiries can be called back.",
      "Reports by day, branch or number show when you're busiest and where calls are going unanswered.",
    ],
    features: [
      { title: "Every call logged", text: "Caller number, time, duration and answered or missed." },
      { title: "Missed-call follow-up", text: "A list of missed callers for your team to call back." },
      { title: "Simple reports", text: "Daily and monthly summaries by number or branch." },
      { title: "Peak-hour view", text: "See when to put more people on the phones." },
    ],
    goodFor: ["Showrooms and dealerships", "Clinics and diagnostic labs", "Real estate sales offices", "Any business that takes enquiries by phone"],
    faqs: [
      {
        question: "Does this record call audio?",
        answer: "A call register logs call details. Call recording can be added separately if you need it.",
      },
      {
        question: "Can we export the data?",
        answer: "Yes. Reports can be downloaded for your CRM or spreadsheets.",
      },
    ],
  },
  {
    slug: "pri-lines",
    name: "PRI Lines",
    parent: P,
    group: "Inbound Communications",
    headline: "Digital phone lines with 30 simultaneous calls on one connection",
    summary:
      "PRI line provider in India: ISDN PRI with 30 voice channels and DID numbers for your EPABX or call centre. Reliable digital voice for offices.",
    intro: [
      "A PRI (Primary Rate Interface) line is a digital phone connection that carries up to 30 calls at the same time and comes with a block of direct-dial numbers. It plugs into your office EPABX or call centre system.",
      "PRI is a proven, dependable option for offices with existing PRI-ready equipment. Businesses planning a move to IP can later switch to SIP trunks.",
    ],
    features: [
      { title: "30 voice channels", text: "Up to 30 simultaneous calls on one line." },
      { title: "DID numbers", text: "Direct numbers for people and departments." },
      { title: "Works with EPABX", text: "Connects to standard PRI cards on your phone system." },
      { title: "Clear digital voice", text: "Consistent call quality for high-volume use." },
    ],
    goodFor: ["Offices with PRI-ready EPABX", "Call centres", "Hotels and hospitals", "Banks and branch offices"],
    faqs: [
      {
        question: "Should we choose PRI or SIP?",
        answer:
          "If your equipment is PRI-based and working well, PRI is fine. If you're upgrading to an IP PBX or cloud system, SIP is usually more flexible.",
      },
      {
        question: "Can we get more than 30 channels?",
        answer: "Yes, with multiple PRI lines.",
      },
    ],
  },
  {
    slug: "centrex-systems",
    name: "Centrex Systems",
    parent: P,
    group: "Inbound Communications",
    headline: "Office phone features from the operator's exchange, with no PBX to buy",
    summary:
      "Centrex for Indian businesses: extensions, transfers and conferencing provided from the operator's exchange, across offices, without buying a PBX.",
    intro: [
      "With Centrex, the phone system features your office needs (extensions, transfers, call pickup and conferencing) are provided from the telecom operator's exchange rather than a PBX in your server room.",
      "Offices in different locations can share one dialling plan, and you avoid buying, maintaining and upgrading PBX hardware.",
    ],
    features: [
      { title: "No PBX hardware", text: "Features run in the operator's network." },
      { title: "Extension dialling", text: "Short codes between desks and branches." },
      { title: "Standard call features", text: "Transfer, hold, pickup groups and conferencing." },
      { title: "Predictable cost", text: "A monthly fee instead of a large equipment purchase." },
    ],
    goodFor: ["Multi-branch offices", "Businesses with an ageing EPABX", "Government and institutions", "Companies wanting less hardware"],
    faqs: [
      {
        question: "How is Centrex different from a cloud PBX?",
        answer:
          "Both remove on-site PBX hardware. Centrex runs in the operator's voice network; a cloud PBX runs on internet-based platforms with apps for laptops and mobiles.",
      },
      {
        question: "Can we use our existing desk phones?",
        answer: "Often, yes. We check compatibility during the survey.",
      },
    ],
  },
  {
    slug: "smart-internet-telephony",
    name: "Smart Internet Telephony",
    parent: P,
    group: "Inbound Communications",
    headline: "Business phone lines that run over your internet connection",
    summary:
      "Internet telephony for businesses in India: business phone numbers delivered over your internet connection, with calling on desk phones, apps and mobiles.",
    intro: [
      "Internet telephony delivers your business phone lines over an internet connection, so you don't need separate copper lines. Calls can be made from IP desk phones, laptop softphones or mobile apps.",
      "It's quick to set up at new or temporary offices and moves with you when you relocate.",
    ],
    features: [
      { title: "No copper lines", text: "Calls run on the internet connection you already have." },
      { title: "Any device", text: "IP phones, softphones and mobile apps." },
      { title: "Quick setup", text: "Good for new branches and short-term sites." },
      { title: "Easy moves", text: "Keep your numbers when you change office." },
    ],
    goodFor: ["Small and new offices", "Remote and hybrid staff", "Temporary project sites", "Businesses moving premises"],
    faqs: [
      {
        question: "How much bandwidth does a call use?",
        answer: "Roughly 100 kbps per active call is a safe planning figure. We size it for your number of simultaneous calls.",
      },
      {
        question: "Will call quality be affected by internet use?",
        answer: "We can set traffic priority on your router or use a dedicated link so calls stay clear.",
      },
    ],
  },
  {
    slug: "1600-series-support",
    name: "1600 Series Support",
    parent: P,
    group: "Inbound Communications",
    headline: "Help moving your service and transactional calls to the 1600 number series",
    summary:
      "1600 series number support for banks, NBFCs and financial institutions in India: move service and transactional calls to 1600 numbers as per TRAI guidelines.",
    intro: [
      "TRAI has introduced the 1600 number series for service and transactional calls from regulated entities such as banks, financial institutions and insurers, so customers can tell genuine calls from spam and fraud.",
      "We help you plan the change: getting the numbers, connecting them to your contact centre or dialler, and updating call flows, so customer communication continues without disruption.",
    ],
    features: [
      { title: "Number allocation help", text: "Guidance on applying for 1600 series numbers." },
      { title: "Contact centre integration", text: "Connect the numbers to your dialler, PBX or cloud contact centre." },
      { title: "Migration planning", text: "Move existing service call flows step by step." },
      { title: "Ongoing support", text: "Help with changes as your requirements grow." },
    ],
    goodFor: ["Banks and NBFCs", "Insurance companies", "Mutual funds and brokers", "Other entities directed to use 1600 numbers"],
    faqs: [
      {
        question: "Who has to use 1600 numbers?",
        answer:
          "Regulators have directed certain financial-sector entities to use the series for service and transactional calls. Check the latest TRAI and sector regulator guidance for your organisation; we can help interpret it.",
      },
      {
        question: "Can 1600 numbers work with our existing dialler?",
        answer: "In most cases, yes. We check your setup and plan the integration.",
      },
    ],
  },

  // ---------------- Outbound communications ----------------
  {
    slug: "whatsapp-business-platform",
    name: "WhatsApp Business Platform",
    parent: P,
    group: "Outbound Communications",
    headline: "Talk to customers on WhatsApp at scale, with your verified business profile",
    summary:
      "WhatsApp Business Platform (API) for Indian businesses: order updates, reminders, support chats and campaigns from your verified business number.",
    intro: [
      "The WhatsApp Business Platform lets businesses send updates and handle customer conversations on WhatsApp from a business number, connected to their systems rather than a single phone.",
      "Teams can share one number, messages can be automated from your CRM or order system, and customers get updates on the app they already use every day.",
    ],
    features: [
      { title: "Approved templates", text: "Order confirmations, reminders and alerts sent through approved message templates." },
      { title: "Shared team inbox", text: "Several agents answer chats from one business number." },
      { title: "Chatbots", text: "Automate FAQs, tracking and simple bookings." },
      { title: "System integration", text: "Trigger messages from your CRM, e-commerce or ERP." },
    ],
    goodFor: ["E-commerce and D2C brands", "Banks, NBFCs and insurers", "Hospitals and clinics", "Education and coaching institutes"],
    faqs: [
      {
        question: "Is this different from the WhatsApp Business app?",
        answer:
          "Yes. The app is for one phone and small volumes. The platform (API) is for businesses that need multiple agents, automation and integration.",
      },
      {
        question: "Can we send promotional messages?",
        answer: "Yes, to customers who have opted in, using approved templates and following WhatsApp's policies.",
      },
    ],
  },
  {
    slug: "smartflo-enterprise-rcs",
    name: "Smartflo Enterprise RCS",
    parent: P,
    group: "Outbound Communications",
    headline: "Branded, interactive messages in the phone's default messaging app",
    summary:
      "Enterprise RCS messaging in India: send branded messages with your logo, images and buttons to Android users' default messaging app.",
    intro: [
      "RCS (Rich Communication Services) upgrades ordinary text messages. Messages show your verified business name and logo and can include images, carousels and buttons such as 'Track order' or 'Pay now'.",
      "They arrive in the phone's default messaging app on supported Android devices, with SMS as a fallback where RCS isn't available.",
    ],
    features: [
      { title: "Verified sender", text: "Your brand name and logo appear on every message." },
      { title: "Rich content", text: "Images, carousels and suggested replies." },
      { title: "Action buttons", text: "Let customers pay, track or call in one tap." },
      { title: "SMS fallback", text: "Messages still reach phones without RCS support." },
    ],
    goodFor: ["Retail and e-commerce campaigns", "Banks and fintech alerts", "Travel and ticketing", "Brands wanting higher engagement than SMS"],
    faqs: [
      {
        question: "Do customers need to install an app?",
        answer: "No. RCS messages appear in the default messaging app on supported Android phones.",
      },
      {
        question: "What happens on phones without RCS?",
        answer: "A fallback SMS can be sent so the message still reaches the customer.",
      },
    ],
  },
  {
    slug: "sms-solutions",
    name: "SMS Solutions",
    parent: P,
    group: "Outbound Communications",
    headline: "OTPs, alerts and campaigns delivered by SMS, fully DLT-compliant",
    summary:
      "Bulk and transactional SMS for businesses in India: OTPs, alerts and promotions with DLT registration support, APIs and delivery reports.",
    intro: [
      "SMS still reaches every mobile phone in India, with or without internet. It's the standard way to send OTPs, payment alerts, appointment reminders and short promotions.",
      "Under TRAI's DLT rules, sender IDs and message templates must be registered before sending. We help you register correctly so messages are delivered and not blocked.",
    ],
    features: [
      { title: "Transactional and OTP SMS", text: "Fast delivery for time-sensitive messages." },
      { title: "Promotional campaigns", text: "Send offers to opted-in customers within the rules." },
      { title: "DLT registration help", text: "Sender IDs, templates and consent set up properly." },
      { title: "API and dashboard", text: "Send from your systems or a web panel, with delivery reports." },
    ],
    goodFor: ["Apps needing OTPs", "Banks, NBFCs and insurers", "Retail and restaurants", "Schools and hospitals"],
    faqs: [
      {
        question: "What is DLT?",
        answer:
          "DLT is TRAI's registration system for commercial SMS. Businesses must register their entity, sender IDs and templates before sending.",
      },
      {
        question: "Can we send SMS from our own software?",
        answer: "Yes, through an API, or manually from a web dashboard.",
      },
    ],
  },
  {
    slug: "smartflo-obd",
    name: "Smartflo OBD",
    parent: P,
    group: "Outbound Communications",
    headline: "Automated outbound voice calls for reminders, alerts and surveys",
    summary:
      "Outbound dialing (OBD) for Indian businesses: automated voice calls for payment reminders, alerts, confirmations and surveys, with keypress responses.",
    intro: [
      "Outbound dialling (OBD) places automated voice calls to a list of customers with a recorded message, for example a payment reminder, delivery confirmation or appointment alert.",
      "Customers can respond by pressing keys (press 1 to confirm, 2 to speak to an agent), and you get a report showing who answered and how they responded.",
    ],
    features: [
      { title: "Voice broadcasts", text: "Reach many customers with one recorded message." },
      { title: "Keypress responses", text: "Collect confirmations or connect callers to an agent." },
      { title: "Scheduling", text: "Run campaigns at the right time of day." },
      { title: "Detailed reports", text: "See answered, unanswered and responses for every number." },
    ],
    goodFor: ["Payment and EMI reminders", "Order and delivery confirmation", "Customer feedback surveys", "Public alerts and announcements"],
    faqs: [
      {
        question: "Are there rules on automated calls?",
        answer:
          "Yes. Calls must follow TRAI's commercial communication rules, including customer consent and preferences. We help set this up correctly.",
      },
      {
        question: "Can messages be in Hindi or regional languages?",
        answer: "Yes. You record or upload the message in any language.",
      },
    ],
  },
  {
    slug: "truecaller-business-verified",
    name: "Truecaller Business Verified",
    parent: P,
    group: "Outbound Communications",
    headline: "Show your verified business name and logo when you call customers",
    summary:
      "Truecaller verified business caller ID: show your business name, logo and verified badge on customers' phones so more people answer your calls.",
    intro: [
      "Many people ignore calls from unknown numbers. With a verified business profile on Truecaller, your company name, logo and verified badge appear when you call customers who use Truecaller.",
      "It helps more customers pick up genuine calls from your sales, delivery or support teams, and reduces the chance of being marked as spam.",
    ],
    features: [
      { title: "Business name on screen", text: "Customers see who is calling before they answer." },
      { title: "Logo and verified badge", text: "Signals that the call is genuinely from your company." },
      { title: "Call reason", text: "Optionally show why you're calling, where supported." },
      { title: "Multiple numbers", text: "Cover your contact centre and team numbers." },
    ],
    goodFor: ["Delivery and logistics companies", "Banks and NBFCs", "Sales and telecalling teams", "Hospitals and service businesses"],
    faqs: [
      {
        question: "Does this work for customers without Truecaller?",
        answer: "The branded display appears for customers who use Truecaller.",
      },
      {
        question: "Which numbers can be verified?",
        answer: "Numbers your business owns and uses for customer calls, subject to Truecaller's verification process.",
      },
    ],
  },
  {
    slug: "pri-dialing",
    name: "PRI Dialing",
    parent: P,
    group: "Outbound Communications",
    headline: "High-volume outbound calling for call centres over PRI lines",
    summary:
      "PRI dialing for outbound call centres in India: dependable high-volume calling over digital PRI lines for telecalling, collections and customer outreach.",
    intro: [
      "Outbound call centres need many calls going out at once with steady quality. PRI lines carry up to 30 simultaneous calls each and connect directly to dialler systems and EPABX equipment.",
      "We set up the lines, numbers and capacity to match your number of agents and campaigns, and support you as you add seats.",
    ],
    features: [
      { title: "Capacity for teams", text: "Multiple PRI lines sized to your agent count." },
      { title: "Dialler compatible", text: "Works with standard dialler and EPABX systems." },
      { title: "Steady call quality", text: "Digital voice suited to long calling shifts." },
      { title: "Scalable", text: "Add lines as your team grows." },
    ],
    goodFor: ["Telecalling and sales teams", "Collections and recovery", "Customer outreach programmes", "BPOs"],
    faqs: [
      {
        question: "Is SIP better than PRI for outbound calling?",
        answer:
          "Both work. PRI suits existing PRI-ready systems; SIP is more flexible for cloud diallers. We'll recommend based on your setup.",
      },
      {
        question: "Do outbound campaigns need to follow any rules?",
        answer: "Yes. Commercial calls must follow TRAI's rules on consent and customer preferences.",
      },
    ],
  },
  {
    slug: "smartflo-email-platform",
    name: "Smartflo Email Platform",
    parent: P,
    group: "Outbound Communications",
    headline: "Send transactional and marketing emails that land in the inbox",
    summary:
      "Business email delivery platform: transactional emails, newsletters and campaigns with templates, APIs and delivery tracking for Indian businesses.",
    intro: [
      "Order confirmations, invoices, password resets and newsletters all depend on email reaching the inbox rather than spam. A dedicated email platform handles sending at volume and tracks what happens to every message.",
      "Send from your own software through an API, or build campaigns in a dashboard, with reports on deliveries, opens and clicks.",
    ],
    features: [
      { title: "Transactional email", text: "Invoices, receipts and alerts sent from your systems." },
      { title: "Campaigns", text: "Newsletters and offers with templates and contact lists." },
      { title: "Deliverability setup", text: "Domain authentication (SPF, DKIM, DMARC) configured properly." },
      { title: "Reports", text: "Delivered, opened, clicked and bounced, for every send." },
    ],
    goodFor: ["E-commerce and SaaS companies", "Banks and financial services", "Education and events", "Any business sending email at volume"],
    faqs: [
      {
        question: "Why do our emails go to spam?",
        answer:
          "Often because the sending domain isn't properly authenticated or the sending reputation is low. Setting up SPF, DKIM and DMARC usually helps a lot.",
      },
      {
        question: "Can we use our own domain?",
        answer: "Yes. Emails are sent from your domain after it's verified.",
      },
    ],
  },
];
