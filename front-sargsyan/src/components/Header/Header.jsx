import { useEffect, useState } from "react";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { useStickyMenu } from "@/hooks/useStickyMenu";
import logoImage from "@/assets/logo/Logo.png";
import searchIcon from "@/assets/icons/Search/B.png";
import burgerIcon from "@/assets/icons/Search/burger_menu.png";

function Header({ onSearchToggle }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktopMenuHidden = useStickyMenu();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__inner">
          <button
            className="header__burger"
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <img className="header__burger-icon" src={burgerIcon} alt="" />
          </button>

          <h1 className="header__logo">
            <a href="/"><img className="header__logo-image" src={logoImage} alt="Logotype" /></a>
          </h1>

          <button className="header__search" type="button" aria-label="Search" onClick={onSearchToggle}>
            <img className="header__search-icon" src={searchIcon} alt="" />
          </button>
        </div>
      </div>
 <DesktopMenu isHidden={isDesktopMenuHidden} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;