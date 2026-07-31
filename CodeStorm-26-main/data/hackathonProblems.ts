/* ═══════════════════════════════════════════════
   Hackathon Problem Types & Data
   9 problems across 3 domains (Web/App, AI/ML, Industry)
   Replace placeholder content with real data.
   ═══════════════════════════════════════════════ */

export type Domain = "Web/App" | "AI/ML" | "Industry" | "Social Cause";

export type Year = 2025 | 2024 | 2023;

export interface HackathonProblem {
  year: Year;
  id: string;
  domain: Domain;
  title: string;
  teaser: string;
  /** lucide-react icon key – mapped to component in ProblemCard */
  icon: string;
  fullStatement: string;
  background: string;
  deliverables: string[];
  evaluationCriteria?: string[];
}

/* ─── Domain → icon mapping ─── */
export const DOMAIN_ICONS: Record<Domain, string> = {
  "Web/App": "Globe",
  "AI/ML": "BrainCircuit",
  Industry: "Factory",
  "Social Cause": "HeartHandshake",
};

/* ─── Domain → badge color tokens ─── */
export const DOMAIN_COLORS: Record<Domain, { bg: string; text: string; border: string }> = {
  "Web/App": {
    bg: "rgba(254, 4, 5, 0.12)",
    text: "#ff4d4d",
    border: "rgba(254, 4, 5, 0.3)",
  },
  "AI/ML": {
    bg: "rgba(99, 102, 241, 0.12)",
    text: "#818cf8",
    border: "rgba(99, 102, 241, 0.3)",
  },
  Industry: {
    bg: "rgba(234, 179, 8, 0.12)",
    text: "#facc15",
    border: "rgba(234, 179, 8, 0.3)",
  },
  "Social Cause": {
    bg: "rgba(34, 197, 94, 0.12)",
    text: "#4ade80",
    border: "rgba(34, 197, 94, 0.3)",
  },
};

export const FILTER_OPTIONS: (Domain | "All")[] = ["All", "Web/App", "AI/ML", "Industry", "Social Cause"];
export const YEAR_OPTIONS: Year[] = [2025, 2024, 2023];

/* ═══════════════════════════════════════════════
   Problem Data — 9 entries, 3 per domain
   ═══════════════════════════════════════════════ */

