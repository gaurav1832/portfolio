// // const projects = [
// //   {
// //     title: "AutoInbox ",
// //     thumbnail: "/images/autoinbox.png",
// //     tech:
// //       "Tech: Node.js, Express.js, Google APIs, Microsoft Graph, BullMQ, TypeScript, Axios",
// //     description:
// //       "Automatic Email Parsing and Analysis Tool: This project provides a robust solution for managing emails via Google and Microsoft Outlook APIs. It handles authentication, email retrieval, automatic labeling, and sending replies based on AI-analyzed content. The service is designed with modularity in mind, ensuring maintainability and scalability.",
// //     github: "https://github.com/gaurav1832/autoinbox",
// //   },
// //   {
// //     title: "Team Cl_AI_Mate : Heat Waves & AQI Prediction",
// //     thumbnail: "/images/taim.png",
// //     tech: "Tech: ML, Python and libraries, streamlit, postman, etc.",
// //     description:
// //       "Our team developed an AQI and heatwaves prediction model during Telangana AI Mission hackathon conducted by NASSCOM in collaboration with Government of Telangana and Capgemini.",
// //     github: "https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/",
// //   },
// //   {
// //     title: "CodeMaps",
// //     thumbnail: "/images/codemaps.png",
// //     tech: "Tech: React, NextJs, JS, HTML, CSS, GitHub",
// //     description:
// //       "CodeMaps is a project designed to help individuals prepare for technical interviews at top tech companies. It provides structured learning paths for mastering data structures and algorithms, offers company-specific interview questions, includes previous year interview queries, and shares valuable interview experiences.",
// //     github: "https://github.com/gaurav1832/CodeMaps",
// //   },

// //   {
// //     title: "File Forge",
// //     thumbnail: "/images/file-forge.png",
// //     tech: "Tech: ReactJS, NodeJS, Express, MongoDB",
// //     description:
// //       "Developed a web-based File Manager Application for seamless file and folder management. Implemented features and API endpoints for user authentication, file upload, folder creation, deletion, file movement, renaming, and file preview.",
// //     github: " https://fileforge.vercel.app/",
// //   },

// //   {
// //     title: "LeeTracker",
// //     thumbnail: "/images/leetracker.png",
// //     tech: "Tech: ReactNative, GraphQL, JS, Expo",
// //     description:
// //       "LeeTracker is an easy-to-use application through which you can track your friend's progress on LeetCode and get notified about your friend’s recent and total submissions.",
// //     github:
// //       "https://play.google.com/store/apps/details?id=com.pete1302.leethub01",
// //   },

// //   {
// //     title: "ArtiSumm",
// //     thumbnail: "/images/arti-summ.png",
// //     tech: "Tech: JavaScript, React, RapidAPI",
// //     description:
// //       "ArtiSumm is an easy to use article summarizer which takes an url input to generate a brief summary about the content which is written int the url.",
// //     github: "https://arti-summ.netlify.app",
// //   },
// //   {
// //     title: "WhatsApp chat analysis",
// //     thumbnail: "/images/wca-preview.png",
// //     tech: "Tech: python, pandas, matplotlib, seaborn, streamlit",
// //     description:
// //       "Developed a chat analysis web app where you can analyse whatsapp statistics like daily, weekly and monthly activities.",
// //     github: "https://gaurav1832-wca-app-4xpz9j.streamlit.app/",
// //   },
// //   {
// //     title: "URL Shortener in flask",
// //     thumbnail: "/images/url-short.png",
// //     tech: "Tech: python, flask, html, css",
// //     description:
// //       "Made a url shortener app using python libraries and flask as web framework.",
// //     github: "https://github.com/gaurav1832/url-shortener-flask",
// //   },
// //   {
// //     title: "TicTacToe Game",
// //     thumbnail: "/images/ttt.png",
// //     tech: "Tech: HTML, CSS, Javascript",
// //     description: "Simple tic tac toe game for fun.",
// //     github: "https://gaurav1832.github.io/tic-tac-toe",
// //   },
// // ];

