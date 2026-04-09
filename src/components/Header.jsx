import { FiPlus } from "react-icons/fi";

const Header = () => {
  const handleAdd = () => {
    console.log("New card added.");
  };
  return (
    <div className="h-40 flex items-center px-21.5 border-b-2">
      <button
        className="flex items-center justify-center h-10 w-40 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleAdd}
      >
        <FiPlus className="mr-2" />
        Add Card
      </button>
    </div>
  );
};

export default Header;
