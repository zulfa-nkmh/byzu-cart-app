"use client";

import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
  const words = text.split(" ");

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.3,
            type: "spring",
            stiffness: 300,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
