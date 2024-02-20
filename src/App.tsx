import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image, Accordion, AccordionItem, Avatar, Tooltip } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import { JOB_TITLE, NAME, PROFILE_PIC_LINK } from './data/ResumeData';


function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Card className="w-[90%] sm:w-[600px]" shadow="lg">
      <CardHeader className="flex gap-3">
        
      <Avatar src={PROFILE_PIC_LINK} size="lg" />
        <div className="flex flex-col">
          <p className="text-md">{NAME}</p>
          <p className="text-small text-default-500">{JOB_TITLE}</p>
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
      <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
      <AccordionItem key="1" aria-label="Experience" title="Work Experience">
        <ExperiencesTimeline />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Education" title="Education">
       
      </AccordionItem>
      <AccordionItem key="3" aria-label="Education" title="Projects">
      <ProjectsList />
      </AccordionItem>
    </Accordion>
      </CardBody>
      <Divider/>
      <CardFooter>
        
      </CardFooter>
    </Card>
    </main>
  );
}

export default App;
