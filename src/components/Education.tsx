import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { UNIV_BACKGROUND_IMAGE, UNIV_DEGREE, UNIV_MINOR, UNIV_SCHOOL, UNIV_YEARS } from '../data/ResumeData';

function Education() {
  return (
    <div className="flex flex-col mb-2"> 
        <Card isFooterBlurred className="min-h-[200px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <h4 className="text-white font-medium text-large">{UNIV_SCHOOL}</h4>
                        <p className="text-slate font-medium text-sm">{UNIV_YEARS}</p>
                    </CardHeader>
                        <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={UNIV_BACKGROUND_IMAGE} />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                        <p className="text-sm text-white/60">Major: {UNIV_DEGREE}</p>
                        <p className="text-xs text-white/60">Minor: {UNIV_MINOR}</p>
                    </div>
                    </div>
        
                    </CardFooter>
                </Card>
    </div>
  );
}

export default Education;
