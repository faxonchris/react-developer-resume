import { Job, Project } from "../types/Types";

export const PROFILE_PIC_LINK = "headshot.png";
export const NAME = "Firstname Lastname";
export const JOB_TITLE = "Software Engineer";

export const RESUME_LINK = "resume.pdf";

export const UNIV_SCHOOL = "School Institute";
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
    companyName: "Company Name",
    location: "New York, NY",
    years: "Jun 2022 - Present",
    resumeBullets: [
        "Full-stack Software engineer of mobile apps.",
        "Developed new mobile app features using Angular, TypeScript, JavaScript, and Java",
        "Developed matching online and offline functionality, thoroughly testing all code written.",
        "Automated internal issue tracking systems utilizing Python, resulting in a reduction of over 500 hours per year.",
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
    jobName: "Software Engineer",
    companyName: "Company Name 2",
    location: "New York, NY",
    years: "Jun 2021 - Jun 2022",
    resumeBullets: [
        "Full-stack Software engineer of mobile apps.",
        "Developed matching online and offline functionality, thoroughly testing all code written.",
        "Automated internal issue tracking systems utilizing Python, resulting in a reduction of over 500 hours per year.",
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
    jobName: "Software Engineer",
    companyName: "Company Name 3",
    location: "New York, NY",
    years: "Jan 2020 - Jun 2021",
    resumeBullets: [
        "Full-stack Software engineer of mobile apps.",
        "Developed matching online and offline functionality, thoroughly testing all code written.",
        "Automated internal issue tracking systems utilizing Python, resulting in a reduction of over 500 hours per year.",
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
  
];
