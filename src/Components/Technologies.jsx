import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
       whileInView={{ opacity: 1, y:0 }}
       initial={{ opacity:0, y:-100 }}
       transition={{duration: 1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div  
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPython className="text-7xl text-yellow-500 "/>
        </motion.div>
        <motion.div 
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql  className="text-7xl text-orange-500"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            < DiJavascript1 className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDjango className="text-7xl text-green-400"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiHtml5 className="text-7xl text-red-400"/>
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCss3 className="text-7xl text-blue-400"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
