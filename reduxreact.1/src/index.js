import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// import * as actions from './actions';
import './buttonstyle.css';
import App from './components/app'


const store = createStore(reducer)
// const {dispatch} = store
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }






ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
, document.getElementById('root'));





