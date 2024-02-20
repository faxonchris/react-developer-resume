export interface Project {
    projectName : string;
    projectDesc : string;
    link? : string;
    imageLink? : string;
    cardBackgroundImageLink? : string;
    years : string;
    resumeBullets : Array<string>;
    skills : Array<string>;
}

export interface Job {
    companyName? : string;
    jobName : string;
    location : string;
    years : string;
    resumeBullets : Array<string>;
    skills : Array<string>;
}

export interface IListModalProps {
    title : string;
    bullets : Array<string>;
    skills : Array<string>;
    buttonSize? : "sm" | "md" | "lg" | undefined;
    image? : string;
}