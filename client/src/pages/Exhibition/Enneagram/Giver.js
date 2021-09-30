import { motion } from "framer-motion";
import React from "react";
import Navigation from "../../../components/Navigation";
import TypeInfo from "../../../components/TypeInfo";
import { types } from "../../../Static";

export default function Giver() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation route="/Exhibition/Enneagram" noanim />
      <div className="flex justify-center items-center h-auto w-full">
        <div className="flex max-w-screen-lg px-10 xl:px-0 justify-center items-center pt-40">
          <TypeInfo
            title={types.type2.title}
            description={types.type2.description}
            strength={types.type2.strength}
            weakness={types.type2.weakness}
            handle={types.type2.handle}
            celeb={types.type2.celeb}
          />
        </div>
      </div>
    </motion.div>
  );
}
