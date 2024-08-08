import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="w-full m-auto items-center bg-gray-100 border-b sticky top-0 bg-opacity-30 backdrop-blur-lg transition-shadow mb-8">
      <div className="flex flex-row gap-1 h-full max-w-3xl m-auto items-center px-4">
        <Link
          href={"/"}
          className="flex items-start gap-1 py-4 hover:opacity-80"
        >
          <span className="title-nav text-black">.mdkrul.dev</span>
          <div className="flex items-center bg-black text-white px-2 py-1 rounded-md">
            <span className="subtitle-nav space-5">portofolio</span>
          </div>
        </Link>
      </div>
    </div>
  );
}