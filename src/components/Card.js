import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function Card() {
  return (
    <div className="card-wrapper">
      <CardFront />
      <CardBack />
    </div>
  );
}
