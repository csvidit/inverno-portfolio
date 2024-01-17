const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <main className={`flex flex-col items-center text-neutral-100 min-w-screen max-w-screen`}>
      {props.children}
    </main>
  );
};

export default MainContainer;
