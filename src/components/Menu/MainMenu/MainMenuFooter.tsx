import { useNavigate } from "react-router-dom";

const MainMenuFooter = () => {
    const navigate = useNavigate();
    return (
        <div
            id="main-menu-footer"
            className="text-sm lg:text-base ml-14 mt-6  text-gray-500"
        >
            <div className="cursor-pointer">EUNMIN GROUPWARE</div>
            <div
                className="cursor-pointer"
                onClick={() => navigate("/admin/mamnagement")}
            >
                PROJECT MANAGEMENT
            </div>
        </div>
    );
};

export default MainMenuFooter;
