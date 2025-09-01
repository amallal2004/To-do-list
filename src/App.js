import { useState } from "react";
import "./index.css";

const toDoList = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Walk the dog", completed: true },
  { id: 3, task: "Read a book", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(toDoList);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(e) {
    e.preventDefault();

    if (!newTask) return;

    const id = crypto.randomUUID();

    const newTaskItem = {
      id,
      task: newTask,
      completed: false,
    };

    e.target.previousSibling.value = "";
    setTasks((tasks) => [...tasks, newTaskItem]);
    setNewTask("");
  }

  function handleTaskChange(value) {
    setNewTask(value);
  }

  return (
    <Card
      tasks={tasks}
      onSubmitTask={handleAddTask}
      newTask={newTask}
      onTaskChange={handleTaskChange}
    />
  );
}

function Card({ tasks, onSubmitTask, newTask, onTaskChange }) {
  return (
    <div className="card">
      <h1 className="card__heading">To-Do List 📝</h1>
      <form className="card__input" onSubmit={(e) => onSubmitTask(e)}>
        <input
          className="card__text-area"
          value={newTask}
          placeholder="Add a new task..."
          onChange={(e) => onTaskChange(e.target.value)}
        />
        <button className="card__button">Add Task</button>
      </form>
      <Tasks tasks={tasks} />
    </div>
  );
}

function Tasks({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map(({ id, task }) => (
        <div key={id} className="tasks__item">
          <label className="tasks__checkbox">
            {task}
            <input type="checkbox" />
            <span className="check" />
          </label>
        </div>
      ))}
    </div>
  );
}
