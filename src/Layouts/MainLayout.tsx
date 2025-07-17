type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <main className="max-w-[1580px] mx-auto text-white">{children}</main>;
};

export default MainLayout;
