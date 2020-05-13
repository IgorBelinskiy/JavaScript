import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd, res}) => {
   return (
      <div>
         <h1 id="counter">{counter}</h1>
      <button onClick={dec} id="dec" /*style="width: 100px; height: 100px; background-color: blue; border: 22px solid blueviolet; font-size: larger; cursor: pointer;"*/>DEC</button>
      <button onClick={inc} id="inc" /*style="width: 100px; height: 100px; background-color: blue; border: 22px solid blueviolet; font-size: larger; cursor: pointer;"*/>INC</button>
      <button onClick={rnd} id="rnd" /*style="width: 100px; height: 100px; background-color: blue; border: 22px solid blueviolet; font-size: larger; cursor: pointer;"*/>RND</button>
      <button onClick={res} id="res" /*style="width: 100px; height: 100px; background-color: blue; border: 22px solid rgb(224, 0, 0); font-size: larger; cursor: pointer;"*/>RES</button>
      </div>
   )
}
const mapStateToProps = (state) => {
   return {
      counter: state
   }
}

export default connect(mapStateToProps, actions)(Counter);