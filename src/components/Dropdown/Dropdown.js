import { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(({ visible }) => ({
      visible: !visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Сховати' : 'Показати'}
        </button>

        {visible && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;
