// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// class Guest {
//   constructor({ name, age, weight } = {}) {
//     this._name = name;
//     this.age = age;
//     this.weight = weight;
//   }

//   get name() {
//     return this._name;
//   }

//   changeAge(newAge) {
//     this.age = newAge;
//   }
// }

// const myGuest = new Guest({
//   name: 'Andrii',
//   age: 27,
//   weight: 185,
// });
// console.log(myGuest);
// myGuest.changeAge(34);
// console.log(myGuest);

// ReactDOM.render(
//   <React.StrictMode>{/* <App /> */}</React.StrictMode>,
//   document.getElementById('root'),
// );
// import { Component } from 'react';
import ReactDOM from 'react-dom';

// class Toggle extends Component {
//   state = { isOpen: false };

//   show = () => this.setState({ isOpen: true });

//   hide = () => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;
//     console.log(children);

//     return (
//       <>
//         <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }
// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class App extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод который будем передавать в Button для вызова при клике
//   updateMessage = evt => {
//     console.log(evt.currentTarget); // Доступен объект события

//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }

// class Input extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//     console.log(e.target.value);
//   };

//   render() {
//     const { value } = this.state;

//     return <input type="text" value={value} onChange={this.handleChange} />;
//   }
// }

// class EssayForm extends Component {
//   state = {
//     value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
//   };

//   handleChange = event => {
//     this.setState({ value: event.target.value });
//     console.log(event.target.value);
//   };

//   handleSubmit = event => {
//     alert('Сочинение отправлено: ' + this.state.value);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Сочинение:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }

// class FlavorForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'coconut' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//     console.log(event.target.value);
//   }

//   handleSubmit(event) {
//     alert('Ваш любимый вкус: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Выберите ваш любимый вкус:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Грейпфрут</option>
//             <option value="lime">Лайм</option>
//             <option value="coconut">Кокос</option>
//             <option value="mango">Манго</option>
//           </select>
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }
ReactDOM.render(<App />, document.getElementById('root'));
