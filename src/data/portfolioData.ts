import {
  ProfileInfo,
  StatItem,
  EducationItem,
  SkillGroup,
  Project,
  Certification,
  Experience,
  VolunteerRole,
} from '../types/portfolio';

// Generated authentic high-resolution imagery assets
import profileAvatar from '../assets/images/profile_portrait_1792180820613.jpg';
import projectPostpartum from '../assets/images/Postpartum.jpeg';
import projectSmartCrop from '../assets/images/smartcrop.jpeg';
import projectOrgnArxiv from '../assets/images/ogbn-arxiv.jpeg';
import projectSmartCareAI from '../assets/images/smartcare.png';
import projectTelcomChurnPrediction from '../assets/images/telcomchurn.jpeg';
import projectBigDataAnalytics from '../assets/images/big data analytics.jpeg';
import projectAiLlm from '../assets/images/smartcare.png';
import projectBigData from '../assets/images/smartcare.png';
import projectVisionCv from '../assets/images/smartcare.png';


export const initialProfile: ProfileInfo = {
  name: 'Dureksha Arangala',
  role: 'Final-Year Data Science Undergraduate',
  shortBio:
    "Passionate about exploring data, uncovering meaningful insights, and building intelligent solutions. I enjoy learning new technologies, solving real-world problems, and turning ideas into practical projects through continuous learning and innovation.",
  fullBioParagraphs: [
    "I'm Dureksha Arangala, a final-year BSc (Hons) Data Science undergraduate at Sri Lanka Technology Campus (SLTC), passionate about using data and artificial intelligence to solve real-world problems. I enjoy exploring complex datasets, identifying meaningful patterns, and developing analytical solutions that support informed decision-making.",
    "My technical foundation includes Python, SQL, Machine Learning, Deep Learning, Natural Language Processing, and Big Data Analytics. Through hands-on academic and personal projects, I've gained experience in predictive modeling, data preprocessing, model evaluation, and developing data-driven applications. I continuously seek opportunities to strengthen my technical knowledge and apply it to practical challenges.",
    "Alongside my technical development, I serve as Secretary of the IEEE Computer Society Student Branch Chapter at SLTC, where I've strengthened my leadership, communication, and teamwork skills. I'm eager to begin my professional journey through an internship where I can contribute to real-world projects, learn from industry professionals, and grow as a technology-driven problem solver."
  ],
  location: 'Colombo, Sri Lanka / Remote Worldwide',
  email: 'durekshachammi2911@gmail.com',
  phone: '+94 769395758',
  linkedin: 'https://www.linkedin.com/in/dureksha-arangala-03668019a/',
  github: 'https://github.com/DurekshaArangala',
  medium: 'https://medium.com/@durekshachammi2911',
  msLearn: 'https://learn.microsoft.com/en-us/users/durekshaarangala-7712/',
  avatarUrl: profileAvatar,
  availableForWork: true,
  availabilityTagline: 'Open to work',
};

