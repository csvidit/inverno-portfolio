"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SkillItem = (props: { children: React.ReactNode }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      style={{
        boxShadow: hover
          ? "inset 0px 0px 16px 0px #404040"
          : "inset 0px 0px 8px 0px #404040",
      }}
      className={`rounded-md py-1 lg:py-2 px-2 lg:px-4 flex flex-col gap-2 justify-between border-r border-l border-transparent border-dashed hover:border-neutral-500 transition-all duration-200 ease-in-out`}
    >
      {props.children}
    </motion.div>
  );
};


export default SkillItem;