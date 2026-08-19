export const projects = [
  {
    id: 'attendance-monitoring-system',
    title: 'High School Attendance Monitoring with Parent Notification',
    shortDescription:
      'A school attendance application for recording student time-in/time-out and notifying parents of attendance activity.',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Firebase', 'Android WebView', 'REST API'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Web App',

      overview:
        'The application allows students to record their time-in and time-out using their student number and fingerprint. Attendance information is recorded in the system, while parents receive notifications when their child arrives at or leaves school.',

      challenge:
        'The application needed to provide a simple interface for students while connecting the attendance process with backend and notification services. It also needed to work reliably within an Android WebView, adding another consideration to the frontend implementation.',

      myContribution: [
        'Translating Figma designs into functional and responsive interfaces',
        'Developing the student attendance interfaces and interactions',
        'Integrating the frontend with Laravel APIs',
        'Managing application state using Vuex',
        'Handling API responses, loading states, and frontend application states',
        'Integrating Firebase for parent notifications',
        'Preparing the web application for use through an Android WebView'
      ],

      technicalChallenges: [
        {
          title: 'API & Application State',
          description:
            'The frontend depended on API responses during the attendance process, so the interface needed to handle different application states and provide appropriate feedback to users.'
        },
        {
          title: 'Firebase Integration',
          description:
            'The attendance workflow also involved Firebase for parent notifications, requiring the frontend to work alongside the notification service.'
        },
        {
          title: 'Android WebView',
          description:
            'The application was intended to run inside an Android WebView, so I had to consider how the web interface behaved within the mobile environment.'
        }
      ],

      whatILearned:
        'This project gave me practical experience working with a frontend application that depends on multiple services. I also gained hands-on experience with Firebase notifications and running a web application through an Android WebView.',

      outcome:
        'The application provided the school with a centralized attendance process and allowed parents to receive timely notifications when their child arrived at or left school.'
    }
  },

  {
    id: 'data-management-system',
    title: 'Data Management System',
    shortDescription:
      'A university data management and document repository system used by faculty and employees to submit, manage, and retrieve requested files.',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS', 'REST API'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',

      overview:
        'A university data management and document repository system used by faculty and employees to submit, manage, and retrieve requested files. Administrators can create events and assign participating colleges and offices, while assigned offices can submit the required documents associated with each event.',

      challenge:
        'The system needed to support different document submission workflows depending on the event and assigned office or college. Users needed a clear way to view their requirements, submit files, and track their submissions, while administrators needed to monitor requirements across different events.',

      myContribution: [
        'Translating Figma designs into functional and responsive interfaces',
        'Developing document submission and management pages',
        'Integrating the frontend with Laravel APIs',
        'Managing application state using Vuex',
        'Developing forms and data tables',
        'Implementing file submission interfaces and workflows',
        'Building responsive layouts using Tailwind CSS'
      ],

      technicalChallenges: [
        {
          title: 'Dynamic Requirements',
          description:
            'Different events could have different requirements for assigned offices and colleges. The frontend needed to present the appropriate requirements based on the user and selected event.'
        },
        {
          title: 'Submission Status',
          description:
            'The interface needed to clearly communicate the status of submitted requirements so users could understand which files had been submitted and which still needed attention.'
        },
        {
          title: 'File Submission Workflow',
          description:
            'The frontend needed to provide a straightforward process for users to submit required files while keeping the surrounding event and requirement information clear.'
        }
      ],

      whatILearned:
        'This project strengthened my experience in building data-driven applications with different user workflows. It also gave me more practical experience working with file submission functionality and API-driven data management.',

      outcome:
        'The system provided a centralized platform for managing university document requests, event requirements, and file submissions.'
    }
  },

  {
    id: 'service-request-management-system',
    title: 'Service Request Management System',
    shortDescription:
      'A service request management system developed for the university\'s General Services Office (GSO) to handle repair and service requests from different university offices.',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS', 'REST API'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',

      overview:
        'A service request management system developed for the university\'s General Services Office (GSO) to handle repair and service requests from different university offices. Requestors can submit requests and monitor their status, while GSO personnel can review requests, conduct inspections, provide recommendations, assign workers, and process requests through completion.',

      challenge:
        'The service request process involves several stages and different users. The system needed to clearly communicate the current status of each request and provide the appropriate information and actions at each stage of the workflow.',

      myContribution: [
        'Translating Figma designs into functional and responsive interfaces',
        'Developing service request forms and pages',
        'Integrating the frontend with Laravel APIs',
        'Managing application state using Vuex',
        'Building request status and tracking interfaces',
        'Developing inspection and recommendation interfaces',
        'Implementing worker assignment interfaces',
        'Developing feedback functionality',
        'Building responsive layouts using Tailwind CSS'
      ],

      technicalChallenges: [
        {
          title: 'Multi-Stage Workflow',
          description:
            'A request can move through submission, inspection, recommendation, worker assignment, completion, and feedback. The frontend needed to clearly represent the current stage and relevant information throughout the process.'
        },
        {
          title: 'Role-Based Interfaces',
          description:
            'Different users interact with different parts of the request process. The interface needed to present the appropriate information and actions depending on the user and stage of the request.'
        },
        {
          title: 'Request Tracking',
          description:
            'Requestors needed a clear way to follow the progress of their requests, making status information an important part of the frontend experience.'
        }
      ],

      whatILearned:
        'This project improved my understanding of workflow-based applications and how frontend interfaces can represent processes involving multiple users, stages, and actions.',

      outcome:
        'The system provided university offices and GSO personnel with a centralized way to submit, process, track, and monitor service requests.'
    }
  },

  {
    id: 'kpi-management-system',
    title: 'University Key Performance Indicator Management System',
    shortDescription:
      'A university performance monitoring system designed to track office-level Key Performance Indicators (KPIs) throughout the year.',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',

      overview:
        'A university performance monitoring system designed to track office-level Key Performance Indicators (KPIs) throughout the year. Offices can submit their quarterly targets and accomplishments, while executives can monitor performance through dashboards and review previous office performance by selecting different years.',

      challenge:
        'The system needed to present performance data in a way that was easy to understand while allowing users to review quarterly information and compare office performance across different years.',

      myContribution: [
        'Translating Figma designs into functional React interfaces',
        'Developing dashboard components',
        'Integrating Laravel APIs',
        'Developing interfaces for quarterly targets and accomplishments',
        'Implementing year-based filtering',
        'Managing frontend application states',
        'Building responsive layouts using Tailwind CSS'
      ],

      technicalChallenges: [
        {
          title: 'Performance Data',
          description:
            'The dashboard needed to present performance information clearly while handling different reporting periods and office data.'
        },
        {
          title: 'Year-Based Filtering',
          description:
            'Users needed to switch between different years and view the corresponding performance information, requiring the frontend to update the displayed data based on the selected period.'
        },
        {
          title: 'Dashboard Presentation',
          description:
            'The interface needed to make quarterly targets and accomplishments easy to understand without overwhelming users with large amounts of information.'
        }
      ],

      whatILearned:
        'This project gave me more experience working with React and dashboard-based applications where data needs to be presented clearly across different reporting periods.',

      outcome:
        'The system provided a centralized platform for monitoring university performance indicators, quarterly accomplishments, and historical office performance.'
    }
  },

  {
    id: 'gateway-rural-bank-website',
    title: 'Bank Informational Website',
    shortDescription:
      'A corporate informational website developed for a Philippine bank to present its services, products, announcements, and other information to customers.',
    tags: ['WordPress', 'Elementor', 'Figma', 'Hostinger'],
    liveUrl: 'https://gatebank.com.ph',
    githubUrl: null,

    caseStudy: {
      role: 'Web Developer — Design, Development & Deployment',
      category: 'Public Project',
      type: 'Public Corporate Website',

      overview:
        'A corporate informational website developed for a Philippine bank to present its services, products, announcements, and other relevant information to customers. Unlike my institutional projects, I handled this project from the initial design through development and deployment.',

      challenge:
        'The website needed to present a large amount of information while maintaining clear navigation and a responsive experience across desktop and mobile devices. The design also needed to maintain a professional appearance appropriate for a financial institution.',

      myContribution: [
        'Designing the website layout in Figma',
        'Translating the designs into a working WordPress website',
        'Developing pages using Elementor',
        'Building responsive layouts',
        'Organizing and presenting website content',
        'Testing the website across different screen sizes',
        'Configuring and deploying the website through Hostinger'
      ],

      technicalChallenges: [
        {
          title: 'Design to WordPress',
          description:
            'One of the main challenges was translating the visual design into a working WordPress implementation while maintaining consistency across different pages.'
        },
        {
          title: 'Responsive Implementation',
          description:
            'The website needed to maintain a consistent experience across different screen sizes, requiring adjustments to layouts and content presentation during implementation.'
        },
        {
          title: 'End-to-End Delivery',
          description:
            'Because I handled the project from design through deployment, I also needed to make practical adjustments during development when certain design elements needed to work differently in the actual website.'
        }
      ],

      whatILearned:
        'This project gave me experience beyond application frontend development. I worked through the complete website process, from visual design and development to testing and deployment.',

      outcome:
        'The completed website provides the bank with a public-facing platform for presenting its services and information to customers.'
    }
  }
];