import { useState } from "react";
import MainMenuBody from "./MainMenuBody";
import MainMenuFooter from "./MainMenuFooter";
import MainMenuHeader from "./MainMenuHeader";

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
                className={`absolute w-screen lg:w-[480px] h-screen z-[11] bg-white ${
                    isClosing ? "animate-slideFadeOut" : "animate-slideFadeIn"
                }`}
            >
                <div id="menu-content" className="lg:ml-28">
                    <MainMenuHeader onClick={handleCloseAnimation} />
                    <MainMenuBody />
                    <MainMenuFooter />
                </div>
            </div>
            <div
                className={`w-screen h-screen bg-black opacity-60 fixed z-10 ${
                    isClosing ? "animate-slideOut" : "animate-slideIn"
                }`}
            ></div>
        </>
    );
};

export default MainMenu;
