import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { DeleteIcon, Edit } from "lucide-react";

type TTodoCard = {
  id: string;
  title: string;
  description: string;
  isCompleted: string;
  priority: string;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted: isComplete,
  priority,
}: TTodoCard) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleToggled = (id: string) => {
    dispatch(toggleComplete(id));
  };
  return (
    <div className="bg-white rounded-md flex justify-items-center  gap-2 items-center justify-between p-2 border ">
      <input
        onClick={() => handleToggled(id)}
        className="mr-4"
        type="checkbox"
      />
      <p className="flex-1 font-semibold">{title}</p>
      <div className="flex-1 flex gap-2 items-center">
        <div
          className={`size-2 rounded-full 
        
        ${priority === "high" ? "bg-red-400" : null}
        ${priority === "medium" ? "bg-yellow-400" : null}
        ${priority === "low" ? "bg-green-400" : null}
        `}></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isComplete ? (
          <p className="text-green-400">Done</p>
        ) : (
          <p className="text-red-400">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
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
