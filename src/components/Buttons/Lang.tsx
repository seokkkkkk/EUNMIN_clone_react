interface LangProps {
    text: string;
    selected: boolean;
    onClick?: () => void;
}

const Lang = (props: LangProps) => {
    return (
        <span
            className={
                props.selected ? "text-black cursor-pointer" : "cursor-pointer"
            }
            onClick={props.onClick}
        >
            {props.text}
        </span>
    );
};
export default Lang;
