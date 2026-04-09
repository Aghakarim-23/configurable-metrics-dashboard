import Card from "./Card";
import { data } from "../data/metrics";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-21.5">
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Cards;
