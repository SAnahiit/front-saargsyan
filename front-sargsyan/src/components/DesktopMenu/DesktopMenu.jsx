import { menuItems } from "../../data/menuItems";

function DesktopMenu({ isHidden }) {
  return (
    <nav className={`desktop-menu ${isHidden ? "desktop-menu--hidden" : ""}`}>
      <ul className="desktop-menu__list">
        {menuItems.map((item) => (
      <li className="desktop-menu__item" key={item.label}>
          <a className={`desktop-menu__link ${
                item.submenu && item.submenu.length > 0 ? "desktop-menu__link--has-chevron" : ""
              }`} 
              href={item.href}
            >
              {item.label}
            </a>
            {item.submenu.length > 0 && (
              <ul className="desktop-menu__submenu">
                {item.submenu.map((submenuItem) => (
                  <li className="desktop-menu__submenu-item" key={submenuItem}>
                    <a className="desktop-menu__submenu-link" href="#">
                      {submenuItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopMenu;