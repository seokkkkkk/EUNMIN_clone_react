import { useNavigate } from "react-router-dom";
import MenuSection from "./MenuSection";

const MainMenuBody = () => {
    const navigate = useNavigate();
    const projectItems = [
        "Hospitality",
        "Office",
        "Commercial/Retail",
        "Sports & Leisure",
        "Exhibition",
        "Residential",
        "Health & Education",
    ];
    const aboutItems = ["Overview", "CEO Message", "History", "Organization"];
    const contactItems = ["Brochure", "Recruit", "Location"];
    return (
        <div
            id="menu-list"
            className="text-[17.5px] md:text-xl lg:text-2xl mt-4 ml-14 flex flex-col gap-3 md:gap-5 cursor-pointer"
        >
            <div id="menu-all" onClick={() => navigate("/project/all")}>
                <h2>ALL</h2>
            </div>
            <MenuSection sectionTitle="PROJECT" items={projectItems} />
            <MenuSection sectionTitle="ABOUT" items={aboutItems} />
            <MenuSection sectionTitle="CONTACT" items={contactItems} />
        </div>
    );
};

export default MainMenuBody;
