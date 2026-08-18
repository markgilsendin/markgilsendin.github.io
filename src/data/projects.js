export const projects = [
  {
    id: 'attendance-monitoring-system',
    title: 'High School Attendance Monitoring with Parent Notification',
    shortDescription: 'A school attendance application that allows students to record their time-in and time-out using their student number and fingerprint. The attendance is recorded in the system, while parents receive notifications when their child arrives at or leaves the school.',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Firebase', 'Android WebView'],
    liveUrl: '#',
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Web App',
      overview: 'A school attendance application that allows students to record their time-in and time-out using their student number and fingerprint. The attendance is recorded in the system, while parents receive notifications when their child arrives at or leaves the school.',
      challenge: 'The application needed to provide a simple and straightforward interface for students while connecting the attendance process with the backend system and notification service. The application was also intended to run through an Android WebView, so the frontend needed to work properly within a mobile environment.',
      myContribution: [
        'Translating Figma designs into functional and responsive interfaces',
        'Developing the attendance-related interfaces',
        'Integrating the frontend with Laravel APIs',
        'Managing application state using Vuex',
        'Building the interface using Tailwind CSS',
        'Integrating Firebase for parent notifications',
        'Preparing the web application for use through an Android WebView'
      ],
      technicalChallenges: 'One of the main challenges was connecting the frontend with multiple services involved in the attendance process. I worked on handling API communication and application states while integrating Firebase into the notification flow. I also had to consider how the web application would behave when running inside an Android WebView.',
      whatILearned: 'This project gave me practical experience working with a frontend application that connects to multiple services rather than relying only on a traditional REST API. It also gave me experience with Firebase notifications and running a web application through an Android WebView.',
      outcome: 'The application provided the school with a centralized attendance process while allowing parents to receive timely notifications about their child\'s attendance.'
    }
  },
  {
    id: 'data-management-system',
    title: 'Data Management System',
    shortDescription: 'A university data management and document repository system used by faculty and employees to submit, manage, and retrieve requested files.',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',
      overview: 'A university data management and document repository system used by faculty and employees to submit, manage, and retrieve requested files. Administrators can create events and assign participating colleges and offices. Assigned offices can then submit the required documents and files associated with each event.',
      challenge: 'The system needed to support different document submission workflows depending on the event and the assigned office or college. Users needed a clear way to view their assigned requirements, submit files, and manage their documents, while administrators needed to monitor submissions across different events.',
      myContribution: [
        'Translating Figma designs into functional interfaces',
        'Developing document submission and management pages',
        'Integrating the frontend with Laravel APIs',
        'Managing application state using Vuex',
        'Developing forms and data tables',
        'Implementing file-related interfaces and workflows',
        'Building responsive layouts using Tailwind CSS'
      ],
      technicalChallenges: 'One of the main challenges was presenting different requirements and submission statuses based on the user\'s assigned event. The frontend needed to clearly communicate what documents were required and the current status of each submission while keeping the process simple for users.',
      whatILearned: 'This project strengthened my experience in building data-driven applications with different user workflows. It also gave me more experience working with file-related functionality and API-driven data management.',
      outcome: 'The system provided a centralized platform for managing university document requests, event requirements, and file submissions.'
    }
  },
  {
    id: 'gateway-rural-bank-website',
    title: 'Bank Informational Website',
    shortDescription: 'A corporate informational website developed for a Philippine bank to provide visitors with information about its services, products, announcements, and other relevant content.',
    tags: ['WordPress', 'Elementor', 'Figma', 'Hostinger'],
    liveUrl: 'https://gatebank.com.ph',
    githubUrl: null,

    caseStudy: {
      role: 'Web Developer — Design, Development & Deployment',
      category: 'Public Project',
      type: 'Public Corporate Website',
      overview: 'A corporate informational website developed for a Philippine bank to provide visitors with information about its services, products, announcements, and other relevant content. Unlike my institutional projects, I handled this project from the initial design through development and deployment.',
      challenge: 'The website needed to present a large amount of information while maintaining a clear navigation structure and responsive experience across desktop and mobile devices. The design also needed to maintain a professional appearance appropriate for a financial institution.',
      myContribution: [
        'Designing the website layout in Figma',
        'Translating the designs into a working WordPress website',
        'Developing pages using Elementor',
        'Building responsive layouts',
        'Organizing and presenting website content',
        'Testing the website across different screen sizes',
        'Configuring and deploying the website through Hostinger'
      ],
      technicalChallenges: 'One of the main challenges was translating the visual design into a responsive WordPress implementation while maintaining consistency across different pages and screen sizes. Because I handled both design and development, I was also responsible for making practical adjustments during implementation when certain design elements needed to work differently in the actual website.',
      whatILearned: 'This project gave me experience beyond application frontend development. I was able to work through the complete website process, from visual design and development to testing and deployment.',
      outcome: 'The completed website provides the bank with a public-facing platform for presenting its services and information to customers.'
    }
  },
  {
    id: 'kpi-management-system',
    title: 'University Key Performance Indicator Management System',
    shortDescription: 'A university performance monitoring system designed to track office-level Key Performance Indicators (KPIs) throughout the year.',
    tags: ['React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',
      overview: 'A university performance monitoring system designed to track office-level Key Performance Indicators (KPIs) throughout the year. Offices can submit their quarterly targets and accomplishments, while executives can monitor performance through dashboards and review previous office performance by selecting different years.',
      challenge: 'The system needed to present performance data in a way that was easy to understand while allowing users to review detailed quarterly information and historical performance.',
      myContribution: [
        'Translating Figma designs into functional React interfaces',
        'Developing dashboard components',
        'Integrating Laravel APIs',
        'Developing interfaces for quarterly targets and accomplishments',
        'Implementing year-based filtering',
        'Managing frontend application states',
        'Building responsive layouts using Tailwind CSS'
      ],
      technicalChallenges: 'One of the main challenges was presenting performance data clearly while handling different reporting periods and years. The dashboard needed to update its information based on the selected year and provide users with a clear view of office performance.',
      whatILearned: 'This project gave me more experience working with React and dashboard-based applications where data needs to be presented clearly across different reporting periods.',
      outcome: 'The system provided a centralized platform for monitoring university performance indicators, quarterly accomplishments, and historical office performance.'
    }
  },
  {
    id: 'service-request-management-system',
    title: 'Service Request Management System',
    shortDescription: 'A service request management system developed for the university\'s General Services Office (GSO) to handle repair and service requests from different university offices.',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',
      overview: 'A service request management system developed for the university\'s General Services Office (GSO) to handle repair and service requests from different university offices. Requestors can submit service requests and monitor their status. GSO personnel can review requests, conduct inspections, provide recommendations, assign workers, and process requests until completion. Requestors can also provide feedback after the service has been completed.',
      challenge: 'The service request process involves several stages and different users. The system needed to clearly communicate the current status of each request and provide the appropriate information and actions at each stage.',
      myContribution: [
        'Translating Figma designs into functional interfaces',
        'Developing service request forms and pages',
        'Integrating Laravel APIs',
        'Managing application state using Vuex',
        'Building request status and tracking interfaces',
        'Developing inspection and recommendation interfaces',
        'Implementing worker assignment interfaces',
        'Developing feedback functionality',
        'Building responsive layouts using Tailwind CSS'
      ],
      technicalChallenges: 'The main challenge was representing the different stages of the service request process in the frontend. A request can move from submission to inspection, recommendation, worker assignment, completion, and feedback. The interface needed to clearly display the current stage and relevant information throughout the process.',
      whatILearned: 'This project improved my understanding of workflow-based applications and how frontend interfaces can represent processes involving multiple users and stages.',
      outcome: 'The system provided university offices and GSO personnel with a centralized way to submit, process, track, and monitor service requests.'
    }
  },
  
]