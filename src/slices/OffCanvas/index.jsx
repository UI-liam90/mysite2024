import { useStore } from "@nanostores/react";
import { isNavOpen } from "src/context/nanoContext";
import ScreenVisibility from "~helpers/ScreenVisibility";
import Menu from "~components/Menu";
import { getMenu } from "~data/global";

import "./style.scss";

const menu = await getMenu();

const OffCanvas = () => {
    const $isNavOpen = useStore(isNavOpen);
    return (
        <ScreenVisibility mediaQuery={"(min-width: 1024px)"} hideOnMediaQuery={true}>
            <button className="off-canvas-button" onClick={() => isNavOpen.set(!$isNavOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
                <h5>menu</h5>
            </button>
            <nav id="off-canvas-menu" className={`off-canvas off-canvas--${$isNavOpen === true ? "open" : "closed"}`}>
                <div className="off-canvas__inner">
                    <button className="off-canvas__close" aria-label="Close Menu" onClick={() => isNavOpen.set(!$isNavOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                        </svg>
                    </button>
                </div>
                <Menu className="offcanvas-menu" menuData={menu.menuItems} />
            </nav>
        </ScreenVisibility>
    );
};
export default OffCanvas;
