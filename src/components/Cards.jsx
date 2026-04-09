import Card from "./Card";
import { data } from "../data/metrics";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Cards = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-21.5">
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Cards;
