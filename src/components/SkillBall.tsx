interface SkillBallProps{
    icon: string;
}

function SkillBall({icon}: SkillBallProps) {
  return (
    <div className="container items-center justify-center grid rounded-full w-16 h-16 md:w-24 md:h-24 bg-[#251C31]">
      <img className="w-14 h-14" src="/brand.png" alt="" />
      {/* {icon} */}
    </div>
  )
}

export default SkillBall
