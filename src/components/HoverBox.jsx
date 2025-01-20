import armor from "../assets/armor.webp"; // icons
import capacity from "../assets/capacity.png";

function HoverBox({ item, position }) {
  return (
    <div
      className="hover-container"
      style={{
        position: "absolute",
        top: position.y + 10,
        left: position.x + 10,
      }}
    >
      <p className="hover-title">{item.name.toUpperCase()}</p>
      <div className="line" />
      <p className="hover-tier">TIER 5++</p>
      <p className="hover-cyberware">Cyberware</p>
      <div className="line" />
      <p className="hover-capacity">
        {item.capacity} <img src={capacity} />
      </p>
      {item.armor && (
        <p className="hover-armor">
          {item.armor}
          <img src={armor} />
        </p>
      )}
      <div className="line" />
      <p className="hover-effect">{item.effect}</p>
    </div>
  );
}

export default HoverBox;
