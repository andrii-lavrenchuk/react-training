const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    ></input>
    <p className="TodoList__text">{text}</p>
    <button onClick={onDelete}>Видалити</button>
  </>
);

export default Todo;
