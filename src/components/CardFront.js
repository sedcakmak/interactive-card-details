import "./CardFront.css";
import cardFront from "../images/bg-card-front.png";

export default function CardFront() {
  return (
    <div>
      <div className="card-front-wrapper">
        <img
          src={cardFront}
          alt={"Card front"}
        />
        <h1 className="card-number">0000 0000 0000 0000</h1>
        <div className="wrapper">
          <h2 className="card-name">Jane Appleseed</h2>
          <span className="valid-date">00/00</span>
        </div>
      </div>
    </div>
  );
}
