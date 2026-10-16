/* =============================================
   K. AKASH PORTFOLIO — MAIN JAVASCRIPT
   ============================================= */

'use strict';

/* ---- Case Study Data ---- */
const projects = {
  travel: {
    title: 'WanderLust AI',
    category: 'UI/UX · Mobile App',
    org: 'Infotact Solutions — Internship',
    image: 'wanderlust.png',
    imageAlt: 'Travel Tech Platform app interface',
    tags: ['UI/UX Design', 'Mobile App', 'Internship'],
    overview: 'WanderLust AI is an AI-powered travel planning and booking app designed during my UI/UX internship at Infotact Solutions. The project focuses on turning the travel planning journey into a smooth, conversational experience where users can discover destinations, explore options, and move into booking without friction.',
    problem: 'Travel planning often feels scattered, with users switching between multiple tools, comparing too much information, and losing clarity during the booking process. The challenge was to design one intuitive mobile experience that could guide users from trip idea to booking while keeping the interface visually engaging and easy to use.',
    process: 'I started by mapping the chat-to-booking flow to identify key user decisions and reduce unnecessary steps. Then I created low-fidelity wireframes to explore the conversation structure, followed by high-fidelity mobile screens in Figma with immersive visuals, gradient overlays, and interactive content cards. I also refined micro-interactions and transitions using Smart Animate to make the journey feel more fluid and engaging.',
    tools: ['Figma', 'Adobe XD', 'User Flow Mapping', 'Wireframing', 'High-fidelity Prototyping'],
    outcome: 'Designed a high-fidelity, conversation-led travel app experience that simplifies trip discovery and booking while improving visual appeal and interaction flow. Add your usability metric here if you have one, such as faster task completion, improved navigation clarity, or positive peer feedback.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: 'https://www.figma.com/proto/49ncyZYzDhmrJuSeyjLR4n/Travel-Tech?node-id=69-132&p=f&t=4TZzr2pL3d6P2YIG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=69%3A2' },
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-uiuxinternship-productdesign-activity-7426450576638611456-GOPK?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-internshipexperience-productdesign-ugcPost-7446196424058314752-MM2L/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' }
    ]
  },
  nexus: {
    title: 'NexusHome App',
    category: 'UI/UX · Mobile App',
    org: 'Infotact Solutions — Internship',
    image: 'nexushome.png',
    imageAlt: 'Nexus Home smart home control app interface',
    tags: ['UI/UX Design', 'Mobile App', 'Smart Home'],
    overview: 'NexusHome is a smart home control hub designed during my UI/UX internship at Infotact Solutions. The project focused on creating a tablet and mobile experience for controlling connected devices such as lights, thermostat, and security systems through a clear and intuitive interface.',
    problem: 'Smart home apps often feel too technical, cluttered, or disconnected from how people actually interact with physical devices. The challenge was to design an interface that bridges the digital and physical world, making device control feel natural, instant, and easy to understand.',
    process: 'I began by defining room-based environments such as living room and kitchen, then mapped the primary home overview screen with a clean, device-focused grid layout. I designed tactile components like circular thermostat sliders and realistic toggles, used component variants for different device states, and added visual feedback such as shadows, glows, and color cues to make interactions feel responsive. I also prototyped room transitions and thermostat behavior using variables to create a more functional and interactive experience.',
    tools: ['Figma', 'Adobe XD', 'Component Design', 'Interactive Prototyping'],
    outcome: 'Designed a highly interactive smart home prototype that improves usability through tactile controls, immediate feedback, and a simple control flow for everyday device management. Add your own outcome metric here if you have one, such as prototype feedback, usability results, or reviewer comments.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: 'https://www.figma.com/proto/xjJKMYVB7vWxEmMcJSnhSw/NexusHome?node-id=55-3&starting-point-node-id=55%3A221&t=cUQTYDAKXAtgqclH-1' },
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-uiuxinternship-productdesign-activity-7444055614583984128-J2Vh?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-internshipexperience-productdesign-ugcPost-7446196424058314752-MM2L/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' }
    ]
  },
  hypedrop: {
    title: 'HypeDrop — E-commerce App ',
    category: 'UI/UX · E-commerce',
    org: 'Zaalima Development — Internship',
    image: 'hypedrop.png',
    imageAlt: 'HypeDrop e-commerce app — accessible product browsing interface',
    tags: ['UI/UX Design', 'E-commerce', 'Accessibility'],
    overview: 'HypeDrop is a mobile-first e-commerce app designed during my 3-month internship at Zaalima Development. The project focused on creating a fast, visually engaging shopping experience for the Gen-Z fashion market, with an emphasis on rapid browsing and one-tap conversion.',
    problem: 'E-commerce apps often lose users because of friction in browsing, unclear product journeys, and abandoned carts during checkout. The challenge was to design an experience that keeps the shopping flow intuitive, engaging, and conversion-focused from discovery to purchase.',
    process: 'I started by mapping the full user flow, including happy paths, edge cases, and error paths, to make sure the experience stayed clear in every scenario. I then designed the high-fidelity screens with strong visual consistency, thumb-zone-friendly navigation, and a streamlined one-page checkout flow. For interactions, I used Smart Animate and state-based transitions to make the prototype feel more native and polished, while also shaping gamified elements like progress indicators and badges to improve engagement.',
    tools: ['Figma', 'Adobe XD', 'Accessibility Audit', 'Component System Design'],
    outcome: 'Designed a high-fidelity shopping experience that reduces purchase friction, improves visual appeal, and supports faster decision-making for fashion-focused users.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: 'https://www.figma.com/proto/jPUxaamw4DkX5cT6v46p8V/Group-5-Projects?node-id=310-21823&p=f&t=9dXxLV5I1ViIg8dp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=314%3A21858&show-proto-sidebar=1' },
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
  },
  vitallink: {
    title: 'VitalLink — Healthcare Platform',
    category: 'UI/UX · Healthcare',
    org: 'Zaalima Development — Internship',
    image: 'vitalink.png',
    imageAlt: 'VitalLink healthcare platform — patient dashboard and scheduling UI',
    tags: ['UI/UX Design', 'Healthcare', 'Accessibility', 'Trust Design'],
    overview: 'VitalLink is an accessibility-first telemedicine platform designed during my internship at Zaalima Development. The project was created for elderly users who need a simple, clear way to schedule and join video consultations with doctors.',
    problem: 'Healthcare apps can become confusing when they rely on small text, weak contrast, and crowded interfaces. For older users and people with visual or motor skill challenges, even basic tasks like joining a call or canceling an appointment can feel difficult. The challenge was to design a calm, highly readable experience with minimum friction and maximum clarity.',
    process: 'I started with empathy mapping and accessibility checks, then designed the core flow around the most important action: joining a video call through a single, high-contrast button. I also created medication reminder cards, oversized feedback states, and error-safe confirmation patterns for sensitive actions. The interface was built to follow WCAG 2.1 AA standards, with large touch targets, strong contrast, and screen-reader-ready annotations for key elements.',
    tools: ['Figma', 'Adobe XD', 'Information Architecture', 'User Journey Mapping', 'Accessibility Testing'],
    outcome: 'Designed a clear and accessible telemedicine experience that reduces cognitive load, supports older users, and makes essential healthcare actions easier to complete with confidence.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: 'https://www.figma.com/proto/jPUxaamw4DkX5cT6v46p8V/Group-5-Projects?node-id=693-30570&p=f&t=yGSm14IXP0rdDu50-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=693%3A30578' },
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
  },
  banking: {
    title: 'Online Bankng — Mobile App ',
    category: 'UI/UX · fintech',
    org: 'ILife Technologies — Internship',
    image: 'banking.png',
    imageAlt: 'Internet Banking — user dashboard ',
    tags: ['UI/UX Design', 'Healthcare', 'Accessibility', 'Trust Design'],
    overview: 'VitalLink is an accessibility-first telemedicine platform designed during my internship at Zaalima Development. The project was created for elderly users who need a simple, clear way to schedule and join video consultations with doctors.',
    problem: 'Healthcare apps can become confusing when they rely on small text, weak contrast, and crowded interfaces. For older users and people with visual or motor skill challenges, even basic tasks like joining a call or canceling an appointment can feel difficult. The challenge was to design a calm, highly readable experience with minimum friction and maximum clarity.',
    process: 'I started with empathy mapping and accessibility checks, then designed the core flow around the most important action: joining a video call through a single, high-contrast button. I also created medication reminder cards, oversized feedback states, and error-safe confirmation patterns for sensitive actions. The interface was built to follow WCAG 2.1 AA standards, with large touch targets, strong contrast, and screen-reader-ready annotations for key elements.',
    tools: ['Figma', 'Adobe XD', 'Information Architecture', 'User Journey Mapping', 'Accessibility Testing'],
    outcome: 'Designed a clear and accessible telemedicine experience that reduces cognitive load, supports older users, and makes essential healthcare actions easier to complete with confidence.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'figma', label: 'Figma Link', url: 'https://www.figma.com/proto/jPUxaamw4DkX5cT6v46p8V/Group-5-Projects?node-id=693-30570&p=f&t=yGSm14IXP0rdDu50-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=693%3A30578' },
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
  },
  chatbot: {
    title: 'EV Charging Assistant Chatbot ',
    category: 'AI/ML · ChatBot',
    org: 'Edunet Foundations — Internship',
    image: 'vitalink.png',
    imageAlt: 'EV Charging Assistant platform — user chat and dashboard',
    tags: ['UI/UX Design', 'Healthcare', 'Accessibility', 'Trust Design'],
    overview: 'The EV Charging Assistant is an AI-powered chatbot developed during my AI & Data Analytics Internship at Edunet Foundation (AICTE & Shell Skills4Future). The chatbot assists electric vehicle users by answering charging-related queries, recommending suitable charging stations, and providing intelligent guidance through natural language conversations.',
    problem: 'As EV adoption grows, users often struggle to find reliable charging information, understand charger availability, and resolve charging-related questions quickly. Existing solutions typically require navigating multiple platforms, making the process inefficient and time-consuming.',
    process: 'I designed and developed the chatbot by identifying common EV charging scenarios and structuring conversational flows around user intent. The application leverages AI to understand user queries and provide relevant responses related to charging stations, charging guidance, and EV support. The focus was on creating a fast, intuitive, and reliable conversational experience.',
    tools: ['Python', 'Google Gemini Api', 'Streamlit', 'Natural Language Processing', 'ChatBot Development'],
    outcome: 'Designed a clear and accessible telemedicine experience that reduces cognitive load, supports older users, and makes essential healthcare actions easier to complete with confidence.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
    },
  aichatbot: {
    title: '1M1B sustainabilty Chatbot ',
    category: 'AI/ML · ChatBot',
    org: '1M1B — Internship',
    image: 'vitalink.png',
    imageAlt: 'EV Charging Assistant platform — user chat and dashboard',
    tags: ['UI/UX Design', 'Healthcare', 'Accessibility', 'Trust Design'],
    overview: 'The EV Charging Assistant is an AI-powered chatbot developed during my AI & Data Analytics Internship at Edunet Foundation (AICTE & Shell Skills4Future). The chatbot assists electric vehicle users by answering charging-related queries, recommending suitable charging stations, and providing intelligent guidance through natural language conversations.',
    problem: 'As EV adoption grows, users often struggle to find reliable charging information, understand charger availability, and resolve charging-related questions quickly. Existing solutions typically require navigating multiple platforms, making the process inefficient and time-consuming.',
    process: 'I designed and developed the chatbot by identifying common EV charging scenarios and structuring conversational flows around user intent. The application leverages AI to understand user queries and provide relevant responses related to charging stations, charging guidance, and EV support. The focus was on creating a fast, intuitive, and reliable conversational experience.',
    tools: ['Python', 'Google Gemini Api', 'Streamlit', 'Natural Language Processing', 'ChatBot Development'],
    outcome: 'Designed a clear and accessible telemedicine experience that reduces cognitive load, supports older users, and makes essential healthcare actions easier to complete with confidence.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
  },
  Networkintrusion: {
    title: 'Network Intrusion System ',
    category: 'AI/ML · ChatBot',
    org: 'VOIS — Internship',
    image: 'voisproject.png',
    imageAlt: 'EV Charging Assistant platform — user chat and dashboard',
    tags: ['UI/UX Design', 'Cyber Security', 'Accessibility', 'Trust Design'],
    overview: 'The EV Charging Assistant is an AI-powered chatbot developed during my AI & Data Analytics Internship at Edunet Foundation (AICTE & Shell Skills4Future). The chatbot assists electric vehicle users by answering charging-related queries, recommending suitable charging stations, and providing intelligent guidance through natural language conversations.',
    problem: 'As EV adoption grows, users often struggle to find reliable charging information, understand charger availability, and resolve charging-related questions quickly. Existing solutions typically require navigating multiple platforms, making the process inefficient and time-consuming.',
    process: 'I designed and developed the chatbot by identifying common EV charging scenarios and structuring conversational flows around user intent. The application leverages AI to understand user queries and provide relevant responses related to charging stations, charging guidance, and EV support. The focus was on creating a fast, intuitive, and reliable conversational experience.',
    tools: ['Python', 'Google Gemini Api', 'Streamlit', 'Natural Language Processing', 'ChatBot Development'],
    outcome: 'Designed a clear and accessible telemedicine experience that reduces cognitive load, supports older users, and makes essential healthcare actions easier to complete with confidence.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
  },
  smsystem: {
    title: 'Student management system ',
    category: 'AI/ML · ChatBot',
    org: 'Logirtha Technolgies Pvt.Ltd — Internship',
    image: 'vitalink.png',
    imageAlt: 'EV Charging Assistant platform — user chat and dashboard',
    tags: ['UI/UX Design', 'Healthcare', 'Accessibility', 'Trust Design'],
    overview: 'The EV Charging Assistant is an AI-powered chatbot developed during my AI & Data Analytics Internship at Edunet Foundation (AICTE & Shell Skills4Future). The chatbot assists electric vehicle users by answering charging-related queries, recommending suitable charging stations, and providing intelligent guidance through natural language conversations.',
    problem: 'As EV adoption grows, users often struggle to find reliable charging information, understand charger availability, and resolve charging-related questions quickly. Existing solutions typically require navigating multiple platforms, making the process inefficient and time-consuming.',
    process: 'I designed and developed the chatbot by identifying common EV charging scenarios and structuring conversational flows around user intent. The application leverages AI to understand user queries and provide relevant responses related to charging stations, charging guidance, and EV support. The focus was on creating a fast, intuitive, and reliable conversational experience.',
    tools: ['Python', 'Google Gemini Api', 'Streamlit', 'Natural Language Processing', 'ChatBot Development'],
    outcome: 'Designed a clear and accessible telemedicine experience that reduces cognitive load, supports older users, and makes essential healthcare actions easier to complete with confidence.',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-productdesign-figma-activity-7447458997974097920-1LzD?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-activity-7449843614798602241-iw1W?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' }
    ]
  },
  rubelix: {
    title: 'RubeElix — Brand Identity',
    category: 'Branding · Identity Design',
    org: 'Startup Branding Project',
    image: null,
    imageAlt: null,
    tags: ['Brand Identity', 'Graphic Design', 'Startup'],
    overview: 'A complete brand identity system designed for RubeElix, a startup looking to establish a distinctive visual presence and build meaningful connection with their target audience.',
    problem: 'RubeElix lacked a coherent visual identity — their early materials were inconsistent and failed to communicate their brand personality clearly, resulting in weak audience recognition and low engagement with their content.',
    process: 'Conducted brand discovery sessions to identify core values, target audience, and competitive positioning. Developed logo concepts exploring multiple visual directions before refining the final mark. Built out a complete identity system including logo variations, typography, colour palette, brand voice guidelines, and application templates for social media and marketing materials.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy', 'Typography System', 'Colour Theory'],
    outcome: '30% improvement in audience connection following brand identity implementation. [ADD PROJECT SCREENSHOT — brand guidelines and application visuals]',
    outcomeIsPlaceholder: false,
    links: [
      { type: 'figma', label: 'Project Link', url: '#' },
      { type: 'linkedin', label: 'View Post', url: '#' }
    ]
  },
  aquaflex: {
    title: 'Aqua Flex — Brand Identity',
    category: 'Branding · Identity Design',
    org: 'Startup Branding Project',
    image: null,
    imageAlt: null,
    tags: ['Brand Identity', 'Graphic Design', 'Startup'],
    overview: 'A brand identity refresh and visual system designed for Aura Pvt. Ltd, with the goal of strengthening their online presence and increasing customer engagement.',
    problem: 'Aura Pvt. Ltd had an existing brand that wasn\'t resonating with their online audience — engagement metrics were low, and their digital presence lacked the visual consistency and appeal needed to build customer trust and conversion at scale.',
    process: 'Audited existing brand materials and digital presence to identify key inconsistency points. Developed a refined brand identity maintaining elements of brand equity while introducing stronger visual hierarchy, a more cohesive colour system, and modernised typography. Created a comprehensive application system including social media templates, digital marketing assets, and updated brand guidelines.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Brand Audit', 'Social Media Design System'],
    outcome: '30% increase in online customer engagement following brand identity implementation. [ADD PROJECT SCREENSHOT — brand materials and social media applications]',
    outcomeIsPlaceholder: false,
    links: [
      { type: 'figma', label: 'Figma Link', url: '#' },
      { type: 'linkedin', label: 'LinkedIn Post', url: '#' }
    ]
  },
  social: {
    title: 'Social Media Post Design',
    category: 'Graphic Design · Social Media',
    org: 'Academy Innova World — Internship',
    image: 'AIW.png',
    imageAlt: null,
    tags: ['Graphic Design', 'Social Media', 'Campaign'],
    overview: 'A sustained library of social media creatives and campaign assets produced during my internship at Academy Innova World — covering multiple formats, platforms, and campaign themes.',
    problem: 'Producing high-volume social content at quality requires both design system thinking (consistency, template scalability) and creative flexibility (fresh executions that don\'t feel templated). The challenge was building a visual system that enabled fast production without sacrificing brand coherence.',
    process: 'Built a reusable component library and template system in Canva and Photoshop to enable consistent, fast creative production. Designed assets across multiple formats (square, story, landscape) and campaign types. Maintained visual consistency across all touchpoints while adapting tone and composition for different content themes.',
    tools: ['Photoshop', 'Illustrator', 'Canva'],
    outcome: '[ADD OUTCOME METRIC — engagement data, reach, or campaign performance if available] [ADD PROJECT SCREENSHOT — sample social media creatives]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/academyinnovaworld_nationalyouthday-youthpower-swamivivekananda-activity-7416409676495474688-ba-7?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc&utm_campaign=copy_link' },
      { type: 'demo', label: 'View Project', url: 'https://www.behance.net/gallery/246037575/Social-Media-Wishing-Posts' }
    ]
  },
  expense: {
    title: 'Daily Expense Tracker',
    category: 'Product Design · Web Development',
    org: 'Personal Project',
    image: null,
    imageAlt: null,
    tags: ['Product Design', 'Web App', 'Full-cycle', 'Personal Project'],
    overview: 'A personal project exploring the complete design-to-code cycle. Built a daily expense tracking web application — from initial product thinking and UX design through to front-end implementation — as a way of strengthening both design and development fluency simultaneously.',
    problem: 'Existing expense tracking apps either over-engineer the data view (dashboards no one actually reads daily) or under-invest in the entry experience (friction-heavy forms that kill habit formation). The goal was to design and build something genuinely usable and quick to interact with every day.',
    process: 'Defined core user jobs-to-be-done: fast expense logging, clear daily/weekly totals, and minimal friction. Sketched wireframes, designed hi-fi screens in Figma, then implemented the design in HTML, CSS, and JavaScript — personally managing the handoff between design intent and code reality. This cross-disciplinary process significantly deepened my appreciation of implementation constraints in design decisions.',
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    outcome: '[ADD OUTCOME METRIC] — Completed full design-to-code cycle end-to-end. [ADD LIVE LINK or GITHUB REPO LINK if available] [ADD PROJECT SCREENSHOT]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'github', label: 'GitHub Link', url: 'https://github.com/Akash-Kaliyamoorthy' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'figma', label: 'Figma Link', url: '#' }
    ]
  },
  lmsystem: {
    title: 'Learning Management System',
    category: 'Product Design · Web Development',
    org: 'Personal Project',
    image: null,
    imageAlt: null,
    tags: ['Product Design', 'Web App', 'Full-cycle', 'Personal Project'],
    overview: 'A personal project exploring the complete design-to-code cycle. Built a daily expense tracking web application — from initial product thinking and UX design through to front-end implementation — as a way of strengthening both design and development fluency simultaneously.',
    problem: 'Existing expense tracking apps either over-engineer the data view (dashboards no one actually reads daily) or under-invest in the entry experience (friction-heavy forms that kill habit formation). The goal was to design and build something genuinely usable and quick to interact with every day.',
    process: 'Defined core user jobs-to-be-done: fast expense logging, clear daily/weekly totals, and minimal friction. Sketched wireframes, designed hi-fi screens in Figma, then implemented the design in HTML, CSS, and JavaScript — personally managing the handoff between design intent and code reality. This cross-disciplinary process significantly deepened my appreciation of implementation constraints in design decisions.',
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    outcome: '[ADD OUTCOME METRIC] — Completed full design-to-code cycle end-to-end. [ADD LIVE LINK or GITHUB REPO LINK if available] [ADD PROJECT SCREENSHOT]',
    outcomeIsPlaceholder: true,
    links: [
      { type: 'github', label: 'GitHub Link', url: 'https://github.com/Akash-Kaliyamoorthy' },
      { type: 'demo', label: 'Live Demo', url: '#' },
      { type: 'figma', label: 'Figma Link', url: '#' }
    ]
  }
};

