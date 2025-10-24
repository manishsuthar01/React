import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/TodoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-lg p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          ✅ Todo List
        </h2>
        {todos.length === 0 ? (
          <p className="text-gray-300 text-center">No todos yet. Add one!</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-sm hover:shadow-lg transition"
              >
                <span className="text-white">{todo.text}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg hover:from-red-600 hover:to-pink-600 transition shadow-md hover:shadow-lg"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todo;
