import { useState } from "react";
import { menuItems } from "@/data/menuItems";
import logoImage from "@/assets/logo/Logo.png";
import closeIcon from "@/assets/icons/Search/close_btn.png";

function MobileMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (itemLabel, hasSubmenu, e) => {
    if (!hasSubmenu) return;
    e.preventDefault();
    setActiveMenu(activeMenu === itemLabel ? null : itemLabel);
  };

  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <aside className="mobile-menu__panel">
        <div className="mobile-menu__head">
          <a className="mobile-menu__logo" href="#">
            <img
              className="mobile-menu__logo-image"
              src={logoImage}
              alt="Logotype"
            />
          </a>

    <button className="mobile-menu__close"
            type="button"
            aria-label="Close menu"
            onClick={onClose}>
            <img className="mobile-menu__close-icon" src={closeIcon} alt="" />
          </button>
    </div>

        <nav className="mobile-menu__nav">
          {menuItems.map((item) => (
            <div key={item.label} className="mobile-menu__item">
              <a
                className={`mobile-menu__link ${
                  item.submenu?.length > 0 ? "mobile-menu__link--has-arrow" : ""
                } ${activeMenu === item.label ? "mobile-menu__link--active" : ""}`}
                href={item.href}
                onClick={(e) => handleMenuClick(item.label, item.submenu?.length > 0, e)}
              >
                {item.label}
              </a>

              {item.submenu?.length > 0 && (
                <ul className={`mobile-menu__submenu ${activeMenu === item.label ? "mobile-menu__submenu--open" : ""}`}>
                  {item.submenu.map((subItem) => (
                    <li key={subItem} className="mobile-menu__submenu-item">
                      <a href="#" className="mobile-menu__submenu-link">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default MobileMenu;