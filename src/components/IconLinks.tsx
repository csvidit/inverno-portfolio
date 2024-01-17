"use client";

import { RiTwitterXLine } from "react-icons/ri";
import {
  PiEnvelope,
  PiGithubLogo,
  PiLinkedinLogo,
  PiPen,
  PiReadCvLogo,
} from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";
import IconLink from "./IconLink";

const footerIcons = [
  {
    href: "https://github.com/csvidit",
    label: "GitHub",
    icon: <PiGithubLogo />,
  },
  {
    href: "https://viditkhandelwal.com/blog",
    label: "Blog",
    icon: <PiPen />,
  },
  {
    href: "https://twitter.com/csvidit",
    label: "X/Twitter",
    icon: <RiTwitterXLine />,
  },
  {
    href: "https://linkedin.com/in/viditkhandelwal",
    label: "LinkedIn",
    icon: <PiLinkedinLogo />,
  },
  {
    href: "https://read.cv/viditkhandelwal",
    label: "ReadCV",
    icon: <PiReadCvLogo />,
  },
  {
    href: "mailto:viditk17@gmail.com",
    label: "Email",
    icon: <PiEnvelope />,
  },
];

const IconLinks = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  return (
    <motion.div
      layout
      layoutRoot
      className="w-fit flex flex-row justify-center items-center space-x-0"
    >
      {footerIcons.map((icon, index) => {
        return (
          <IconLink
            index={index}
            key={index}
            href={icon.href}
            label={icon.label}
            hoveredLinkId={hoveredLinkId}
            setHoveredLinkId={setHoveredLinkId}
          >
            {icon.icon}
          </IconLink>
        );
      })}
    </motion.div>
  );
};

export default IconLinks;