export const hackathonProblems: HackathonProblem[] = [
  /* ─── Web/App ─── */
  {
    id: "web-1",
    domain: "Web/App",
    year: 2025,
    title: "CityPulse - AI Agent for Hyper-Local City Guidance",
    teaser: "A mobile app powered by agentic AI for real-time city guidance, with autonomous goal management and RAG for knowledge retrieval.",
    icon: "Globe",
    fullStatement: "Big cities change by the minute—pop-up traffic jams, surprise concerts, food-truck festivals, or sudden water cuts in a neighborhood. Residents and visitors rarely get all the updates in one place, and generic navigation apps don’t adapt quickly enough. Build a mobile app that acts as a personal city concierge, powered by a goal-driven Agentic AI. The app must collect, reason over, and act on live urban data to give users context-aware guidance for commuting, leisure, or errands.",
    background: "The app must use agentic AI to autonomously manage goals by continuously monitoring user location, preferences, and city data streams. It should set and execute subtasks like fetching feeds or predicting delays without prompting, retrieve and synthesize knowledge from various sources using RAG, generate dynamic itineraries and proactive alerts through multi-step reasoning, and provide explainable outputs with source citations.",
    deliverables: [
      "Modern App Development: Cross-platform with polished, map-centric UI. Secure user accounts with location opt-in, dark/light map layers, and push notifications.",
      "Agentic AI Core: Autonomous Goal Management, sets its own subtasks without user prompting.",
      "RAG for Knowledge: Retrieves from city-event databases, transport APIs, local feeds, and municipal alerts.",
      "Dynamic Itineraries: User selects goals and the AI dynamically plans & updates routes or events.",
      "Conversational Companion: Chat with the AI for recommendations or proactive alerts.",
      "Transparency & Control: Source links or data snippets included. User can approve, snooze, or ignore tasks."
    ],
  },
  {
    id: "web-2",
    domain: "Web/App",
    year: 2025,
    title: "Youth Financial Wellness and Budgeting App",
    teaser: "A user-friendly mobile app that tracks spending, suggests budgets, and provides AI-driven tips for financial habits.",
    icon: "Globe",
    fullStatement: "Many young people lack financial literacy and struggle to manage budgets. Create a user-friendly app that tracks spending, suggests budgets, and uses AI tips to build healthy financial habits. An intuitive finance app can help by automatically categorizing transactions (through bank API integration) and visualizing where money goes. By setting personalized savings goals and sending AI-generated spending alerts, the tool teaches budgeting in context.",
    background: "Financial knowledge gaps are widespread: in the U.S., financial literacy scores hover around only 50%, and similar trends appear globally. Without guidance, students and recent graduates often fall into debt and poor saving habits. Gamification and bite-sized financial lessons keep users engaged while the app learns patterns to recommend tailored strategies.",
    deliverables: [
      "Custom budget planner with recommendations based on income and typical spending.",
      "AI-driven alerts and tips (e.g., warnings when a budget category is exceeded).",
      "Visual charts of spending trends, debt payoff progress, and net worth.",
      "Educational mini-games/quizzes on finance topics.",
      "Secure encryption and biometric login to protect sensitive financial data.",
      "Automatic import of expenses from bank accounts or receipts with categorization.",
      "Agentic AI integration to autonomously categorize expenses, generate budget recommendations, and visualize trends adaptively."
    ],
  },
  {
    id: "web-3",
    domain: "Web/App",
    year: 2025,
    title: "Community Blood & Organ Donation Tracker",
    teaser: "Develop a donation management platform that integrates hospitals, blood banks, and verified donors with Agentic AI matching.",
    icon: "Globe",
    fullStatement: "Hospitals and patients frequently encounter life-threatening delays in finding compatible blood or organ donors. Current systems are fragmented, lack real-time updates, and fail to connect donors, hospitals, and blood banks efficiently during emergencies. Develop a donation management platform (mobile + web) that integrates hospitals, blood banks, and verified donors into a single ecosystem. Using agentic AI, the system autonomously matches donors and recipients based on compatibility, location, and urgency, while also assisting in emergency routing.",
    background: "The platform must use agentic AI to autonomously match donors with recipients by analyzing compatibility, location, and urgency in real-time, monitor live inventory to identify shortages, initiate outreach to nearby donors during emergencies with planned routing suggestions, and optimize logistics without manual intervention to ensure efficient connections.",
    deliverables: [
      "AI-based Donor Matching: Analyze blood groups, medical compatibility, and location in real-time.",
      "Live Inventory Dashboard: Hospitals and blood banks update availability dynamically for transparency.",
      "Emergency SOS System: Instant alerts to nearby donors during critical shortages, with AI-suggested fastest routes to hospitals.",
      "Agentic AI Role: Proactively identifies shortages, initiates donor outreach, and optimizes logistics without manual intervention."
    ],
  },
  {
    id: "web-4",
    domain: "Web/App",
    year: 2025,
    title: "EngiVerse – Marketplace for Engineering Side-Projects",
    teaser: "A web platform acting as a 'marketplace of unfinished projects' with an AI-Powered Project Reviver.",
    icon: "Globe",
    fullStatement: "Engineering students build countless side projects, prototypes, and mini-hackathon solutions that end up abandoned after submission. Valuable innovations never see the light of day or reach people who might actually use them. Develop a web platform that acts as a 'marketplace of unfinished projects' where students can upload their project details, and other students/teams can 'adopt' these projects to continue development.",
    background: "Includes a progress-tracking timeline so adopted projects can show growth from one batch of students to another. A skill-tagging + recommendation engine matches projects with potential contributors, and industry mentors can browse projects and leave feedback or even fund promising ones.",
    deliverables: [
      "Platform for uploading project details (code, docs, demo videos) and allowing others to adopt them.",
      "Skill-tagging + recommendation engine to match projects with potential contributors.",
      "Progress-tracking timeline for adopted projects.",
      "AI Project Summarizer & Continuation Guide that reads uploaded code/docs and generates a Project Health Report.",
      "AI-suggested Next Steps Roadmap outlining what contributors should build next to make it usable.",
      "Auto-generated short pitch deck (summary, problem solved, tech stack) to attract collaborators or mentors."
    ],
  },

  /* ─── AI/ML ─── */
  {
    id: "ai-1",
    domain: "AI/ML",
    year: 2025,
    title: "Personalized Nutrition Optimization Engine",
    teaser: "An ML-powered nutrition engine with agentic AI that delivers personalized, adaptive meal plans based on real-time health data.",
    icon: "BrainCircuit",
    fullStatement: "Generic diets ignore individual genetics, lifestyles, and real-time health data, causing nutrient deficiencies, ineffective weight management, and chronic diseases like diabetes. Existing apps rely on static inputs, lack dynamic adaptation, and require manual effort to align with constraints like food availability. We need an ML-powered nutrition engine with agentic AI that delivers personalized, adaptive meal plans.",
    background: "Victims include individuals with restrictions risking complications, athletes lacking precision fueling, elderly prone to malnutrition, overburdened healthcare systems, and a general population confused by conflicting diet advice. The engine must use agentic AI as a multi-agent system to autonomously analyze user data from wearables and genetics.",
    deliverables: [
      "Analyze User Data: Wearables + genetic profiles tailor diets dynamically.",
      "Integrate Nutritional Databases: Pull from APIs (e.g., USDA) with filters for preferences/allergies.",
      "Dynamic Meal Planning: Optimization algorithms balance macros, budgets, and schedules.",
      "Real-Time Adaptation: Adjust meals based on biometric feedback (e.g., swap meals when glucose spikes).",
      "Predict Outcomes: ML models simulate long-term impacts (BMI, energy levels) with motivating visualizations.",
      "Logistics Coordination & Agentic AI: Auto-generate shopping lists, swap unavailable ingredients via grocery APIs using a multi-agent system."
    ],
  },
  {
    id: "ai-2",
    domain: "AI/ML",
    year: 2025,
    title: "Dynamic Market Sentiment Forecaster",
    teaser: "An AI/ML-powered sentiment forecasting engine with agentic AI acting as a sentiment oracle to predict evolving market trends.",
    icon: "BrainCircuit",
    fullStatement: "Businesses misjudge consumer trends due to static sentiment analysis that fails to capture evolving opinions across social media and news, leading to poor marketing decisions and financial losses. Victims include companies suffering revenue drops from ineffective campaigns, investors suffering from volatility, and consumers receiving irrelevant products. Build an AI/ML-powered sentiment forecasting engine with agentic AI acting as a sentiment oracle.",
    background: "The engine must use agentic AI to autonomously collect and process data from social media and news, build time-series models to predict sentiment trends, reason over multi-source inputs to detect shifts, forecast market impacts, send proactive alerts with strategy suggestions, and self-improve accuracy via reinforcement learning from past predictions.",
    deliverables: [
      "Autonomous Data Collection: Scrape & process data from social media, news, and forums via APIs.",
      "Time-Series ML Models: Predict evolving sentiment trends with historical + real-time data.",
      "Multi-Source Reasoning: Detect opinion shifts by cross-analyzing heterogeneous inputs.",
      "Market Forecasting: Link sentiment patterns to financial or consumer behavior impacts.",
      "Proactive Alerts & Strategy Suggestions: Notify businesses/investors with adaptive recommendations.",
      "Self-Improvement: Reinforcement learning to refine accuracy from past performance."
    ],
  },
  {
    id: "ai-3",
    domain: "AI/ML",
    year: 2025,
    title: "Cosmic Weather Insurance",
    teaser: "Design a predictive model using satellite sensor data to price an 'insurance product' for space weather events.",
    icon: "BrainCircuit",
    fullStatement: "Space weather (solar storms, cosmic rays) threatens satellites and power grids, but risk assessment is poor. Solar flares, coronal mass ejections, and high-energy particle events can disrupt satellites, GPS networks, and terrestrial power grids. Existing forecasts provide limited lead time and no direct translation into financial risk. Design a prototype system that predicts the probability and severity of space-weather impacts and converts that risk into an insurance premium for satellites or ground infrastructure.",
    background: "The system must use agentic AI to autonomously ingest space-weather data, forecast storm intensity and likelihood through multi-step modeling, map conditions to asset impacts, calculate probabilistic losses and insurance premiums with uncertainty bounds, and provide realtime alerts or portfolio aggregations via dashboards.",
    deliverables: [
      "Data & Forecasting: Ingest historical and/or live space-weather data and build a model to forecast geomagnetic storm intensity.",
      "Risk & Impact Modeling: Map forecasted conditions to potential asset impact and output a probabilistic loss distribution.",
      "Insurance Pricing: Translate expected loss into a suggested insurance premium, stating assumptions and confidence intervals.",
      "User Interface / API: Dashboard for operators to enter asset details and instantly view forecasted storm probability, expected loss, and recommended premium.",
      "Accurate short-term forecasts vs. baseline and clear, explainable premium calculation."
    ],
  },
  {
    id: "ai-4",
    domain: "AI/ML",
    year: 2025,
    title: "Depression Detection from Voice Analysis",
    teaser: "Build an AI system that analyzes voice recordings to detect early signs of depression using linguistic and acoustic indicators.",
    icon: "BrainCircuit",
    fullStatement: "Depression is a common mental health condition affecting over 280 million people globally. Early detection can improve outcomes, but many cases go unnoticed. Research suggests that speech patterns (tone, speed, pause duration) and word choice can indicate depression. Build an AI system that analyzes voice recordings to detect early signs of depression. The core challenge is to identify linguistic and acoustic indicators of depressed mood in speech and classify emotional well-being automatically.",
    background: "An AI tool could process audio from phone calls or conversations and flag concerning patterns to prompt further screening, potentially integrating with telehealth apps or smart assistants. The system must use agentic AI to autonomously preprocess audio, extract acoustic and linguistic features, train and fuse multi-modal models for classification, output risk scores with explainable indicators, and deploy with ethical safeguards.",
    deliverables: [
      "Data Processing: Preprocess audio recordings (denoising, voice segmentation) and transcribe speech to text using ASR.",
      "Feature Extraction: Extract acoustic features (pitch, jitter, pause length) and linguistic features (sentiment, word choice) from transcripts.",
      "Model Training: Train classification or regression models on labeled datasets of depressed vs. non-depressed speech.",
      "Multi-modal Fusion: Combine audio and text features using multi-modal deep learning to improve accuracy.",
      "Deployment: Prototype app or web service that outputs a depression risk score with explainable indicators and includes ethical safeguards (consent, data privacy)."
    ],
  },

  /* ─── Industry ─── */
  {
    id: "ind-1",
    domain: "Industry",
    year: 2025,
    title: "AI/ML-Powered Developer Matching Engine",
    teaser: "An AI-driven system to automatically analyze developer resumes, extract skills, and match them instantly against client project requirements.",
    icon: "Factory",
    fullStatement: "Finding the right developers for a project is time-consuming when dealing with hundreds of resumes. The AI/ML department needs a system that can automatically analyse developer resumes at signup, extract and score their skills (0–100), and store this structured data. When a client uploads a project requirement, the system should extract the required skills from the text and instantly find and rank the most suitable developers. The platform must remain fast, scalable and cost-efficient even when handling lacs of developer records.",
    background: "Technology Expectations: Use AI/ML (NLP) for skill extraction, normalisation and scoring. Use MongoDB (with indexes/vector search) for scalable storage and fast retrieval. Simple, minimal web interface just for uploads and viewing results.",
    deliverables: [
      "Developer flow: Upload a resume (PDF/DOCX), backend uses AI to extract & normalise skills, computes a skill score, and stores in MongoDB.",
      "Client flow: Upload a project requirement, backend uses AI to extract required skills, matches developers using pre-computed skill data + embeddings.",
      "Ranked list of matching developers with their match score and relevant skills displayed to the client.",
      "Precompute heavy ML tasks at ingestion to keep queries fast and cost-efficient."
    ],
  },
  {
    id: "ind-2",
    domain: "Industry",
    year: 2025,
    title: "AI-Powered Workforce Planner for Small Shops",
    teaser: "An easy-to-use platform that automatically plans shifts using AI services, without requiring shop owners to manage technical details.",
    icon: "Factory",
    fullStatement: "Small shops and local businesses often depend on part-time or flexible workers. Managing their shift schedules manually is time-consuming, error-prone, and rarely optimized for real demand. Shop owners also have no time or skill to set up AI services. Your challenge is to build an easy-to-use platform that automatically plans shifts using existing AI services in the background. Shop owners can enter business hours, roles, and staff availability, and the system generates optimized shift schedules.",
    background: "Advanced/Extra Credit features include Fairness & Constraints (no worker exceeds X hours/day), Holiday Handling, AI Recommendations ('You may need two extra staff next weekend'), Simple Payroll Summary, and Localization.",
    deliverables: [
      "Business Setup Form: shop owner enters shop name, business hours, staff roles.",
      "Staff Management: add/edit part-time staff with their availability and contact info.",
      "AI Scheduling Button: send data to an AI service to generate a draft schedule.",
      "Schedule Dashboard: simple UI for the shop owner to view/approve/edit generated shifts.",
      "Staff Portal / Mobile Page: staff can log in to see their assigned shifts."
    ],
  },
  {
    id: "ind-3",
    domain: "Industry",
    year: 2025,
    title: "Secure Role-Based Lead Management App",
    teaser: "A secure, role-based application for bank staff to capture, update, and track leads with AI-powered prioritization.",
    icon: "Factory",
    fullStatement: "Bank of India has highlighted the challenge of managing leads efficiently across multiple user roles without a unified system. Processing Centre staff, Nodal Officers, and Higher Authority users require a secure way to capture, update, and track leads with strict access control. Develop an App or PWA that ensures secure, seamless access on both desktop and mobile browsers, with offline support. The absence of robust role-based permissions, audit logging, and reporting hampers accountability and transparency.",
    background: "USP AI Feature: AI-Powered Lead Prioritization & Smart Assignment. An AI engine analyzes lead attributes (customer profile, product type, credit score trends, geo-location, previous interactions) and assigns a 'Lead Priority Score' to auto-prioritize and intelligently assign leads.",
    deliverables: [
      "Role-Based Access Control (RBAC): Clearly defined permissions for Processing Centres, Nodal Officers, and Higher Authorities.",
      "Lead Management: Centralized module to add, update, assign, and monitor leads across roles.",
      "Audit Logging: End-to-end tracking of all user actions for compliance and transparency.",
      "Dashboards: Role-specific, interactive dashboards for actionable insights and lead tracking.",
      "Data Export: One-click Excel/CSV export for reporting and analysis.",
      "AI Engine: Analyzes lead attributes to auto-prioritize and intelligently assign leads to the most suitable officer, with predictive insights for drop-offs."
    ],
  },

  /* ─── 2024 ─── */
  {
    id: "web-24-1",
    domain: "Web/App",
    year: 2024,
    title: "Comprehensive Alumni Engagement Platform",
    teaser: "Enhancing Connections, Philanthropy, and Mentorship.",
    icon: "Globe",
    fullStatement: "The college alumni association is facing challenges in maintaining engagement, facilitating donations, providing valuable mentorship to current students, tracking alumni success stories, and organising events. There is a need for a comprehensive platform to streamline alumni interactions, promote philanthropic support, and provide guidance and mentorship.",
    background: "The alumni association struggles with maintaining engagement and fostering meaningful connections between alumni and the college, limiting opportunities for mentorship, donations, and networking. To address this, an integrated web and mobile platform will be created to centralize alumni activities. This platform will allow alumni to easily register, connect with each other, offer mentorship to current students, donate to the institution, share their success stories, and participate in college events. By providing a secure, user-friendly, and scalable solution, the platform will strengthen alumni ties, enhance engagement, and ensure ongoing support for the college and its students.",
    deliverables: [
      "A secure donation system that allows alumni to easily contribute to college projects and initiatives.",
      "Tools to connect alumni to students based on their industry, location, and interests, fostering mentorship and professional collaboration.",
      "A searchable directory of alumni, facilitating connections based on specific criteria such as graduation year, profession, and geographic location.",
      "A tool for managing alumni events, reunions, and workshops to foster community and engagement."
    ],
  },
  {
    id: "web-24-2",
    domain: "Web/App",
    year: 2024,
    title: "Bridging the Financial Literacy Gap",
    teaser: "Empowering Individuals for Smarter Financial Decisions.",
    icon: "Globe",
    fullStatement: "Despite the importance of financial literacy in personal finance management, many individuals lack the knowledge and skills needed to make informed financial decisions. This knowledge gap leads to poor financial outcomes such as debt, inadequate savings, and unwise investments. There is a need for educational solutions that simplify complex financial concepts and empower users to make better decisions in areas like budgeting, saving, investing, and retirement planning.",
    background: "Financial illiteracy is a widespread issue affecting individuals of all ages and backgrounds. Without proper financial education, people struggle to manage their income, understand debt, save effectively, and invest wisely, leading to long-term financial insecurity. Many existing solutions are not designed to cater to a broad audience, are not user-friendly, or do not provide personalized feedback, making them less effective in educating users. The challenge is to create an interactive and engaging platform that improves financial literacy by offering comprehensive learning experiences tailored to individual needs, while ensuring inclusivity, accessibility, and data security.",
    deliverables: [
      "Design user-friendly interfaces for financial education platforms, ensuring accessibility and inclusivity.",
      "Develop interactive learning modules covering various financial topics, including budgeting, saving, investing, and retirement planning.",
      "Implement gamification elements to make learning fun and engaging for users of all ages.",
      "Integrate real-world examples and case studies to demonstrate practical financial concepts and strategies.",
      "Provide personalised recommendations and feedback based on user interactions and progress."
    ],
  },
  {
    id: "web-24-3",
    domain: "Web/App",
    year: 2024,
    title: "Collaborative Content Creation Platform for Influencers",
    teaser: "A seamless platform for influencers to collaborate across diverse niches and geographies.",
    icon: "Globe",
    fullStatement: "Many influencers struggle to collaborate with others across different geographies and time zones due to scheduling conflicts, differences in content style, and a lack of collaborative tools that suit diverse niches. This makes it difficult to produce joint content that resonates with their audiences.",
    background: "The content creation ecosystem is becoming increasingly collaborative, with influencers from diverse niches seeking to co-create and expand their reach by engaging with new audiences. However, collaborating effectively across geographies and time zones presents significant challenges, such as coordinating schedules and ensuring the content blends well across different influencer styles. The need for a seamless platform that enables real-time collaboration, even when influencers are not physically present or operating within the same niche, is evident. This platform should allow influencers to work together creatively, regardless of time or place, while preserving the individuality of each influencer's style and content.",
    deliverables: [
      "A shared digital whiteboard for influencers to brainstorm and map out their content ideas collaboratively, creating a unified story structure.",
      "Timelines and schedules that auto-adjust for different time zones, helping influencers track deadlines and content rollout.",
      "Tools that simulate the experience of a shared workspace, allowing influencers to review, revise, and comment on each other’s work in real time."
    ],
  },
  {
    id: "web-24-4",
    domain: "Web/App",
    year: 2024,
    title: "Digital Footprint Management",
    teaser: "Empowering users to manage and organise their current and posthumous digital presence.",
    icon: "Globe",
    fullStatement: "Develop a platform that allows users to manage and organise their digital footprint, including social media accounts, personal data, and digital assets. The platform should enable users to view and control their current digital presence and designate how their data is handled posthumously, ensuring that their online footprint aligns with their wishes and remains consistent with their personal and family values.",
    background: "In today's digital world, individuals leave behind extensive digital footprints through social media, online transactions, and stored personal data. Without proper management, users are exposed to risks like unauthorized access, data breaches, and a misalignment between their online presence and personal preferences. To address these challenges, the proposed platform offers a comprehensive solution for managing both current and posthumous digital footprints. Users can monitor and control their online presence, manage social media accounts, track personal data, and oversee digital assets. Additionally, the platform allows users to set instructions for how their digital legacy should be handled after their passing, such as account management and data privacy preferences. By offering tools for both ongoing management and future planning, the platform empowers users to take full control of their digital lives and ensure their legacy aligns with their wishes.",
    deliverables: [
      "Current Digital Footprint Dashboard",
      "Privacy and Security Controls",
      "Posthumous Instructions",
      "Digital Asset Organisation",
      "Trusted Contacts Designation",
      "Legal Guidance",
      "Integration with Digital Services",
      "Activity Monitoring and Alerts"
    ],
  },
  {
    id: "web-24-5",
    domain: "Web/App",
    year: 2024,
    title: "Food Waste Reduction Platform",
    teaser: "A digital platform to tackle food waste by redistributing excess food efficiently.",
    icon: "Globe",
    fullStatement: "Create a digital platform to tackle food waste at the household, business, and community level by connecting people, food producers, and organizations to redistribute excess food efficiently.",
    background: "Food waste is a significant global issue, with millions of tons wasted each year while many people face food insecurity. The platform should allow households, restaurants, grocery stores, and food producers to list surplus food in real time. It can connect this surplus with people or organizations (such as food banks, shelters, or community kitchens) that need it. The platform will enable users to track food donations, report impact metrics, and educate people about food waste reduction techniques.",
    deliverables: [
      "User Registration & Profiles",
      "Real-Time Food Listings: Allow users to upload food surplus details (type, quantity, expiration date) with photos and descriptions.",
      "Food Rescue Scheduling: Integrated scheduling for pick-up or drop-off of food.",
      "Impact Dashboard: Track the total amount of food saved, number of meals provided, and reduction in carbon footprint.",
      "Donation Matching: Match donors (individuals/businesses) with nearby organisations or people in need based on location, food type, and urgency."
    ],
  },
  {
    id: "web-24-6",
    domain: "Web/App",
    year: 2024,
    title: "Elderly Care Assistance App",
    teaser: "A user-friendly web/app platform that connects elderly individuals with remote assistance.",
    icon: "Globe",
    fullStatement: "Develop a user-friendly web/app platform that connects elderly individuals with caregivers, family members, and health professionals for remote assistance. The platform should offer daily task reminders, video calling, health tracking, emergency alerts, and access to a marketplace of verified caregivers to ensure their safety and well-being.",
    background: "The elderly population is growing, and many older adults live independently without daily physical support from family members or caregivers. This can lead to difficulties in maintaining regular routines, managing health conditions, and receiving immediate help during emergencies. The \"CareMate\" app aims to address this gap by providing a digital solution that connects elderly users with caregivers, health professionals, and family members, ensuring their safety, well-being, and comfort.",
    deliverables: [
      "Set reminders for medication, appointments, and daily routines to help users stay on track.",
      "Enable video calling and messaging to connect elderly individuals with caregivers and family members.",
      "Notify family or authorities in case of a medical emergency through an emergency alert system.",
      "Monitor vital health metrics, such as heart rate and sleep patterns, by integrating with wearable devices.",
      "Provide a marketplace to find and hire verified caregivers or nurses for elderly assistance.",
      "Allow family members to track the health and daily tasks of their elderly loved ones in real time through a family dashboard."
    ],
  },
  {
    id: "ai-24-1",
    domain: "AI/ML",
    year: 2024,
    title: "Enhancing Placement Success with Intelligent Simulation",
    teaser: "Improving the effectiveness of placement preparation for students through an AI-powered simulation.",
    icon: "BrainCircuit",
    fullStatement: "Placement preparation, a crucial phase in a student's academic journey, often involves rigorous practice and feedback. However, traditional methods can be time-consuming, lack personalised guidance, and may not adequately simulate the real-world interview experience. This leads to a gap between classroom learning and the demands of actual placements, resulting in suboptimal performance for many students.",
    background: "Improving the effectiveness of placement preparation for students through an AI-powered simulation.",
    deliverables: [
      "Replicates real-world interview scenarios with AI-powered interviewers who ask challenging questions and provide constructive feedback.",
      "Simulates group discussions to prepare students for collaborative problem-solving and communication skills.",
      "Provides insights into common mistakes and effective strategies for different types of questions.",
      "Suggests relevant study materials, practice problems, and online courses based on student performance.",
      "Tailors practise questions and exercises to address specific areas of improvement.",
      "Analyses students interview performance, providing feedback on body language, communication skills, and overall delivery.",
      "Connects students with industry experts who can provide valuable advice and guidance."
    ],
  },
  {
    id: "ai-24-2",
    domain: "AI/ML",
    year: 2024,
    title: "Streamlining Access to Government Schemes for Citizens",
    teaser: "A platform that simplifies access to government schemes, enabling citizens to easily identify eligible programs.",
    icon: "BrainCircuit",
    fullStatement: "Many citizens are unaware of the government schemes they are eligible for or face challenges navigating complex application processes, resulting in underutilization of available benefits and services. There is a need for a platform that simplifies access to government schemes, enabling citizens to easily identify eligible programs, understand their benefits, and complete application processes with minimal barriers.",
    background: "Government schemes offer critical support in areas such as education, healthcare, housing, agriculture, and employment. However, the lack of a centralized system and complicated bureaucratic procedures make it difficult for many citizens, particularly in rural and underprivileged areas, to take advantage of these programs. A digital platform that simplifies and streamlines access to government schemes can empower citizens by providing personalized recommendations, automated eligibility checks, and step-by-step assistance. This platform would be designed to overcome the barriers of accessibility, information dissemination, and user experience, ensuring that citizens from all socio-economic backgrounds can access the benefits they are entitled to with ease.",
    deliverables: [
      "The platform will use AI to suggest tailored government schemes across sectors such as education, health, and housing based on the users profile.",
      "The platform will guide users through the entire application process, breaking down complex forms and procedures into easy-to-follow steps.",
      "Users can track the status of their applications in real-time, receiving updates and notifications at each stage of the approval process.",
      "The system will perform an automated eligibility assessment based on the user’s input, cross-referencing with the criteria of available schemes."
    ],
  },
  {
    id: "ai-24-3",
    domain: "AI/ML",
    year: 2024,
    title: "Predictive Maintenance for Public Infrastructure",
    teaser: "Design a system that predicts maintenance needs for public infrastructure, such as bridges, roads, and transit systems.",
    icon: "BrainCircuit",
    fullStatement: "Design a system that predicts maintenance needs for public infrastructure, such as bridges, roads, and public transit systems. The tool should analyse historical data, usage patterns, and environmental conditions to optimise maintenance schedules and prevent infrastructure failures.",
    background: "Maintaining public infrastructure is crucial but challenging, as traditional approaches based on fixed schedules or reactive measures can lead to inefficiencies, higher costs, and potential failures. Without accurate predictions, resources may be misallocated, and infrastructure may degrade faster than expected. The proposed system seeks to improve infrastructure management by using advanced algorithms to predict maintenance needs. By analyzing historical data, real-time usage patterns, and environmental conditions (like weather and traffic), it will provide insights for optimizing maintenance schedules. This predictive approach aims to identify potential issues early, extend infrastructure lifespan, enhance safety, and reduce maintenance costs.",
    deliverables: [
      "Historical Data Analysis",
      "Usage pattern monitoring",
      "Environmental condition analysis",
      "Predictive analytics engine",
      "Optimisation algorithms",
      "Alert/notification system",
      "Dashboard and visualisation",
      "Simulations and planning for various scenarios",
      "Feedback loop"
    ],
  },
  {
    id: "ai-24-4",
    domain: "AI/ML",
    year: 2024,
    title: "AI-Powered Website for Tracking Mental Health and Mood Behavior",
    teaser: "An AI-powered website to track mental health and mood behaviour with personalised insights and coping strategies.",
    icon: "BrainCircuit",
    fullStatement: "Develop an AI-powered website to track mental health and mood behaviour, providing users with personalised insights, coping strategies, and alerts based on their emotional patterns.",
    background: "Mental health is crucial for overall well-being, but many individuals struggle to effectively track and understand their emotional patterns due to factors such as stress, anxiety, and lifestyle pressures. These factors can lead to fluctuating moods and the development of harmful trends that often go unnoticed over time. The proposed platform will enable users to log their daily emotions, thoughts, and experiences. It will analyze these inputs to track behavioral patterns and detect any negative emotional trends. By identifying these patterns, the system will offer actionable insights and personalized coping strategies tailored to individual needs. Additionally, the platform will feature alerts for concerning trends, helping users address potential issues before they escalate. This comprehensive approach aims to enhance mental health management by providing a clearer understanding of emotional patterns and offering effective tools for better emotional support and regulation.",
    deliverables: [
      "Users log daily moods, emotions, and thoughts, with AI analyzing patterns over time.",
      "Sentiment analysis techniques detect emotional tones in journal entries and provide mental state feedback.",
      "AI offers personalized recommendations, such as relaxation exercises, based on mood patterns.",
      "Behavioural pattern alerts track harmful trends and notify users or designated contacts when necessary.",
      "Progress visualization tools display mood and mental health trends over time for easier tracking and understanding.",
      "An anonymous, AI-moderated community allows users to share experiences and support each other in a safe space."
    ],
  },
  {
    id: "ai-24-5",
    domain: "AI/ML",
    year: 2024,
    title: "Dynamic Recipe Recommender Based on Food Waste Reduction",
    teaser: "Create an AI system that recommends recipes based on the ingredients users have to reduce food waste.",
    icon: "BrainCircuit",
    fullStatement: "Create an AI system that recommends recipes based on the ingredients users have and aims to reduce food waste. The system should analyze the available ingredients and suggest recipes that minimize the amount of unused food, incorporating sustainability principles into meal planning.",
    background: "Food waste is a major global issue, exacerbating environmental problems such as greenhouse gas emissions and inefficient resource use. Many households struggle with effective food management, often discarding edible items due to lack of planning. Traditional recipe systems usually recommend meals based on fixed ingredients, ignoring what users already have, which leads to unnecessary grocery shopping and increased waste. The proposed AI system will tackle this by analyzing users' current ingredients, assessing their freshness and quantity, and suggesting recipes that incorporate these items. This approach aims to minimize food waste, reduce additional purchases, and promote sustainable eating by delivering personalized, waste-reducing recipe recommendations.",
    deliverables: [
      "Analyze user-provided ingredients for freshness and quantity.",
      "Match ingredients with recipes to maximize usage and evaluate recipes based on waste reduction potential.",
      "Incorporate user dietary needs and restrictions while scaling recipes to fit available ingredient amounts.",
      "Provide an intuitive platform for ingredient input and recipe suggestions, integrating with food databases for a wide range of recipes.",
      "Collect user feedback to refine recommendations and offer tips on reducing food waste and sustainable cooking practices."
    ],
  },
  {
    id: "ai-24-6",
    domain: "AI/ML",
    year: 2024,
    title: "AI-Powered Anti-Money Laundering (AML) System",
    teaser: "An advanced AI-powered AML system to improve real-time detection, accuracy, and efficiency.",
    icon: "BrainCircuit",
    fullStatement: "Financial institutions struggle to effectively detect and prevent money laundering due to sophisticated criminal methods and high false positive rates in traditional rule-based AML systems. There is a need for an advanced AI-powered AML system to improve real-time detection, accuracy, and efficiency.",
    background: "Traditional anti-money laundering (AML) systems rely on rule-based approaches that often generate a high number of false positives, leading to inefficiencies and delayed responses. As criminal techniques evolve, these systems become less effective at identifying genuine suspicious activities. Financial institutions require a more advanced solution that leverages AI to enhance the detection of money laundering, reduce false positives, and streamline the compliance process. This will enable quicker and more accurate identification of suspicious transactions, improving overall security and regulatory adherence.",
    deliverables: [
      "Use AI to analyze transactions as they occur, identifying suspicious activities instantly and reducing the time required to flag potential money laundering.",
      "Employ machine learning algorithms to detect unusual patterns and behaviours that may indicate money laundering, even those that deviate from traditional rules.",
      "Implement AI-driven risk scoring and contextual analysis to minimise false positives and focus investigations on high-risk transactions.",
      "Integrate with various data sources, including transaction histories, customer profiles, and external databases, to provide a comprehensive view of potential risks.",
      "Generate detailed reports and alerts for compliance purposes, including actionable insights and recommendations for further investigation."
    ],
  },
  {
    id: "sc-24-1",
    domain: "Social Cause",
    year: 2024,
    title: "Crowdsourcing Platform NGOs",
    teaser: "Streamline the process of matching volunteers to NGO projects based on skills and availability.",
    icon: "HeartHandshake",
    fullStatement: "Non-Governmental Organisations (NGOs) often face challenges in efficiently coordinating with volunteers for various social causes. Matching the right volunteers to the right projects based on their skills, availability, and location is time-consuming and can result in ineffective resource allocation. A solution is needed to streamline the process and ensure that volunteers are connected to causes where they can have the most impact.",
    background: "NGOs often struggle to engage with suitable volunteers who have the right expertise and availability for specific projects. Volunteers, in turn, may find it difficult to locate projects that align with their skills and interests. This disconnect leads to underutilization of volunteer potential, slowing down progress on social initiatives. A platform can help bridge this gap by matching volunteers to social projects based on key parameters like skills, experience, availability, and geographical proximity. The platform would analyze volunteers' profiles and project, helping NGOs focus on executing their initiatives effectively while allowing volunteers to contribute meaningfully.",
    deliverables: [
      "Analyses volunteers and matches them with suitable NGO projects based on project needs, geographical location, and time availability.",
      "Volunteers can create and manage their profiles, including skills, qualifications, availability, past volunteering history, and location preferences.",
      "NGOs can list new and ongoing projects, including the required skills, duration, location, and other specific needs for volunteers.",
      "Volunteers receive real-time notifications when a matching project is available based on their profile and preferences. NGOs also receive alerts when a suitable volunteer applies for their projects.",
      "Recommend projects based on volunteers' skill sets.",
      "Users can share the projects they are working on or NGO campaigns on social media platforms to increase visibility and attract more volunteers."
    ],
  },
  {
    id: "sc-24-2",
    domain: "Social Cause",
    year: 2024,
    title: "Domestic Violence Support System",
    teaser: "A discreet web/app offering victims of domestic violence swift access to emergency support and resources.",
    icon: "HeartHandshake",
    fullStatement: "Develop a discreet and user-friendly web/app to offer victims of domestic violence swift access to emergency support and resources. The platform should prioritise discretion, privacy, security, and ease of use; enabling victims to access immediate help and develop personalised safety plans.",
    background: "Domestic violence affects millions, often leaving victims feeling isolated and powerless due to physical, emotional, and psychological abuse. Many remain trapped by intimidation, manipulation, or financial dependence, unable to seek help due to fear, shame, or lack of knowledge about available resources. There is a need for a discreet platform that allows victims to access emergency assistance and support resources safely. The platform should help users create personalised safety plans while maintaining privacy and security, using discreet authorization to ensure others cannot detect the platform’s true purpose on shared devices.",
    deliverables: [
      "Emergency Assistance",
      "Authorisation to verify the identity of the user before giving full access",
      "Personalised Safety Planning to design and store safety strategies that cater to a user’s unique situation, such as pre-set alerts",
      "Safety Tools to store any information or files in a way that cannot be detected or discovered by anyone other than the user",
      "Discreet Operation",
      "Educational Resources",
      "Multi-Language Support",
      "User-Friendly Interface"
    ],
  },
  {
    id: "sc-24-3",
    domain: "Social Cause",
    year: 2024,
    title: "Educational Equity Platform",
    teaser: "Connects students from underprivileged backgrounds with mentors and educational resources.",
    icon: "HeartHandshake",
    fullStatement: "Design an online platform that connects students from underprivileged backgrounds with mentors and educational resources. The platform should offer virtual tutoring, facilitate access to scholarship opportunities, and provide a community forum for peer support and collaboration.",
    background: "Students from underprivileged backgrounds face barriers to quality education, including limited mentorship, inadequate resources, and a lack of information on financial aid. These challenges hinder their academic performance and future prospects. The proposed platform aims to bridge this gap by providing a centralized online space for these students to connect with mentors, access virtual tutoring, and find scholarship opportunities. With personalized mentorship, interactive resources, and a supportive community forum, the platform will offer tailored support and valuable connections, empowering students to excel academically and pursue their goals with confidence.",
    deliverables: [
      "Virtual Tutoring",
      "Mentor Matching",
      "Scholarship Database",
      "Application Assistance",
      "Community Forums",
      "Resource Library",
      "Progress Tracking",
      "Multilingual Support",
      "Parental Access",
      "Accessibility Features"
    ],
  },
  {
    id: "sc-24-4",
    domain: "Social Cause",
    year: 2024,
    title: "Dynamic Content Accessibility",
    teaser: "A tool that dynamically adjusts web content to accommodate users with various disabilities in real-time.",
    icon: "HeartHandshake",
    fullStatement: "Design a tool that dynamically adjusts web content (text, images, videos) to accommodate users with various disabilities in real-time. This should go beyond standard accessibility features and use AI to adapt content based on individual user needs and preferences.",
    background: "Traditional web accessibility tools address general disabilities but may not meet individual needs effectively. For example, screen readers assist users with visual impairments but may not cater to unique preferences or varying levels of impairment. Similarly, static adjustments for text size or contrast may not suffice for cognitive or sensory challenges. The proposed tool will use AI to dynamically adjust web content in real-time based on individual user interactions and preferences. It will tailor text size, contrast, and layout, convert text to speech or sign language, and provide alternative text for images. This approach aims to create a more personalized and accessible web experience, enhancing usability for all users.",
    deliverables: [
      "Real-time content adjustment",
      "Personalised content adaptation",
      "Adaptive media alternatives",
      "Customisable user profiles",
      "Contextual assistance",
      "Feedback mechanism",
      "Integration with existing platforms",
      "Multi-disability support"
    ],
  },
  {
    id: "sc-24-5",
    domain: "Social Cause",
    year: 2024,
    title: "Accessible Travel Guide for People with Disabilities",
    teaser: "An Accessible Travel Guide platform providing detailed, personalized travel assistance for people with disabilities.",
    icon: "HeartHandshake",
    fullStatement: "Design and develop an Accessible Travel Guide platform for people with disabilities. The platform should provide detailed, personalized travel assistance, including accessibility information for destinations, accommodations, transport options, and other services, ensuring that people with different types of disabilities can plan trips with confidence and ease.",
    background: "Travelling can be a challenge for people with disabilities due to inaccessible destinations, inadequate transport options, or a lack of information on accommodations. This project aims to create a web or mobile app that acts as a comprehensive travel guide for individuals with physical, sensory, or cognitive disabilities. The platform will focus on providing verified information about accessibility features, accommodations, and nearby services, making travel planning more convenient and inclusive.",
    deliverables: [
      "Personalized Accessibility Filters: Users can filter travel options based on their specific accessibility needs.",
      "Real-time Assistance: Integrated chatbot/AI assistant to offer real-time information about routes, accessibility, or emergency services during the trip.",
      "Emergency Support: A built-in emergency contact feature that allows users to quickly reach out to local support services for assistance if needed.",
      "Multilingual Support: Support for multiple languages, including options for sign language and braille accessibility."
    ],
  },
  {
    id: "sc-24-6",
    domain: "Social Cause",
    year: 2024,
    title: "Personal Safety Network",
    teaser: "A user-friendly platform allowing individuals to set up a personal safety network for emergencies.",
    icon: "HeartHandshake",
    fullStatement: "Develop a user-friendly web/app platform that allows individuals to set up a personal safety network. The platform should provide features for emergency alerts, location sharing with trusted contacts, and safety check-ins to ensure users' safety and security in various situations.",
    background: "In today's fast-paced and often unpredictable world, ensuring one's safety has become increasingly important. Individuals, particularly those who frequently travel alone, venture into unfamiliar areas, or encounter potentially risky situations, face significant challenges in maintaining their security. Traditional safety measures may fall short in providing the immediate support needed during emergencies or when navigating complex environments. To address these challenges, the proposed solution offers a robust digital platform designed to enhance personal safety through real-time connectivity and proactive monitoring. This platform enables users to stay connected with their trusted network, ensuring they have the necessary support and resources available in critical situations.",
    deliverables: [
      "Send distress signals with location and description to contacts or emergency services.",
      "Share real-time location with trusted contacts for specified periods.",
      "Set up scheduled check-ins, with alerts if missed.",
      "Create geofences that trigger notifications when entering or leaving areas.",
      "Manage who can access location and receive alerts.",
      "Access essential emergency resources like contacts and hospitals.",
      "Maintain a detailed profile with emergency contacts and medical information."
    ],
  },
  /* ─── 2023 ─── */
  // Web/App
  {
    id: "web-23-1",
    domain: "Web/App",
    year: 2023,
    title: "Employee Feedback and Engagement Platform",
    teaser: "A platform to gather employee feedback and measure engagement.",
    icon: "Globe",
    fullStatement: "Employee feedback and engagement are crucial aspects of maintaining a productive and satisfied workforce. Businesses need effective tools and platforms to gather employee feedback, measure engagement, and take actionable steps to enhance the work environment.",
    background: "The problem at hand is the lack of a comprehensive platform that facilitates continuous employee feedback, gauges employee engagement levels, and provides actionable insights to improve workplace satisfaction and productivity.",
    deliverables: [
      "Enable the creation and distribution of various types of surveys, including satisfaction surveys, pulse surveys, and feedback forms.",
      "Provide an option for employees to submit feedback anonymously to encourage honest and candid responses.",
      "Implement mechanisms to measure and track employee engagement over time, using KPIs.",
      "Support 360-degree feedback processes for peer, manager, and subordinate feedback.",
      "Provide data analytics and insights to help organizations understand root causes of issues and trends.",
      "Incorporate a feature for recognizing and rewarding employees based on contributions and feedback."
    ]
  },
  {
    id: "web-23-2",
    domain: "Web/App",
    year: 2023,
    title: "Event Planning and Scheduling",
    teaser: "Streamline the event planning process and enhance resource management.",
    icon: "Globe",
    fullStatement: "Event planning and scheduling present multifaceted challenges encompassing a wide spectrum of events, from conferences to weddings and corporate gatherings. Event organizers grapple with persistent issues, including scheduling conflicts, financial overruns, and client discontentment.",
    background: "This problem statement calls for innovative solutions that streamline the planning process, enhance resource management, and ensure client satisfaction, ultimately revolutionizing the event industry's efficiency and effectiveness.",
    deliverables: [
      "Develop an intelligent scheduling algorithm that minimizes conflicts by analyzing event dates, venues, and availability.",
      "Implement a robust budget management system that tracks expenses in real-time.",
      "Create a client portal where organizers and clients can communicate and share updates collaboratively.",
      "Build a platform that connects event organizers with vetted vendors for easy negotiation and booking.",
      "Offer real-time messaging and notification systems to keep stakeholders informed.",
      "Incorporate a feedback mechanism that allows clients and attendees to rate and review events."
    ]
  },
  {
    id: "web-23-3",
    domain: "Web/App",
    year: 2023,
    title: "Career Interest Assessment and Recommendation",
    teaser: "A digital platform offering dynamic tools to help students uncover their passions.",
    icon: "Globe",
    fullStatement: "The journey of choosing a career is a pivotal moment in a student's life, yet it's fraught with uncertainty due to a lack of self-awareness regarding their interests and strengths.",
    background: "Your task is to create a digital platform that acts as a guiding light for students. It will offer dynamic tools and assessments to help them uncover their true passions and talents through data-driven insights and personalized recommendations.",
    deliverables: [
      "Provide a range of comprehensive assessments that evaluate interests, strengths, personality traits, and values.",
      "Offer tailored career recommendations based on the assessment results.",
      "Curate a vast repository of career-related resources, including articles, videos, and courses.",
      "Provide data-driven insights into emerging industries, job market trends, and salary expectations.",
      "Allow users to create profiles to save results, track progress, and revisit recommendations.",
      "Facilitate interaction among users through forums, discussion boards, or social features."
    ]
  },
  // Social Cause
  {
    id: "sc-23-1",
    domain: "Social Cause",
    year: 2023,
    title: "Maternal and Child Health",
    teaser: "A platform addressing maternal and child well-being through comprehensive healthcare solutions.",
    icon: "HeartHandshake",
    fullStatement: "Maternal and child health is a critical concern in many parts of the world, including India. Despite significant progress, there are still challenges related to maternal mortality, infant mortality, and overall well-being due to inadequate access to healthcare and nutrition.",
    background: "Create a platform that addresses maternal and child health by implementing comprehensive interventions and software solutions to improve healthcare access, awareness, and outcomes for mothers and children.",
    deliverables: [
      "Provide prenatal care information, checklists, appointment reminders, and educational resources.",
      "Create a digital health record system for pregnant women that tracks health status and prenatal visits.",
      "Implement an immunization tracking feature with reminders and connection to nearby centers.",
      "Develop a nutrition and growth tracking feature for infants and young children.",
      "Implement an emergency response feature for immediate medical assistance during complications.",
      "Encourage community participation through a social platform for users to connect and support one another."
    ]
  },
  {
    id: "sc-23-2",
    domain: "Social Cause",
    year: 2023,
    title: "Inclusive Education for Students with Disabilities",
    teaser: "A platform that promotes inclusive education and accessibility for students with disabilities.",
    icon: "HeartHandshake",
    fullStatement: "In many educational systems worldwide, students with disabilities face significant barriers to accessing quality education. These barriers may include physical inaccessibility, limited assistive technologies, lack of trained teachers, and social stigma.",
    background: "Develop a platform that promotes inclusive education for students with disabilities through the implementation of comprehensive interventions and software solutions, enhancing access, awareness, and outcomes.",
    deliverables: [
      "Ensure that students with disabilities have equal access to quality education in mainstream schools.",
      "Promote campaigns to raise awareness about the challenges faced by students with disabilities.",
      "Promote diversity and inclusion within the school environment to foster a sense of belonging.",
      "Provide teachers and school staff with appropriate training and resources for inclusive teaching.",
      "Establish a platform for students with disabilities to connect and offer peer support.",
      "Allow students, parents, and educators to report accessibility issues or discrimination."
    ]
  },
  {
    id: "sc-23-3",
    domain: "Social Cause",
    year: 2023,
    title: "Sustainable Living App",
    teaser: "An app providing tools and incentives to adopt eco-friendly habits and sustainable practices.",
    icon: "HeartHandshake",
    fullStatement: "Sustainability has become a critical global concern, with individuals seeking ways to reduce their environmental footprint. A sustainable living app aims to address this by providing tools and incentives to adopt more sustainable practices.",
    background: "The problem requires a comprehensive software solution that empowers users to lead sustainable lives by making informed choices regarding energy consumption, waste reduction, and transportation patterns.",
    deliverables: [
      "Integrate a tool to calculate carbon footprint based on lifestyle choices.",
      "Offer sustainability challenges or goals (e.g., reducing plastic usage) where users can earn rewards.",
      "Allow users to track and visualize their resource consumption over time.",
      "Provide information about local sustainability events, workshops, and community initiatives.",
      "Create a social aspect for users to connect with like-minded individuals and share achievements.",
      "Enable users to offset carbon emissions by contributing to verified carbon offset projects."
    ]
  },
  // AI/ML
  {
    id: "ai-23-1",
    domain: "AI/ML",
    year: 2023,
    title: "CCTV-Based AI/ML for Enhanced Safety and Productivity",
    teaser: "AI-driven CCTV analysis for crowd management and crime prevention on Indian Railways.",
    icon: "BrainCircuit",
    fullStatement: "Indian Railways grapples with the daily challenge of managing millions of passengers and trains. Traditional manual monitoring methods are time-consuming and prone to human error. The integration of AI and ML offers a transformative solution.",
    background: "This project aims to harness the power of AI/ML to revolutionize Indian Railways, enhancing safety, efficiency, and passenger experience by analyzing vast data streams in real-time.",
    deliverables: [
      "Implement AI/ML-powered CCTV networks for real-time monitoring of railway stations and trains.",
      "Utilize AI to analyze passenger flow and optimize crowd management strategies.",
      "Monitor and improve cleanliness and maintenance by automating work tracking.",
      "Implement algorithms to identify suspicious activities and potential security threats.",
      "Optimize resource allocation by using AI insights for staff deployment.",
      "Leverage AI analytics to extract valuable insights from railway network data."
    ]
  },
  {
    id: "ai-23-2",
    domain: "AI/ML",
    year: 2023,
    title: "AI/ML-Powered Phishing Domain Detection",
    teaser: "An automated tool using AI/ML and WHOIS to identify malicious domains.",
    icon: "BrainCircuit",
    fullStatement: "In the era of widespread phishing attacks, the need for a robust solution to identify malicious domains from newly registered websites is paramount. Our challenge is to develop an automated tool that leverages AI and ML.",
    background: "The tool should employ backend code and content analysis, as well as web page image comparison to assign probability scores for phishing resemblance, evaluating accuracy and adaptability.",
    deliverables: [
      "Automate the process of identifying phishing domains among newly registered websites.",
      "Utilize WHOIS databases to access registration information for domains.",
      "Analyze web page images to distinguish between genuine websites and phishing sites.",
      "Assign probability scores to domains based on resemblance to genuine domains.",
      "Ensure the tool can promptly detect new phishing domains as they emerge to stay ahead of threats."
    ]
  },
  {
    id: "ai-23-3",
    domain: "AI/ML",
    year: 2023,
    title: "AI-Powered Traffic Signal Optimization System",
    teaser: "A dynamic traffic signal control system driven by real-time traffic conditions.",
    icon: "BrainCircuit",
    fullStatement: "Traffic congestion plagues urban areas, resulting in frustrating delays and environmental degradation. Traditional traffic signal systems rely on rigid schedules, exacerbating congestion during peak periods.",
    background: "We aim to develop an AI-driven traffic signal control system capable of dynamically adjusting signal timings in response to real-time conditions to prioritize smooth traffic flow and sustainability.",
    deliverables: [
      "Continuously collect and analyze real-time traffic data from cameras, sensors, and GPS.",
      "Implement machine learning models to predict traffic conditions and congestion patterns.",
      "Dynamically adjust traffic signal timings at intersections to optimize traffic flow.",
      "Incorporate a priority mechanism for emergency vehicles to ensure quick passage.",
      "Seamlessly integrate the AI-based system with existing traffic management infrastructure."
    ]
  }

];
