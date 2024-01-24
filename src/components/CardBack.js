import "./CardBack.css";
import cardBack from "../images/bg-card-back.png";
export default function CardBack() {
  return (
    <div>
      <div className="card-back-wrapper">
        <img
          src={cardBack}
          alt={"Card back"}
        />
        <h1 className="cvc-back">000</h1>
      </div>
    </div>
  );
}
