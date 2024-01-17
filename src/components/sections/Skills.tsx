import SkillItem from "../SkillItem";

const Skills = () => {
  return (
    <>
      <div className="lg:w-2/3 p-4 lg:p-8 self-start lg:self-center">
        <h2 className="text-2xl lg:text-4xl text-neutral-100">Skills</h2>
      </div>
      <section className="px-4 lg:px-8 flex flex-row gap-2 lg:gap-4 w-screen max-w-screen overflow-scroll">
        <SkillItem>Android Applications</SkillItem>
        <SkillItem>Web Development</SkillItem>
        <SkillItem>Generative AI</SkillItem>
        <SkillItem>Java</SkillItem>
        <SkillItem>Kotlin</SkillItem>
        <SkillItem>TypeScript</SkillItem>
        <SkillItem>Python</SkillItem>
        <SkillItem>PostgreSQL</SkillItem>
        <SkillItem>Next.js</SkillItem>
        <SkillItem>Firebase</SkillItem>
        <SkillItem>Supabase</SkillItem>
        <SkillItem>Vercel</SkillItem>
        <SkillItem>AWS</SkillItem>
        <SkillItem>Git</SkillItem>
        <SkillItem>GitHub</SkillItem>
      </section>
    </>
  );
};

export default Skills;
