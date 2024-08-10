import React from "react";

interface SubSectionProps {
  children?: React.ReactNode;
  title: string;
}
export default function SubSection({ children, title }: SubSectionProps) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="font-extrabold text-xl mb-4">{title}</h1>
        <div className="text-">{children}</div>
      </div>
    </>
  );
}
