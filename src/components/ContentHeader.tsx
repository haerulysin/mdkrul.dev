import React from "react";
import SocialAccountList from "./SocialAccountList";

export default function ContentHeader() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-4xl">Muh. Khaerul</h1>
        <span className="font-semibold text-sm -mt-1">
          Full-Stack Developer
        </span>
      </div>
      <span className="font-light text-xs -mt-2 mb-1">
        Passionate about creating anykinds tools that make work easier.
      </span>
      <SocialAccountList />
    </div>
  );
}
