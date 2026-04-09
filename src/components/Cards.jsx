import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Card from "../components/Card";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Cards = () => {
  const { cards, setCards } = useContext(CardContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(cards);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    setCards(reordered);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="cards">
        {(provided) => (
          <div
            className="flex flex-wrap gap-4 mt-12 px-21.5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={String(card.id)} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Cards;
