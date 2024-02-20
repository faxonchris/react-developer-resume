import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { FaBriefcase } from "react-icons/fa6";
import { JOBS_ARRAY } from "../data/ResumeData";
import { Job } from "../types/Types";
import ListModal from "./ListModal";

function ExperiencesTimeline() {
  return (
    <Timeline className="mb-2">
      {JOBS_ARRAY.map((job: Job) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
              <div className="text-slate-600 text-sm">{job.years}</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <FaBriefcase
                  className={
                    JOBS_ARRAY.indexOf(job) === 0
                      ? "text-blue-600"
                      : "text-slate-500"
                  }
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="text-md">
              <div className="flex flex-col mb-1.5">
                <p className="text-md">{job.jobName}</p>
                <p className="text-xs text-default-500 text-wrap">
                  {job.companyName}
                </p>
                <p className="text-xs text-default-500">{job.location}</p>
              </div>
              <ListModal
                title={job.jobName + " at " + job.companyName}
                bullets={job.resumeBullets}
                skills={job.skills}
              />
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}

export default ExperiencesTimeline;