/* ---- Certification Data ---- */
const certs = {
  uiux: {
    title: 'Advanced UI/UX Design Industry Professional',
    company: 'Devsindia',
    image: 'devs.jpg',
    description: 'An industry-aligned professional certification covering advanced UI/UX design practice — from research and wireframing through to high-fidelity design and portfolio-ready case study presentation.',
    postUrl: 'https://lnkd.in/p/ghNEZpYn'
  },
  aifund: {
    title: 'AI Fundamentals',
    company: 'IBM SkillBuild',
    image: 'aifundamental.jpg',
    description: 'Foundational certification covering core artificial intelligence concepts, applications, and ethical considerations — building the AI literacy behind several of my applied AI internship projects.',
    postUrl: 'https://lnkd.in/p/gZrQAZdt'
  },
  aws1: {
    title: 'Cloud Foundations ',
    company: 'AWS Academy',
    image: 'cloud.jpg',
    description: 'A foundational course covering cloud computing concepts on AWS — supporting the technical side of my design-plus-tech skill set.',
    postUrl: 'https://lnkd.in/p/gtqDuVas'
  },
  aws2: {
    title: 'Machine Learning ',
    company: 'AWS Academy',
    image: 'machinelearning.jpg',
    description: 'A foundational course covering introductory machine learning on AWS — supporting the technical side of my design-plus-tech skill set.',
    postUrl: 'https://lnkd.in/p/gbvsWnFM'
  },
  aws3: {
    title: 'Data Engineering',
    company: 'AWS Academy',
    image: 'dataengg.jpg',
    description: 'A foundational course covering Data Engineering on AWS — supporting the technical side of my design-plus-tech skill set.',
    postUrl: 'https://lnkd.in/p/gbvsWnFM'
  },
  mongodb: {
    title: 'Mongo DB Basics',
    company: 'AWS Academy',
    image: 'mongodb.jpg',
    description: 'A foundational course covering Basic mongo db concepts  — supporting the technical side of my design-plus-tech skill set.',
    postUrl: 'https://lnkd.in/p/ggS5JXcR'
  },
  flutter: {
    title: 'Mobile App Development using Flutter',
    company: 'Infosys Springboard',
    image: 'flutter.jpg',
    description: 'A hands-on course in building cross-platform mobile applications with Flutter, connecting UI design decisions directly to real front-end implementation.',
    postUrl: 'https://lnkd.in/p/g2VzatxZ'
  },
  databricks: {
    title: 'Databricks for Generative AI Fundamentals',
    company: 'Simplilearn Skillup',
    image: 'databricks.jpg',
    description: 'An introductory certification on the Databricks platform and its application to generative AI workflows and data pipelines.',
    postUrl: 'https://lnkd.in/p/gEuZ7gkC'
  },
  dtp: {
    title: 'Diploma in Desktop Publishing',
    company: 'Isysway Technologies',
    image: 'DDP.jpg',
    description: 'A comprehensive diploma covering desktop publishing and graphic design fundamentals — one of the earliest formal foundations of my graphic design practice.',
    postUrl: 'www.linkedin.com/in/kakashprofile'
  },
  uiuxis: {
    title: 'UI/UX Designing',
    company: 'Infotact Solution',
    image: 'infotacttraining.jpg',
    description: 'A comprehensive diploma covering desktop publishing and graphic design fundamentals — one of the earliest formal foundations of my graphic design practice.',
    postUrl: 'https://lnkd.in/p/gR99jidy'
  },
  uiuxzd: {
    title: 'UI/UX Design',
    company: 'Zaalima Development',
    image: 'zaalimatrainging.jpg',
    description: 'A comprehensive diploma covering desktop publishing and graphic design fundamentals — one of the earliest formal foundations of my graphic design practice.',
    postUrl: 'https://lnkd.in/p/gTzu9nN2'
  },
  careeredge: {
    title: 'Career Edge — Young Professional',
    company: 'TCS iON',
    image: 'tcsion.jpg',
    description: 'A professional-readiness certification covering workplace communication, employability skills, and industry professionalism.',
    postUrl: 'https://lnkd.in/p/gEeuCqdY'
  }
};

