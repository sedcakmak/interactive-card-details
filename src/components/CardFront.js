import cardFront from "../images/bg-card-front.png";
import "./CardFront.css";
export default function CardFront() {
  return (
    <div>
      <div className="logo">
        <img
          src={cardFront}
          alt={"Card front"}
        />
      </div>
    </div>
  );
}
