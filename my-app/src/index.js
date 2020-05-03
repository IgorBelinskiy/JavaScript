import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const elem = (
//   <div>
//     <h2>Hello world!!!</h2>
//     <input type='text' placeholder='Type here'></input>
//     <button>1234567</button>
//   </div>
// )

const Header = () => {
  return <h2>Hello world!!!</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styleField = {
    width: '300px',
    height: '50px'
  }
  return <input 
        style = {styleField}
        type='text' 
        placeholder={holder} 
        className='first'
        htmlFor=''></input>
}

const Btn = () => {
  const text = "Log in";
  const res = () => {
    return 'Log in, please'
  }
  const p = <p>Log in</p>;
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>
}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

// const elem = React.createElement('h2', null, 'Hello');

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);