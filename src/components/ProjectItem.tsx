"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";

const mainVariants = {
  initial: {
    boxShadow: "inset 0px 0px 8px 0px #404040",
  },
  hover: {
    boxShadow: "inset 0px 0px 16px 0px #404040",
  },
};

const ProjectItem = (props: {title: string; href: string; tag: string; children: React.ReactNode}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={props.href}>
      <motion.div
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        //   initial="initial"
        //   whileHover="hover"
        //   variants={mainVariants}
        //   transition={{ type: "linear", duration: 0.2, delay: 0}}
        style={{
          boxShadow: hover
            ? "inset 0px 0px 16px 0px #404040"
            : "inset 0px 0px 8px 0px #404040",
        }}
        className={`relative group rounded-md min-w-80 min-h-60 max-w-80 max-h-60 p-2 lg:p-4 flex flex-col gap-2 justify-between border-r border-l border-transparent border-dashed hover:border-neutral-500 transition-all duration-200 ease-in-out`}
      >
        <div className="flex flex-col gap-2">
          <div className="text-xl lg:text-2xl text-neutral-100">{props.title}</div>
          <div className="text-neutral-300 text-sm">
            {props.children}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="rounded-full w-fit text-xs px-4 py-1 bg-orange-950 bg-opacity-50 text-orange-500 capitalize">
            {props.tag}
          </div>
          <PiArrowUpRight className="text-neutral-100 group-hover:text-orange-500 transition-all duration-200 ease-in-out group-hover:-translate-y-2" />
        </div>
        <AnimatePresence>
          {hover && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default ProjectItem;
