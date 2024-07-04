import { ReactComponent as XIcon } from "../../../assets/x-thin.svg";
import Logo from "../../../assets/_logo.png";
import Lang from "../../Buttons/Lang";
import { useRecoilState } from "recoil";
import { languageState } from "../../../atoms/languageState";

interface MainMenuHeaderProps {
    onClick: () => void;
}

const MainMenuHeader = ({ onClick }: MainMenuHeaderProps) => {
    const [lang, setLang] = useRecoilState(languageState);
    return (
        <div className="flex justify-between ml-5 mt-3 mr-3 md:ml-14">
            <div className="flex gap-8 items-center">
                <div className="lg:flex lg:flex-col justify-between place-items-center lg:h-screen lg:fixed top-0 left-[0px] lg:bg-white z-[-1] w-[100px]">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-8 lg:h-12 lg:w-48 lg:rotate-[270deg] lg:mt-28"
                    />
                    <div className="hidden lg:block text-[14px] text-gray-500 lg:rotate-[270deg] mb-[160px] overflow-visible text-nowrap">
                        Copyright(C)2021 EUNMIN. All rights reserved.
                    </div>
                </div>
                <div className="text-[13px] lg:text-[18px] font-bold text-gray-500">
                    <Lang
                        text="KOR"
                        selected={lang === "KOR"}
                        onClick={() => setLang("KOR")}
                    />
                    <span> / </span>
                    <Lang
                        text="ENG"
                        selected={lang === "ENG"}
                        onClick={() => setLang("ENG")}
                    />
                </div>
            </div>
            <XIcon className="w-10 h-10 cursor-pointer" onClick={onClick} />
        </div>
    );
};

export default MainMenuHeader;
