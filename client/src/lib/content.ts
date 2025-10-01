export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  overview: string;
  useCases: { title: string; description: string }[];
  approach: { step: string; description: string }[];
  technologies: string[];
  services: string[];
  metrics: { label: string; value: string }[];
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  included: string[];
  process: { step: string; description: string }[];
  deliverables: string[];
  tools: string[];
}

export interface Technology {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  applications: string[];
  relatedServices: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  heroImage: string;
  summary: string;
  content: string;
  tags: string[];
  readingTime: number;
}

export interface TeamMember {
  name: string;
  role: string;
  headshot: string;
  bio: string;
  socials: { platform: string; url: string }[];
}

export const industries: Industry[] = [
  {
    slug: "agriculture",
    title: "Agriculture",
    tagline: "AI-driven crop monitoring and yield optimization",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop",
    overview: "Transform agricultural operations with computer vision and predictive analytics. Our AI solutions enable early disease detection, optimize irrigation, and maximize crop yields while reducing resource waste.",
    useCases: [
      { title: "Disease Detection", description: "Early identification of crop diseases through image analysis" },
      { title: "Yield Prediction", description: "Accurate forecasting of harvest outcomes using historical and real-time data" },
      { title: "Resource Optimization", description: "Intelligent management of water, fertilizer, and pesticide usage" },
      { title: "Soil Analysis", description: "Comprehensive soil health monitoring and recommendations" }
    ],
    approach: [
      { step: "Data Collection", description: "Deploy sensors and drones to gather comprehensive field data" },
      { step: "Model Training", description: "Train custom models on your specific crops and conditions" },
      { step: "Integration", description: "Seamlessly integrate with existing farm management systems" },
      { step: "Continuous Learning", description: "Refine models with ongoing data for improved accuracy" }
    ],
    technologies: ["computer-vision", "ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "custom-automation"],
    metrics: [
      { label: "Yield Increase", value: "23%" },
      { label: "Resource Savings", value: "31%" },
      { label: "Detection Accuracy", value: "94%" }
    ]
  },
  {
    slug: "ed-tech",
    title: "Ed-Tech",
    tagline: "Immersive learning experiences that engage and educate",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop",
    overview: "Revolutionize education with immersive VR/AR experiences and adaptive learning systems. Our solutions create engaging, effective training environments that improve retention and accelerate skill development.",
    useCases: [
      { title: "VR Training Simulations", description: "Realistic practice environments for complex procedures" },
      { title: "Adaptive Learning Paths", description: "AI-driven personalization of educational content" },
      { title: "Virtual Labs", description: "Safe, cost-effective experimentation in virtual environments" },
      { title: "Assessment Analytics", description: "Data-driven insights into student performance and engagement" }
    ],
    approach: [
      { step: "Curriculum Analysis", description: "Review existing materials and learning objectives" },
      { step: "Experience Design", description: "Create immersive scenarios aligned with educational goals" },
      { step: "Development", description: "Build interactive VR/AR experiences with real-time feedback" },
      { step: "Validation", description: "Test with educators and learners to ensure effectiveness" }
    ],
    technologies: ["vr-ar", "ai-ml"],
    services: ["immersive-experiences", "ai-mvp-development"],
    metrics: [
      { label: "Retention Improvement", value: "67%" },
      { label: "Training Time Reduction", value: "42%" },
      { label: "Student Engagement", value: "89%" }
    ]
  },
  {
    slug: "legal",
    title: "Legal",
    tagline: "Secure on-premise solutions for document analysis",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop",
    overview: "Enhance legal research and document review with secure, on-premise AI solutions. Our systems maintain strict confidentiality while accelerating case preparation and contract analysis.",
    useCases: [
      { title: "Contract Review", description: "Automated analysis of agreements for risks and obligations" },
      { title: "Legal Research", description: "Intelligent search and summarization of case law" },
      { title: "Due Diligence", description: "Rapid review of large document collections" },
      { title: "Compliance Monitoring", description: "Ongoing tracking of regulatory changes and requirements" }
    ],
    approach: [
      { step: "Security Assessment", description: "Evaluate infrastructure and compliance requirements" },
      { step: "Model Customization", description: "Train models on legal domain and firm-specific practices" },
      { step: "On-Premise Deployment", description: "Install AI systems within your secure environment" },
      { step: "Ongoing Support", description: "Provide updates and maintenance while preserving confidentiality" }
    ],
    technologies: ["on-prem-ai", "ai-ml"],
    services: ["custom-automation"],
    metrics: [
      { label: "Review Speed", value: "10x faster" },
      { label: "Accuracy", value: "96%" },
      { label: "Cost Reduction", value: "54%" }
    ]
  },
  {
    slug: "finance",
    title: "Finance",
    tagline: "Predictive analytics and risk assessment tools",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop",
    overview: "Drive smarter financial decisions with predictive analytics and real-time risk assessment. Our AI systems process vast datasets to identify opportunities and mitigate threats.",
    useCases: [
      { title: "Fraud Detection", description: "Real-time identification of suspicious transactions" },
      { title: "Credit Risk Modeling", description: "Accurate assessment of borrower creditworthiness" },
      { title: "Portfolio Optimization", description: "AI-driven strategies for asset allocation" },
      { title: "Market Prediction", description: "Forecasting of trends and price movements" }
    ],
    approach: [
      { step: "Data Integration", description: "Connect to market feeds and internal systems" },
      { step: "Model Development", description: "Build custom models for your specific use cases" },
      { step: "Backtesting", description: "Validate predictions against historical data" },
      { step: "Deployment", description: "Integrate models into trading and risk platforms" }
    ],
    technologies: ["ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "custom-automation"],
    metrics: [
      { label: "Fraud Detection Rate", value: "99.2%" },
      { label: "False Positives", value: "-78%" },
      { label: "ROI", value: "340%" }
    ]
  },
  {
    slug: "supply-chain",
    title: "Supply Chain",
    tagline: "End-to-end visibility and optimization",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop",
    overview: "Optimize supply chain operations with predictive analytics and real-time visibility. Our solutions reduce costs, improve delivery times, and enhance inventory management.",
    useCases: [
      { title: "Demand Forecasting", description: "Accurate prediction of product demand across markets" },
      { title: "Inventory Optimization", description: "Smart stocking strategies to reduce holding costs" },
      { title: "Route Optimization", description: "Efficient delivery planning and logistics coordination" },
      { title: "Supplier Risk Assessment", description: "Proactive identification of supply chain vulnerabilities" }
    ],
    approach: [
      { step: "Process Mapping", description: "Document current supply chain workflows and pain points" },
      { step: "Data Pipeline Setup", description: "Establish real-time data feeds from all sources" },
      { step: "Optimization Modeling", description: "Develop AI models for forecasting and routing" },
      { step: "Integration", description: "Connect to ERP, WMS, and TMS systems" }
    ],
    technologies: ["ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "custom-automation"],
    metrics: [
      { label: "Delivery Time Improvement", value: "28%" },
      { label: "Inventory Cost Reduction", value: "35%" },
      { label: "Forecast Accuracy", value: "92%" }
    ]
  },
  {
    slug: "renewables",
    title: "Renewables",
    tagline: "Smart grid management and efficiency optimization",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop",
    overview: "Maximize renewable energy production and grid efficiency with AI-powered management systems. Our solutions optimize energy distribution, predict maintenance needs, and reduce operational costs.",
    useCases: [
      { title: "Energy Forecasting", description: "Predict solar and wind generation based on weather patterns" },
      { title: "Grid Optimization", description: "Balance supply and demand in real-time" },
      { title: "Predictive Maintenance", description: "Identify equipment issues before failures occur" },
      { title: "Storage Management", description: "Optimize battery charging and discharge cycles" }
    ],
    approach: [
      { step: "Data Aggregation", description: "Collect data from sensors, weather services, and grid systems" },
      { step: "Model Training", description: "Develop predictive models for generation and demand" },
      { step: "System Integration", description: "Connect to SCADA and energy management systems" },
      { step: "Optimization", description: "Continuously refine strategies based on performance" }
    ],
    technologies: ["ai-ml", "data-engineering"],
    services: ["ai-mvp-development", "custom-automation"],
    metrics: [
      { label: "Efficiency Gain", value: "24%" },
      { label: "Downtime Reduction", value: "41%" },
      { label: "Cost Savings", value: "$2.3M annually" }
    ]
  }
];

export const services: Service[] = [
  {
    slug: "ai-mvp-development",
    title: "AI-Powered MVP & Product Development",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    summary: "Rapid prototyping and full-scale product development leveraging cutting-edge AI technologies to bring your ideas to market faster.",
    included: [
      "Requirements analysis and technical feasibility assessment",
      "AI model selection and customization",
      "Full-stack development with modern frameworks",
      "Cloud infrastructure setup and deployment",
      "User testing and iteration",
      "Post-launch support and optimization"
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your vision, target users, and success metrics" },
      { step: "Architecture", description: "Design scalable system architecture and data pipelines" },
      { step: "MVP Build", description: "Develop core features with AI capabilities" },
      { step: "Testing", description: "Validate with real users and refine based on feedback" },
      { step: "Launch", description: "Deploy to production with monitoring and analytics" },
      { step: "Scale", description: "Enhance features and performance based on usage data" }
    ],
    deliverables: [
      "Fully functional MVP or production application",
      "Technical documentation and architecture diagrams",
      "Deployment pipelines and infrastructure code",
      "User guides and training materials",
      "Performance metrics and analytics dashboards"
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "AWS/GCP", "Docker", "Kubernetes"]
  },
  {
    slug: "immersive-experiences",
    title: "Immersive Experience Development",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    summary: "VR/AR solutions that transform training, education, and customer engagement through realistic, interactive environments.",
    included: [
      "Immersive experience design and storyboarding",
      "3D modeling and environment creation",
      "Interactive mechanics and gesture controls",
      "Multi-platform deployment (VR headsets, AR devices, mobile)",
      "Performance optimization for smooth rendering",
      "Analytics and engagement tracking"
    ],
    process: [
      { step: "Concept Development", description: "Define learning objectives and user journey" },
      { step: "Design", description: "Create visual assets, 3D models, and scene layouts" },
      { step: "Development", description: "Build interactive experiences with Unity or Unreal" },
      { step: "User Testing", description: "Gather feedback on usability and effectiveness" },
      { step: "Refinement", description: "Polish interactions and optimize performance" },
      { step: "Deployment", description: "Publish to target platforms and app stores" }
    ],
    deliverables: [
      "VR/AR application ready for deployment",
      "3D assets and source files",
      "User guides and training documentation",
      "Analytics dashboard for engagement metrics",
      "Platform-specific builds (Oculus, HoloLens, iOS/Android)"
    ],
    tools: ["Unity", "Unreal Engine", "Blender", "C#", "C++", "Oculus SDK", "ARKit", "ARCore"]
  },
  {
    slug: "custom-automation",
    title: "Custom Automation & On-Prem AI Solutions",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    summary: "Secure, on-premise AI implementations for regulated industries, ensuring data privacy and compliance without compromising capability.",
    included: [
      "Infrastructure assessment and planning",
      "Custom AI model development and training",
      "On-premise deployment and integration",
      "Security hardening and compliance validation",
      "Performance tuning and optimization",
      "Ongoing maintenance and model updates"
    ],
    process: [
      { step: "Security Audit", description: "Review infrastructure and compliance requirements" },
      { step: "Model Development", description: "Train AI models on your data within secure environment" },
      { step: "Integration", description: "Connect to existing enterprise systems" },
      { step: "Testing", description: "Validate accuracy, security, and performance" },
      { step: "Deployment", description: "Install in production with monitoring" },
      { step: "Support", description: "Provide updates while maintaining security" }
    ],
    deliverables: [
      "On-premise AI system fully operational",
      "Security documentation and compliance reports",
      "Integration guides and API documentation",
      "Training for IT and operations teams",
      "Monitoring dashboards and alerting systems"
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "NVIDIA CUDA", "OpenVINO", "Custom Hardware"]
  }
];

export const technologies: Technology[] = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    shortDescription: "Advanced ML models for intelligent automation and analytics",
    longDescription: "Advanced machine learning models and neural networks that power intelligent automation, predictive analytics, and natural language processing. Our AI solutions are designed for production environments with emphasis on accuracy, explainability, and ethical deployment.",
    applications: [
      "Predictive analytics and forecasting",
      "Natural language processing and understanding",
      "Recommendation systems",
      "Anomaly detection and fraud prevention",
      "Automated decision-making systems",
      "Sentiment analysis and text classification"
    ],
    relatedServices: ["ai-mvp-development", "custom-automation"]
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    shortDescription: "Scalable pipelines that transform data into insights",
    longDescription: "Scalable data pipelines and infrastructure that transform raw data into actionable insights. We build robust ETL processes, data lakes, and real-time streaming architectures that handle billions of events with reliability and performance.",
    applications: [
      "Real-time data streaming and processing",
      "Data warehouse and lake architecture",
      "ETL pipeline development",
      "Data quality and governance",
      "Business intelligence and reporting",
      "Big data analytics platforms"
    ],
    relatedServices: ["ai-mvp-development", "custom-automation"]
  },
  {
    slug: "vr-ar",
    title: "Virtual & Augmented Reality",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    shortDescription: "Immersive experiences for training and engagement",
    longDescription: "Immersive VR/AR experiences that revolutionize training, education, and customer engagement. From realistic simulations to interactive product visualizations, we create compelling experiences that drive real business outcomes.",
    applications: [
      "Training simulations and skill development",
      "Virtual product demonstrations",
      "Remote collaboration environments",
      "Educational experiences and virtual labs",
      "Architectural visualization",
      "Medical procedure training"
    ],
    relatedServices: ["immersive-experiences"]
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    shortDescription: "Visual recognition for automation and analysis",
    longDescription: "State-of-the-art visual recognition systems for object detection, image classification, and scene understanding. Our computer vision solutions power everything from quality control automation to advanced driver assistance systems.",
    applications: [
      "Object detection and tracking",
      "Image classification and tagging",
      "Facial recognition and biometrics",
      "Quality control and defect detection",
      "Autonomous systems and robotics",
      "Medical image analysis"
    ],
    relatedServices: ["ai-mvp-development", "custom-automation"]
  },
  {
    slug: "on-prem-ai",
    title: "On-Premise AI Models",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    shortDescription: "Secure AI for regulated industries",
    longDescription: "Secure, on-premise AI deployments for regulated industries requiring strict data privacy and compliance. We deliver the power of cloud AI with the security of on-premise infrastructure, ensuring your sensitive data never leaves your environment.",
    applications: [
      "Healthcare data analysis",
      "Legal document processing",
      "Financial risk assessment",
      "Government intelligence systems",
      "Industrial control systems",
      "Confidential research and development"
    ],
    relatedServices: ["custom-automation"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agriculture-revolution",
    title: "How AI is Revolutionizing Modern Agriculture",
    author: "Dr. Sarah Chen",
    date: "2024-09-15",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
    summary: "Explore how computer vision and machine learning are transforming crop management, disease detection, and yield optimization in the agricultural sector.",
    content: "Full article content would go here...",
    tags: ["AI", "Agriculture", "Computer Vision"],
    readingTime: 8
  },
  {
    slug: "vr-training-effectiveness",
    title: "The Science Behind VR Training Effectiveness",
    author: "Marcus Thompson",
    date: "2024-09-08",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
    summary: "Research shows VR training improves retention by up to 75%. Discover the neuroscience and best practices behind immersive learning experiences.",
    content: "Full article content would go here...",
    tags: ["VR", "Education", "Training"],
    readingTime: 6
  },
  {
    slug: "on-premise-ai-security",
    title: "On-Premise AI: Balancing Innovation and Security",
    author: "Rachel Kim",
    date: "2024-09-01",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    summary: "For regulated industries, on-premise AI offers the best of both worlds. Learn how to implement powerful AI while maintaining strict data governance.",
    content: "Full article content would go here...",
    tags: ["AI", "Security", "Compliance"],
    readingTime: 10
  },
  {
    slug: "supply-chain-ai-optimization",
    title: "AI-Powered Supply Chain Optimization",
    author: "James Martinez",
    date: "2024-08-25",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
    summary: "Machine learning algorithms are reshaping logistics. See how predictive analytics reduce costs and improve delivery times across the supply chain.",
    content: "Full article content would go here...",
    tags: ["AI", "Supply Chain", "Logistics"],
    readingTime: 7
  },
  {
    slug: "computer-vision-healthcare",
    title: "Computer Vision in Healthcare: Current Applications",
    author: "Dr. Emily Roberts",
    date: "2024-08-18",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    summary: "From diagnostic imaging to surgical assistance, computer vision is transforming patient care. Explore real-world implementations and outcomes.",
    content: "Full article content would go here...",
    tags: ["Computer Vision", "Healthcare", "Medical"],
    readingTime: 9
  },
  {
    slug: "renewable-energy-ai",
    title: "AI and the Future of Renewable Energy",
    author: "Alex Johnson",
    date: "2024-08-11",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    summary: "Smart grids powered by AI are making renewable energy more efficient and reliable. Discover how machine learning optimizes energy distribution.",
    content: "Full article content would go here...",
    tags: ["AI", "Renewable Energy", "Sustainability"],
    readingTime: 8
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Amir Patel",
    role: "Founder & CEO",
    headshot: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "With a Ph.D. in Machine Learning and 15 years of industry experience, Amir founded Phen AI to bridge the gap between cutting-edge research and practical business applications. Previously led AI initiatives at Fortune 500 companies.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  },
  {
    name: "Dr. Maya Chen",
    role: "Chief Technology Officer",
    headshot: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Maya brings deep expertise in distributed systems and AI infrastructure. She holds a Ph.D. in Computer Science and has published extensively on scalable machine learning architectures.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" }
    ]
  },
  {
    name: "Marcus Thompson",
    role: "Head of Immersive Experiences",
    headshot: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Marcus is a pioneer in VR/AR development with a background in game design and educational technology. He has created award-winning immersive experiences for leading educational institutions.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  },
  {
    name: "Rachel Kim",
    role: "Lead Data Scientist",
    headshot: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    bio: "Rachel specializes in building production ML systems with an emphasis on model interpretability and fairness. She has developed AI solutions for healthcare, finance, and agriculture sectors.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" }
    ]
  },
  {
    name: "James Martinez",
    role: "Solutions Architect",
    headshot: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "James designs scalable AI architectures for enterprise clients. With expertise in cloud and on-premise deployments, he ensures solutions meet both technical and compliance requirements.",
    socials: [
      { platform: "LinkedIn", url: "#" }
    ]
  },
  {
    name: "Dr. Emily Roberts",
    role: "Research Scientist",
    headshot: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    bio: "Emily's research focuses on computer vision and medical imaging. She collaborates with academic institutions to advance the state of the art in AI-powered diagnostics.",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  }
];