/* ---- Experience Data ---- */
const experiences = {
  infotact: {
    role: 'UI/UX Design Intern',
    company: 'Infotact Solutions',
    duration: '3 Months',
    certImage: 'Infotact.jpg',
    description: 'Working as a UI UX Design Intern at Infotact Solutions,I collaborated with a remote design team to research and develop two digital products, WanderLust, a travel technology application, and Nexus Home, a smart device controller. My responsibilities included user research, competitor analysis, user flow creation, wireframing, high fidelity interface design, and interactive prototyping in Figma. Through this experience, I learned how to transform ideas into intuitive, user focused digital experiences while improving my teamwork and design thinking skills.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiux-internshipexperience-productdesign-ugcPost-7446196424058314752-MM2L/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://www.figma.com/proto/xjJKMYVB7vWxEmMcJSnhSw/NexusHome?node-id=55-487&starting-point-node-id=55%3A221&t=GGGcKv4vThyGDs6q-1' }
    ]
  },
  zaalima: {
    role: 'UI/UX Design Intern',
    company: 'Zaalima Development',
    duration: '3 Months',
    certImage: 'zaalima.jpg',
    description: 'Working as a UI UX Design Intern at Zaalima Development, I collaborated with a remote design team to research and design two real world digital products, HypeDrop, an e commerce application, and Vitalink, a healthcare platform. I contributed throughout the design process by conducting user research, competitor analysis, user flow planning, wireframing, high fidelity interface design, and interactive prototyping in Figma. Working closely with the team, I helped transform ideas into intuitive, user centered experiences while strengthening my skills in product design, collaboration, and design thinking.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_uiuxdesign-internshipexperience-productdesign-ugcPost-7449843613628268544-h1xQ/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://www.figma.com/design/jPUxaamw4DkX5cT6v46p8V/Group-5-Projects?node-id=0-1&t=G9yTP62NqxbF5HGT-1' }
    ]
  },
  ilife: {
  role: 'UI/UX Design Intern',
  company: 'Ilife Technologies Pvt.Ltd',
  duration: '1 Month',
  certImage: 'ilife cert.jpg', // optional
  description: 'Working as a UI/UX Design Intern at ILIFE Technologies, Trichy, I gained practical experience in user-centered design by learning industry-standard UI/UX principles and applying them to real-world projects. Throughout this intensive 30-day onsite internship, I explored the complete design process—from user research and wireframing to high-fidelity interface design, prototyping, and usability testing using Figma. Collaborating with fellow interns, I transformed ideas into intuitive digital experiences while strengthening my creative thinking, problem-solving, and design decision-making skills. As part of the internship, our team successfully designed and developed a complete Online Banking Mobile Application, applying modern UI/UX practices to create a secure, accessible, and user-friendly banking experience.',
  links: [
    { type: 'linkedin', label: 'LinkedIn Post', url: '#' },
    { type: 'project', label: 'Project Link', url: '#' }
  ]
},

  athenura: {
    role: 'Graphic Designer Intern',
    company: 'Athenura',
    duration: '4 Months',
    certImage: '0.jpg',
    description: 'Designed social media creatives, posters, and marketing materials using Adobe Photoshop and Illustrator. Developed visually engaging assets aligned with brand identity and campaign goals, delivering creative work within deadline across multiple concurrent campaigns for the studio\'s clients.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_graphicdesign-internshipcompletion-creativedesign-activity-7437891551931895808-kbIt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://www.behance.net/gallery/246037575/Social-Media-Wishing-Posts' }
    ]
  },
  academy: {
    role: 'Graphic Designer Intern',
    company: 'Academy Innova World',
    duration: '4 Months',
    certImage: 'aiwcert.jpg',
    description: 'Designed social media creatives, posters, and marketing materials using Adobe Photoshop and Illustrator. Developed visually engaging assets aligned with brand identity and campaign goals, delivering creative work within deadline across multiple concurrent campaigns for the studio\'s clients.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_graphicdesign-internshipcompletion-creativedesign-activity-7437891551931895808-kbIt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://www.behance.net/gallery/246037575/Social-Media-Wishing-Posts' }
    ]
  },
  edunet: {
    role: 'AI & Data Analytics Intern',
    company: 'Edunet Foundation — AICTE & Shell Skills4Future',
    duration: '4 Weeks',
    certImage: 'edunetcert.png',
    description: 'Designed and built an EV Charging Assistant chatbot to help users navigate EV-related queries, implementing conversational logic and structured response handling. Applied AI and data-processing concepts to improve the accuracy and clarity of user interactions.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_aicte-edunet-shell-activity-7400390596214976512-mrOI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://colab.research.google.com/drive/1imsRcPlzk9IqeKTPGv9clNM0naGbRwum?usp=sharing' }
    ]
  },
  vois: {
    role: 'Cybersecurity & Generative AI Intern',
    company: 'VOIS for Tech & Edunet Foundation',
    duration: '4 Weeks',
    certImage: 'vois.jpg',
    description: 'Developed an AI-based Network Intrusion Detection System to flag suspicious network activity. Applied machine learning and cybersecurity concepts for anomaly detection, analysing network traffic patterns to improve threat-identification accuracy.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_cybersecurity-generativeai-voisfortech-activity-7427536779668516864-1mp7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://huggingface.co/spaces/Akash-Kaliyamoorthy/Ai-Network-Scan' }
    ]
  },
  im1b: {
    role: 'AI for Sustainability Intern',
    company: '1M1B — One Million for One Billion',
    duration: '4 Weeks',
    certImage: '1m1bcert.jpg',
    description: 'Applied AI concepts to sustainability challenges including climate change and waste management. Built AI chatbots for problem-solving and user interaction, and worked on mini-projects and case studies integrating AI with real-world environmental solutions.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_aiforsustainability-aiskillspassport-ecosortai-activity-7434782274593677312-iJU0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://media.licdn.com/dms/image/v2/D5622AQHl6laX_q_qQg/feedshare-image-high-res/B56Zy2nEDOH8AU-/0/1772590219706?e=1785974400&v=beta&t=H1NHwjTYrCf6bmYR0l9M42bDWKCSGrI7FV5llGBVxyg' }
    ]
  },
  logirtha: {
    role: 'Java Development Intern',
    company: 'Logirtha Technologies Pvt. Ltd.',
    duration: '2 Weeks',
    certImage: 'logirthacert.jpg',
    description: 'Developed a console-based Student Management System using Core Java, implementing OOP concepts including encapsulation and modular design. Applied exception handling and input validation to improve program stability.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_internshipcompletion-javadevelopment-computerscience-activity-7413948470320889856-LDzV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://media.licdn.com/dms/image/v2/D5622AQEzZv-D8plAxA/feedshare-shrink_1280/B56ZuOis4VJoAs-/0/1767623021671?e=1785974400&v=beta&t=4t0w-sLi7RZW6W6GntVweneqJDzduwq4GDwkHz6zADo' }
    ]
  },
  agnirva: {
    role: 'Software Development Intern',
    company: 'Agnirva',
    duration: '8 Weeks',
    certImage: 'agnirvacert.png',
    description: 'Contributed to a structured Software Capstone Project following SDLC practices, participating in requirement analysis, coding, testing, and debugging phases as part of a collaborative development team.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_agnirva-softwareinternship-techexperience-activity-7363960745425825792-NLzu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://media.licdn.com/dms/image/v2/D4D22AQGn005zL6sQlg/feedshare-image-high-res/B4DZjILPGcHwAo-/0/1755705047098?e=1785974400&v=beta&t=1h9oGlsQdY9lDiiCi5kTfuY7gZaA-IsLF3RG-8V_74k' }
    ]
  },
  armada: {
    role: 'Sensors & IoT Intern',
    company: 'Armada Industrial Automations',
    duration: '2 Weeks',
    certImage: 'armadacert.jpg',
    description: 'Gained hands-on experience with sensors and IoT systems used in industrial automation, working with microcontrollers and embedded systems for data collection and monitoring, and exploring IoT applications in automation and efficiency.',
    links: [
      { type: 'linkedin', label: 'LinkedIn Post', url: 'https://www.linkedin.com/posts/kakashprofile_iot-sensors-projectplanning-activity-7353681658874638337-_3w4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkPLo8BlqJC6D6zJWsKRuscJz9C5_jlOsc' },
      { type: 'project', label: 'Project Link', url: 'https://media.licdn.com/dms/image/v2/D5622AQHe8faBc5jDqA/feedshare-image-high-res/B56Zg2EE_MHUAw-/0/1753253697221?e=1785974400&v=beta&t=QBHdDjjdvGAlctTj_1jm5EP_bHlokSdjW7kVMKcKBEY' }
    ]
  }
};

