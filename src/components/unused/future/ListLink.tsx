"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";

const ListLink = (props: {
  index: number;
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  hoveredLinkId: any;
  setHoveredLinkId: any;
  className?: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={props.href}
      rel="noreferrer noopener"
      target={props.href.startsWith("https") ? "_blank" : "_self"}
      className={`group text-neutral-500 w-full hover:text-neutral-100 transition-all duration-200 ease-in-out lg:text-xl ${props.className}`}
    >
      <motion.div
        onHoverStart={() => {
          setHover(true);
          props.setHoveredLinkId(props.index);
        }}
        onHoverEnd={() => {
          setHover(false);
          props.setHoveredLinkId(null);
        }}
        layout
        style={{boxShadow: hover ? "inset 0px 0px 16px 0px #404040" : "inset 0px 0px 8px 0px #404040"}}
        className="w-full p-1 lg:p-2 rounded-md bg-transparent border border-transparent border-dashed group-hover:border-neutral-500 border-neutral-700 relative flex flex-row justify-between items-center transition-all duration-200 ease-in-out"
      >
        <motion.span
          layout
          className="flex flex-row space-x-2 lg:space-x-4 z-20 items-center"
        >
          <motion.span className="text-xs">{props.icon}</motion.span>
          <motion.span>{props.children}</motion.span>
        </motion.span>
        <motion.span className="z-20">
        {props.href.startsWith("https") ? <PiArrowUpRight/> : <PiArrowRight/>}
        </motion.span>
        {/* <AnimatePresence>
          {props.hoveredLinkId == props.index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              layoutId="footer-link-hover-bg"
              className="absolute left-0 self-center justify-center w-full h-full border border-dashed border-neutral-600 rounded-md"
            ></motion.div>
          )}
        </AnimatePresence> */}
      </motion.div>
    </Link>
  );
};

export default ListLink;
