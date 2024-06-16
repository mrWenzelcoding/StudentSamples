let px, py, pxSped, pySped;
let pDash;
let posX, posY;
let grounded = true;
let accel = 0.1;
let jumpDelay = false;
let jD;
let pHealth;
let mana;
let atS;
let at;
let atDelay;
let enemy = [];
let hit = [];
let playerAlive;
let attackDamage;
let broke = [];
let bHealth = [];
let attackSide;
let doubleJump;
let muln;
let b1;
let song1;
let mulnImg;
let swordSmall;
let swordLarge;
let wave;
let wave2;
let ripples;
let vBall;
let mulnArena;
let justALittleGuy;
let mask;
let stagEnemy;
let beetleR;
let beetleL;
let b2;
let alrand;
let alrandArena;
let mTime;
let manaDelay;
let fireball;
let alrandImg;
let dead;
let deathAnim;
let startScreen;
let credits;
let creditsScroll;
let creditsMusic;
let creditRoll = [];
let endAni=[]
let endTime
let endX,endY
function preload() {
  swordSmall = loadImage("assets/small.png");
  swordLarge = loadImage("assets/large.png");
  wave = loadImage("assets/wave.png");
  wave2 = loadImage("assets/wave2.png");
  mulnImg = loadImage("assets/muln.png");
  ripples = loadImage("assets/jumpripples.png");
  vBall = loadImage("assets/voidBall.png");
  mulnArena = loadImage("assets/mulnArena.png");
  justALittleGuy = loadImage("assets/littleGuy.png");
  mask = loadImage("assets/mask.png");
  // beetleR=loadImage()
  //beetleL=loadImage()
  alrandArena = loadImage("assets/AlrandArena.png");
  alrandImg = loadImage("assets/Alrand.png");
  //deathAnim=createImg('deathAnim.png')
  creditRoll = [
    "Producer: Jayden Jensen",
    "Head Coder: Jayden Jensen",
    "Moral Support: Nic Chapman",
    "Head of Game Testing: Jayden Jensen",
    "Senior Trainee: Jayden Jensen",
    "Generator of Endless Credits: ChatGPT",
    "Code Monkey: Jayden Jensen",
    "Snack Procurer: Jayden Jensen",
    "Idea Rejector: Jayden Jensen",
    "Office Ghost: Jayden Jensen",
    "Chief Innovator: Jayden Jensen",
    "Master of Disaster: Jayden Jensen",
    "King of Debugging: Jayden Jensen",
    "Junior Overlord: Jayden Jensen",
    "Director of Chaos: Jayden Jensen",
    "Official Excuse Maker: Jayden Jensen",
    "Grand Poobah: Jayden Jensen",
    "Supreme Ruler of Everything: Jayden Jensen",
    "Ninja Warrior: Jayden Jensen",
    "Lord of the Files: Jayden Jensen",
    "Captain Obvious: Jayden Jensen",
    "Duke of Documentation: Jayden Jensen",
    "Tech Wizard: Jayden Jensen",
    "Pixel Perfectionist: Jayden Jensen",
    "Button Presser: Jayden Jensen",
    "Keyboard Maestro: Jayden Jensen",
    "Code Whisperer: Jayden Jensen",
    "Bug Squasher: Jayden Jensen",
    "Clipboard Manager: Jayden Jensen",
    "Mouse Mover: Jayden Jensen",
    "Window Resizer: Jayden Jensen",
    "Screen Saver: Jayden Jensen",
    "Power User: Jayden Jensen",
    "Guru of Git: Jayden Jensen",
    "Command Line Ninja: Jayden Jensen",
    "Script Kiddie: Jayden Jensen",
    "Error Log Analyst: Jayden Jensen",
    "Database Diver: Jayden Jensen",
    "Stack Overflow Explorer: Jayden Jensen",
    "Browser Tab Collector: Jayden Jensen",
    "Internet Surfer: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Tech Support: Jayden Jensen",
    "User Experience Enthusiast: Jayden Jensen",
    "Virtual Reality Virtuoso: Jayden Jensen",
    "Augmented Reality Architect: Jayden Jensen",
    "AI Trainer: Jayden Jensen",
    "Machine Learning Mentor: Jayden Jensen",
    "Data Science Sorcerer: Jayden Jensen",
    "Algorithm Alchemist: Jayden Jensen",
    "Game Guru: Jayden Jensen",
    "Level Designer: Jayden Jensen",
    "Boss Battle Designer: Jayden Jensen",
    "NPC Dialog Writer: Jayden Jensen",
    "Loot Box Creator: Jayden Jensen",
    "Achievement Unlocker: Jayden Jensen",
    "Multiplayer Matchmaker: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "Map Maker: Jayden Jensen",
    "Texture Artist: Jayden Jensen",
    "Sound Engineer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Character Modeler: Jayden Jensen",
    "Animator: Jayden Jensen",
    "Cutscene Director: Jayden Jensen",
    "Beta Tester: Jayden Jensen",
    "Alpha Tester: Jayden Jensen",
    "Pre-Alpha Tester: Jayden Jensen",
    "Post-Release Patcher: Jayden Jensen",
    "Customer Support: Jayden Jensen",
    "Marketing Guru: Jayden Jensen",
    "PR Specialist: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Forum Moderator: Jayden Jensen",
    "Discord Admin: Jayden Jensen",
    "Redditor: Jayden Jensen",
    "Meme Lord: Jayden Jensen",
    "GIF Generator: Jayden Jensen",
    "Emoticon Designer: Jayden Jensen",
    "Sticker Maker: Jayden Jensen",
    "Fan Art Curator: Jayden Jensen",
    "Merchandise Designer: Jayden Jensen",
    "Crowdfunding Campaigner: Jayden Jensen",
    "Backer Reward Fulfillment: Jayden Jensen",
    "Event Organizer: Jayden Jensen",
    "Conference Speaker: Jayden Jensen",
    "Workshop Instructor: Jayden Jensen",
    "Panel Moderator: Jayden Jensen",
    "Cosplay Judge: Jayden Jensen",
    "Live Streamer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Host: Jayden Jensen",
    "Vlogger: Jayden Jensen",
    "Blog Writer: Jayden Jensen",
    "Tech Blogger: Jayden Jensen",
    "Product Reviewer: Jayden Jensen",
    "Unboxer: Jayden Jensen",
    "Tutorial Creator: Jayden Jensen",
    "How-To Guide Writer: Jayden Jensen",
    "Online Course Instructor: Jayden Jensen",
    "E-Learning Designer: Jayden Jensen",
    "MOOC Developer: Jayden Jensen",
    "Distance Learning Advocate: Jayden Jensen",
    "Webinar Host: Jayden Jensen",
    "Virtual Event Coordinator: Jayden Jensen",
    "Remote Work Evangelist: Jayden Jensen",
    "Telecommuting Pro: Jayden Jensen",
    "Home Office Expert: Jayden Jensen",
    "Coworking Space User: Jayden Jensen",
    "Digital Nomad: Jayden Jensen",
    "Freelancer: Jayden Jensen",
    "Contractor: Jayden Jensen",
    "Gig Worker: Jayden Jensen",
    "Side Hustler: Jayden Jensen",
    "Entrepreneur: Jayden Jensen",
    "Startup Founder: Jayden Jensen",
    "Business Developer: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Agile Coach: Jayden Jensen",
    "Scrum Master: Jayden Jensen",
    "Kanban Champion: Jayden Jensen",
    "Lean Expert: Jayden Jensen",
    "Six Sigma Black Belt: Jayden Jensen",
    "Quality Assurance: Jayden Jensen",
    "Test Automation Engineer: Jayden Jensen",
    "Performance Tester: Jayden Jensen",
    "Security Tester: Jayden Jensen",
    "Penetration Tester: Jayden Jensen",
    "Ethical Hacker: Jayden Jensen",
    "Cybersecurity Specialist: Jayden Jensen",
    "Network Admin: Jayden Jensen",
    "Systems Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Site Reliability Engineer: Jayden Jensen",
    "Cloud Architect: Jayden Jensen",
    "Infrastructure Engineer: Jayden Jensen",
    "Full Stack Developer: Jayden Jensen",
    "Front End Developer: Jayden Jensen",
    "Back End Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop App Developer: Jayden Jensen",
    "Embedded Systems Engineer: Jayden Jensen",
    "Firmware Developer: Jayden Jensen",
    "IoT Specialist: Jayden Jensen",
    "Wearable Tech Developer: Jayden Jensen",
    "Robotics Engineer: Jayden Jensen",
    "Drone Pilot: Jayden Jensen",
    "3D Printing Expert: Jayden Jensen",
    "Augmented Reality Developer: Jayden Jensen",
    "Virtual Reality Developer: Jayden Jensen",
    "Mixed Reality Specialist: Jayden Jensen",
    "Computer Vision Expert: Jayden Jensen",
    "Natural Language Processing: Jayden Jensen",
    "Speech Recognition Engineer: Jayden Jensen",
    "Chatbot Developer: Jayden Jensen",
    "Voice Assistant Developer: Jayden Jensen",
    "Smart Home Designer: Jayden Jensen",
    "Home Automation Engineer: Jayden Jensen",
    "Energy Management Specialist: Jayden Jensen",
    "Green Tech Advocate: Jayden Jensen",
    "Sustainability Officer: Jayden Jensen",
    "Code Reviewer: Jayden Jensen",
    "Branch Manager: Jayden Jensen",
    "Merge Conflict Resolver: Jayden Jensen",
    "Commit History Cleaner: Jayden Jensen",
    "Syntax Checker: Jayden Jensen",
    "Code Formatter: Jayden Jensen",
    "Build Master: Jayden Jensen",
    "Deployment Specialist: Jayden Jensen",
    "Server Wrangler: Jayden Jensen",
    "Docker Commander: Jayden Jensen",
    "Kubernetes Navigator: Jayden Jensen",
    "Microservices Architect: Jayden Jensen",
    "API Gateway Keeper: Jayden Jensen",
    "RESTful Designer: Jayden Jensen",
    "GraphQL Enthusiast: Jayden Jensen",
    "Swagger Doc Writer: Jayden Jensen",
    "CI/CD Pipeline Builder: Jayden Jensen",
    "Load Balancer Tuner: Jayden Jensen",
    "Cache Optimizer: Jayden Jensen",
    "Session Manager: Jayden Jensen",
    "Database Normalizer: Jayden Jensen",
    "SQL Query Optimizer: Jayden Jensen",
    "NoSQL Explorer: Jayden Jensen",
    "Data Modeler: Jayden Jensen",
    "Schema Designer: Jayden Jensen",
    "Migration Master: Jayden Jensen",
    "Backup Strategist: Jayden Jensen",
    "Disaster Recovery Planner: Jayden Jensen",
    "High Availability Engineer: Jayden Jensen",
    "Fault Tolerance Expert: Jayden Jensen",
    "Uptime Guru: Jayden Jensen",
    "Latency Reducer: Jayden Jensen",
    "Throughput Maximizer: Jayden Jensen",
    "Bandwidth Saver: Jayden Jensen",
    "Cost Optimizer: Jayden Jensen",
    "Resource Allocator: Jayden Jensen",
    "Scaling Specialist: Jayden Jensen",
    "Load Tester: Jayden Jensen",
    "Stress Tester: Jayden Jensen",
    "Spike Tester: Jayden Jensen",
    "Soak Tester: Jayden Jensen",
    "Chaos Engineer: Jayden Jensen",
    "Fault Injector: Jayden Jensen",
    "Latency Simulator: Jayden Jensen",
    "Packet Sniffer: Jayden Jensen",
    "Network Traffic Analyzer: Jayden Jensen",
    "Protocol Debugger: Jayden Jensen",
    "Firewall Configurator: Jayden Jensen",
    "VPN Specialist: Jayden Jensen",
    "Proxy Server Admin: Jayden Jensen",
    "Reverse Proxy Expert: Jayden Jensen",
    "Content Delivery Network Admin: Jayden Jensen",
    "SSL/TLS Specialist: Jayden Jensen",
    "Certificate Manager: Jayden Jensen",
    "DNS Guru: Jayden Jensen",
    "IP Address Planner: Jayden Jensen",
    "Subnet Calculator: Jayden Jensen",
    "Router Configurator: Jayden Jensen",
    "Switchboard Operator: Jayden Jensen",
    "Network Cable Organizer: Jayden Jensen",
    "Wireless Network Engineer: Jayden Jensen",
    "RF Specialist: Jayden Jensen",
    "Bluetooth Expert: Jayden Jensen",
    "NFC Developer: Jayden Jensen",
    "Zigbee Enthusiast: Jayden Jensen",
    "LoRaWAN Developer: Jayden Jensen",
    "5G Innovator: Jayden Jensen",
    "Edge Computing Engineer: Jayden Jensen",
    "Fog Computing Specialist: Jayden Jensen",
    "Cloud Computing Expert: Jayden Jensen",
    "Hybrid Cloud Architect: Jayden Jensen",
    "Multi-Cloud Strategist: Jayden Jensen",
    "Serverless Computing Advocate: Jayden Jensen",
    "Function-as-a-Service Developer: Jayden Jensen",
    "Platform-as-a-Service Administrator: Jayden Jensen",
    "Infrastructure-as-a-Service Manager: Jayden Jensen",
    "Software-as-a-Service Consultant: Jayden Jensen",
    "Data-as-a-Service Provider: Jayden Jensen",
    "Machine Learning Engineer: Jayden Jensen",
    "Deep Learning Specialist: Jayden Jensen",
    "Neural Network Architect: Jayden Jensen",
    "AI Model Trainer: Jayden Jensen",
    "AI Model Tester: Jayden Jensen",
    "AI Model Deployer: Jayden Jensen",
    "AI Model Optimizer: Jayden Jensen",
    "Data Preprocessor: Jayden Jensen",
    "Feature Engineer: Jayden Jensen",
    "Data Annotator: Jayden Jensen",
    "Data Labeler: Jayden Jensen",
    "Data Cleaner: Jayden Jensen",
    "Data Visualizer: Jayden Jensen",
    "Dashboard Creator: Jayden Jensen",
    "Report Generator: Jayden Jensen",
    "Metric Tracker: Jayden Jensen",
    "KPI Designer: Jayden Jensen",
    "Business Intelligence Developer: Jayden Jensen",
    "Data Warehouse Architect: Jayden Jensen",
    "Data Lake Administrator: Jayden Jensen",
    "Big Data Engineer: Jayden Jensen",
    "Hadoop Developer: Jayden Jensen",
    "Spark Specialist: Jayden Jensen",
    "Flink Expert: Jayden Jensen",
    "Kafka Guru: Jayden Jensen",
    "Streaming Data Engineer: Jayden Jensen",
    "Batch Processing Engineer: Jayden Jensen",
    "Real-Time Analytics Developer: Jayden Jensen",
    "Predictive Analytics Specialist: Jayden Jensen",
    "Prescriptive Analytics Engineer: Jayden Jensen",
    "Descriptive Analytics Expert: Jayden Jensen",
    "Cognitive Computing Specialist: Jayden Jensen",
    "Sentiment Analysis Engineer: Jayden Jensen",
    "Natural Language Processing Developer: Jayden Jensen",
    "Text Mining Specialist: Jayden Jensen",
    "Chatbot Developer: Jayden Jensen",
    "Voice Assistant Developer: Jayden Jensen",
    "Speech Recognition Engineer: Jayden Jensen",
    "Language Translator: Jayden Jensen",
    "Text-to-Speech Engineer: Jayden Jensen",
    "Speech-to-Text Developer: Jayden Jensen",
    "Optical Character Recognition Developer: Jayden Jensen",
    "Image Recognition Specialist: Jayden Jensen",
    "Video Analysis Expert: Jayden Jensen",
    "Object Detection Engineer: Jayden Jensen",
    "Face Recognition Developer: Jayden Jensen",
    "Emotion Detection Specialist: Jayden Jensen",
    "Behavior Analysis Engineer: Jayden Jensen",
    "Biometric Authentication Expert: Jayden Jensen",
    "Security Engineer: Jayden Jensen",
    "Privacy Officer: Jayden Jensen",
    "Compliance Manager: Jayden Jensen",
    "Risk Assessor: Jayden Jensen",
    "Audit Specialist: Jayden Jensen",
    "Threat Hunter: Jayden Jensen",
    "Incident Responder: Jayden Jensen",
    "Forensic Investigator: Jayden Jensen",
    "Vulnerability Researcher: Jayden Jensen",
    "Malware Analyst: Jayden Jensen",
    "Exploit Developer: Jayden Jensen",
    "Patch Developer: Jayden Jensen",
    "Security Researcher: Jayden Jensen",
    "Penetration Tester: Jayden Jensen",
    "Red Team Specialist: Jayden Jensen",
    "Blue Team Specialist: Jayden Jensen",
    "Purple Team Specialist: Jayden Jensen",
    "Social Engineer: Jayden Jensen",
    "Phishing Specialist: Jayden Jensen",
    "Spam Filter Developer: Jayden Jensen",
    "Ad Blocker Developer: Jayden Jensen",
    "Firewall Engineer: Jayden Jensen",
    "Intrusion Detection System Developer: Jayden Jensen",
    "Intrusion Prevention System Developer: Jayden Jensen",
    "Security Information and Event Management Developer: Jayden Jensen",
    "Endpoint Protection Developer: Jayden Jensen",
    "Network Security Engineer: Jayden Jensen",
    "Application Security Engineer: Jayden Jensen",
    "Cloud Security Engineer: Jayden Jensen",
    "Mobile Security Engineer: Jayden Jensen",
    "IoT Security Engineer: Jayden Jensen",
    "Hardware Security Engineer: Jayden Jensen",
    "Crypto Engineer: Jayden Jensen",
    "Encryption Specialist: Jayden Jensen",
    "Decryption Specialist: Jayden Jensen",
    "Cryptocurrency Developer: Jayden Jensen",
    "Blockchain Developer: Jayden Jensen",
    "Smart Contract Developer: Jayden Jensen",
    "Distributed Ledger Expert: Jayden Jensen",
    "Consensus Algorithm Engineer: Jayden Jensen",
    "Peer-to-Peer Network Developer: Jayden Jensen",
    "Decentralized Application Developer: Jayden Jensen",
    "Tokenomics Specialist: Jayden Jensen",
    "Initial Coin Offering Developer: Jayden Jensen",
    "Security Token Offering Developer: Jayden Jensen",
    "Stablecoin Developer: Jayden Jensen",
    "Crypto Wallet Developer: Jayden Jensen",
    "Crypto Exchange Developer: Jayden Jensen",
    "Crypto Trader: Jayden Jensen",
    "Crypto Analyst: Jayden Jensen",
    "Crypto Fund Manager: Jayden Jensen",
    "Crypto Educator: Jayden Jensen",
    "Crypto Journalist: Jayden Jensen",
    "Crypto Evangelist: Jayden Jensen",
    "Metaverse Developer: Jayden Jensen",
    "Virtual World Designer: Jayden Jensen",
    "Avatar Creator: Jayden Jensen",
    "Digital Twin Developer: Jayden Jensen",
    "Digital Asset Creator: Jayden Jensen",
    "Non-Fungible Token Developer: Jayden Jensen",
    "Digital Marketplace Developer: Jayden Jensen",
    "Digital Identity Developer: Jayden Jensen",
    "Digital Rights Manager: Jayden Jensen",
    "Digital Content Creator: Jayden Jensen",
    "Content Management System Developer: Jayden Jensen",
    "Content Delivery Network Engineer: Jayden Jensen",
    "Content Security Specialist: Jayden Jensen",
    "Content Personalization Expert: Jayden Jensen",
    "Recommendation System Developer: Jayden Jensen",
    "Search Engine Developer: Jayden Jensen",
    "SEO Specialist: Jayden Jensen",
    "Search Engine Marketing Specialist: Jayden Jensen",
    "Pay-Per-Click Manager: Jayden Jensen",
    "Digital Advertising Specialist: Jayden Jensen",
    "Programmatic Advertising Developer: Jayden Jensen",
    "Ad Tech Developer: Jayden Jensen",
    "Affiliate Marketing Specialist: Jayden Jensen",
    "E-Commerce Developer: Jayden Jensen",
    "Payment Gateway Developer: Jayden Jensen",
    "Shopping Cart Developer: Jayden Jensen",
    "Subscription System Developer: Jayden Jensen",
    "Membership System Developer: Jayden Jensen",
    "Loyalty Program Developer: Jayden Jensen",
    "Coupon System Developer: Jayden Jensen",
    "Referral Program Developer: Jayden Jensen",
    "Influencer Marketing Specialist: Jayden Jensen",
    "Social Media Developer: Jayden Jensen",
    "Social Networking Site Developer: Jayden Jensen",
    "Social Media Integration Developer: Jayden Jensen",
    "Chat Application Developer: Jayden Jensen",
    "Messaging App Developer: Jayden Jensen",
    "Video Conferencing Developer: Jayden Jensen",
    "Live Streaming Developer: Jayden Jensen",
    "Webinar Developer: Jayden Jensen",
    "Online Collaboration Tool Developer: Jayden Jensen",
    "Project Management Tool Developer: Jayden Jensen",
    "Task Management Tool Developer: Jayden Jensen",
    "Time Tracking Tool Developer: Jayden Jensen",
    "Resource Management Tool Developer: Jayden Jensen",
    "Workflow Automation Developer: Jayden Jensen",
    "Business Process Management Developer: Jayden Jensen",
    "Customer Relationship Management Developer: Jayden Jensen",
    "Enterprise Resource Planning Developer: Jayden Jensen",
    "Supply Chain Management Developer: Jayden Jensen",
    "Logistics Developer: Jayden Jensen",
    "Inventory Management Developer: Jayden Jensen",
    "Warehouse Management Developer: Jayden Jensen",
    "Order Management Developer: Jayden Jensen",
    "Point of Sale System Developer: Jayden Jensen",
    "Retail Management System Developer: Jayden Jensen",
    "Restaurant Management System Developer: Jayden Jensen",
    "Hotel Management System Developer: Jayden Jensen",
    "Travel Management System Developer: Jayden Jensen",
    "Event Management System Developer: Jayden Jensen",
    "Booking System Developer: Jayden Jensen",
    "Ticketing System Developer: Jayden Jensen",
    "Reservation System Developer: Jayden Jensen",
    "Check-in System Developer: Jayden Jensen",
    "Check-out System Developer: Jayden Jensen",
    "Queue Management System Developer: Jayden Jensen",
    "Visitor Management System Developer: Jayden Jensen",
    "Membership Management System Developer: Jayden Jensen",
    "Association Management System Developer: Jayden Jensen",
    "Fundraising System Developer: Jayden Jensen",
    "Donation Management System Developer: Jayden Jensen",
    "Volunteer Management System Developer: Jayden Jensen",
    "Grant Management System Developer: Jayden Jensen",
    "Nonprofit Management System Developer: Jayden Jensen",
    "Church Management System Developer: Jayden Jensen",
    "School Management System Developer: Jayden Jensen",
    "Student Information System Developer: Jayden Jensen",
    "Learning Management System Developer: Jayden Jensen",
    "Library Management System Developer: Jayden Jensen",
    "Museum Management System Developer: Jayden Jensen",
    "Heritage Management System Developer: Jayden Jensen",
    "Archives Management System Developer: Jayden Jensen",
    "Document Management System Developer: Jayden Jensen",
    "Record Management System Developer: Jayden Jensen",
    "Knowledge Management System Developer: Jayden Jensen",
    "Content Management System Developer: Jayden Jensen",
    "Digital Asset Management System Developer: Jayden Jensen",
    "Media Asset Management System Developer: Jayden Jensen",
    "Video Management System Developer: Jayden Jensen",
    "Image Management System Developer: Jayden Jensen",
    "Audio Management System Developer: Jayden Jensen",
    "Digital Rights Management System Developer: Jayden Jensen",
    "Brand Management System Developer: Jayden Jensen",
    "Marketing Automation Developer: Jayden Jensen",
    "Email Marketing Developer: Jayden Jensen",
    "Campaign Management Developer: Jayden Jensen",
    "Lead Generation Developer: Jayden Jensen",
    "Lead Scoring Developer: Jayden Jensen",
    "Customer Data Platform Developer: Jayden Jensen",
    "Customer Analytics Developer: Jayden Jensen",
    "Customer Experience Management Developer: Jayden Jensen",
    "Customer Service Management Developer: Jayden Jensen",
    "Help Desk Developer: Jayden Jensen",
    "Support Ticket System Developer: Jayden Jensen",
    "Call Center System Developer: Jayden Jensen",
    "Live Chat Developer: Jayden Jensen",
    "Chatbot Developer: Jayden Jensen",
    "Voice Assistant Developer: Jayden Jensen",
    "Knowledge Base Developer: Jayden Jensen",
    "FAQ System Developer: Jayden Jensen",
    "Self-Service Portal Developer: Jayden Jensen",
    "Customer Feedback System Developer: Jayden Jensen",
    "Survey System Developer: Jayden Jensen",
    "NPS Developer: Jayden Jensen",
    "CSAT Developer: Jayden Jensen",
    "Customer Retention System Developer: Jayden Jensen",
    "Customer Loyalty System Developer: Jayden Jensen",
    "Referral Program Developer: Jayden Jensen",
    "Advocacy Program Developer: Jayden Jensen",
    "Community Engagement Developer: Jayden Jensen",
    "Social Listening Developer: Jayden Jensen",
    "Brand Monitoring Developer: Jayden Jensen",
    "Sentiment Analysis Developer: Jayden Jensen",
    "Crisis Management Developer: Jayden Jensen",
    "Reputation Management Developer: Jayden Jensen",
    "Public Relations Management Developer: Jayden Jensen",
    "Press Release Management Developer: Jayden Jensen",
    "Media Monitoring Developer: Jayden Jensen",
    "Media Planning Developer: Jayden Jensen",
    "Media Buying Developer: Jayden Jensen",
    "Ad Campaign Developer: Jayden Jensen",
    "Creative Developer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "UI/UX Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Animation Developer: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Concept Artist: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Character Designer: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Level Designer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Audio Engineer: Jayden Jensen",
    "Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Storyteller: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Social Media Manager: Jayden Jensen",
    "Content Creator: Jayden Jensen",
    "Stream Producer: Jayden Jensen",
    "Video Editor: Jayden Jensen",
    "Podcast Producer: Jayden Jensen",
    "Web Developer: Jayden Jensen",
    "Front-End Developer: Jayden Jensen",
    "Back-End Developer: Jayden Jensen",
    "Full-Stack Developer: Jayden Jensen",
    "Mobile Developer: Jayden Jensen",
    "Desktop Developer: Jayden Jensen",
    "Game Developer: Jayden Jensen",
    "VR Developer: Jayden Jensen",
    "AR Developer: Jayden Jensen",
    "AI Developer: Jayden Jensen",
    "ML Developer: Jayden Jensen",
    "DL Developer: Jayden Jensen",
    "Data Scientist: Jayden Jensen",
    "Data Analyst: Jayden Jensen",
    "Data Engineer: Jayden Jensen",
    "Cloud Engineer: Jayden Jensen",
    "DevOps Engineer: Jayden Jensen",
    "Cybersecurity Engineer: Jayden Jensen",
    "Network Engineer: Jayden Jensen",
    "System Administrator: Jayden Jensen",
    "Database Administrator: Jayden Jensen",
    "Project Manager: Jayden Jensen",
    "Product Manager: Jayden Jensen",
    "Business Analyst: Jayden Jensen",
    "QA Engineer: Jayden Jensen",
    "Technical Support: Jayden Jensen",
    "IT Manager: Jayden Jensen",
    "Software Architect: Jayden Jensen",
    "Solution Architect: Jayden Jensen",
    "Enterprise Architect: Jayden Jensen",
    "Technology Strategist: Jayden Jensen",
    "Innovation Manager: Jayden Jensen",
    "Research Scientist: Jayden Jensen",
    "Technical Writer: Jayden Jensen",
    "Tech Evangelist: Jayden Jensen",
    "Developer Advocate: Jayden Jensen",
    "UX Researcher: Jayden Jensen",
    "UI Designer: Jayden Jensen",
    "UX Designer: Jayden Jensen",
    "Visual Designer: Jayden Jensen",
    "Interaction Designer: Jayden Jensen",
    "Motion Designer: Jayden Jensen",
    "Graphic Designer: Jayden Jensen",
    "Illustrator: Jayden Jensen",
    "Animator: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "3D Artist: Jayden Jensen",
    "Character Artist: Jayden Jensen",
    "Environment Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Voice Actor: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Script Writer: Jayden Jensen",
    "Game Designer: Jayden Jensen",
    "Gameplay Programmer: Jayden Jensen",
    "AI Programmer: Jayden Jensen",
    "Physics Programmer: Jayden Jensen",
    "Graphics Programmer: Jayden Jensen",
    "Engine Programmer: Jayden Jensen",
    "Network Programmer: Jayden Jensen",
    "Tools Programmer: Jayden Jensen",
    "UI Programmer: Jayden Jensen",
    "Gameplay Scripter: Jayden Jensen",
    "Level Scripter: Jayden Jensen",
    "Quest Designer: Jayden Jensen",
    "System Designer: Jayden Jensen",
    "Combat Designer: Jayden Jensen",
    "Economy Designer: Jayden Jensen",
    "Progression Designer: Jayden Jensen",
    "Narrative Designer: Jayden Jensen",
    "Cinematic Designer: Jayden Jensen",
    "Camera Designer: Jayden Jensen",
    "VFX Artist: Jayden Jensen",
    "Technical Artist: Jayden Jensen",
    "Shader Developer: Jayden Jensen",
    "Lighting Artist: Jayden Jensen",
    "Rigging Artist: Jayden Jensen",
    "Character Animator: Jayden Jensen",
    "Environment Animator: Jayden Jensen",
    "Prop Animator: Jayden Jensen",
    "Cutscene Animator: Jayden Jensen",
    "Gameplay Animator: Jayden Jensen",
    "UI Animator: Jayden Jensen",
    "Cinematic Animator: Jayden Jensen",
    "Physics Animator: Jayden Jensen",
    "Audio Programmer: Jayden Jensen",
    "Music Composer: Jayden Jensen",
    "Sound Designer: Jayden Jensen",
    "Voice Director: Jayden Jensen",
    "Localization Manager: Jayden Jensen",
    "Localization Engineer: Jayden Jensen",
    "Localization Tester: Jayden Jensen",
    "Accessibility Designer: Jayden Jensen",
    "Compliance Tester: Jayden Jensen",
    "Certification Tester: Jayden Jensen",
    "Release Manager: Jayden Jensen",
    "Live Ops Manager: Jayden Jensen",
    "Player Support Manager: Jayden Jensen",
    "Community Manager: Jayden Jensen",
    "Creators Best Friend: Cyrus FirstCharger",
  ];
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  playerAlive = true;
  endTime=0
  doubleJump = true;
  startScreen = true;
  endX=random(width)
  endY=random(height)
  //startScreen=false
  mTime = 0;
  dead = false;
  noStroke();
  pHealth = 100;
  mana = 30;
  px = 0; //OG
  py = 300;
  manaDelay = 60;
  posX = width / 2;
  posY = height * 0.5;
  if (pHealth != 100) {
    px = -5858;
    py = -1536;
    posY = height * 0.75;
  }
  pDash = 0;
  jD = 0;
  pxSped = 0;
  pySped = 0;
  noStroke();
  atS = 0;
  at = false;
  atDelay = 0;
  attackDamage = 10;
  enemy[0] = {
    x: 200,
    y: height / 2 + 25,
    xSped: 1,
    damage: 1,
    health: 10,
    hit: false,
    hitDelay: 0,
  };
  for (let i = 0; i < 400; i++) {
    bHealth[i] = 6000;
    broke[i] = false;
  }
  b1 = false;
  muln = {
    x: -2500,
    y: 2210,
    xSped: 0,
    ySped: 0,
    health: 500,
    stages: 1,
    attack: 0,
    hitPlayer: false,
    playerImmunityFrame: 0,
    hitByPlayer: false,
    immunityFrame: 0,
    time: 0,
    sequence: 0,
    jump: [1, 2, 3, 4],
    loops: 0,
    wave: {
      x: -2500,
      y: 2210,
      sped: 4,
      x2: -2500,
      y2: 2210,
    },
    shift: 0,
    addedMeasures: 0,
    flames: {
      x: 0,
      y: 0,
    },
    cBall: {
      x: 0,
      y: 0,
      xTarget: 0,
      yTarget: 0,
    },
    arrows: {
      x: -2700,
    },
    beat: false,
  };
  stagEnemy = {
    x: 1800,
    y: 1625,
  };
  if (song1 == true) {
    song1.play();
    song1.stop();
    song1.play();
  }
  fireball = {
    x: posX,
    y: posY,
    xSped: 5,
    direction: random([1, 2]),
    time: 0,
    active: false,
  };
  alrand = {
    active: false,
    x: 6000,
    y: 2000,
    flame: {
      x: 0,
      y: 0,
    },
    beat:true,
  };
  credits = false;
  creditsScroll = true;
}
function draw() {
  if (startScreen == false) {
    background(255);
    player();
    objectMap();
    // player();
    display();
    // pHealth=100
    // grounded=true
    manaGen();
    deceased();
  } else {
    start();
  }
}
function endAnimation(){
  if(endAni.length<400){
  endAni[endAni.length]= new EndAni(endX,endY)
  for(let i =0;i<endAni.length;i++){
    endAni[i].display()
  }
  }else {
    background(0)
  }
}
class EndAni{
  constructor(){
    this.x=random(width)
    this.y=random(height)
    this.x2=this.x+50
    this.y2=this.y+50
    this.x3=this.x-50
    this.y3=this.x-50
}
  display(){
    push()
    fill(0)
    triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3)
    pop()
  }
}
function manaGen() {
  //mana+=2/60
  if (mana < 100) {
    mTime++;
    if (mTime > manaDelay) {
      mTime = 0;
      mana += 2;
    }
  }
}
function start() {
  if (credits == false) {
    background(255);
    textSize(100);
    text("Arkon", width * 0.42, height * 0.3);
    stroke(0);
    //  line(width*0.5,0,width*0.5,height)
    textSize(15);
    text("A metroidvania/bossrush by Jayden J", width * 0.42, height * 0.35);
    rect(width * 0.4, height * 0.5, 310, 100);
    textSize(75);
    text("Play", width * 0.45, height * 0.58);
    rect(width * 0.4, height * 0.7, 310, 100);
    text("Credits", width * 0.425, height * 0.78);
    textSize(25);
    text("controls", 25, 25);
    textSize(10);
    text("A and D to move", 25, 50);
    text("Space to Jump", 25, 70);
    text("M or X to attack", 25, 90);
    text("E to dash", 25, 110);
    text("B to Heal (Needs Mana)", 25, 130);
    text("F or 1 for fullscreen", 25, 150);
    text("N for fireball (after first boss) (also needs Mana)", 25, 170);
  } else {
    background(0);
    push();
    translate(0, creditsScroll);
    creditsScroll -= 0.5;
    textSize(100);
    stroke(255);
    fill(255);
    text("Credits", width * 0.4, 100);
    textSize(20);
    for (let i = 0; i < creditRoll.length; i++) {
      text(creditRoll[i], width * 0.2, 150 + 50 * i);
    }
    pop();
  }
}
function deceased() {
  if (pHealth <= 0) {
    dead = true;
  }
  if (dead == true) {
    pxSped = 0;
    pySped = 0;
      endAnimation()
  }
  //deathAnim.position(50, 350);
}
function enemy0() {
  push();
  if (enemy[0].health > 0) {
    push();
    translate(px, py);
    stroke(200, 10, 10);
    noFill();
    image(mask, enemy[0].x - 15, enemy[0].y - 15, enemy[0].health * 3);
    ellipse(enemy[0].x, enemy[0].y, enemy[0].health * 3);
    enemy[0].x += enemy[0].xSped;
    if (enemy[0].x > 400 || enemy[0].x < 100) {
      enemy[0].xSped *= -1;
    }
    let d = [];
    d[0] = dist(enemy[0].x + px, enemy[0].y + py, posX, posY);
    if (d[0] < 15 + (enemy[0].health * 3) / 2) {
      if (enemy[0].hit == false) {
        pHealth -= 10;
        enemy[0].hit = true;
      }
    }
    if (enemy[0].hit == true) {
      enemy[0].hitDelay++;
      if (enemy[0].hitDelay < 20) {
        fill(200, 0, 0, 50);
        ellipse(enemy[0].x, enemy[0].y, enemy[0].health * 4);
        fill(0);
      }
      if (enemy[0].hitDelay >= 120) {
        enemy[0].hit = false;
        enemy[0].hitDelay = 0;
      }
    }
    if (atS > 0) {
      if (attackSide == 1) {
        d[0] = dist(enemy[0].x + px, enemy[0].y + py, posX + 30, posY);
      } else if (attackSide == 2) {
        d[0] = dist(enemy[0].x + px, enemy[0].y + py, posX - 30, posY);
      } else {
        d[0] = dist(enemy[0].x + px, enemy[0].y + py, posX, posY);
      }

      if (d[0] < atS / 2 + (enemy[0].health * 3) / 2) {
        enemy[0].health -= attackDamage;
      }
      pop();
    }
  }
  pop();
}
function display() {
  attack();
  Fireball();
  push();
  noFill();
  fill(0);
  if (dead == false) {
    ellipse(posX, posY, 30);
  }
  fill(0);
  rect(0, 0, 450, 70);
  pop();
  push();
  fill(0);
  fill(200, 10, 10);
  ellipse(65, 35, mana / 2);
  push();
  noFill();
  stroke(255);
  strokeWeight(5);
  ellipse(65, 35, 50);
  pop();
  for (let i = 0; i < pHealth / 10; i++) {
    ellipse(115 + i * 30, 30, 15, 15);
  }
  for (let i = 0; i < 10; i++) {
    push();
    stroke(255);
    noFill();
    ellipse(115 + i * 30, 30, 15, 15);
    pop();
  }
  if (b1 == true) {
    fill(255, 0, 0);
    rect(width * 0.65, 30, muln.health, 40);
    push();
    noFill();
    stroke(200);
    strokeWeight(3);
    rect(width * 0.65, 30, 500, 40);
    fill(0);
    stroke(255, 0, 0);
    strokeWeight(1);
    textStyle(ITALIC);
    textFont("Courier new", 15);
    text("mulningsvél", width * 0.65, 20);
    pop();
  }
  pop();
}
function player() {
  push();
  noFill();
  //stroke(255,0,0)
  fill(0);
  // image(justALittleGuy,posX-15,posY-15,30)
  if (dead == false) {
    ellipse(posX, posY, 30);
  }
  pop();
  px -= pxSped;
  py += pySped;
  pySped -= accel;
  jump();
  if (pHealth <= 0) {
    playerAlive = false;
  }
  if (pxSped <= -3) {
    pxSped += 0.2;
  } else if (pxSped >= 3) {
    pxSped -= 0.2;
  }
  if (pDash > 0) {
    pDash--;
  }
}
function jump() {
  if (jumpDelay == true) {
    jD++;
    if (jD > 20) {
      jumpDelay = false;
      jD = 0;
    }
  }
}
function attack() {
  attackDelay();
  if (at == true) {
    push();
    noFill();
    strokeWeight(10);
    stroke(200, 10, 10);
    if (attackSide == 1) {
      ellipse(posX + 30, posY, atS);
    } else if (attackSide == 2) {
      ellipse(posX - 30, posY, atS);
    } else {
      ellipse(posX, posY, atS);
    }
    pop();
    if (atS < 80) {
      atS += 3;
    } else {
      atS = 0;
      at = false;
      atDelay = 60;
    }
  }
}
function Fireball() {
  push();
  translate(px, py);
  if (fireball.active == true) {
    fireball.time++;
    if (fireball.time == 1) {
      fireball.x = -px + posX;
      fireball.y = -py + posY;
      fireball.direction = attackSide;
    }
    fill(200, 50, 50, 100);
    if (fireball.direction == 1) {
      ellipse(fireball.x + 30, fireball.y, 100);
      fireball.x += fireball.xSped;
    } else if (fireball.direction == 2) {
      ellipse(fireball.x - 30, fireball.y, 100);
      fireball.x -= fireball.xSped;
    } else {
      ellipse(posX, posY, atS);
    }
  }
  if (fireball.time > 120) {
    fireball.time = 0;
    fireball.active = false;
  }
  pop();
}
function attackDelay() {
  if (atDelay != 0) {
    atDelay--;
    at = false;
  }
}
function keyPressed() {
  if (startScreen == true) {
    if (key == "f") {
      let FS = fullscreen();
      fullscreen(!FS);
    }
  }
  if (startScreen == false) {
    if (playerAlive == true) {
      if (key == 1) {
        let FS = fullscreen();
        fullscreen(!FS);
      }
      if (key == "d") {
        pxSped = 2;
        attackSide = 1;
      }
      if (key == "a") {
        pxSped = -2;
        attackSide = 2;
      }
      if (key == "b") {
        if (pHealth < 100) {
          if (mana > 70) {
            mana -= 30;
            pHealth += 10;
          }
        }
      }
      if (key == " ") {
        if (grounded == true) {
          if (jumpDelay == false) {
            pySped = 5;
            if (doubleJump == false) {
              grounded = false;
            }
            doubleJump = false;
            collided = false;
            accel = 0.1;
            jumpDelay = true;
          }
        }
      }
      if (key == "x" || key == "m") {
        at = true;
      }
      //  if (key == "w") {
      //pySped=-2
      // }
      //  if (key == "s") {
      // pySped=2
      //  }
    }
    if (key == "y") {
      console.log(py);
    }
    if (key == "u") {
      console.log(px);
    }
    if (key == "e") {
      if (pDash <= 0) {
        if (pxSped > 0) {
          pxSped = 10;
        } else if (pxSped < 0) {
          pxSped = -10;
        }
        pDash = 120;
      }
    }
    if (key == "n") {
      if (muln.beat == true) {
        if (mana > 30) {
          mana -= 30;
          fireball.active = true;
        }
      }
    }
  }
}
function keyReleased() {
  if (key == "d") {
    pxSped = 0;
  }
  if (key == "a") {
    pxSped = 0;
  }
  if (key == "w") {
    // pySped = 0;
  }
  if (key == "s") {
    // pySped = 0;
  }
}
function plat(x, y, l, h) {
  push();
  translate(px, py);
  fill(0);
  rect(x, y, l, h);
  if (
    posY + 15 >= y + py &&
    posX - 15 < x + l + px &&
    posX + 15 > x + px &&
    posY - 15 < y + h + py
  ) {
    if (posY + 14 < y + py) {
      grounded = true;
      doubleJump = true;
    }
    py -= pySped;
    pySped *= -0.2;
    if (posY + 15 >= y + py + 3) {
      if (posY - 15 > y + py + h - 5) {
      } else {
        px += pxSped;
        pxSped *= -0.2;
      }
    }
  }
  pop();
}
function lava(x, y, l, h) {
  push();
  translate(px, py);
  fill(200, 50, 50, 50);
  rect(x, y, l, h);
  if (
    posY + 15 >= y + py &&
    posX - 15 < x + l + px &&
    posX + 15 > x + px &&
    posY - 15 < y + h + py
  ) {
    if (posY + 13 < y + py) {
      grounded = true;
      doubleJump = true;
    }
    py -= pySped;
    pySped *= -2;
    pHealth -= 10;
    if (posY + 15 >= y + py + 3) {
      if (posY - 15 > y + py + h - 5) {
      } else {
        px += pxSped;
        pxSped *= -0.2;
      }
    }
  }
  pop();
}
function object(x, y, s, e) {
  push();
  translate(px, py);
  fill(0);
  ellipse(x, y, s);
  pop();
  let d = dist(posX, posY, px + x, py + y);
  if (d < 15 + s / 2) {
    py -= pySped;
    px += pxSped;
    pySped *= -0.2;
    grounded = true;
    doubleJump = true;
    if (e == true) {
      pxSped *= -2;
      pySped *= -2;
    }
  }
}
function breakable(x, y, l, h, i) {
  if (broke[i] == false) {
    push();
    translate(px, py);
    fill(100);
    rect(x, y, l, h);
    if (
      posY + 15 >= y + py &&
      posX - 15 < x + l + px &&
      posX + 15 > x + px &&
      posY - 15 < y + h + py
    ) {
      if (posY + 13 < y + py) {
        grounded = true;
        doubleJump = true;
      }
      py -= pySped;
      pySped *= -0.2;
      if (posY + 15 >= y + py + 3) {
        if (posY - 15 > y + py + h - 5) {
        } else {
          px += pxSped;
          pxSped *= -0.2;
        }
      }
    }
    if (atS > 0) {
      let d = [];
      for (let j = 0; j < h; j++) {
        if (attackSide == 1) {
          d[j] = dist(posX + 30, posY, px + x, py + y + j);
        } else if (attackSide == 2) {
          d[j] = dist(posX - 30, posY, px + x, py + y + j);
        } else {
          d[j] = dist(posX, posY, px + x, py + y + j);
        }

        if (d[j] < atS / 2) {
          bHealth[i] -= attackDamage;
          broke[i] = true;
        }
      }
      let d2 = [];
      for (let j = 0; j < h; j++) {
        if (attackSide == 1) {
          d[j] = dist(posX + 30, posY, px + x + l, py + y + j);
        } else if (attackSide == 2) {
          d[j] = dist(posX - 30, posY, px + x + l, py + y + j);
        } else {
          d[j] = dist(posX, posY, px + x + l, py + y + j);
        }
        d2[j] = dist(posX, posY, px + x + l, py + y + j);
        if (d2[j] < atS / 2) {
          bHealth[i] -= attackDamage;
        }
      }
      let d3 = [];
      for (let j = 0; j < l; j++) {
        if (attackSide == 1) {
          d[j] = dist(posX + 30, posY, px + x + j, py + y);
        } else if (attackSide == 2) {
          d[j] = dist(posX - 30, posY, px + x + j, py + y);
        } else {
          d[j] = dist(posX, posY, px + x + j, py + y);
        }
        d3[j] = dist(posX, posY, px + x + j, py + y);
        if (d3[j] < atS / 2) {
          bHealth[i] -= attackDamage;
        }
      }
      let d4 = [];
      for (let j = 0; j < l; j++) {
        if (attackSide == 1) {
          d[j] = dist(posX + 30, posY, px + x + j, py + y + h);
        } else if (attackSide == 2) {
          d[j] = dist(posX - 30, posY, px + x + j, py + y + h);
        } else {
          d[j] = dist(posX, posY, px + x + j, py + y + h);
        }
        d4[j] = dist(posX, posY, px + x + j, py + y + h);
        if (d4[j] < atS / 2) {
          bHealth[i] -= attackDamage;
        }
      }
    }
    if (bHealth[i] <= 0) {
      broke[i] = true;
    }
    pop();
  }
}
function throughPlat(x, y, l, h) {
  push();
  translate(px, py);
  fill(0);
  rect(x, y, l, h);
  if (
    posY + 15 >= y + py &&
    posX - 15 < x + l + px &&
    posX + 15 > x + px &&
    posY - 15 < y + h + py
  ) {
    if (posY + 12 < py + y) {
      grounded = true;
      doubleJump = true;
      py -= pySped;
    }
  }
  pop();
}
function envelope(){
  
}
function objectMap() {
  if (py > -810 && px > -2500) {
    breakable(400, 200, 105, 300, 0);
    object(192, 317, 30, true);
    plat(0, height / 2 + 50, 1800, 50);
    plat(415, height / 2 + 15, 50, 50);
    plat(35, height / 2 + 15, 50, 50);
    object(170, 250, 50);
    object(900, 500, 200);
    object(900, 0, 200);
    object(450, 0, 200);
    plat(900, 0, 50, 500);
    plat(0, 0, 900, 50);
    plat(400, 0, 105, 300);
    if (broke[0] == true) {
      enemy0();
      plat(-200, 364, 75, 50);
      plat(-500, 0, 500, 80);
      plat(-500, 0, 75, 705);
      plat(-500, 500, 100, 100);
      plat(-500, 698, 200, 100);
      plat(0, 250, 200, 75);
      plat(170, 200, 330, 75);
      plat(-500, 790, 900, 100);
      plat(0, 504, 600, 50);
      plat(400, 510, 1000, 60);
      plat(-500, 590, 150, 60);
      plat(-350, 400, 70, 50);
      breakable(400, 790, 300, 200, 1);
      plat(700, 500, 70, 300);
    } //loading gate-spawn open
  } else if (py > -3000 && px > -2536) {
    //segment 1 to segment 2
    //posY = height * 0.75;
    posY = lerp(posY, height * 0.75, 0.05);
    if (px > 1984) {
      if (muln.beat == false) {
        b1 = true;
      }
    }
    background(200, 0, 0, 10);
    lava(-250, 1930, 550, 300);
    plat(300, 1900, 500, 75);
    plat(700, 1688, 560, 100);
    plat(-250, 1688, 660, 100);
    plat(-250, 1688, 100, 500);
    plat(-250, 2185, 650, 100);
    plat(300, 1900, 100, 300);
    if (muln.beat == false) {
      plat(1000, 1687, 100, 700);
      push();
      translate(px, py);
      fill(0);
      rect(1000, 1687, 1500, 1500);
      pop();
    } else {
      plat(1000, 1687, 100, 450);
      plat(1000, 2288, 1600, 100);
      plat(1000, 2037, 700, 100);
      plat(1600, 1837, 900, 150);
      plat(1600, 1837, 100, 200);
    }

    plat(-350, 2385, 1500, 100);
    plat(-900, 2385, 550, 100);
    plat(-900, 2000, 700, 100);
    plat(-2700, 1500, 1850, 100);
    plat(-2700, 2385, 1850, 100);
    plat(-1200, 1500, 100, 500);
    plat(-1200, 2000, 700, 100);
    plat(-2800, 1500, 100, 1000);
    push();
    translate(px, py);
    image(mulnArena, -2700, 1599, 1500, 802);
    pop();
    if (b1 == true) {
      mulningsvél();
      plat(-1200, 1500, 100, 1000);
    }
  } else if (px < -2400) {
    background(0, 200, 255, 10);
    plat(5300, 1050, 100, 950);
    plat(5300, 2200, 2000, 100);
    plat(5300, 1050, 2000, 100);
    plat(7200, 1050, 100, 1300);
    push();
    translate(px, py);
    // rect(5400,1150,1800,1050)
    image(alrandArena, 5400, 1150, 1800, 1050);
    pop();
    if (alrand.active == true) {
      alrandFight();
      plat(5300,1050,100,1500)
    }
  }
  //constant loaded
  plat(350, 790, 60, 900);
  plat(700, 790, 60, 900);
  plat(2400, 1950, 3000, 100);
  plat(2400, 2200, 3000, 100);
  //forground
  push();
  translate(px, py);
  fill(0);
  rect(900, 0, 900, 500);
  rect(-500, -500, 2400, 505);
  rect(700, 500, 700, 400);
  rect(900, 500, 700, 400);
  rect(-500, 800, 900, 920);
  rect(700, 800, 900, 920);
  rect(-1200, -500, 730, 2200);
  if (broke[0] == false) {
    rect(-500, 0, 950, 900);
    rect(400, 500, 1000, 1800);
  }
  pop();
}
function mulningsvél() {
  //boss section 2
  if (muln.health <= 0) {
    b1 = false;
    muln.beat = true;
    pHealth = 100;
    //damage=20
  }

  push();
  translate(px, py);
  // fill(0,255,255,30)
  //rect(-2700,1600,1500,800)
  image(mulnArena, -2700, 1599, 1500, 802);
  stroke(255, 0, 0);
  noFill();
  rect(muln.x, muln.y, 150, 175);
  image(mulnImg, muln.x, muln.y, 150, 175);
  if (muln.ySped != 0) {
    image(ripples, muln.x, muln.y + 175, 150, 75);
  }
  //rect(-2000,muln.y,2,100)
  muln.x += muln.xSped;
  muln.y += muln.ySped;
  h = 175;
  l = 150;
  if (muln.x > -1400) {
    muln.x -= abs(muln.xSped);
  }
  if (muln.x < -2600) {
    muln.x += abs(muln.xSped);
  }
  if (muln.health <= 0) {
    b1 = false;
  }
  if (muln.hitByPlayer > 0) {
    muln.immunityFrame--;
    if (muln.immunityFrame <= 0) {
      muln.hitByPlayer = false;
      muln.immunityFrame = 0;
    }
  }
  if (atS > 0) {
    if (posY + 15 >= muln.y + py && posY - 15 < muln.y + h + py) {
      if (attackSide == 1) {
        // posX+30
        if (posX + atS >= px + muln.x && posX + atS <= px + muln.x + 160) {
          if (muln.hitByPlayer == false) {
            muln.health -= attackDamage;
            muln.hitByPlayer = true;
            muln.immunityFrame = 60;
          }
        }
      } else if (attackSide == 2) {
        //posX-30
        if (posX + atS - 70 >= px + muln.x && posX + atS <= px + muln.x + 225) {
          if (muln.hitByPlayer == false) {
            muln.health -= attackDamage;
            muln.hitByPlayer = true;
            muln.immunityFrame = 60;
          }
        }
      }
    }
  }
  pop();
  push();
  translate(px, py);
  fill(200, 50, 50, 50);
  if (
    posY + 15 >= muln.y + py &&
    posX - 15 < muln.x + l + px &&
    posX + 15 > muln.x + px &&
    posY - 15 < muln.y + h + py
  ) {
    py -= pySped;
    pySped *= -2;
    if (muln.hitPlayer == false) {
      muln.hitPlayer = true;
      pHealth -= 10;
    } else {
      px += 1 + pxSped;
      py += 4 + pySped;
      if (pxSped == 0) {
        px += 20;
        pxSped = 5;
      }
    }
    if (posY + 15 >= muln.y + py + 3) {
      if (posY - 15 > muln.y + py + h - 5) {
      } else {
        px += pxSped;
        pxSped *= -2;
      }
    }
  }
  pop();
  //immunity contact
  if (muln.hitPlayer == true) {
    muln.playerImmunityFrame++;
    if (muln.playerImmunityFrame >= 60) {
      muln.playerImmunityFrame = 0;
      muln.hitPlayer = false;
    }
  }

  //attacks /AI
  if (muln.y < 2210) {
    muln.ySped += 0.2;
  } else if (muln.y >= 2211) {
    muln.y = 2210;
    muln.ySped = 0;
    muln.xSped = 0;
    if (muln.sequence == 0) {
      muln.loops++;
    }
  }
  if (muln.sequence == 0) {
    muln.time++;
    //console.log("+")
    if (muln.time == 200) {
      let j;
      if (muln.x < -2000) {
        j = random([1, 3]);
      } else {
        j = random([2, 4]);
      }
      if (j == 1) {
        muln.xSped = 3;
        muln.ySped = -15;
      } else if (j == 2) {
        muln.xSped = -3;
        muln.ySped = -15;
      } else if (j == 3) {
        muln.xSped = 6;
        muln.ySped = -15;
      } else if (j == 4) {
        muln.xSped = -6;
        muln.ySped = -15;
      }
      muln.time = 0;
    }
    if (muln.loops >= 5) {
      muln.sequence = random([1, 2, 3, 4]);
      muln.loops = 0;
      muln.time = 0;
    }
  } else if (muln.sequence == 1) {
    muln.time++;
    push();
    translate(px, py);
    if (muln.time == 10 || muln.time == 30 || muln.time == 48) {
      muln.wave.x = muln.x;
      muln.wave.y = muln.y + 175;
      muln.wave.x2 = muln.x + 150;
      muln.wave.y2 = muln.y + 175;

      //  console.log('set')
    }
    if (muln.time >= 50) {
      noFill();
      stroke(155, 0, 0);
      if (muln.wave.x > -2700) {
        ellipse(muln.wave.x, muln.wave.y, 100, 100);
        muln.wave.x -= muln.wave.sped;
        image(wave2, muln.wave.x - 50, muln.wave.y - 50, 100, 100);
      }
      if (muln.wave.x2 < -1200) {
        ellipse(muln.wave.x2, muln.wave.y2, 100, 100);
        image(wave, muln.wave.x2 - 50, muln.wave.y2 - 50, 100, 100);
        muln.wave.x2 += muln.wave.sped;
      }

      let d1 = dist(posX, posY, px + muln.wave.x, py + muln.wave.y);
      if (d1 < 15 + 50) {
        py -= pySped;
        px += pxSped;
        pySped = 5;
        pxSped = -10;

        if (muln.hitPlayer == false) {
          muln.hitPlayer = true;
          pHealth -= 10;
          console.log("hit");
        }
      }
      let d2 = dist(posX, posY, px + muln.wave.x2, py + muln.wave.y2);
      if (d2 < 15 + 50) {
        py -= pySped;
        px += pxSped;
        pySped = 5;
        pxSped = 10;
        if (muln.hitPlayer == false) {
          muln.hitPlayer = true;
          pHealth -= 10;
          console.log("hit");
        }
      }
      //console.log('sent')
      if (muln.time == 200) {
        muln.time = 0;
        muln.loops++;
      }
      if (muln.loops >= 5) {
        muln.sequence = 0;
        muln.loops = 0;
        muln.addedMeasures++;
      }
    }
    pop();
  } else if (muln.sequence == 2) {
    muln.time++;
    push();
    translate(px, py);
    if (muln.time > 100) {
      for (let i = 0; i < 15; i++) {
        let xvl = -2670 + i * 100;
        let yvl = 1900;
        push();
        noFill();
        stroke(255, 0, 0);
        if (muln.time < 130) {
          image(swordSmall, xvl + muln.shift, yvl + 450, 25, 50);
        } else {
          image(swordLarge, xvl + muln.shift, yvl, 25, 500);
          rect(xvl + muln.shift, yvl, 25, 500);
        }

        pop();
        if (muln.time > 130) {
          if (
            posY + 15 >= yvl + py &&
            posX - 15 < xvl + muln.shift + 25 + px &&
            posX + 15 > xvl + muln.shift + px &&
            posY - 15 < yvl + 600 + py
          ) {
            if (
              posX - 15 < xvl + muln.shift + 22 + px &&
              posX + 15 > xvl + 3 + muln.shift + px
            ) {
              px -= 25;
            }
            pxSped *= -1.2;
            px++;
            if (muln.hitPlayer == false) {
              muln.hitPlayer = true;
              pHealth -= 10;
              console.log("hit");
            }
          }
        }
      }
      if (muln.time >= 200) {
        muln.time = 0;
        muln.shift = int(random(-30, 30));
        muln.loops++;
        if (muln.loops >= 2) {
          muln.loops = 0;
          muln.sequence = 0;
        }
      }
    }
    pop();
  } else if (muln.sequence == 3) {
    muln.time++;
    push();
    noFill();
    stroke(255, 0, 0);
    translate(px, py);
    if (muln.time == 50) {
      muln.flames.x = posX - px - 25;
      muln.flames.y = 1900;
    } else if (muln.time >= 55 && muln.time <= 75) {
      rect(muln.flames.x, muln.flames.y + 470, 50, 30);
      image(swordSmall, muln.flames.x, muln.flames.y + 470, 50, 30);
    } else if (muln.time >= 80) {
      rect(muln.flames.x, muln.flames.y, 50, 500);
      image(swordLarge, muln.flames.x, muln.flames.y, 50, 500);
      if (
        posY + 15 >= muln.flames.y + py &&
        posX - 15 < muln.flames.x + 50 + px &&
        posX + 15 > muln.flames.x + px &&
        posY - 15 < muln.flames.y + 500 + py
      ) {
        if (muln.hitPlayer == false) {
          muln.hitPlayer = true;
          pHealth -= 10;
          console.log("+");
          pxSped *= -1.5;
          let flS = random([1, 2]);
          if (flS == 1) {
            px += 60;
          } else if (flS == 2) {
            px -= 60;
          }
        }
      }

      //console.log("+")
      if (muln.time >= 100) {
        muln.time = 0;
        muln.loops++;
      }
      if (muln.loops >= 7) {
        muln.time = 0;
        muln.loops = 0;
        muln.sequence = 2;
      }
    }

    pop();
  } else if (muln.sequence == 4) {
    muln.time++;
    push();
    translate(px, py);
    noFill();
    stroke(255, 0, 0);
    if (muln.time == 50) {
      muln.cBall.x = muln.x + 75;
      muln.cBall.y = muln.y - 75;
      //ellipse(muln.cBall.x,muln.cBall.y,100,100)
    } else if (muln.time == 55) {
      muln.cBall.xTarget = posX - px;
      muln.cBall.yTarget = posY - py;
    } else if (muln.time > 60 && muln.time < 100) {
      image(vBall, muln.cBall.x - 50, muln.cBall.y - 50, 100, 100);
      ellipse(muln.cBall.x, muln.cBall.y, 100, 100);
    } else if (muln.time > 100) {
      image(vBall, muln.cBall.x - 50, muln.cBall.y - 50, 100, 100);
      ellipse(muln.cBall.x, muln.cBall.y, 100, 100);
      muln.cBall.x = lerp(muln.cBall.x, muln.cBall.xTarget, 0.05);
      muln.cBall.y = lerp(muln.cBall.y, muln.cBall.yTarget, 0.05);
      let d = dist(posX, posY, px + muln.cBall.x, py + muln.cBall.y);

      if (d < 15 + 50) {
        py -= pySped * 2;
        px += pxSped * 5;
        pxSped *= -2;
        pySped *= -0.2;
        if (muln.hitPlayer == false) {
          muln.hitPlayer = true;
          pHealth -= 10;
        }
      }
    }
    if (muln.time == 200) {
      muln.time = 0;
      muln.loops++;
    }
    if (muln.loops >= 3) {
      muln.loops = 0;
      muln.time = 0;
      muln.sequence = 0;
    }
    pop();
  }
}
function alrandFight() {
  push();
  translate(px, py);
  stroke(255, 0, 0);
  noFill();
  rect(alrand.x, alrand.y, 200);
  image(alrandImg, alrand.x, alrand.y, 200, 200);
  if (
    posY + 15 >= alrand.y + py &&
    posX - 15 < alrand.x + 200 + px &&
    posX + 15 > alrand.x + px &&
    posY - 15 < alrand.y + 200 + py
  ) {
    py -= pySped;
    pHealth -= 10;
    if (abs(pySped) < 5) {
      pySped *= -2.5;
    } else {
      pySped *= -1;
    }

    pxSped *= -2.5;
  }
  pop();
  if(alrand.beat ==true){
    alrand.active=false
  }
}
function mousePressed() {
  //  let FS = fullscreen();
  // fullscreen(!FS);
  if (startScreen == true && credits == false) {
    if (
      mouseX > width * 0.4 &&
      mouseY > height * 0.5 &&
      mouseX < width * 0.4 + 310 &&
      mouseY < height * 0.5 + 100
    ) {
      startScreen = false;
    }
    //width*0.4,height*0.7,310,100
    if (
      mouseX > width * 0.4 &&
      mouseY > height * 0.7 &&
      mouseX < width * 0.4 + 310 &&
      mouseY < height * 0.7 + 100
    ) {
      creditsScroll = 0;
      credits = true;
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
  height = height;
  width = width;
}
