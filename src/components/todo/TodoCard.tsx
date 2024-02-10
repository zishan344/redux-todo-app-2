import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { DeleteIcon, Edit } from "lucide-react";

type TTodoCard = {
  id: string;
  title: string;
  description: string;
  isCompleted: string;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted: isComplete,
}: TTodoCard) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleToggled = (id: string) => {
    dispatch(toggleComplete(id));
  };
  return (
    <div className="bg-white rounded-md flex justify-items-center justify-between p-2 border ">
      <input
        onClick={() => handleToggled(id)}
        className="mr-4"
        type="checkbox"
      />
      <p className="font-semibold">{title}</p>
      <p>Time</p>
      <div>
        {isComplete ? (
          <p className="text-green-400">Done</p>
        ) : (
          <p className="text-red-400">Pending</p>
        )}
      </div>
      <p>{description}</p>
      <div className="space-x-3">
        <button onClick={() => handleDelete(id)}>
          <DeleteIcon />
        </button>
        <button>
          <Edit />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
