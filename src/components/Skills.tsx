import BallIcon from "./BallIcons";
import { techStack } from "./db";

function Skills() {
  return (
    <div className="md:p-5 md:px-16 px-6 skills bg-[#121212] h-[60vh] pt-20 md:pt-16 md:h-[60vh]" id="skills">
      <h1 data-aos="zoom-in" data-aos-duration="100" className="md:text-5xl py-4 text-4xl text-white font-poppins font-bold md:my-6">Skills</h1>
      <div className="container mx-auto md:px-64 md:p-2 flex flex-wrap justify-center items-center gap-4">
      {techStack.map((tech, index) => (
        <BallIcon key={index} icon={tech.icon} delay={index * 50}/>
      ))}
      </div>
    </div>
  );
}

export default Skills;
