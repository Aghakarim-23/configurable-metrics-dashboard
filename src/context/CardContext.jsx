import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);


const addCard = (card) => {
  setCards(prev => {
    const updated = [...prev, card];
    localStorage.setItem("cards", JSON.stringify(updated));
    return updated;
  });
};

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};
