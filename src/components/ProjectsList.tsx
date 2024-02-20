import React from 'react';
import logo from './logo.svg';
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image, Accordion, AccordionItem, Avatar, Tooltip, Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ListModal from './ListModal';
import { PROJECTS_ARRAY } from '../data/ResumeData';
import { Project } from '../types/Types';

function ProjectsList() {
  return (
    <div className="flex flex-col gap-4"> 
        {PROJECTS_ARRAY.map((project: Project) => {
            return (
                <Card isFooterBlurred className="min-h-[200px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <h4 className="text-slate font-medium text-large">{project.projectName}</h4>
                    </CardHeader>
                    {project.cardBackgroundImageLink !== undefined ? 
                        <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={project.cardBackgroundImageLink}
                    /> : <></>}
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">{project.projectDesc}</p>
                    </div>
                    </div>
                        <ListModal 
                        image={project.imageLink}
                        buttonSize='md'
                        title={project.projectName}
                        bullets={project.resumeBullets} 
                        skills={project.skills}>
                            <Button radius="full" className="bg-slate-500">
                            </Button>
                        </ListModal>
                    {project.link !== undefined ? <Button radius="full" className="bg-gradient-to-bl from-purple-700 via-indigo-700 to-blue-500 ml-2" href={project.link}>
                        View Project
                    </Button>  : <></>}
                    </CardFooter>
                </Card>
                
            );})
        }
    </div>
  );
}

export default ProjectsList;
