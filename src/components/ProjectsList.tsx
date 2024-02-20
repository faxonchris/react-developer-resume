import { Button, Card, CardFooter, CardHeader, Image, Link } from '@nextui-org/react';
import { PROJECTS_ARRAY } from '../data/ResumeData';
import { Project } from '../types/Types';
import ListModal from './ListModal';

function ProjectsList() {
  return (
    <div className="flex flex-col gap-4 mb-2"> 
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
                    {project.link !== undefined ? 
                    <Link href={project.link} target='_blank'>
                    <Button 
                        radius="full" 
                        className="bg-gradient-to-bl from-purple-700 via-indigo-700 to-blue-500 ml-2" 
                        >
                        View Project
                    </Button></Link>  : <></>}
                    </CardFooter>
                </Card>
                
            );})
        }
    </div>
  );
}

export default ProjectsList;
