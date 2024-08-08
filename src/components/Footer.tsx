import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="container max-w-3xl m-auto px-4 py-4">
      <div className="flex flex-col">
        <span className="font-bold text-sm">© 2024 Muh. Khaerul</span>
        <span className="text-xs">
          All content of this website is distributed under the{" "}
          <Link className="underline" target="_blank" href="https://creativecommons.org/licenses/by-nc/4.0/">
            CC BY-NC license.
          </Link>
        </span>
      </div>
    </div>
  );
}
