import {
  Experience,
  myExperience,
  myOpenSourceProject,
  Project,
  socialMediaUrl,
} from "@/@types/constant";
import ContentHeader from "@/components/ContentHeader";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import StackList from "@/components/StackList";
import SubSection from "@/components/SubSection";
import GithubSVG from "@/components/svg/github.svg";
import Button from "@/components/ui/Button";
import HRule from "@/components/ui/HRule";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 mb-4">
      <ContentHeader />

      <HRule />

      <SubSection title="About Me">
        <div className="grid grid-cols-1 gap-2 ">
          <p className="i">
            I&apos;m Muh. Khaerul, a passionate Full-Stack Developer who wrote
            my first line of code in 2013. Over the years, I have honed my
            skills and specialized in NodeJS, TypeScript/JavaScript, ExpressJS,
            NestJS, React, T3/Next.JS, Redis, SQL, and NoSQL. These technologies
            have been my main field of expertise, allowing me to build robust
            and scalable web applications. I am particularly passionate about
            creating software for automation and making work easier. My goal is
            to develop solutions that streamline processes, enhance
            productivity, and deliver real value to users.
          </p>
          <p className="">
            Currently, I am expanding my knowledge by learning Golang, embracing
            new challenges, and continuously evolving as a developer. My
            educational background includes a bachelor&apos;s degree in computer
            science, which has provided me with a solid foundation in software
            development principles and practices.
          </p>
        </div>
      </SubSection>
      <HRule />

      <SubSection title="Experience">
        {myExperience.map((v: Experience, i: number) => (
          <ExperienceCard key={i} {...v} />
        ))}

        {/* <Link
          href={"#"}
          target="_blank"
          className="font-extrabold text-lg hover:underline"
        >
          {"Get my resume ->"}
        </Link> */}
      </SubSection>
      <HRule />

      <SubSection title="My Technology Stacks">
        <StackList />
      </SubSection>
      <HRule />

      <SubSection title="Open Source Projects">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {myOpenSourceProject.map((v: Project, i: number) => (
            <ProjectCard key={i} {...v} />
          ))}
        </div>
        <div className="my-8 py-2 text-center items-center">
          <Link
            href={socialMediaUrl.github}
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Button>
              <GithubSVG height={20} fill="#fff" /> View More On Github
            </Button>
          </Link>
        </div>
      </SubSection>
      <HRule />
    </div>
  );
}
