import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  children: React.JSX.Element;
  hrefUrl: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({
  children,
  hrefUrl
}: SocialLinkProps) => {
  return (
    <Link href={hrefUrl} target="_blank" className="hover:scale-125 transition duration-300" aria-label={hrefUrl}>
      {children}
    </Link>
  );
};

export default React.memo(SocialLink);
