const ExperienceItem = (props: { duration: string; title: string; company: string; children: React.ReactNode }) => {

  return (
    <div
      className="relative group w-full min-h-60 flex flex-col gap-2 transition-all duration-200 ease-in-out"
    >
      <div className="flex flex-row items-center gap-1 lg:gap-2 text-orange-500">
        <div className="h-[1px] w-4 lg:w-8 bg-gradient-to-r from-transparent to-orange-500" />
        <div className="text-orange-500 uppercase">{props.duration}</div>
        <div className="border-t border-dashed border-neutral-500 grow w-max" />
      </div>

      <div className="flex flex-col p-2 lg:p-4 gap-2">
        <div className="text-xl lg:text-2xl text-neutral-100 capitalize">
          {props.title}
        </div>
        <div className="text-orange-500 text-lg lg:text-xl capitalize">{props.company}</div>
       {props.children}
      </div>
    </div>
  );
};

export default ExperienceItem;
