import { useState } from "react";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [value, setValue] = useState("");

  const { addCard } = useContext(CardContext);

  const navigate = useNavigate();

  const handleAddCard = (e) => {
    e.preventDefault();

    if (!name || !symbol || !value) {
      alert("Zəhmət olmasa bütün sahələri doldurun!");
      return;
    }

    const newCard = { id: Date.now(), name, symbol, value };
    addCard(newCard);

    setName("");
    setSymbol("");
    setValue("");

    navigate("/");
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-bold mb-6 ">Add Card</h1>
      <form
        onSubmit={handleAddCard}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Card title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Symbol</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. $ or 🔥"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Value</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Card value"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddCard;
