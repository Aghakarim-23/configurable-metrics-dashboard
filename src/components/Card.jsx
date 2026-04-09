import { FaTrash } from "react-icons/fa";
import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";

const Card = ({ data }) => {
  const { setCards } = useContext(CardContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setCards((prev) => prev.filter((card) => card.id !== data.id));
    setShowConfirm(false);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 w-64 flex flex-col items-center space-y-4">
        <div className="flex justify-between w-full">
          <span className="text-lg font-medium">{data.name}</span>

          <button
            onClick={() => setShowConfirm(true)}
            className="flex items-center space-x-1 p-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
          >
            <FaTrash />
          </button>
        </div>

        <div className="border-b w-full"></div>

        <div className="flex items-center space-x-2 text-gray-700"></div>

        <div className="flex items-center space-x-2 text-gray-800">
          <div className="flex gap-3 items-center text-xl font-semibold">
            <span className="text-2xl">{data.symbol}</span>
            <span>{data.value.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-80 flex flex-col items-center space-y-4">
            <span className="text-2xl">🗑️</span>
            <h2 className="text-lg font-semibold text-gray-800">Delete Card</h2>
            <p className="text-sm text-gray-500 text-center">
              Are you sure you want to delete <span className="font-medium text-gray-700">"{data.name}"</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
