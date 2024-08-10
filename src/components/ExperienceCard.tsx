import { Experience } from "@/@types/constant";
import React from "react";

export default function ExperienceCard(props: Experience) {
  return (
    <div className="max-w-[400px] mb-4">
      <span className="font-light text-sm">{props.date}</span>
      <h2 className="font-bold">
        {props.company} {props.position ? ` - ${props.position}` : ""}
      </h2>
      <p className="text-sm">{props.description}</p>
    </div>
  );
}
