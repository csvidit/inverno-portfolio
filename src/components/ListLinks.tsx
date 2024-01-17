"use client";

import { RiTwitterXLine } from "react-icons/ri";
import FooterIconLink from "./IconLink";
import {
  PiEnvelope,
  PiFilePdf,
  PiGithubLogo,
  PiLinkedinLogo,
  PiPen,
  PiReadCvLogo,
} from "react-icons/pi";
import { LiaReadme } from "react-icons/lia";
import { motion } from "framer-motion";
import { useState } from "react";
import ListLink from "./ListLink";
import { RxShadowNone } from "react-icons/rx";

const footerIcons = [
  {
    href: "https://lume.csvid.it",
    label: "Lume Wallpapers",
  },
  {
    href: "https://snippetopia.xyz",
    label: "Snippetopia Templates and Snippets",
  },
];

const ListLinks = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  return (
    <motion.div
      layout
      layoutRoot
      className="w-full flex flex-col space-y-4 lg:space-y-8 justify-center items-center"
    >
      {footerIcons.map((icon, index) => {
        return (
          <ListLink
            index={index}
            key={index}
            href={icon.href}
            // icon={icon.icon}
            hoveredLinkId={hoveredLinkId}
            setHoveredLinkId={setHoveredLinkId}
          >
            {icon.label}
          </ListLink>
        );
      })}
    </motion.div>
  );
};

export default ListLinks;
