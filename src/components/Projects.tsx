import ProjectCard from "./ProjectCard"
import { projects } from "./db"
function Projects() {
  return (
    <div id="projects" className="md:p-5 md:px-16 md:pt-36 pt-32 px-6 projects bg-[#121212] min-h-[193vh] md:min-h-screen">
      <h1 data-aos="zoom-in" data-aos-duration="100" className="md:text-5xl py-4 text-3xl text-white font-poppins font-bold md:my-6">Featured Projects</h1>
      <div data-aos="fade-left" data-aos-duration="500" className="container mx-auto md:px-64 md:p-2 grid grid-cols-1 place-items-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} image={project.img} link={project.link} gif={project.gif} />
        ))}
      </div>
    </div>
  )
}

export default Projects
