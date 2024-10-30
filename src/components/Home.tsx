// React
import { motion } from "framer-motion"

function Home() {
  return (
    <section className="home md:pt-0 pt-36 md:pl-0 grid items-center justify-center grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="md:pl-48 p-4 home-text grid justify-center items-center text-white md:w-[90%] text-left h-auto font-poppins">
        <h1 className="w-auto pb-2 mb-1 h-auto font-extrabold text-center md:text-left text-5xl md:text-6xl text-gradient">
          Amjad AlRasheed
        </h1>
        <p className="md:text-left text-center">
          I’m a Software Engineering student at MMU, Malaysia, with a passion
          for building systems and solving problems through innovative
          solutions. I specialize in Web Development, and enjoy exploring areas
          like Machine Learning and Computer Vision.
          <p className="mt-4">
            I have experience in various programming languages and frameworks,
            including JavaScript, Python, and React. I am always eager to learn
            new technologies and take on challenging projects.
          </p>
        </p>
      </div>
      <div className="md:mt-0 mt-16 image grid justify-center md:justify-start">
        <motion.img
          className="w-52 md:w-96 h-auto"
          src="/brand.png"
          alt="brand image"
          animate={{ y: [0, -20, 0] }} // Animation keyframes
          transition={{
            duration: 6, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        />
      </div>
    </section>
  );
}

export default Home;