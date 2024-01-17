import ProjectItem from "../ProjectItem";

const Projects = () => {
  return (
    <>
      <div className="lg:w-2/3 p-4 lg:p-8 self-start lg:self-center">
        <h2 className="text-2xl lg:text-4xl text-neutral-100">Projects</h2>
      </div>
      <section className="px-4 lg:px-8 flex flex-row gap-2 lg:gap-4 w-screen max-w-screen overflow-scroll">
        <ProjectItem
          title="Portfolio"
          href="https://viditkhandelwal.com"
          tag="in production"
        >
          My comprehensive portfolio website built with Next.js
        </ProjectItem>
        <ProjectItem
          title="Turbobiz"
          href="https://github.com/turbobiz"
          tag="in production"
        >
          Generate a business idea by leveraging the power of cutting-edge
          generative AI
        </ProjectItem>
        <ProjectItem
          title="Xzayvian"
          href="https://github.com/turbobiz"
          tag="in refactoring"
        >
          A chatbot based on GPT 3.5 and 4 LLMs and made from scratch in
          Next.js.
        </ProjectItem>
        <ProjectItem
          title="Snippetopia"
          href="https://snippetopia.xyz"
          tag="new"
        >
          A collection of free React, Next.js, TailwindCSS, and Framer Motion
          snippets and templates
        </ProjectItem>
        <ProjectItem
          title="Lume"
          href="https://lume.csvid.it"
          tag="new"
        >
          A collection of high quality wallpapers and digital assets
        </ProjectItem>
      </section>
    </>
  );
};

export default Projects;
