import OpenToWork from "../OpenToWork";

const About = () => {
  return (
    <section className="flex flex-col gap-2 lg:gap-4">
      {/* <h2>About</h2> */}
      <p className="text-neutral-500 lg:text-2xl">
        I am particularly strong in full-stack web development using frameworks
        like Next.js, and have a track record of great outcomes in native
        Android development. I like the design part of development as well as
        the backend, because that puts the focus back on end user. I am very
        adaptive, having performed well in both team and independent
        professional and leadership environments. I understand business as well
        as I do code, and thrive in the intersection of the two.
      </p>
      <OpenToWork />
    </section>
  );
};

export default About;
