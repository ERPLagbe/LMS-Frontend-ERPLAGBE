import MegaMenuOne from "@/components/Menu/MegaMenuOne";
import Image from "next/image";
import Link from "next/link";

const defaultData = {
  classNames: {
    header: "header__main",
    menu: "",
    item: "",
  },
  menus: [],
};

export default function MenuTwo({ data = defaultData }) {
  return (
    <nav className="header__main">
      {data.menus && data.menus.length > 0 && (
        <ul className="main-menu">
          {data.menus.map((menu, index) => (
            <li
              key={index}
              className={`menu-item ${data.classNames.item} ${
                menu.subMenus && menu.subMenus.length > 0 ? "dropdown-icon" : ""
              } ${menu.megaMenu ? "dropdown-icon has-megamenu" : ""}`}
            >
              {menu.logo && (
                <Link className="header__logo" href="online-university">
                  <Image src={menu.logo} alt="Logo" />
                </Link>
              )}
              {menu.name && <Link href={menu.link ?? "#"}>{menu.name}</Link>}
              {/* mega menu  */}
              {menu.megaMenu && menu.megaMenu.length > 0 ? (
                <div className="has-dropdown">
                  <MegaMenuOne menus={menu.megaMenu} />
                </div>
              ) : (
                menu.subMenus &&
                menu.subMenus.length > 0 && (
                  <ul className="has-dropdown sub-menu">
                    {menu.subMenus.map((subMenu, i) => (
                      <li
                        key={i}
                        className={`menu-item ${
                          subMenu.menus && subMenu.menus.length > 0
                            ? "menu-item-has-children dropdown-icon"
                            : ""
                        }`}
                      >
                        {subMenu.name && (
                          <Link href={subMenu.link}>{subMenu.name}</Link>
                        )}
                        {subMenu.menus && subMenu.menus.length > 0 && (
                          <ul className="has-dropdown sub-menu">
                            {subMenu.menus.map((subMenuItem, key) => (
                              <li key={key} className="menu-item">
                                <Link href={subMenuItem.link}>
                                  {subMenuItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
