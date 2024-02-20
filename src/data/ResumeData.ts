import { Job, Project } from "../types/Types";

export const PROFILE_PIC_LINK = "headshot.jpg";
export const NAME = "Christopher Faxon";
export const JOB_TITLE = "Software Engineer";

export const RESUME_LINK = "christopher_faxon_resume.pdf";

export const UNIV_SCHOOL = "Rensselaer Polytechnic Institute";
export const UNIV_DEGREE = "Bachelor of Science in Computer Science";
export const UNIV_MINOR = "Economics of Banking and Finance";
export const UNIV_YEARS = "2018-2022";

export const UNIV_BACKGROUND_IMAGE = "rpi.png";

export const GITHUB_LINK = "https://github.com/faxonchris/";

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/christopher-faxon-93758a1a9/";

export const JOBS_ARRAY: Array<Job> = [
  {
    jobName: "Software Engineer",
    companyName: "InterPro Solutions",
    location: "Stoneham, MA",
    years: "Jun 2022 - Present",
    resumeBullets: [
      "Full-stack Software engineer of Enterprise Asset Management mobile apps.",
      "Developed new mobile app features using Angular, TypeScript, JavaScript, and Java, improving technician field operations' efficiency and accuracy.",
      "Developed matching online and offline functionality, thoroughly testing all code written.",
      "Automated internal issue tracking systems utilizing Python, resulting in a reduction of over 500 hours per year.",
      "Developed features for work planning app utilizing AWS DynamoDB, AWS Lambda functions, and Microsoft Graph API to mirror work plans between InterPro's planning app and Microsoft Planner.",
    ],
    skills: [
      "Java",
      "Angular",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Python",
      "Lambda Serverless",
      "DynamoDB NoSQL",
      "Scrum",
      "SQLite",
    ],
  },
  {
    jobName: "Software Engineer Intern",
    companyName: "Broadridge",
    location: "New York, NY",
    years: "May 2021 - Aug 2021",
    resumeBullets: [
      "Collaborated with the Shadow Financial team to enhance the back-office trading software for global brokerages.",
      "Handled numerous Jira tickets reported by end users to resolve UI, backend, and database bugs.",
      "Overhauled logging system for the entire software suite, optimizing issue review process for end-users by reducing log loading and searching time by 90%.",
    ],
    skills: ["C# .NET", "SQL", "WPF", "Agile"],
  },
  {
    jobName: "Software Engineer Intern",
    companyName: "PrecisionCare Software",
    location: "New Paltz, NY",
    years: "Aug 2020 - May 2021",
    resumeBullets: [
      "Utilized Xamarin and C# .NET Core to develop a cross-platform mobile app allowing healthcare providers to log outpatient visits, resulting in 80% time savings over the previous pen-and-paper method.",
      "Utilized C# .NET Core to create a Microservice to work with Twilio's Phone API to create a telephony outpatient visit logging system to work in conjunction with the aforementioned mobile app.",
      "Created a proof-of-concept HIPAA-compliant telehealth app with React.js.",
    ],
    skills: [
      "C# .NET Core",
      "Xamarin",
      "React.js",
      "Python Flask",
      "Mobile app development",
    ],
  },
];
export const PROJECTS_ARRAY: Array<Project> = [
  {
    projectName: "DiffEx",
    projectDesc: "Ethereum Derivatives DEX",
    years: "Jan 2021 - Jan 2022",
    link: "https://diffex.dev",
    cardBackgroundImageLink: "diffex-dashboard.png",
    imageLink: "diffex-screens.png",
    resumeBullets: [
      "Fully functional financial derivatives exchange for ERC20 cryptocurrency tokens.",
      "Ethereum DApp running jointly on an Ethereum Smart Contract and a .NET C# backend utilizing a PostgreSQL database",
      "Utilized Entity Framework Core as an ORM system.",
      "Frontend built in React TypeScript, utilizing various UI component libraries",
    ],
    skills: [
      "C# .NET Core",
      "Entity Framework Core",
      "React",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "Solidity",
      "Cryptocurrency",
      "Ethereum Smart Contracts",
    ],
  },
  {
    projectName: "TutorBase",
    projectDesc:
      "Rensselaer Center for Open Source - peer-to-peer tutoring network",
    years: "Aug 2021 - May 2022",
    cardBackgroundImageLink:
      "https://github.com/DangItJason/TutorBase/raw/master/client/src/containers/LandingPage/assets/img/logo2.png",
    link: "https://github.com/DangItJason/TutorBase",
    resumeBullets: [
      "Through the Rensselaer Center for Open Source, joined a team of 5 other students to create a peer-to-peer tutoring network for RPI, connecting students with tutors to help them learn.",
      "Fullstack developer of scheduling interface and notifications system.",
      "Employed Express.js for backend development, integrating a MongoDB NoSQL database for efficient data management",
    ],
    skills: ["JavaScript", "React", "Express JS", "MongoDB"],
  },
];
