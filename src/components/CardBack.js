import "./CardBack.css";
import cardBack from "../images/bg-card-back.png";
export default function CardBack() {
  return (
    <div>
      <div className="logo">
        <img
          src={cardBack}
          alt={"Card back"}
        />
      </div>
    </div>
  );
}
