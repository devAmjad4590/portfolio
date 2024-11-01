import { ArrowUpRight } from 'lucide-react';

function ProjectCard() {
  return (
    <div className="container rounded-xl bg-[#251C31] w-72 h-auto md:w-[28rem] px-3 py-3 md:px-7 md:py-5">
      <h2 className="text-left text-base md:text-lg text-white font-poppins font-semibold mb-2">
        Example Project
      </h2>
      <img
        src="/bg.jpg"
        className="rounded-xl object-cover h-44 md:h-52 w-[100%] mb-3 "
        alt=""
      />
      <div className="container bg-opacity-80 rounded-xl p-2 bg-[#302444] text-left text-[#CCD6F6]">
        <p className="text-sm">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
      </div>
      <div className="flex justify-start mt-6">
        <a className="flex items-center text-sm text-white font-poppins" href="">
          View Project
          <ArrowUpRight size={20} className="ml-1" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
