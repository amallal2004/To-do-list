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

  function handleDeleteTask(e, id) {
    e.preventDefault();
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleCompleteTask(e, id) {
    // e.preventDefault();
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <Card
      tasks={tasks}
      onSubmitTask={handleAddTask}
      newTask={newTask}
      onTaskChange={handleTaskChange}
      onTaksDelete={handleDeleteTask}
      onCompleteTask={handleCompleteTask}
    />
  );
}

function Card({
  tasks,
  onSubmitTask,
  newTask,
  onTaskChange,
  onTaksDelete,
  onCompleteTask,
}) {
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
      <Tasks
        tasks={tasks}
        onTaksDelete={onTaksDelete}
        onCompleteTask={onCompleteTask}
      />
    </div>
  );
}

function Tasks({ tasks, onTaksDelete, onCompleteTask }) {
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div className="tasks">
      {sortedTasks.map(({ id, task, completed }) => (
        <div key={id} className="tasks__item">
          <label className={`tasks__checkbox ${completed ? "checked" : ""} `}>
            {task}
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => onCompleteTask(e, id)}
            />
            <span className="check" />
          </label>
          <button
            className="tasks__delete"
            onClick={(e) => onTaksDelete(e, id)}
          >
            ✗
          </button>
        </div>
      ))}
    </div>
  );
}
