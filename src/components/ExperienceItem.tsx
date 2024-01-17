"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { TbArrowMoveRight } from "react-icons/tb";

const ExperienceItem = (props: { duration: string; title: string; company: string; children: React.ReactNode }) => {
  const [hover, setHover] = useState(false);

  return (
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
      //   style={{
      //     boxShadow: hover
      //       ? "inset 0px 0px 16px 0px #404040"
      //       : "inset 0px 0px 8px 0px #404040",
      //   }}
      className="relative group w-full min-h-60 flex flex-col gap-2 transition-all duration-200 ease-in-out"
    >
      <div className="flex flex-row items-center gap-1 lg:gap-2 text-orange-500">
        <div className="border-t w-4 lg:w-8 border-dashed border-orange-500" />
        {/* <TbArrowMoveRight className="text-lg lg:text-xl" /> */}
        <div className="text-orange-500 uppercase">{props.duration}</div>
        <div className="border-t border-dashed border-neutral-500 grow w-max" />
      </div>

      <div className="flex flex-col p-2 lg:p-4 gap-2">
        <div className="text-xl lg:text-2xl text-neutral-100 capitalize">
          {props.title}
        </div>
        <div className="text-orange-500 text-lg lg:text-xl capitalize">{props.company}</div>
       {props.children}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
