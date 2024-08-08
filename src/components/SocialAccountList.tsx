import { socialMediaUrl } from "@/@types/constant";
import Link from "next/link";
import React from "react";
import GithubSVG from "./svg/github.svg";
import LinkedInSVG from "./svg/linkedin.svg";
import TwitterSVG from "./svg/twitter.svg";
import InstagramSVG from "./svg/instagram.svg";
import SocialLink from "./ui/SocialLink";

export default function SocialAccountList() {
  return (
    <div className="flex flex-row gap-3">
      <SocialLink hrefUrl={socialMediaUrl.github}>
        <GithubSVG width={25} />
      </SocialLink>

      <SocialLink hrefUrl={socialMediaUrl.github}>
        <LinkedInSVG width={25} />
      </SocialLink>

      <SocialLink hrefUrl={socialMediaUrl.github}>
        <TwitterSVG width={25} />
      </SocialLink>

      <SocialLink hrefUrl={socialMediaUrl.github}>
        <InstagramSVG width={25} />
      </SocialLink>
    </div>
  );
}
