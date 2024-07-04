import { ReactComponent as XIcon } from "../../../assets/x-thin.svg";
import Lang from "../../Buttons/Lang";
import { useRecoilState } from "recoil";
import { languageState } from "../../../atoms/languageState";

interface MainMenuHeaderProps {
    onClick: () => void;
}

const MainMenuHeader = ({ onClick }: MainMenuHeaderProps) => {
    const [lang, setLang] = useRecoilState(languageState);
    return (
        <div className="flex justify-between ml-5 mt-3 mr-3">
            <div className="flex gap-8 items-center">
                <div className="text-[15px] lg:text-[18px] font-bold text-gray-400 ml-36 lg:ml-9">
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
