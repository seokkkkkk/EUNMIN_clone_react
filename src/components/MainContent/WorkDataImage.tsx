import { WorkData } from "../../interfaces/WorkData";

const WorkDataImage = (props: WorkData) => {
    return (
        <div className="relative cursor-default" draggable={false}>
            <div className="absolute top-32 left-5 md:top-20 md:left-36 text-white text-2xl">
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
