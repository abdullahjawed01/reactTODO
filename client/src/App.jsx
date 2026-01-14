import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  }

  function toggleTask(index) {
    setTasks(prev =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <h1 className="bg-blue-500 text-6xl p-6 text-white font-bold text-center">
        TODO APP
      </h1>

      <form
        className="flex justify-center items-center mt-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your task"
          className="border-2 h-10 pl-5 rounded-3xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="bg-blue-500 h-10 rounded-2xl px-4 ml-4 text-white">
          Submit
        </button>
      </form>

      <div className="mx-20 mt-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex font-bold text-2xl pt-5 w-full justify-between p-4 mb-2 rounded-2xl text-white
              ${task.completed ? "bg-green-500" : "bg-gray-500"}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="h-8 "
            />

            <span  className={task.completed ? "line-through opacity-70" : ""}>
              {task.text}
            </span>

            <button
              onClick={() =>
                setTasks(prev => prev.filter((_, i) => i !== index))
              }
              className="bg-red-500 text-white px-3 py-1 rounded-xl"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
