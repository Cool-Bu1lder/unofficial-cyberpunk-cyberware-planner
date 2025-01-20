import { useState } from "react";
import HoverBox from "./HoverBox";

function GridLayout({ items, isEquipped, onItemClick }) {
  const [hoverItem, setHoverItem] = useState({});
  const [mousePosition, setMousePosition] = useState({});

  const onMouseEnter = (item) => {
    setHoverItem(item || {});
  };

  const onMouseLeave = () => {
    setHoverItem({});
  };

  const onMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <>
      {hoverItem.name && <HoverBox position={mousePosition} item={hoverItem} />}
      <div
        className={`grid ${isEquipped ? "equipped-grid" : "inventory-grid"}`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid-item ${item ? "filled" : "empty"}`}
            onClick={() => item && onItemClick(index, item)}
            onMouseEnter={() => onMouseEnter(item)}
            onMouseLeave={() => onMouseLeave(item)}
            onMouseMove={(event) => onMouseMove(event)}
          >
            <div
              className={`grid-item-content ${
                item && item.iconic ? "iconic" : ""
              }`}
            >
              {item ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="grid-item-icon"
                />
              ) : (
                <p>None</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GridLayout;
