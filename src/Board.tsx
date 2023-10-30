import React from "react";
import Cell from "./Cell";

interface BoardProps {
    items: boolean[];
    onCellClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ items, onCellClick }) => {
    return (
        <div className="board">
            {items.map((hasItem, index) => (
                <Cell key={index} hasItem={hasItem} onClick={() => onCellClick(index)} />
            ))}
        </div>
    );
};

export default Board;
