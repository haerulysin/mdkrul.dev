import { Project } from "@/@types/constant";
import React from "react";
import ArrowRightUp from "./svg/ArrowRightUp.svg";
import Link from "next/link";

export default function ProjectCard(props: Project) {
  return (
    <>
      <div className="border min-h-32 w-full px-3 py-2 rounded-md flex flex-col justify-between">
        <div className="">
          <Link href={props.githubUrl} target="_blank" className="group">
            <div className="flex w-fit gap-0.5 text-gray-700 duration-500  group-hover:text-black">
              <h2 className="font-bold text-lg ">{props.name}</h2>
              <ArrowRightUp
                width={10}
                className="duration-300 group-hover:translate-x-1  group-hover:-translate-y-0.5"
              />
            </div>
          </Link>

          <p className="overflow-hidden text-left">{props.description}</p>
        </div>

        <div className="project-card flex gap-2">
          {props.techStack.map((v, i) => (
            <span
              key={i}
              className="border px-2 py-0.5 rounded-md bg-zinc-600 text-white"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
