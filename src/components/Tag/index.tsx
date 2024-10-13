"use client";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
type TagProps = ComponentProps<typeof motion.h1> & {
  title: string;
};

const Tag = ({ title, ...rest }: TagProps) => {
  return (
    <motion.h1
      {...rest}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="px-2 py-1 bg-complementary-gray/50 dark:bg-lightScheme-tertiary/50 rounded-full"
      id={title}
    >
      {title}
    </motion.h1>
  );
};

export default Tag;