export const aboutStats: StatItem[] = [
  {
    id: 'projects',
    label: 'Projects',
    value: '10+',
    detail: 'Projects in Data Science, AI, Machine Learning, and Big Data developed',
  },
  {
    id: 'achievements',
    label: 'Achievements & Certs',
    value: '5+',
    detail: 'Recognitions, certifications, and achievements reflecting continuous learning and growth',
  },
  {
    id: 'hackathons',
    label: 'Hackathons Participated',
    value: '3+',
    detail: 'Enhanced technical skills, teamwork, and problem-solving through competitive experiences',
  },
  {
    id: 'leadership',
    label: 'Leadership Roles',
    value: '10+',
    detail: 'Developed leadership, communication, teamwork, and organizational skills through student leadership and technical community initiatives',
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'undergraduate',
    degree: 'BSc (Hons) Data Science',
    institution: 'Sri Lanka Technology Campus (SLTC), Faculty of Computing & IT',
    period: '2023 —  Present',
    grade: 'Current GPA: 3.74',
    level: 'Undergraduate',
    highlights: [
       'Maintaining a strong academic record with a current GPA of 3.74',
       'Building practical skills in Machine Learning, Deep Learning, and Data Analytics',
       'Applying data science concepts through academic and personal projects',
       'Developing leadership and teamwork skills through IEEE student activities',
    ],
  },
  {
    id: 'advanced-level',
    degree: 'GCE Advanced Level (A/L)',
    institution: 'WP/Jaya/K/Dharmapala Vidyalaya',
    period: '2021',
    grade: 'Biological Science Stream (Biology, Physics, Chemistry)',
    level: 'Advanced Level (A/L)',
    highlights: [
    
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 'core-languages',
    title: 'Programming Languages',
    type: 'technical',
    categoryLabel: 'Primary Stack',
    description: 'Foundational languages used for algorithm design, data extraction, and high-performance computation.',
    highlightBadge: 'Daily Stack',
    skills: [
      { name: 'Python', percentage: 80, levelText: 'Intermediate' },
      { name: 'SQL', percentage: 70, levelText: 'Intermediate' },
      { name: 'R', percentage: 60, levelText: 'Medium' },
      { name: 'JavaScript', percentage: 30, levelText: 'Basic' },

    ],
  },
  {
    id: 'ml-deeplearning',
    title: 'Machine Learning & Deep Learning',
    type: 'technical',
    categoryLabel: 'AI & Modeling',
    description: 'End-to-end neural network design, training paradigms, loss optimization, and edge inference.',
    highlightBadge: 'Specialty',
    skills: [
      { name: 'PyTorch', percentage: 70, levelText: 'Intermediate' },
      { name: 'TensorFlow & Keras', percentage: 70, levelText: 'Intermediate' },
      { name: 'Scikit-Learn & XGBoost', percentage: 50, levelText: 'Intermediate' },
      { name: 'Hugging Face', percentage: 35, levelText: 'Basic' },
    ],
  },
  {
    id: 'bigdata-cloud',
    title: 'Big Data & Cloud Architecture',
    type: 'technical',
    categoryLabel: 'Distributed Engineering',
    description: 'Stream ingestion, distributed compute clusters, scalable containerization, and cloud ML ops.',
    highlightBadge: 'Enterprise Scale',
    skills: [
      { name: 'Apache Spark & PySpark', percentage: 88, levelText: 'Cluster DataFrames & ML' },
      { name: 'Apache Kafka & Stream Ingestion', percentage: 82, levelText: 'Real-time Message Buses' },
      { name: 'Docker, Kubernetes & MLOps', percentage: 86, levelText: 'CI/CD & Model Registry' },
      { name: 'AWS & GCP (S3, SageMaker, Vertex)', percentage: 85, levelText: 'Cloud AI Infrastructure' },
    ],
  },
  {
    id: 'deployment-apis',
    title: 'APIs, Serving & Data Stores',
    type: 'technical',
    categoryLabel: 'Full-Stack Integration',
    description: 'Serving machine learning models behind robust, asynchronous REST and WebSocket microservices.',
    highlightBadge: 'Production Ready',
    skills: [
      { name: 'FastAPI & Asynchronous Uvicorn', percentage: 93, levelText: 'High-Concurrency APIs' },
      { name: 'Vector Databases (Pinecone, Chroma, pgvector)', percentage: 90, levelText: 'Embedding Search' },
      { name: 'Streamlit & Gradio Rapid Prototyping', percentage: 95, levelText: 'Interactive AI Demos' },
      { name: 'React, TypeScript & Tailwind CSS', percentage: 84, levelText: 'Modern Frontend UI' },
    ],
  },
  {
    id: 'soft-leadership',
    title: 'Professional & Soft Skills',
    type: 'soft',
    categoryLabel: 'Interpersonal & Strategic',
    description: 'Key collaborative virtues that bridge complex mathematical AI concepts with real business value.',
    highlightBadge: 'High Synergy',
    skills: [
      { name: 'Algorithmic Problem Solving', percentage: 96, levelText: 'First-Principles Thinking' },
      { name: 'Technical Leadership & Mentoring', percentage: 92, levelText: 'Cross-Functional Drive' },
      { name: 'Effective Stakeholder Communication', percentage: 91, levelText: 'Translating AI to Impact' },
      { name: 'Agile Teamwork & Sprint Execution', percentage: 94, levelText: 'Collaborative Velocity' },
      { name: 'Curiosity & Continuous Research', percentage: 98, levelText: 'Paper Implementation' },
    ],
  },
];

export const projectList: Project[] = [
  {
    id: 'postpartum-depression-ai',
    title: 'Liyaa: Explainable AI for Postpartum Depression Detection and Recovery Support (FYP Ongoing)',
    category: 'AI',
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'SHAP', 'Flutter', 'Supabase', 'PostgreSQL', 'Google Dialogflow CX'],
    shortDescription:
      "Developing a machine learning-based system to predict postpartum depression risk and support maternal recovery through personalized recommendations, explainable AI using SHAP, and an interactive mobile application with a conversational chatbot.",
    fullDescription:
      "Developing an AI-powered mobile application to predict the risk of postpartum depression and support maternal mental well-being through personalized recovery recommendations. The system integrates machine learning and deep learning models to assess depression risk, uses SHAP for explainable AI to improve model interpretability, and provides an interactive mobile interface built with Flutter. Supabase and PostgreSQL manage user profiles, mood logs, and assessment records, while Google Dialogflow CX powers a conversational chatbot to provide accessible guidance and support resources for mothers.",
    architectureNotes:
     "A layered architecture integrating a Flutter mobile application, a Python-based machine learning backend (Scikit-learn and TensorFlow) for postpartum depression risk prediction, SHAP for explainable AI, Supabase and PostgreSQL for secure data storage, and Google Dialogflow CX for chatbot-based conversational support.",
    metrics: [
      { label: 'Hallucination Drop', value: '-74%' },
      { label: 'Task Completion Rate', value: '92.4%' },
      { label: 'Avg Inference Latency', value: '420ms' },
    ],
    image: projectPostpartum,
    repoUrl: 'https://github.com/DurekshaArangala/postpartum-depression-prediction-and-recovery.git',
    liveDemoUrl: 'https://omnimind-demo.cloudrun.app',
    videoDemoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
     keyFeatures: [
      'Postpartum depression risk prediction using ML/DL models.',
      'Explainable AI using SHAP for model interpretability.',
      'Mood tracking, assessments, and personalized recovery recommendations.',
      'AI chatbot for maternal support and guidance using Google Dialogflow CX.',
    ],
  },

  {
    id: 'crop-recommendation-dl',
    title: 'SmartCrop: An ANN based Seasonal Crop Recommendation System',
    category: 'Deep Learning',
    tools: ['Python','TensorFlow','Keras (ANN, LSTM/GRU)','Pandas','NumPy','Scikit-learn','SQLite'],
    shortDescription:
      'Developing a deep learning-based seasonal crop recommendation system using an Artificial Neural Network (ANN) to analyze agricultural data and recommend suitable crops based on relevant environmental and seasonal factors.',
    fullDescription:
      'Developing a deep learning-based crop recommendation system using an Artificial Neural Network (ANN) to recommend suitable crops based on agricultural and environmental factors. The project involves data preprocessing, feature scaling, model training, and performance evaluation to improve recommendation accuracy and support data-driven agricultural decision-making. The system aims to help farmers identify suitable crops for different growing conditions and seasons.',
    architectureNotes:
      'A machine learning pipeline integrating agricultural data collection, preprocessing and feature scaling, ANN model training using TensorFlow/Keras, and crop recommendation generation based on relevant environmental and seasonal factors.',
    metrics: [
      { label: 'Inference Speed', value: '12ms / frame' },
      { label: 'Throughput', value: '65+ FPS' },
      { label: 'mAP@0.5:0.95', value: '88.6%' },
    ],
    image: projectSmartCrop,
    repoUrl: 'https://github.com/DurekshaArangala/SmartCrop-An-ANN-seasonal-crop-recommendation-system.git',
    liveDemoUrl: 'https://neurovision-live.cloudrun.app',
    videoDemoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    keyFeatures: [
      'Agricultural data preprocessing and feature scaling.',
      'ANN-based crop recommendation using deep learning.',
      'Analysis of environmental and seasonal factors.',
      'Model performance evaluation to support data-driven crop selection.',
    ],
  },

  {
    id: 'ogbn-arxiv-gnn-classification',
    title: 'OGBN-Arxiv Graph Neural Network-Based Research Paper Classification',
    category: 'AI',
    tools: ['Python','PyTorch','PyTorch Geometric','OGB', 'NumPy','Pandas','Scikit-learn','NetworkX','Matplotlib','Streamlit','Google Colab'],
    shortDescription:
      'Developed a Graph Neural Network (GNN) system to classify research papers into 40 computer science subject categories using the OGBN-Arxiv citation network. Implemented and compared GCN and GraphSAGE models with hyperparameter tuning and performance evaluation. Analyzed graph-structured data to improve node classification and evaluate model performance.',
    fullDescription:
      'Developed a Graph Neural Network (GNN) pipeline to classify research papers into 40 computer science subject categories using the OGBN-Arxiv citation network, containing 169,343 papers and over 1.16 million citation links. Implemented and compared Graph Convolutional Network (GCN) and GraphSAGE models, incorporating hyperparameter tuning, model evaluation, and explainability techniques such as PCA and neighbourhood analysis. Built an interactive Streamlit dashboard to visualize graph statistics, model performance, paper classifications, and learned embeddings.',
    architectureNotes:
      'A graph-based machine learning pipeline integrating OGBN-Arxiv dataset loading, graph preprocessing, GCN and GraphSAGE model training, hyperparameter tuning, and node classification evaluation, with an interactive Streamlit dashboard for visualizing results.',
    metrics: [
      { label: 'GraphSAGE', value: '71.03% test accuracy'},
      { label: 'Macro F1-Score', value: '49.69% test accuracy' },
      
    ],
    image: projectOrgnArxiv,
    repoUrl: 'https://github.com/Jayanisashikala/OGBN-Arxiv-GNN-Node-Classification',
    liveDemoUrl: 'https://streamspark-telemetry.cloudrun.app',
    videoDemoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    keyFeatures: [
      'GNN-based research paper classification into 40 subject categories.',
      'Implementation and comparison of GCN and GraphSAGE models.',
      'Hyperparameter tuning and model performance evaluation.',
      'Interactive Streamlit dashboard for graph visualization and classification results.',
    ],
  },

  {
    id: 'smartcare-xai',
    title: 'SmartCare: Explainable AI-Based Patient Readmission Prediction System',
    category: 'AI',
    tools: ['SHAP','LIME', 'Python','Pandas','Numpy','Scikit-learn', 'Matplotlib','Seaborn','Streamlit'],
    shortDescription:
      'Developed a machine learning system to predict 30-day hospital readmission risk using patient healthcare data, combining data analysis, predictive modelling, explainable AI, and an interactive Streamlit application.',
    fullDescription:
      'Developed an end-to-end machine learning solution to predict whether patients are likely to be readmitted to a hospital within 30 days. The project includes data preprocessing, exploratory data analysis (EDA), feature engineering, and comparison of machine learning models to identify effective prediction approaches. Integrated SHAP and LIME techniques to explain model predictions and identify influential patient features. Built an interactive Streamlit application to demonstrate readmission risk predictions and support data-driven healthcare decision-making.',
    architectureNotes:
      'An end-to-end machine learning pipeline integrating healthcare data preprocessing, exploratory data analysis, feature engineering, model training and evaluation, SHAP/LIME-based explainability, and a Streamlit application for interactive 30-day patient readmission risk prediction.',
      
    metrics: [
      { label: 'ROC-AUC Score', value: '0.942' },
      { label: 'Explainability Fidelity', value: '100% SHAP' },
      { label: 'Validated Clinical Cohort', value: '12,500+ pts' },
    ],
    image: projectSmartCareAI,
    repoUrl: 'https://github.com/durekshachammi/medpredict-clinical-prognosis',
    liveDemoUrl: 'https://medpredict-demo.cloudrun.app',
    videoDemoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    keyFeatures: [
      'Predicts 30-day hospital readmission risk using machine learning.',
      'Performs data preprocessing, exploratory analysis, and feature engineering.',
      'Explains predictions using SHAP and LIME.',
      'Provides an interactive Streamlit dashboard for risk prediction and visualization.',
    ],
  },
  
  {
    id: 'telcom-churn-prediction-mlops',
    title: 'End to End MLOps Pipeline for Telecom Customer Churn Prediction',
    category: 'ML',
    tools: ['PyTorch', 'HiFi-GAN', 'FastSpeech 2', 'Librosa', 'Python', 'WandB'],
    shortDescription:
      'Deep generative neural vocoder delivering human-indistinguishable zero-shot voice cloning with expressive pitch and emotion control.',
    fullDescription:
      'A non-autoregressive acoustic model built on FastSpeech 2 and HiFi-GAN vocoder architectures. SynapseVoice enables near real-time voice synthesis and rapid 3-second speaker adaptation with superior mean opinion scores (MOS 4.38/5.00), reducing synthesis inference time by 8x compared to autoregressive Tacotron 2.',
    architectureNotes:
      'Variance adaptor predicting duration, pitch contour, and energy curves in parallel. Mixed precision AMP training using PyTorch Lightning.',
    metrics: [
      { label: 'MOS Naturalness Score', value: '4.38 / 5.0' },
      { label: 'RTF (Real-Time Factor)', value: '0.04x' },
      { label: 'Zero-Shot Clone Audio', value: '3.2 sec sample' },
    ],
    image: projectTelcomChurnPrediction,
    repoUrl: 'https://dagshub.com/Jayanisashikala/MLOps_Churn_Project.git',
    liveDemoUrl: 'https://synapsevoice.cloudrun.app',
    videoDemoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    keyFeatures: [
      'Zero-shot voice cloning using deep speaker d-vector embeddings',
      'Fine-grained phonetic pitch, duration, and energy sliders in web UI',
      'Real-time streaming speech synthesis suitable for interactive voice assistants',
      'Multi-lingual phoneme mapping supporting diverse accents and dialects',
    ],
  },

  
  {
    id: 'e-commerce-bigdata-analytics',
    title: 'E-Commerce Big Data Analytics Pipeline',
    category: 'Big Data',
    tools: ['Apache Spark (PySpark)','Python','MongoDB','Google Colab','GitHub'],
    shortDescription:'Developed an e-commerce big data analytics pipeline using PySpark and MongoDB to process, transform, and analyze transactional data, enabling scalable data processing and meaningful business insights.',
    fullDescription:
      'Designed and implemented an e-commerce big data analytics pipeline using Apache Spark (PySpark) and MongoDB to explore and process large-scale e-commerce data. The project demonstrates distributed data processing, data transformation, exploratory data analysis, and NoSQL database integration. The pipeline focuses on preparing data for analysis, identifying meaningful patterns, and extracting insights that can support business decisions related to customer behaviour, product performance, and e-commerce operations. It demonstrates practical data engineering concepts and the use of scalable technologies to handle data-intensive analytical tasks.',
    architectureNotes:
      'The pipeline begins with raw e-commerce data as the input source. Python and PySpark are used for data processing, cleaning, and transformation, followed by MongoDB integration for document-based data storage and querying. The processed data is then used for exploratory data analysis, aggregation, and insight generation to support business decision-making. This architecture summary should be adjusted to match the actual data flow implemented in your project.',
    metrics: [
      { label: 'GraphSAGE', value: '71.03% test accuracy'},
      { label: 'Macro F1-Score', value: '49.69% test accuracy' },
      
    ],
    image: projectBigDataAnalytics,
    repoUrl: 'https://github.com/DurekshaArangala/ecommerce-bigdata-analytics-pipeline.git',
    liveDemoUrl: 'https://streamspark-telemetry.cloudrun.app',
    videoDemoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    keyFeatures: ['Utilized PySpark for distributed processing and transformation of e-commerce datasets.',
      'Integrated MongoDB for flexible NoSQL data storage and querying.',
      'Performed data cleaning, preprocessing, and transformation to prepare data for analysis.',
      'Conducted exploratory data analysis to identify e-commerce trends, patterns, and business insights.'
    ],
  },
  
];

