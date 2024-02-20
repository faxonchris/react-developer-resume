import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image, Accordion, AccordionItem, Avatar, Tooltip } from '@nextui-org/react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperiencesTimeline from './components/ExperiencesTimeline';
import ProjectsList from './components/ProjectsList';
import { GITHUB_LINK, JOB_TITLE, LINKEDIN_LINK, NAME, PROFILE_PIC_LINK, RESUME_LINK } from './data/ResumeData';
import Education from './components/Education';
import { FaCopyright, FaGitAlt, FaGithub, FaGithubAlt, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import MainCard from './components/MainCard';


function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <MainCard />
    </main>
  );
}

export default App;
