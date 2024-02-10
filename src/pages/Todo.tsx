import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";
import React from "react";

const Todo = () => {
  return (
    <Container>
      <div>
        <h2 className="text-2xl font-semibold text-center">My Todos</h2>
        <TodoContainer />
      </div>
    </Container>
  );
};

export default Todo;
