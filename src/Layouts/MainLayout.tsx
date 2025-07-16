type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="container mx-auto text-white">
      {children}
    </main>
  )
}

export default MainLayout