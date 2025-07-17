type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="max-w-[1500px] mx-auto text-white">
      {children}
    </main>
  )
}

export default MainLayout