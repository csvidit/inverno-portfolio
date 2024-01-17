"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const OpenToWork = () => {
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
        boxShadow: "inset 0px 0px 8px 0px #047857",
      }}
      className="w-fit max-w-fit rounded-full text-sm bg-gradient-to-b from-transparent from-60% to-emerald-950  py-1 lg:py-2 px-2 lg:px-4"
    >
      <p>Currently open to new positions</p>
    </motion.div>
  );
};

export default OpenToWork;
