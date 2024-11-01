import ProjectCard from "./ProjectCard"
function Projects() {
  return (
    <div className="md:p-5 md:px-16 px-6 projects bg-[#121212] min-h-screen">
      <h1 data-aos="zoom-in" data-aos-duration="100" className="md:text-5xl py-4 text-3xl text-white font-poppins font-bold md:my-6">Featured Projects</h1>
      <div data-aos="fade-left" data-aos-duration="500" className="container md:px-64 md:p-2 grid grid-cols-1 place-items-center gap-8">
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      </div>
    </div>
  )
}

export default Projects
