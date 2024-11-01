interface SkillBallProps{
    icon: string;
    delay?: number;
}

function BallIcon({icon, delay}: SkillBallProps) {
  return (
    <div data-aos="zoom-in" data-aos-duration="300" data-aos-delay={delay} className="container items-center justify-center grid rounded-full w-16 h-16 md:w-24 md:h-24 bg-[#251C31]">
      <img className=" h-9 w-9 md:w-14 md:h-14" src={icon} alt="" />
    </div>
  )
}

export default BallIcon
