import { useNavigate } from "react-router-dom";

interface MenuSectionProps {
    sectionTitle: string;
    items: string[];
}

const MenuSection = ({ sectionTitle, items }: MenuSectionProps) => {
    const navigate = useNavigate();

    return (
        <div id={`menu-${sectionTitle.toLowerCase()}`} className="mb-1">
            <h2 className="mb-2">{sectionTitle} +</h2>
            <ul className="text-base lg:text-lg flex flex-col gap-[4px] cursor-pointer">
                {items.map((item) => (
                    <li
                        key={item}
                        onClick={() =>
                            navigate(
                                `/${sectionTitle.toLowerCase()}/${item
                                    .toLowerCase()
                                    .replace(/ /g, "-")}`
                            )
                        }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuSection;