/* ---- DOM References ---- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-link');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-content');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

/* ---- Sticky Navbar ---- */
function handleNavScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* ---- Mobile Menu ---- */
function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  requestAnimationFrame(() => {
    mobileMenu.classList.add('open');
  });
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 400);
}

hamburger.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

mobileClose.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ---- Scroll Reveal Animations ---- */
function setupRevealAnimations() {
  const targets = document.querySelectorAll(
    '.section-header, .about-image-col, .about-text-col, ' +
    '.service-card, .project-card, .stat-item, ' +
    '.testimonial-placeholder, .cert-card, .contact-left, ' +
    '.contact-right, .timeline-item, .explore-card, .linkedin-feature'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards in grids
    if (el.classList.contains('project-card') ||
        el.classList.contains('service-card') ||
        el.classList.contains('cert-card') ||
        el.classList.contains('explore-card')) {
      const siblings = Array.from(el.parentElement.children).filter(
        child => child.classList.contains(el.classList[0])
      );
      const idx = siblings.indexOf(el);
      el.classList.add(`reveal-delay-${Math.min(idx + 1, 6)}`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ---- Modal / Case Study ---- */
const linkIcons = {
  figma: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M5.5 1a2.25 2.25 0 0 0 0 4.5h2.25V1H5.5Z" fill="currentColor" opacity=".55"/><path d="M5.5 5.5a2.25 2.25 0 1 0 2.25 2.25V5.5H5.5Z" fill="currentColor" opacity=".8"/><path d="M7.75 1H10a2.25 2.25 0 1 1 0 4.5H7.75V1Z" fill="currentColor" opacity=".4"/><circle cx="10" cy="9.75" r="2.25" fill="currentColor" opacity=".65"/><path d="M5.5 10a2.25 2.25 0 1 0 2.25-2.25H5.5V10Z" fill="currentColor"/></svg>',
  github: '<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.07.72 1.07.72.62 1.07 1.64.76 2.04.58.06-.45.24-.76.44-.94-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.94.72a6.7 6.7 0 0 1 3.53 0c1.35-.91 1.94-.72 1.94-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.64 3.29-3.21 3.46.25.22.48.65.48 1.31v1.94c0 .19.13.41.49.34A7 7 0 0 0 8 1Z" fill="currentColor"/></svg>',
  demo: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="2" width="13" height="9" rx="1.3" stroke="currentColor" stroke-width="1.3"/><path d="M4.5 14h6M7.5 11v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  linkedin: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M4.6 6.8v4.3M4.6 4.9v.4M7.4 6.8v4.3M7.4 8.4c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v2.7" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  project: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M6 4V2.8a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8V4M2 4h11v7.2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M2 6.8h11" stroke="currentColor" stroke-width="1.3"/></svg>'
};

function buildLinksHTML(links) {
  if (!links || !links.length) return '';
  const buttons = links.slice(0, 3).map(l => {
    const placeholder = !l.url || l.url === '#';
    const icon = linkIcons[l.type] || '';
    const cls = placeholder ? 'modal-link-btn is-placeholder' : 'modal-link-btn';
    const target = placeholder ? '' : ' target="_blank" rel="noopener noreferrer"';
    return `<a href="${l.url || '#'}" class="${cls}"${target} aria-label="${l.label}${placeholder ? ' — add your link' : ''}">${icon}<span>${l.label}</span></a>`;
  }).join('');
  return `<div class="modal-links">${buttons}</div>`;
}

function buildModalContent(projectKey) {
  const p = projects[projectKey];
  if (!p) return '';

  const heroHTML = p.image
    ? `<div class="modal-hero-img"><img src="${p.image}" alt="${p.imageAlt}" loading="lazy" /></div>`
    : `<div class="modal-hero-placeholder">[ADD PROJECT SCREENSHOT — ${p.title} visuals]</div>`;

  const toolPills = p.tools.map(t => `<span class="modal-tool">${t}</span>`).join('');
  const tagPills = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  const outcomeClass = p.outcomeIsPlaceholder ? '' : '';
  const outcomeIcon = p.outcomeIsPlaceholder ? '📌' : '✦';

  return `
    ${heroHTML}
    <div class="modal-tags">${tagPills}</div>
    <h2 class="modal-title" id="modal-title">${p.title}</h2>

    <div class="modal-section">
      <h3 class="modal-section-title">Overview</h3>
      <p>${p.overview}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">The Problem</h3>
      <p>${p.problem}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Process &amp; Approach</h3>
      <p>${p.process}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Tools Used</h3>
      <div class="modal-tools">${toolPills}</div>
    </div>

    <div class="modal-outcome-box">
      <span class="modal-outcome-icon">${outcomeIcon}</span>
      <p class="modal-outcome-text"><strong>Outcome:</strong> ${p.outcome}</p>
    </div>

    ${buildLinksHTML(p.links)}

    <p style="margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
      From: ${p.org}
    </p>
  `;
}

function buildCertModalContent(certKey) {
  const c = certs[certKey];
  if (!c) return '';

  const heroHTML = c.image
    ? `<div class="modal-hero-img"><img src="${c.image}" alt="${c.title} certificate" loading="lazy" /></div>`
    : `<div class="modal-hero-placeholder">[ADD CERTIFICATE IMAGE — ${c.title}]</div>`;

  return `
    ${heroHTML}
    <h2 class="modal-title" id="modal-title">${c.title}</h2>
    <div class="modal-cert-meta">
      <span class="modal-cert-company">${c.company}</span>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">About this Certification</h3>
      <p>${c.description}</p>
    </div>

    <div class="modal-links">
      <a href="${c.postUrl}" class="modal-link-btn${c.postUrl === '#' ? ' is-placeholder' : ''}"${c.postUrl !== '#' ? ' target="_blank" rel="noopener noreferrer"' : ''} aria-label="View the post about this certification">
        ${linkIcons.linkedin}<span>View Post</span>
      </a>
    </div>
  `;
}

function buildExperienceModalContent(expKey) {
  const x = experiences[expKey];
  if (!x) return '';

  const heroHTML = x.certImage
    ? `<div class="modal-hero-img"><img src="${x.certImage}" alt="${x.company} completion certificate" loading="lazy" /></div>`
    : `<div class="modal-hero-placeholder">[ADD COMPLETION CERTIFICATE — ${x.company}]</div>`;

  return `
    ${heroHTML}
    <h2 class="modal-title" id="modal-title">${x.role}</h2>
    <div class="modal-cert-meta">
      <span class="modal-cert-company">${x.company}</span>
      <span class="modal-exp-duration">${x.duration}</span>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">About this Role</h3>
      <p>${x.description}</p>
    </div>

    ${buildLinksHTML(x.links)}
  `;
}

function openModal(key, kind) {
  let content;
  if (kind === 'cert') {
    content = buildCertModalContent(key);
  } else if (kind === 'experience') {
    content = buildExperienceModalContent(key);
  } else {
    content = buildModalContent(key);
  }
  if (!content) return;
  modalContent.innerHTML = content;
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Focus modal for accessibility
  setTimeout(() => {
    modalClose.focus();
  }, 100);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Wire up project cards
document.querySelectorAll('.project-card').forEach(card => {
  const projectKey = card.dataset.project;

  card.addEventListener('click', () => openModal(projectKey, 'project'));

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(projectKey, 'project');
    }
  });
});

// Also wire project CTAs to stop propagation and open modal
document.querySelectorAll('.project-cta').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project-card');
    if (card) openModal(card.dataset.project, 'project');
  });
});

