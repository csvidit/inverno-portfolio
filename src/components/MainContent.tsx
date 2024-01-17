const MainContent = (props: {children: React.ReactNode}) => {
    return <section className="w-screen lg:w-2/3 p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">{props.children}</section>
}

export default MainContent;