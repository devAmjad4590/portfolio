import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {motion} from "framer-motion";



interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gif: string;
}

function ProjectCard({ title, description, image, link, gif }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="container rounded-xl bg-[#251C31] w-72 h-auto md:w-[28rem] px-3 py-3 md:px-7 md:py-5"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-left text-base md:text-lg text-white font-poppins font-semibold mb-2">
        {title}
      </h2>
      <img
        src={isHovered ? `${gif}` : `${image}`}
        className="rounded-xl object-cover md:h-60 h-44 md:h-52 w-[100%] mb-3 "
        alt=""
      />
      <div className="container bg-opacity-80 rounded-xl p-2 bg-[#302444] text-left text-[#CCD6F6]">
        <p className="text-sm">
          {description}
        </p>
      </div>
      <div className="flex justify-start mt-6">
        <a
          className="flex items-center text-sm text-white font-poppins"
          href={link}
          target="_blank"
        >
          View Project
          <ArrowUpRight size={20} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
