import { useState } from "react";
import MainMenuBody from "./MainMenuBody";
import MainMenuFooter from "./MainMenuFooter";
import MainMenuHeader from "./MainMenuHeader";
import Logo from "../../../assets/_logo.png";

interface MainMenuProps {
    onClick: () => void;
}

const MainMenu = ({ onClick }: MainMenuProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const handleCloseAnimation = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClick();
        }, 500);
    };
    return (
        <>
            <div
                className={`absolute w-screen h-screen z-[11]  ${
                    isClosing ? "animate-slideFadeOut" : "animate-slideFadeIn"
                }`}
            >
                <div
                    className={`lg:absolute lg:flex flex-col justify-between lg:h-screen lg:bg-white lg:w-[120px] place-items-center ${
                        isClosing
                            ? "animate-slideFadeOut"
                            : "animate-slideFadeIn"
                    }`}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="absolute lg:-rotate-90  lg:top-24 lg:w-36 top-3 lg:left-0 left-6 h-9 w-24"
                    />
                    <div className="hidden lg:block absolute -rotate-90 h-5 text-nowrap bottom-[160px] text-sm text-gray-500">
                        Copyright(C)2021 EUNMIN. All rights reserved.
                    </div>
                </div>
                <div
                    id="menu-content"
                    className="lg:ml-28 h-full overflow-y-auto bg-white lg:animate-menuMoveLeft"
                >
                    <MainMenuHeader onClick={handleCloseAnimation} />
                    <MainMenuBody />
                    <MainMenuFooter />
                </div>
            </div>
            <div
                className={`lg:block w-screen h-screen lg:bg-black opacity-60 absolute z-10 ${
                    isClosing ? "animate-slideOut" : "animate-slideIn"
                }`}
            ></div>
        </>
    );
};

export default MainMenu;
