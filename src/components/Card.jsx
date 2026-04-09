import { FaTrash } from "react-icons/fa";

const Card = ({ data }) => {
  const handleDelete = () => {
    alert(`Deleted ${data.name}!`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 flex flex-col items-center space-y-4">
      <div className="flex justify-between w-full">
        <span className="text-lg font-medium">{data.name}</span>

        <button
          onClick={handleDelete}
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
  );
};

export default Card;
