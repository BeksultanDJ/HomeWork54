import React, { useState } from "react";

interface CellProps {
    hasItem: boolean;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, onClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            onClick();
        }
    };

    return (
        <div
            className={`cell ${hasItem ? "has-item" : ""} ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
        >
            {clicked && hasItem ? <span>o</span> : ""}
        </div>
    );
};

export default Cell;
