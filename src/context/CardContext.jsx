import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("cards");

    const parsed = storedCards ? JSON.parse(storedCards) : null;
    return parsed && parsed.length > 0
      ? parsed
      : [
          { id: 1, name: "Followers", value: 1200, symbol: "👥" },
          { id: 2, name: "Page Views", value: 5300, symbol: "👁️" },
          { id: 3, name: "Likes", value: 890, symbol: "❤️" },
          { id: 4, name: "Comments", value: 315, symbol: "💬" },
          { id: 5, name: "Revenue", value: 4750, symbol: "💵" },
          { id: 6, name: "Shares", value: 142, symbol: "🔗" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addCard = (card) => {
    setCards((prev) => [...prev, card]);
  };

  return (
    <CardContext.Provider value={{ cards, setCards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};
