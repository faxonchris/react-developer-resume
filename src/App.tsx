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
import { GITHUB_LINK, JOB_TITLE, LINKEDIN_LINK, NAME, PROFILE_PIC_LINK } from './data/ResumeData';
import Education from './components/Education';
import { FaCopyright, FaGitAlt, FaGithub, FaGithubAlt, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';


function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-[90%] sm:w-[600px]" shadow="lg">
      <CardHeader className="flex gap-3">
        
      <Avatar src={PROFILE_PIC_LINK} size="lg" />
        <div className="flex flex-col">
          <p className="text-md">{NAME}</p>
          <p className="text-small text-default-500">{JOB_TITLE}</p>
          <div className="flex flex-row gap-2 mt-0.5">
            <Link href={LINKEDIN_LINK} target='_blank'>
              <FaLinkedin className='text-lg'/>
            </Link>
            <Link href={GITHUB_LINK}target='_blank'>
              <FaGithub className='text-lg'/>
            </Link>
            </div>
        </div>
        <Link
          isExternal
          className='sm:mr-2 ml-auto'
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Resume
        </Link>
      </CardHeader>
      <Divider/>
      <CardBody>
      <Accordion variant="splitted" defaultExpandedKeys={["1"]} selectionMode="multiple">
      <AccordionItem key="1" aria-label="Experience" title="Work Experience">
        <ExperiencesTimeline />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Education" title="Education">
       <Education />
      </AccordionItem>
      <AccordionItem key="3" aria-label="Education" title="Projects">
      <ProjectsList />
      </AccordionItem>
    </Accordion>
      </CardBody>
      <Divider/>
      <CardFooter>
        <div className='flex flex-row gap-1'>
          <div>
          Made in React with TypeScript.
            </div>
          <Link>Source Code on GitHub</Link>
          
          <div>
            
          </div>
        </div>
      </CardFooter>
    </Card>
    </main>
  );
}

export default App;
