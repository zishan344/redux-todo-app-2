import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todoSlice);
  const [priority, setPriority] = useState("");
  const { data, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading</p>;
  }
  //! console.log(data);
  return (
    <div>
      <div className="flex justify-between gap-2 mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient h-full rounded-xl p-1 ">
        <div className="bg-white p-5 w-full h-full space-y-3 rounded-lg">
          {data.data.map((todo) => (
            <TodoCard {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
