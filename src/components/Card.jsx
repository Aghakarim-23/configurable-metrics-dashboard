import { FaTrash } from "react-icons/fa";

const Card = ({ data }) => {
  const handleDelete = () => {
    alert(`Deleted ${data.name}!`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 text-gray-700">
        <span className="text-2xl">{data.symbol}</span>
        <span className="text-lg font-medium">{data.name}</span>
      </div>

      <div className="flex items-center space-x-2 text-gray-800">
        <span className="text-xl font-semibold">
          {data.value.toLocaleString()}
        </span>
      </div>

      <button
        onClick={handleDelete}
        className="flex items-center space-x-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        <FaTrash />
        <span>Delete</span>
      </button>
    </div>
  );
};

export default Card;
