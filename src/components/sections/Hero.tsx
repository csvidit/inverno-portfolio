import IconLinks from "../IconLinks";

const Hero = () => {
  return (
    <section className="relative mt-16 lg:mt-32 flex flex-col space-y-2 justify-start border-dashed pb-2 lg:pb-4 border-b border-neutral-700">
      {/* <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent to-indigo-700" /> */}
      <h1 className="text-2xl lg:text-4xl ">Vidit Khandelwal</h1>
      <p className="lg:text-2xl text-neutral-500">Software Engineer</p>
      <IconLinks />
    </section>
  );
};

export default Hero;
