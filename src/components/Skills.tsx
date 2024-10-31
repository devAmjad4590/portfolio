import SkillBall from "./SkillBall";

function Skills() {
  return (
    <div className="md:p-5 md:px-16 px-6 skills bg-[#121212] h-[100vh]">
      <h1 className="md:text-6xl py-4 text-4xl text-white font-poppins font-bold md:my-6">Skills</h1>
      <div className="container md:px-64 md:p-2 flex flex-wrap justify-center items-center gap-4">
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      <SkillBall icon="test" ></SkillBall>
      </div>
    </div>
  );
}

export default Skills;
