import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  tag: '',
  experience: 'junior',
  licence: false,
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({
      licence: e.currentTarget.checked,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { name, tag, experience, licence } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={tag}
            onChange={this.handleChange}
            name="tag"
          ></input>
        </label>
        <p>Level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={experience === 'senior'}
          />
          Senior
        </label>
        <button type="submit" disabled={!licence}>
          Send
        </button>
        <label htmlFor="">
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={this.handleCheckboxChange}
          />
          Accept
        </label>
      </form>
    );
  }
}

export default Form;