// Wire up certification "View Details" buttons
document.querySelectorAll('.cert-view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.cert-card');
    if (card) openModal(card.dataset.cert, 'cert');
  });
});

// Wire up Experience cards (timeline + "also explored" grid)
document.querySelectorAll('.timeline-card[data-exp], .explore-card[data-exp]').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.exp, 'experience'));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.dataset.exp, 'experience');
    }
  });
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
    closeModal();
  }
});

/* ---- Contact Form ---- */
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subjectSelect = document.getElementById('contact-subject');
  const message = document.getElementById('contact-message').value.trim();

  formSuccess.style.display = 'none';
  formError.style.display = 'none';

  if (!name || !email || !message) {
    formError.style.display = 'block';
    formError.textContent = 'Please fill in all required fields correctly.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formError.style.display = 'block';
    formError.textContent = 'Please enter a valid email address.';
    return;
  }

  // Build a mailto link so the message opens directly in the visitor's own
  // mail client, addressed to K. Akash, with their details and message
  // pre-filled (mailto can't set the "from" address itself — that's always
  // whichever account the visitor's mail app sends as — so it's included
  // in the body instead for context).
  const subjectText = subjectSelect.options[subjectSelect.selectedIndex]?.text || '';
  const mailSubject = subjectSelect.value
    ? `Portfolio Inquiry — ${subjectText}`
    : `Portfolio Inquiry from ${name}`;
  const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const mailtoLink = `mailto:akashkaliyamoorthy4@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const submitBtn = document.getElementById('contact-submit');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Opening your mail app…';
  submitBtn.disabled = true;

  window.location.href = mailtoLink;

  setTimeout(() => {
    formSuccess.style.display = 'block';
    formSuccess.textContent = '✓ Your mail app should now be open with your message ready to send.';
    contactForm.reset();
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 600);
});

/* ---- Active nav link on scroll ---- */
function setupActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');
  const navH = getComputedStyle(document.documentElement).getPropertyValue('--nav-height').trim() || '72px';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    // A thin detection band just below the fixed nav, instead of a percentage
    // of the whole section — percentage thresholds never fire for sections
    // taller than the viewport (e.g. Projects with many cards).
    threshold: 0,
    rootMargin: `-${navH} 0px -65% 0px`
  });

  sections.forEach(s => observer.observe(s));
}

/* ---- Smooth scroll offset for fixed nav ---- */
function setupSmoothScrollOffset() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const targetY = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });
}

/* ---- Lazy image error handling ---- */
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.style.display = 'none';
  });
});

/* ---- Custom Cursor ---- */
function setupCustomCursor() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-ring-label');
  if (!dot || !ring) return;

  document.body.classList.add('has-custom-cursor');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let active = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    if (!active) {
      active = true;
      document.body.classList.add('cursor-active');
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverMap = [
    { selector: '.project-card', text: 'View' },
    { selector: '.cert-card', text: 'Details' },
    { selector: '.timeline-card, .explore-card', text: 'View' },
    { selector: 'a, button', text: '' }
  ];

  hoverMap.forEach(({ selector, text }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('ring-hover');
        label.textContent = text;
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('ring-hover');
        label.textContent = '';
      });
    });
  });
}

/* ---- Hero Canvas: generative particle network + video handoff ---- */
function setupHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const hero = document.getElementById('hero');
  const video = document.getElementById('hero-video');

  // If a real background video file is present and can play, let it take over
  // (canvas keeps running underneath at low opacity as a subtle texture either way)
  if (video) {
    video.addEventListener('playing', () => video.classList.add('is-playing'));
    video.play().catch(() => { /* file not present yet — canvas carries the visual */ });
  }

  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, dpr;
  let particles = [];
  let mouseX = null, mouseY = null;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.offsetWidth;
    h = hero.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(60, Math.round((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    const linkDist = 130;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      if (mouseX !== null) {
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          p.x += (dx / dist) * 0.6;
          p.y += (dy / dist) * 0.6;
        }
      }
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < linkDist) {
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.12 * (1 - dist / linkDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.fillStyle = 'rgba(129, 140, 248, 0.7)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!reducedMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });
  hero.addEventListener('mouseleave', () => { mouseX = null; mouseY = null; });

  step();
  if (reducedMotion) {
    // Draw a single static frame instead of a running loop
    setTimeout(() => {}, 0);
  }
}

/* ---- Skill Proficiency Rings ----
   Reads the percentage straight off each tile's data-percent attribute in
   index.html — nothing here needs editing to change a skill level. */
function setupSkillRings() {
  const RADIUS = 16;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  document.querySelectorAll('.skill-tile[data-percent]').forEach(tile => {
    const progress = tile.querySelector('.skill-ring-progress');
    const valueLabel = tile.querySelector('.skill-ring-value');
    if (!progress || !valueLabel) return;

    let pct = parseFloat(tile.dataset.percent);
    if (isNaN(pct)) pct = 0;
    pct = Math.max(0, Math.min(100, pct));

    const offset = CIRCUMFERENCE * (1 - pct / 100);

    progress.style.strokeDasharray = `${CIRCUMFERENCE}`;
    progress.style.strokeDashoffset = `${CIRCUMFERENCE}`; // start empty, then animate in
    valueLabel.textContent = `${Math.round(pct)}%`;

    // Animate the fill in on next frame so the CSS transition actually plays
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.strokeDashoffset = `${offset}`;
      });
    });
  });
}

/* ---- Skill Tile 3D Tilt + Spotlight ---- */
function setupTiltCards() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.skill-tile:not(.tile-soft)').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 6;
      const rotateX = (0.5 - py) * 6;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ---- Skills Category Filter ---- */
function setupSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const tiles = document.querySelectorAll('.skill-tile');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      tiles.forEach(tile => {
        const matches = filter === 'all' || tile.dataset.category === filter;
        tile.classList.toggle('tile-hidden', !matches);
      });
    });
  });
}

/* ---- Scroll Progress Bar ---- */
function setupScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ---- Project Category Filter ---- */
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category === filter;
        if (matches) {
          // Bring back into grid flow immediately, then fade/scale in
          card.classList.remove('filter-hidden');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => card.classList.remove('filtering-out'));
          });
        } else {
          // Fade out first, then pull out of grid flow so remaining
          // visible cards reflow up to fill the gap
          card.classList.add('filtering-out');
          setTimeout(() => card.classList.add('filter-hidden'), 300);
        }
      });
    });
  });
}

/* ---- Floating Scroll-to-Top ---- */
function setupScrollTopButton() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 480);
  }, { passive: true });
}

/* ---- Dark / Light Theme Toggle ---- */
function setupThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const label = toggle.querySelector('.theme-toggle-label');
  const root = document.documentElement;

  function reflectState() {
    const isLight = root.getAttribute('data-theme') === 'light';
    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    if (label) label.textContent = isLight ? 'Dark mode' : 'Light mode';
  }

  // Reflect whatever the inline head script already applied on load
  reflectState();

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem('theme', isLight ? 'dark' : 'light');
    } catch (e) { /* localStorage unavailable — theme just won't persist across visits */ }
    reflectState();
  });
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  setupActiveNavLinks();
  setupSmoothScrollOffset();
  setupCustomCursor();
  setupHeroCanvas();
  setupTiltCards();
  setupSkillsFilter();
  setupSkillRings();
  setupProjectFilters();
  setupScrollTopButton();
  setupScrollProgress();
  setupThemeToggle();
});

// Active nav link style
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--text-primary) !important;
  }
  .nav-links a.active::after {
    transform: scaleX(1) !important;
  }
`;
document.head.appendChild(style);