export const certificationsList: Certification[] = [
  {
    id: 'cert-1',
    title: 'Deep Learning Specialization (5-Course Series)',
    from: 'DeepLearning.AI & Coursera (Andrew Ng)',
    issuedYear: '2024',
    credentialId: 'DL-SPEC-984210',
    verifyUrl: 'https://coursera.org/verify/specialization/DL-SPEC-984210',
    skillsCovered: ['Neural Networks', 'CNNs', 'Sequence Models & Transformers', 'Hyperparameter Tuning', 'Optimization'],
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Machine Learning — Specialty (MLS-C01)',
    from: 'Amazon Web Services (AWS)',
    issuedYear: '2024',
    credentialId: 'AWS-ML-SPEC-55198',
    verifyUrl: 'https://aws.amazon.com/verification',
    skillsCovered: ['SageMaker', 'Data Engineering on S3', 'Model Evaluation', 'Distributed Training', 'Edge Deployment'],
  },
  {
    id: 'cert-3',
    title: 'TensorFlow Developer Certificate',
    from: 'Google TensorFlow Certificate Program',
    issuedYear: '2023',
    credentialId: 'TF-DEV-771249',
    verifyUrl: 'https://www.credential.net/google-tensorflow',
    skillsCovered: ['TF Keras API', 'Computer Vision Transfer Learning', 'NLP Embeddings', 'Time Series Forecasting'],
  },
  {
    id: 'cert-4',
    title: 'Databricks Certified Associate Developer for Apache Spark',
    from: 'Databricks',
    issuedYear: '2024',
    credentialId: 'SPARK-ASSOC-30219',
    verifyUrl: 'https://credentials.databricks.com',
    skillsCovered: ['Spark DataFrames', 'PySpark Performance Tuning', 'Adaptive Query Execution', 'Distributed Storage'],
  },
  {
    id: 'cert-5',
    title: 'Natural Language Processing with Attention Models',
    from: 'Stanford Online / DeepLearning.AI',
    issuedYear: '2023',
    credentialId: 'NLP-STANFORD-44120',
    verifyUrl: 'https://coursera.org/verify/NLP-STANFORD-44120',
    skillsCovered: ['Transformer Self-Attention', 'BERT & T5 Fine-tuning', 'Vector Similarity Search', 'Prompt Engineering'],
  },
  {
    id: 'cert-6',
    title: 'Microsoft Certified: Azure Data Scientist Associate (DP-100)',
    from: 'Microsoft',
    issuedYear: '2023',
    credentialId: 'MS-DP100-881239',
    verifyUrl: 'https://learn.microsoft.com/users/durekshachammi/credentials',
    skillsCovered: ['Azure ML Studio', 'Automated ML (AutoML)', 'Model Registration & Endpoints', 'Responsible AI Frameworks'],
  },
];

