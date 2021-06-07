const Controls = ({ onIncrement, onDecrement, step }) => (
  <div>
    <button onClick={onIncrement}>Збільшити на {step}</button>
    <button onClick={onDecrement}>Зменшити на {step}</button>
  </div>
);

export default Controls;
