import { motion } from "framer-motion";
import React from "react";

const Transition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default Transition;
