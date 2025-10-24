import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/TodoSlice"; // ✅ correct import

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // avoid empty todos

    dispatch(addTodo(text)); // ✅ correct action
    setText("");
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center  bg-gradient-to-br from-gray-900 via-gray-800 to-black ">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md  p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          ✨ Add a Todo
        </h2>

        <div className="flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a todo..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
