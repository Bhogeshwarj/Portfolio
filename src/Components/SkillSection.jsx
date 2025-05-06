import SkillsCard from "./SkillCard";

const SkillSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className=" text-3xl lg:text-5xl font-bold mb-10">My Skills</h1>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <SkillsCard title={"React Native"} />
        <SkillsCard title={"NextJs"} />
        <SkillsCard title={"Tailwind css"} />
        <SkillsCard title={"NodeJs"} />
        <SkillsCard title={"Typescript"} />
        <SkillsCard title={"Next Js"} />
        <SkillsCard title={"AWS"} />
        <SkillsCard title={"Docker"} />
      </div>
    </div>
  );
};

export default SkillSection;
