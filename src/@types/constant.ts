export const socialMediaUrl = {
  github: "https://github.com/haerulysin",
  linkedin: "https://www.linkedin.com/in/muhammad-khaerul-4019ba115/",
  x: "https://x.com/haerulysin_",
  instagram: "https://www.instagram.com/mdkruls/",
} as const;

export const bioData = `I'm Muh. Khaerul, a passionate Full-Stack Developer who wrote my first line of code in 2013. Over the years, I have honed my skills and specialized in NodeJS, TypeScript/JavaScript, ExpressJS, NestJS, React, T3/Next.JS, Redis, SQL, and NoSQL. These technologies have been my main field of expertise, allowing me to build robust and scalable web applications. I am particularly passionate about creating software for automation and making work easier. My goal is to develop solutions that streamline processes, enhance productivity, and deliver real value to users. Currently, I am expanding my knowledge by learning Golang, embracing new challenges, and continuously evolving as a developer. My educational background includes a bachelor's degree in computer science, which has provided me with a solid foundation in software development principles and practices.`;
export type Experience = {
  date: string;
  company: string;
  position?: string;
  description: string;
};
export const myExperience: Experience[] = [
  {
    date: "Oct - Dec 2018",
    company: "PT. Pelabuhan Indonesia IV (Persero)",
    position: "Internship",
    description:
      "IT Support, monitors and maintains the company computer systems and networks, installs, and configures hardware and software, and solves technical issues as they arise.",
  },

  {
    date: "Aug - Sep 2020",
    company: "PT. Asacreative Technology Indonesia",
    position: "Internship",
    description:
      "Develop a web application using the MERN stack (MongoDB, Express.js, React, Node.js) that assists construction workers in finding employment opportunities.",
  },

  {
    date: "Nov - Dec 2022",
    company: "PORPROV Banten 2022",
    position: "Contract",
    description:
      "Developing, Maintain, and Monitoring a comprehensive Kempo referee application using React and Laravel as main framework. ",
  },
] as const;

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
};

export const myOpenSourceProject: Project[] = [
  {
    name: "PKLSkuy",
    description: "Apps for finding local construction worker",
    techStack: ["JS", "ReactJS", "MongoDB"],
    // liveUrl:"",
    githubUrl: "https://github.com/haerulysin/PKLSkuy",
  },
{
    name: "HLVote - RESTful",
    description: "Electronic voting RESTful API using Hyperledger Fabric",
    techStack: ["Hyperledger Fabric", "TS", "ExpressJS"],
    // liveUrl:"",
    githubUrl: "https://github.com/haerulysin/HLF-Client-Rest-API",
  },
  
  // {
  //   name: "",
  //   description: "",
  //   techStack: [],
  //   // liveUrl:"",
  //   githubUrl: "",
  // },
];