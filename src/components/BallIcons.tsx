import { motion } from "framer-motion";
import { useState } from "react";

interface SkillBallProps {
  icon: string;
  delay?: number;
  text?: string; // Add a text prop for the hover text,
  link?: string; // Add a link prop for the onClick event
}

function BallIcon({ icon, delay, text, link }: SkillBallProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (link){
      window.open(link, "_blank");
    }
  }

  return (
    <div data-aos="zoom-in" data-aos-duration="300" data-aos-delay={delay}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="relative container items-center justify-center grid rounded-full w-16 h-16 md:w-24 md:h-24 bg-[#251C31]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleClick()}
      >
        <img className="h-9 w-9 select-none md:w-14 md:h-14" src={icon} alt="" />
        {isHovered && (
          <div className="font-poppins absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-max bg-black text-white text-xs p-1 rounded z-50">
            {text}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default BallIcon;