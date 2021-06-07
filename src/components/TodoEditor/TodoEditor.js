import { Component } from 'react';

class TodoEditor extends Component {
  state = { message: '' };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message === '') {
      alert('You cannot add empty todo');
      return;
    }
    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={message} onChange={this.handleChange}></input>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TodoEditor;