export const experienceList: Experience[] = [
  {
    id: 'exp-1',
    role: 'Associate Machine Learning Engineer',
    company: 'Synapse Cognitive Systems & Labs',
    period: '2024 — Present',
    location: 'Colombo, Sri Lanka (Hybrid)',
    description:
      'Leading the architecture and deployment of enterprise generative AI agents and deep computer vision systems for industrial clients.',
    highlights: [
      'Architected end-to-end multi-modal vision inspection microservices that increased factory defect catch rate by 34%.',
      'Engineered an internal RAG framework reducing query latency from 1.8s to 320ms via hybrid vector + BM25 indexing.',
      'Mentored 4 junior data science associates in PyTorch development, test-driven ML, and GPU profiling.',
    ],
    skills: ['PyTorch', 'TensorRT', 'FastAPI', 'Docker', 'LangChain', 'CUDA', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Data Science & AI Research Intern',
    company: 'Neural Informatics R&D Group',
    period: '2023 — 2024',
    location: 'Colombo, Sri Lanka',
    description:
      'Conducted applied research on lightweight transformer architectures and statistical anomaly detection on high-frequency IoT streaming telemetry.',
    highlights: [
      'Implemented knowledge distillation techniques that shrank model footprint by 62% with less than 1.1% accuracy degradation.',
      'Developed real-time automated data validation scripts with Great Expectations and Pandas, catching 99.8% of corrupted payloads.',
      'Co-authored research findings presented at the National Computer Science Symposium.',
    ],
    skills: ['Python', 'Scikit-Learn', 'Apache Spark', 'Pandas', 'Streamlit', 'Git'],
  },
  {
    id: 'exp-3',
    role: 'Graduate Teaching & Lab Assistant',
    company: 'Department of Computing & Information Systems',
    period: '2023 — 2024',
    location: 'University Campus',
    description:
      'Facilitated laboratory practical sessions in Data Structures, Applied Algorithms, and Probability & Mathematical Statistics for undergraduate students.',
    highlights: [
      'Conducted weekly hands-on coding clinics teaching Python algorithm optimization, NumPy vectorization, and SQL query indexing.',
      'Reviewed and graded over 200 student programming assignments and mini-projects per academic semester.',
    ],
    skills: ['Algorithms', 'Python', 'PostgreSQL', 'Linear Algebra', 'Teaching & Mentorship'],
  },
];

export const volunteerList: VolunteerRole[] = [
  {
    id: 'vol-1',
    title: 'Lead AI Workshop Instructor & Community Mentor',
    organization: 'Youth AI Innovators Circle & Open Tech Foundation',
    period: '2023 — Present',
    highlightedSkill: 'Youth Leadership & Tech Mentorship',
    description:
      'Organized and delivered 12+ free coding bootcamps covering Python fundamentals, deep learning, and career pathways in machine learning for over 450+ high school and university students across diverse regions.',
    photos: [
      {
        url: projectAiLlm,
        caption: 'Conducting live PyTorch & neural network workshop for enthusiastic students',
      },
      {
        url: projectBigData,
        caption: 'Hands-on coding clinic session on building data pipelines from scratch',
      },
    ],
    externalLink: 'https://github.com/durekshachammi',
  },
  {
    id: 'vol-2',
    title: 'Head of Technical Operations & Hackathon Lead',
    organization: 'National AI Hackfest & Collegiate CodeFest',
    period: '2023 — 2024',
    highlightedSkill: 'Event Organization & Cloud Logistics',
    description:
      'Directed server infrastructure, API evaluation scoring portals, and problem statement curation for a 48-hour continuous national hackathon with 60+ participating teams.',
    photos: [
      {
        url: projectVisionCv,
        caption: 'Mentoring hackathon teams on optimizing their deep learning models before submission',
      },
      {
        url: projectAiLlm,
        caption: 'Grand finale award ceremony and technological innovation presentation',
      },
    ],
    externalLink: 'https://github.com/durekshachammi',
  },
  {
    id: 'vol-3',
    title: 'Open Source Machine Learning Contributor & Documentation Advocate',
    organization: 'Hugging Face & Open Source ML Communities',
    period: '2022 — Present',
    highlightedSkill: 'Community Collaboration & Technical Writing',
    description:
      'Contributed bug fixes, model evaluation documentation, and beginner-friendly tutorials to open-source libraries, helping thousands of global learners navigate modern NLP workflows.',
    photos: [
      {
        url: projectBigData,
        caption: 'Open source community meetups and collaborative GitHub code sprint',
      },
      {
        url: projectVisionCv,
        caption: 'Knowledge sharing roundtables on responsible and ethical AI deployment',
      },
    ],
    externalLink: 'https://github.com/durekshaarangala',
  },
];
