
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { initialState } from "./counter.state";

import {
    increment,
    decrement,
    reset,
    customIncrement,
    changeTexto,
    // reset,
    // customIncrement,
    // changeChannelName,
  } from './counter.actions';
  
  const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }),
    on(decrement, (state) => {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }),
    on(reset, (state) => {
      return {
        ...state,
        counter: 0,
      };
    }),
    on(customIncrement, (state, action) => {
      console.log(action);
      return {
        ...state,
        counter: state.counter + action.count,
      };
    }),
    on(changeTexto, state => {
     
      return {
        ...state,
        texto: textoss[getRandomInt(3)],
      };
    })


    // ,
    // on(customIncrement, (state, action) => {
    //   console.log(action);
    //   return {
    //     ...state,
    //     counter: state.counter + action.count,
    //   };
    // }),
    // on(changeChannelName, (state) => {
    //   return {
    //     ...state,
    //     channelName: 'Modified Leela Web Dev',
    //   };
    // })
  );
  
  export function counterReducer(state = initialState, action: Action) {
    return _counterReducer(state, action);
  }
  export var textoss = ['novo texto pelo redux','outro texto pelo redux','aqui o texto pelo redux'];
  export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  