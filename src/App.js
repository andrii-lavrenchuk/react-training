// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import axios from 'axios';
import { Component } from 'react';
import shortId from 'shortid';
import TodoList from './components/TodoList';
// import initialTodos from './Todos.json';
// import Form from './components/Form';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Modal from './components/Modal';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
    articles: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(res =>
        this.setState({ articles: res.data.hits, isLoading: false }),
      );

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    if (
      this.state.todos.length > prevState.todos.length &&
      prevState.todos.length !== 0
    ) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortId.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal, articles, isLoading } = this.state;
    const totalCount = todos.length;
    const completedTodosCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <div>
          <p>Загальна кількість: {totalCount}</p>
          <p>Кількість виконаних: {completedTodosCount}</p>
        </div>
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />}

        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <Counter />
      <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Section title="Топ тижня">
        <PaintingList items={paintings} />
      </Section>
      <Section title="hhhhh" /> */}
      </>
    );
  }
}
export default App;
