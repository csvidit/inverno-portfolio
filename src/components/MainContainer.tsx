const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <main className={`flex flex-col items-center text-neutral-100 min-w-screen max-w-screen z-10`}>
      {props.children}
    </main>
  );
};

export default MainContainer;
