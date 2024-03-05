import { useState } from "react";
import menuBuilder from "~helpers/menuHelper";
import MenuItem from "./MenuItem";

import "./style.scss";

const Menu = ({ menuData, className, setOffcanvasState }) => {
    const initialMenuStatus = {};
    const menuItems = menuBuilder(menuData.nodes);

    const toggleMenuStatus = (itemId) => {
        setMenuStatus((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };

    const [menuStatus, setMenuStatus] = useState(initialMenuStatus);

    return (
        <ul className={`${className}`}>
            {menuItems.map((item) => {
                return (
                    <li className={`menu-item ${item.children && item.children.length > 0 ? "menu-item--has-children" : ""}  menu-item--${menuStatus[item.id] ? "open" : "closed"}`} key={item.id}>
                        <MenuItem item={item} />

                        {item.children && item.children.length > 0 ? (
                            <>
                                <button onClick={() => toggleMenuStatus(item.id)} onKeyDown={() => toggleMenuStatus(item.id)} className="dropdown-arrow" aria-label="Open Dropdown Menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                    </svg>
                                </button>
                                <ul className="sub-menu">
                                    {item.children.map((subItem) => {
                                        return (
                                            <li className="menu-item menu-item--sub-item" key={subItem.id}>
                                                <MenuItem item={subItem} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        ) : null}
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
