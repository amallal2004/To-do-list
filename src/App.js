import "./index.css";

const toDoList = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Walk the dog", completed: true },
  { id: 3, task: "Read a book", completed: false },
];

export default function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <h1 className="card__heading">To-Do List 📝</h1>
      <div className="card__input">
        <input className="card__text-area" placeholder="Add a new task..." />
        <button className="card__button">Add Task</button>
      </div>
      <Tasks />
    </div>
  );
}

function Tasks() {
  return (
    <div className="tasks">
      {toDoList.map(({ id, task }) => (
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
