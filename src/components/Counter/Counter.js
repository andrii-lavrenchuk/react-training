import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import Container from './Container';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
    step: 2,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState, { step }) => ({ value: prevState.value + step }));
  };

  handleDecrement = () => {
    this.setState((prevState, { step }) => ({ value: prevState.value - step }));
  };

  render() {
    const { value } = this.state;
    const { step } = this.props;

    return (
      <Container>
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          step={step}
        />
      </Container>
    );
  }
}

export default Counter;
