import SkillItem from "../SkillItem";

const Skills = () => {
  return (
    <section className="flex flex-col gap-2 lg:gap-4">
      <h2>Skills</h2>
      <div className="flex flex-row gap-2 lg:gap-4 flex-wrap">
        <SkillItem>Android Applications</SkillItem>
        <SkillItem>Web Development</SkillItem>
        <SkillItem>Java</SkillItem>
        <SkillItem>Kotlin</SkillItem>
        <SkillItem>TypeScript</SkillItem>
        <SkillItem>Next.js</SkillItem>
        <SkillItem>Firebase</SkillItem>
        <SkillItem>Git</SkillItem>
      </div>
    </section>
  );
};

export default Skills;
