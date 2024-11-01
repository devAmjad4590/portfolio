// React
import { motion } from "framer-motion"
import { description } from "./db";

function Home() {
  return (
    <section className="home md:min-h-[120vh] min-h-[135vh] md:pt-0 pt-36 md:pl-0 grid items-center justify-center grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="md:pl-48 p-4 home-text grid justify-center items-center text-white md:w-[90%] text-left h-auto font-poppins">
        <h1 data-aos="fade-right" className="w-auto pb-2 mb-1 h-auto font-extrabold text-left md:text-left text-5xl md:text-6xl text-gradient">
          Amjad AlRasheed
        </h1>
        <p data-aos="fade-left" data-aos-duration="500" className="md:text-left text-left md:text-lg text-sm">
          {description.msg1}
          <p data-aos="fade-left" data-aos-duration="500" className="mt-4">
            {description.msg2}
          </p>
        </p>
      </div>
      <div data-aos="fade-left" className="md:mt-0 mt-16 image grid justify-center md:justify-start">
        <motion.img
          className="w-52 md:w-96 h-auto"
          src="/brand.png"
          alt="brand image"
          animate={{ y: [0, -20, 0] }} // Animation keyframes
          transition={{
            duration: 5, // Duration of one cycle
            repeat: Infinity, // Repeat infinitely
            repeatType: "loop", // Loop the animation
          }}
        />
      </div>
    </section>
  );
}

export default Home;