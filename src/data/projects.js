// `status` is one of: 'Live', 'In end-user training', 'In training', 'In user testing', 'In development'.
// Projects are ordered so the first four (shown on the home page) are the strongest and most verifiable.
export const projects = [
  {
    id: 'attendance-monitoring-system',
    title: 'High School Attendance Monitoring with Parent Notification',
    status: 'Live',
    shortDescription:
      'A school attendance application for recording student time-in/time-out and notifying parents of attendance activity.',
    tags: ['Vue 3', 'Vuex', 'Vite', 'Tailwind CSS', 'Vuelidate', 'Firebase', 'Android WebView', 'REST API'],
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
        'The application is live and gives the school a centralized attendance process, with parents receiving notifications when their child arrives at or leaves school. It serves a school user base of roughly 1,000 to 1,500.'
    }
  },

  {
    id: 'data-management-system',
    title: 'Data Management System',
    status: 'Live',
    shortDescription:
      'A university data management and document repository system used by faculty and employees to submit, manage, and retrieve requested files.',
    tags: ['Vue 3', 'Vuex', 'Vite', 'Tailwind CSS', 'Vuelidate', 'REST API'],
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
        'The system is live and provides a centralized platform for managing university document requests, event requirements, and file submissions.'
    }
  },

  {
    id: 'certificate-report-generation',
    title: 'Academic Certificate and Report Generation',
    status: 'Live',
    shortDescription:
      'A tool for generating student certificates and academic reports, which I took over as an unfinished vanilla JavaScript project and continued to production.',
    tags: ['Vanilla JavaScript', 'HTML', 'CSS'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Web Tool',

      overview:
        'A tool for generating student certificates and academic reports. The project was already started when I took it over, and it was built with vanilla JavaScript, HTML, and CSS rather than a framework.',

      challenge:
        'The main challenge was continuing someone else\'s unfinished work. I had to understand the existing vanilla JavaScript, HTML, and CSS before extending it to a working, production-ready state.',

      myContribution: [
        'Took over an unfinished vanilla JavaScript, HTML, and CSS codebase',
        'Continued development until the tool was ready for production'
      ],

      technicalChallenges: [
        {
          title: 'Continuing an Unfinished Codebase',
          description:
            'Picking up work that had already been started meant reading and understanding the existing code before adding to it.'
        },
        {
          title: 'Working Without a Framework',
          description:
            'Most of my work is in Vue and React, so this project meant building the interface with plain JavaScript, HTML, and CSS.'
        }
      ],

      whatILearned:
        'This project gave me practical experience taking over and finishing existing code, and working without a framework after mostly building with Vue and React.',

      outcome:
        'The tool is live and used to generate student certificates and academic reports.'
    }
  },

  {
    id: 'school-management-system',
    title: 'School Management System',
    status: 'In development',
    shortDescription:
      'A school management system currently in development by a team of three frontend developers, built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Zod', 'TanStack Query', 'Auth.js', 'Husky', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',

      overview:
        'A school management system that is currently in development. I am one of three frontend developers on the project, working with Next.js and TypeScript.',

      challenge:
        'This is my first project with Next.js and Zod schemas, so I am learning them while building the application alongside the team.',

      myContribution: [
        'Building frontend features as one of three frontend developers',
        'Working with Next.js, TypeScript, Zustand, and TanStack Query',
        'Validating data using Zod schemas',
        'Working with Auth.js as part of the project stack',
        'Using Husky git hooks as part of the team workflow'
      ],

      technicalChallenges: [
        {
          title: 'Learning a New Stack While Building',
          description:
            'Next.js, Zod, and schema-based validation were new to me, so I am learning them in parallel with the development of the project.'
        },
        {
          title: 'Working in a Frontend Team',
          description:
            'Unlike my earlier projects, where I was the only frontend developer, this one involves coordinating code with two other frontend developers.'
        }
      ],

      whatILearned:
        'I am learning Next.js, Zod schema validation, and TanStack Query on a real project, and how a team of frontend developers works in a shared codebase.',

      outcome:
        'The system is currently in development and has not been released.'
    }
  },

  {
    id: 'kpi-management-system',
    title: 'University Key Performance Indicator Management System',
    status: 'In end-user training',
    shortDescription:
      'A university performance monitoring system designed to track office-level Key Performance Indicators (KPIs) throughout the year.',
    tags: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS', 'REST API'],
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
        'Managing frontend application state with Zustand',
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
        'This project gave me more experience working with React, TypeScript, and Zustand, and with dashboard-based applications where data needs to be presented clearly across different reporting periods.',

      outcome:
        'The system is currently in end-user training. It is designed to give offices and executives a central place to monitor performance indicators, quarterly accomplishments, and historical office performance, and is prepared for roughly 50 to 100 users.'
    }
  },

  {
    id: 'service-request-management-system',
    title: 'Service Request Management System (Vue Version)',
    status: 'In training',
    shortDescription:
      'A service request management system for a university office to handle repair and service requests from different university offices.',
    tags: ['Vue 3', 'Vuex', 'Vite', 'Tailwind CSS', 'Vuelidate', 'REST API'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',

      overview:
        'A service request management system for a university office to handle repair and service requests from different university offices. Requestors can submit requests and monitor their status, while office personnel can review requests, conduct inspections, provide recommendations, assign workers, and process requests through completion.',

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
        'The system is currently in training with its users. It is designed to let university offices and service personnel submit, process, track, and monitor service requests in one place, and is prepared for roughly 100 to 200 users.'
    }
  },

  {
    id: 'service-request-system-react',
    title: 'Service Request Management System (React Version)',
    status: 'In user testing',
    shortDescription:
      'A React and TypeScript service request management system. I set up the project structure and reviewed the frontend code written by an intern developer.',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'REST API'],
    liveUrl: null,
    githubUrl: null,

    caseStudy: {
      role: 'Frontend Developer (Project Setup & Code Review)',
      category: 'Confidential Institutional Project',
      type: 'Institutional Platform',

      overview:
        'A service request management system built with React and TypeScript. The frontend was written mainly by an intern developer, while I set up the project structure and codebase and reviewed the frontend code.',

      challenge:
        'Because the interface was being built by an intern, the project needed a clear structure from the start and regular review of the frontend code.',

      myContribution: [
        'Set up the project structure and codebase',
        'Reviewed frontend code written by the intern developer',
        'Worked with React, TypeScript, Zustand, and Tailwind CSS'
      ],

      technicalChallenges: [
        {
          title: 'Setting Up the Codebase',
          description:
            'Setting up the structure of a React and TypeScript application that another developer would build on.'
        },
        {
          title: 'Reviewing Frontend Code',
          description:
            'Reviewing the intern\'s code and giving feedback as the application was built.'
        }
      ],

      whatILearned:
        'This project gave me experience setting up a codebase for someone else to build on and reviewing frontend code written by another developer.',

      outcome:
        'The system is currently in debugging and user testing.'
    }
  },

  {
    id: 'gateway-rural-bank-website',
    title: 'Gateway Rural Bank Website',
    status: 'Live',
    shortDescription:
      'A corporate informational website developed for Gateway Rural Bank to present its services, products, announcements, and other information to customers.',
    tags: ['WordPress', 'Elementor', 'Figma', 'Hostinger'],
    liveUrl: 'https://gatebank.com.ph',
    githubUrl: null,

    caseStudy: {
      role: 'Web Developer: Design, Development & Deployment',
      category: 'Freelance Project',
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