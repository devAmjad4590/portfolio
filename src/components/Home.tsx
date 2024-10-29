function Home() {
  return (
    <section className="home grid items-center justify-center grid-cols-1 md:grid-cols-[60%_40%]">
      <div className="pl-48 home-text text-white w-[90%] text-left justify-center items-center grid h-auto font-poppins">
        <h1 className=" w-auto pb-2 mb-1 h-auto font-extrabold text-left text-6xl text-gradient">
          Amjad AlRasheed
        </h1>
        <p>
          I’m a Software Engineering student at MMU, Malaysia, with a passion
          for building systems and solving problems through innovative
          solutions. I specialize in Web Development, and enjoy exploring areas
          like Machine Learning and Computer Vision.
          <p className="mt-4"> I have experience in
          various programming languages and frameworks, including JavaScript,
          Python, and React. I am always eager to learn new technologies and
          take on challenging projects.
          </p>
        </p>
      </div>
      <div className="image">
        <img className="w-96 h-auto" src="/brand.png" alt="brand image" />
      </div>
    </section>
  );
}

export default Home;