import { Card, CardHeader, Avatar, Link, Divider, CardBody, Accordion, AccordionItem, CardFooter } from "@nextui-org/react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { PROFILE_PIC_LINK, NAME, JOB_TITLE, LINKEDIN_LINK, GITHUB_LINK, RESUME_LINK } from "../data/ResumeData";
import Education from "./Education";
import ExperiencesTimeline from "./ExperiencesTimeline";
import ProjectsList from "./ProjectsList";

function MainCard() {
  return (
      <Card className="bg-slate-800 w-[98%] sm:w-[600px] my-3" shadow="lg">
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
        
          target="_blank"
          className='sm:mr-2 ml-auto'
          showAnchorIcon
          href={RESUME_LINK}
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
      <CardFooter className='flex flex-row justify-between sm:px-4'>
          <div>Made in React with TypeScript.</div>
            <div>
            <Link isExternal href="https://github.com/faxonchris/react-developer-resume" target='_blank'>
            Source Code on GitHub
            </Link>
            </div>
      </CardFooter>
    </Card>
  );
}

export default MainCard;
