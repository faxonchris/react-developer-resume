import React from 'react';
import logo from './logo.svg';
import { Card, CardBody, CardFooter, CardHeader, Divider, Link, Image, Accordion, AccordionItem, Avatar, Tooltip } from '@nextui-org/react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ListModal from './ListModal';
import { JOBS_ARRAY } from '../data/ResumeData';
import { Job } from '../types/Types';
import { FaBriefcase } from "react-icons/fa6";




function ExperiencesTimeline() {
  return (
    <Timeline> 
        {JOBS_ARRAY.map((job: Job) => {
            return (
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right">
                    <div className="text-slate-600 text-sm">{job.years}</div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <FaBriefcase className={JOBS_ARRAY.indexOf(job) === 0 ? "text-blue-600" : "text-slate-500"} />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="text-md">
                        <div className="flex flex-col mb-1.5">
                            <p className="text-md">{job.jobName}</p>
                            <p className="text-xs text-default-500 text-wrap">{job.companyName}</p>
                            <p className="text-xs text-default-500">{job.location}</p>
                        </div>
                        <ListModal 
                            title={job.jobName + " at " + job.companyName}
                            bullets={job.resumeBullets} 
                            skills={job.skills}/>
                    </TimelineContent>
                </TimelineItem>
    );
    })
    }
    </Timeline>
  );
}

export default ExperiencesTimeline;
