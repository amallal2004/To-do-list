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
      <h1 className="card__heading">To-Do List</h1>
      <input className="card__input" placeholder="Add a new task..." />
      <button className="card__button">Add Task</button>
      <Tasks />
    </div>
  );
}

function Tasks() {
  return (
    <div className="tasks">
      {toDoList.map(({ id, task }) => (
        <div key={id} className="tasks__item">
          <label className="tasks__checkbox">{task}</label>
          <input type="checkbox" />
          <span className="check" />
        </div>
      ))}
    </div>
  );
}
