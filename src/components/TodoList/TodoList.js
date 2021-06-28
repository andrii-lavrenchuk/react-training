import './TodoList.css';
import Todo from '../Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className="TodoList__item">
        <Todo
          text={text}
          completed={completed}
          onDelete={() => onDeleteTodo(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      </li>
    ))}
  </ul>
);
export default TodoList;