const projects = [
  {
    id: "auto-inbox",
    title: "AutoInbox",
    thumbnail: "/images/autoinbox.png",
    tech:
      "Tech: Node.js, Express.js, Google APIs, Microsoft Graph, BullMQ, TypeScript, Axios",
    description:
      "Automatic Email Parsing and Analysis Tool: This project provides a robust solution for managing emails via Google and Microsoft Outlook APIs, handling authentication, email retrieval, automatic labeling, and sending replies based on analyzed content.",
    overview:
      "The service is designed to fetch emails, categorize them based on their content using AI-based analysis, and respond accordingly. It integrates with both Google and Microsoft services to streamline email management processes.",
    keyComponents: [
      "Google and Outlook Authentication: Uses OAuth2 protocols to authenticate users and fetch tokens necessary for API requests.",
      "Email Fetching and Sending: Implements functionality to retrieve emails from user accounts, analyze their content, and send appropriate responses.",
      "Email Analysis: Leverages an AI service to interpret the content of emails and determine the nature of the response required.",
      "Job Scheduling: Utilizes BullMQ for managing background tasks such as sending emails or processing incoming emails at regular intervals.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Google APIs",
      "Microsoft Graph",
      "BullMQ",
      "TypeScript",
      "Axios",
    ],
    installation: [
      "git clone https://github.com/gaurav1832/autoinbox.git",
      "cd autoinbox",
      "npm install",
      "Set up environment variables in a `.env` file.",
      "Start the development server using `npm start`",
    ],
    implementationChoices: [
      "Node-fetch vs Axios: Node-fetch was initially used due to its lightweight nature but was later replaced by Axios for its more extensive feature set.",
      "Modular Design: Each major functionality is encapsulated in separate files and functions for better maintainability and scalability.",
      "Job Queue: BullMQ is used for managing jobs and background tasks to ensure efficient processing of emails.",
      "Error Handling: Detailed error handling and logging are implemented to track and manage issues effectively.",
    ],
    usage: [],
    structure: [],

    github: "https://github.com/gaurav1832/autoinbox",
    livelink: "",
  },
  {
    id: "cl-ai-mate",
    title: "Team cl_AI_mate - Heat Wave and AQI Prediction",
    thumbnail: "/images/taim.png",

    tech:
      "Tech: Python, Streamlit, Google Colab, TensorFlow, Prophet, Folium, GeoPandas, GitHub Actions",
    description:
      "Team cl_AI_mate's project focuses on predicting heat waves and air quality index (AQI) for Tier-2 cities in Telangana, India. It provides an interactive platform to forecast environmental conditions for the year 2023, aiming to help local authorities and residents make informed decisions.",
    overview:
      "This project offers a robust solution for predicting heat waves and AQI using a combination of machine learning models and interactive visualizations. The platform includes features such as forecasting, graph visualizations, timeline analysis, and a map interface to provide detailed insights into environmental conditions across different cities.",
    keyComponents: [
      "Heat Wave and AQI Prediction: Predicts occurrences of heat waves and AQI levels for the year 2023.",
      "Interactive Dashboard: Provides graph visualization, timeline highlights, and a map feature for analyzing environmental data.",
      "CI/CD Architecture: Implements continuous integration and deployment for retraining and updating models.",
      "Data Management: Uses sliding window approach for managing data versions and model updates.",
      "Exploratory Data Analysis: Conducts detailed analysis using Google Colab and provides insights into the data.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Prophet",
      "Prophet",
      "Streamlit",
      "Matplotlib",
      "Plotly",
      "Pandas",
      "NumPy",
      "GitHub",
    ],
    installation: [
      "git clone https://github.com/HarshHrs24/Team-cl_AI_mate.git",
      "cd Team-cl_AI_mate",
      "pip install -r requirements.txt",
      "Generate and add your GitHub token to the GitHub workflow folder (weekly-run.yaml).",
      "Deploy the app using Streamlit or run locally using `streamlit run app.py`.",
    ],
    implementationChoices: [
      "Model Choice: Used Prophet and NeuralProphet for time series forecasting.",
      "Data Management: Sliding window approach for updating data and models weekly.",
      "Visualization: Employed Streamlit for creating an interactive and user-friendly dashboard.",
      "CI/CD: Integrated CI/CD practices for continuous model retraining and deployment.",
    ],
    usage: [],
    structure: ["/images/taim-structure.jpg"],
    github: "https://github.com/HarshHrs24/Team-cl_AI_mate",
    livelink: "",
  },
  {
    id: "file-manager",
    title: "File Manager Application",
    thumbnail: "/images/file-forge.png",

    tech: "Tech: React, Node.js, Express, MongoDB",
    description:
      "A web-based file manager application allowing users to manage files and folders with features like authentication, file upload, folder creation, and more. Built using React for the frontend and Node.js, Express, and MongoDB for the backend.",
    overview:
      "The File Manager Application provides an intuitive interface for managing files and folders. It supports user authentication, file upload, folder organization, and file operations such as renaming and moving. The app is designed to be easily set up and run locally with a straightforward configuration process.",
    keyComponents: [
      "User Authentication: Sign up, sign in, and sign out functionalities.",
      "File Operations: Upload, delete, move, and rename files and folders.",
      "File Preview: View uploaded images and PDFs directly within the application.",
      "Frontend and Backend Integration: Built with React for the frontend and Node.js with Express for the backend.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT (JSON Web Tokens)",
    ],
    installation: [
      "git clone https://github.com/gaurav1832/react-file-manager.git",
      "cd file-manager-app",
      "cd backend",
      "npm install",
      "cd ../frontend",
      "npm install",
      "Start the development server using `npm start`",
    ],
    configuration: [
      "Create a .env file in the backend directory with the following configuration:",
      "PORT=5000",
      "MONGO_URI=your-mongodb-connection-string",
      "JWT_SECRET=your-secret-key-for-jwt",
      "Start the backend server: `cd backend && npm start`",
      "Start the frontend development server: `cd frontend && npm start`",
      "Access the application at http://localhost:3000.",
    ],
    usage: [],

    implementationChoices: [],

    structure: [
      "GET /file/folders: Get a list of folders.",
      "GET /file/folder/:folderId/files: Get a list of files in a folder.",
      "POST /user/register: Create a new user account.",
      "POST /user/login: Sign in with an existing account.",
      "POST /file/upload: Upload a file.",
      "POST /file/folder: Create a new folder.",
      "POST /file/deletefolder: Delete a folder.",
      "POST /file/delete: Delete a file.",
      "POST /file/renamefolder: Rename a folder.",
      "POST /file/move: Move a file from one folder to another.",
      "PUT /file/rename/:fileId: Rename a file.",
    ],
    demo:
      "You can see a live demo of the File Manager [here](https://drive.google.com/file/d/1FYWHWJ94hPDV1N7yG_spinCgG3CtK1t2/view?usp=sharing).",
    github: "https://github.com/gaurav1832/react-file-manager",
    livelink: "https://fileforge.vercel.app/",
  },

  {
    id: "lee-tracker",
    title: "LeeTracker Android App",
    thumbnail: "/images/leetracker.png",

    tech: "Tech: React Native, JavaScript, Expo",
    description:
      "LeeTracker is an Android app designed to enhance your coding practice by keeping you motivated and connected with friends on LeetCode. It provides personalized notifications and tracks coding progress.",
    overview:
      "LeetCode Friends Tracker app leverages the LeetCode API to offer real-time notifications about friends' submissions and helps track your progress. It features a user-friendly interface and personalized notifications to foster motivation and friendly competition.",
    keyComponents: [
      "Personalized Notifications: Get real-time updates on friends' LeetCode submissions.",
      "Engaging User Interface: Designed with Material Design for an intuitive experience.",
    ],
    technologies: ["React Native", "JavaScript", "Expo"],
    installation: [
      "Download the app from the Google Play Store: [LeeTracker](https://play.google.com/store/apps/details?id=com.pete1302.leethub01).",
    ],
    implementationChoices: [],
    usage: [
      "Add a new user by entering the username and clicking 'Add.'",
      "The list will display the entered username if it exists.",
      "Enable/disable app notifications using the 'Notification ON/OFF' button.",
      "Use the 'Notify' button to control notifications for individuals.",
      "Explore the app to stay motivated and track your coding progress.",
    ],
    structure: [],
    contributors: [
      "[Prakhar Raj](https://github.com/prakharraj1302)",
      "[Gaurav Garwa](https://github.com/gaurav1832)",
    ],
    feedback:
      "We welcome feedback and contributions. Create an issue or pull request for improvements or if you encounter any issues.",
    github: "https://github.com/prakharraj1302/LeeTracker-Android-App",
    livelink:
      "https://play.google.com/store/apps/details?id=com.pete1302.leethub01",
  },
  {
    id: "codemaps",
    title: "CodeMaps",
    thumbnail: "/images/codemaps.png",

    tech: "Tech: ReactJS, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS",
    description:
      "CodeMaps provides tailored learning paths from basics to advanced concepts in data structures and algorithms, company-specific questions, and a database of previous year interview questions. It also offers a platform for users to share experiences and strategies for technical interviews, enhancing their preparation and confidence.",
    keyComponents: [
      "Structured Learning Paths: Designed to progress from basic to advanced concepts in data structures and algorithms.",
      "Company-Specific Questions: Curated questions with detailed explanations and solutions from top tech companies.",
      "Previous Year Questions: Comprehensive database of interview questions from previous years.",
      "Interview Insights: Platform for sharing experiences, strategies, and tips for successful interviews.",
      "Interactive Platform: Community engagement, progress tracking, and coding challenges.",
    ],
    technologies: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    installation: [
      "git clone https://github.com/gaurav1832/CodeMaps.git",
      "cd CodeMaps",
      "npm install",
      "Set up environment variables in a `.env` file.",
      "Start the development server using `npm start`",
    ],
    implementationChoices: [
      "ReactJS & Tailwind CSS: Used for creating a responsive and interactive user interface.",
      "Node.js & Express.js: Backend services for handling API requests and managing data.",
      "MongoDB: NoSQL database to store questions, user data, and other information.",
      "Modular Design: The project is structured into reusable components and services.",
      "Community Features: Built to facilitate interaction and sharing among users.",
    ],
    usage: [],
    structure: [],
    github: "https://github.com/gaurav1832/CodeMaps",
    livelink: "",
  },

  {
    id: "promptshare",
    title: "PromptShare - AI Prompt Sharing Platform",
    thumbnail:
      "https://github.com/gaurav1832/PromptShare/assets/78600377/1d769e86-ca5e-40bb-a197-84689ab2b3b8",

    tech: "Tech: Next.js, NextAuth, React, Tailwind CSS, MongoDB",
    description:
      "PromptShare is a platform for sharing and collaborating on AI prompts. It leverages community-sourced input to enhance the performance of generative AI models like ChatGPT and Bard.",
    overview:
      "PromptShare allows users to create, share, and manage AI prompts. It features user authentication, CRUD operations for prompt management, prompt categorization, and a feedback system for continuous improvement. The platform aims to foster collaboration and enhance the quality of AI-generated outputs.",
    keyComponents: [
      "User Authentication: Secure login and management using NextAuth.",
      "CRUD Operations: Full management of AI prompts including create, read, update, and delete functionalities.",
      "Community Interaction: Share and access prompts from other users.",
      "Prompt Categorization: Easy discovery of prompts through tags or categories.",
      "Feedback and Rating: Rate and provide feedback on prompts to drive improvements.",
    ],
    technologies: [
      "Next.js",
      "NextAuth.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
    ],
    installation: [
      "Clone the repository.",
      "Install dependencies using `npm install`.",
      "Set up the required environment variables (e.g., database connection, Google Client IDs, etc.).",
      "Start the development server using `npm run dev`.",
    ],
    usage: [
      "Sign in to start sharing and exploring prompts.",
      "Create, edit, or delete prompts as needed.",
      "Engage with the community by sharing useful prompts.",
    ],
    implementationChoices: [],
    structure: [],
    acknowledgements: [
      "We extend our gratitude to the open-source community for their valuable contributions.",
    ],

    github: "https://github.com/gaurav1832/PromptShare",
    livelink: "",
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    thumbnail:
      "https://github.com/gaurav1832/Netflix/assets/78600377/e11cc3d2-77ec-43c1-8164-58390018176a",

    tech: "Tech: React.js, Firebase, Axios, Tailwind CSS",
    description:
      "A web application replicating the Netflix user interface and basic functionalities, allowing users to browse movies, TV shows, and other content.",
    overview:
      "The Netflix Clone project aims to mimic the design and user experience of Netflix. It includes user authentication, content browsing, and detailed views of each title. The application is designed to be responsive and to provide a similar experience to the popular streaming service.",
    keyComponents: [
      "User Authentication: Sign up and log in with Firebase.",
      "Content Browsing: Browse and search for movies and TV shows.",
      "Details View: View detailed information about each title, including description, rating, and genre.",
      "Responsive Design: Ensures compatibility across various screen sizes.",
    ],
    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "React.js",
      "Firebase",
      "Axios",
      "Tailwind CSS",
    ],
    implementationChoices: [],
    installation: [
      "Clone the repository using `git clone https://github.com/gaurav1832/Netflix.git`.",
      "Install packages using `npm install`.",
      "Run the application using `npm start`.",
    ],
    usage: [],
    structure: [],
    contact:
      "For any inquiries or support, please contact gauravgarwa07@gmail.com.",
    github: "https://github.com/gaurav1832/Netflix",
    livelink: "",
  },

  {
    id: "whatsapp-chat-analysis",
    title: "WhatsApp Chat Analysis Web Application",
    thumbnail: "/images/wca-preview.png",

    tech: "Tech: Python, Streamlit, GitHub",
    description:
      "This web application provides in-depth analysis of WhatsApp chat statistics, including activity trends, link and media extraction, and more. Built with Python and Streamlit, it offers an intuitive interface for analyzing and exporting chat data.",
    overview:
      "The WhatsApp Chat Analysis Web Application allows users to analyze chat statistics such as message frequency and activity trends. It also supports link and media extraction, generates word clouds, and includes search functionality. The application features a user-friendly interface and supports data export in various formats.",
    keyComponents: [
      "Chat Activity Analysis: View trends in message frequency and chat activity.",
      "Link and Media Extraction: Retrieve links and media shared in the chat.",
      "Word Cloud Generator: Visualize commonly used words in the chat.",
      "Search Functionality: Search for specific keywords or phrases.",
      "Export Data: Export data in formats like CSV and Excel.",
      "User-Friendly Interface: Easy-to-use web interface.",
    ],
    technologies: [
      "Python",
      "Streamlit Server",
      "Pandas",
      "Matplotlib",
      "Numpy",
      "GitHub",
    ],
    installation: [
      "Clone the repository: `git clone https://github.com/gaurav1832/wca.git`.",
      "Navigate to the project directory: `cd whatsapp-chat-analysis`.",
      "Create and activate a virtual environment (recommended):",
      "  - `python -m venv venv`",
      "  - On Windows: `venv\\Scripts\\activate`",
      "  - On Mac/Linux: `source venv/bin/activate`",
    ],
    implementationChoices: [],
    usage: [
      "Run the application using: `streamlit run app.py`.",
      "A web browser window will open at `http://localhost:8501`.",
      "Upload your WhatsApp chat export file (typically a .txt file).",
      "Explore the analysis and extraction options in the application's UI.",
      "Export results for further analysis if needed.",
    ],
    structure: [],
    github: "https://github.com/gaurav1832/wca",
    livelink: "",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    thumbnail: "/images/url-short.png",

    tech: "Tech: Python, Flask, Hashids, SQLite",
    description:
      "A simple URL shortener application built using Flask and Hashids. This application generates short, unique URLs from long ones and tracks basic statistics for each shortened URL.",
    overview:
      "The URL Shortener application allows users to input long URLs and receive a shorter version. It uses Flask for the web framework, Hashids for generating unique short IDs, and SQLite for storing the URLs and their associated data. The app also includes functionality to track and display statistics for each shortened URL.",
    keyComponents: [
      "Setup Python Virtual Environment: Create and activate a virtual environment.",
      "Dependencies Installation: Install Flask, Hashids, SQLite.",
      "Flask App Creation: Set up the Flask application and implement URL shortening.",
      "Hashids for Unique IDs: Use Hashids to generate short unique IDs from URLs.",
      "Database Integration: Store and manage URLs and their shortened versions.",
      "Redirect Route: Handle redirection from short URLs to the original URLs.",
      "Statistics Route: Fetch and display statistics for each shortened URL.",
    ],
    technologies: ["Python", "Flask", "Hashids", "SQLite"],
    installation: [
      "Open the folder in an IDE and set up a Python virtual environment:",
      "  - `python3 -m venv venv`",
      "  - Activate the virtual environment:",
      "    - On Mac/Linux: `. venv/bin/activate`",
      "    - On Windows: `venv\\Scripts\\activate`",
      "Install Flask, Hashids, and SQLite:",
      "  - Use pip to install required packages if not already installed.",
      "Run the application:",
      "  - Set environment variables and start Flask:",
      "    - `export FLASK_APP=app`",
      "    - `export FLASK_ENV=development`",
      "    - `flask run`",
      "Access the application at `http://127.0.0.1:5000/`.",
    ],
    implementationChoices: [],
    usage: [
      "Enter a long URL to shorten it.",
      "The application will generate and display a short URL.",
      "Click on the short URL or enter it into the browser to be redirected to the original URL.",
      "Access the statistics route to view data on shortened URLs.",
    ],
    structure: [],
    github: "https://github.com/gaurav1832/url-shortener-flask",
    livelink: "",
  },
];

export default projects;
