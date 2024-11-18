import { useNavigate } from "react-router-dom";

const TextWithHover = ({ displayText, active, targetLink }) => {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = () => {
        if (targetLink) {
            navigate(targetLink);
        }
    };

    return (
        <div
            className="flex items-center justify-start cursor-pointer"
            onClick={handleClick} // Add click handler
        >
            <div
                className={`${
                    active ? "text-white" : "text-gray-400"
                } font-semibold text-lg hover:text-white`}
            >
                {displayText}
            </div>
        </div>
    );
};

export default TextWithHover;
