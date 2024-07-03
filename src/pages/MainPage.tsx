import Footer from "../components/Footer/Footer";
import Test1 from "../assets/1719968584_01.jpg";
import Test2 from "../assets/1719968634_02.jpg";
import Test3 from "../assets/1719969196_03.jpg";
import Menu from "../assets/menu.svg";
import { useEffect, useState } from "react";
import { WorkData } from "../interfaces/WorkData";
import WorkList from "../components/MainContent/WorkList";

const MainPage = () => {
    const [workDatas, setWorkDatas] = useState<WorkData[]>([]);
    useEffect(() => {
        setWorkDatas([
            {
                title: "Inspire Entertainment Resort",
                img: Test1,
                description:
                    "Inspire Entertainment Resort is a theme park located in the heart of Seoul, South Korea. It is a place where you can enjoy various attractions and performances.",
            },
            {
                title: "Hyundai Motor Gangnam",
                img: Test2,
                description:
                    "Hyundai Motor Gangnam is a car dealership located in the heart of Seoul, South Korea. It is a place where you can enjoy various attractions and performances.",
            },
            {
                title: "Cassia Sokcho",
                img: Test3,
                description:
                    "Cassia Sokcho is a hotel located in the heart of Seoul, South Korea. It is a place where you can enjoy various attractions and performances.",
            },
        ]);
    }, []);
    return (
        <div>
            <img
                src={Menu}
                alt="MenuButton"
                className="absolute top-2 left-3 md:top-5 md:left-8 w-11 h-11 cursor-pointer z-10 no-drag"
            />
            <WorkList workDatas={workDatas} />
            <Footer />
        </div>
    );
};

export default MainPage;
