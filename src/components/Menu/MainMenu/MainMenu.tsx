import MainMenuBody from "./MainMenuBody";
import MainMenuFooter from "./MainMenuFooter";
import MainMenuHeader from "./MainMenuHeader";

interface MainMenuProps {
    onClick: () => void;
}

const MainMenu = ({ onClick }: MainMenuProps) => {
    return (
        <>
            <div className="absolute w-screen lg:w-[480px] h-screen z-[11] bg-white">
                <div id="menu-content" className="lg:ml-28">
                    <MainMenuHeader onClick={() => onClick()} />
                    <MainMenuBody />
                    <MainMenuFooter />
                </div>
            </div>
            <div className="hidden lg:block w-[100%] h-screen bg-black opacity-60 fixed z-10"></div>
        </>
    );
};

export default MainMenu;
