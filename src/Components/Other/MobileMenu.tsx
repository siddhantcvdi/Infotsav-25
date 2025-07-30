import { NavLink } from "react-router-dom";

const MobileMenu = () => {
    const menuOptions = [
        { label: "Home", href: "/" },
        { label: "Events", href: "/events" },
        { label: "Sponsors", href: "/sponsors" },
        { label: "Ambassador", href: "/campus-ambassador" },
        { label: "Contact", href: "/contact" },
    ];
  return (
    <div className="w-screen h-screen absolute bg-black/50 backdrop-blur-md z-20 top-0 flex flex-col">
        {
            menuOptions.map((option, index) => <NavLink to={option.href} className={'font-realwood text-2xl'} key={index}>{option.label}</NavLink>)
        }
    </div>
  )
}

export default MobileMenu