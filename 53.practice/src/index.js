import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     this.nextYear = this.nextYear.bind(this) // 1йспособ добавить возраст
//     this.prevYear = this.prevYear.bind(this)


//     // this.nextYear = () => {  //2й способ
//     //   this.setState(state => ({
//     //     years: ++state.years
//     //   }))
//     // }


//   }


//   nextYear() {   // 1й
//     console.log(1);
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
//   prevYear() {   // 1й
//     console.log(1);
//     this.setState(state => ({
//       years: --state.years
//     }))
//   }

//   // state = { //3й способ
//   //   years: 26
//   // } 
//   // nextYear = () => {  //3й способ
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }


//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>++</button>
//         <button onClick={this.prevYear}>--</button>
//         <h1>My name is {name}, my surname - {surname}, years - {years}</h1>
//         <a href={link}>My profile</a>
//     </>
//     )
//   }
// }

// // function WhoAmI({name, surname, link}) {
// //   return (
// //     <>
// //       <h1>My name is {name}, my surname - {surname}</h1>
// //       <a href={link}>My profile</a>
// //     </>
// //   )
// // }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name='Ivan' surname='Belinskiy' link='facebook.com'/>
//       <WhoAmI name='Igor' surname='Belinskiy' link='facebook.com'/>
//       <WhoAmI name='Katya' surname='Belinskiy' link='facebook.com'/>
//     </>
//   )
  
// }


ReactDOM.render(
  <App/>,
  // 
  // <All/>,
  document.getElementById('root')
);