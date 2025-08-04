import MobileMenu from "@/Components/Other/MobileMenu";
import useMobileMenuStore from "@/stores/MobileMenuStore";
import { useMediaQuery } from "react-responsive";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const showMobileMenu = useMobileMenuStore((state) => state.showMobileMenu);
  return (
    <main className="max-w-[1580px] mx-auto text-white overflow-x-hidden">
      {children}
      {isMobile && showMobileMenu && <MobileMenu />}
    </main>
  );
};

export default MainLayout;
