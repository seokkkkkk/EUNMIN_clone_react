import { WorkData } from "../../interfaces/WorkData";

const WorkDataImage = (props: WorkData) => {
    return (
        <div className="relative cursor-default" draggable={false}>
            <div className="absolute top-[135px] left-5 md:top-20 md:left-[130px] text-white text-[21px] md:text-[24px] font-meidum">
                {props.title}
            </div>
            <img
                className="w-screen h-screen object-cover"
                src={props.img}
                alt={props.title}
                draggable={false}
            />
        </div>
    );
};

export default WorkDataImage;
