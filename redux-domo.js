// step 1
const redux = require("redux"); //default node.js import syntax for importing the 3rd party syntax

// step 3
// reducer function: inputs old state +  dispatched action and returns a output new state object, and reducer fun should be pure function
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "INCREMENTBY2":
      return {
        counter: state.counter + 2,
      };
      case "decrement":
        return {
          counter: state.counter - 1,
        };
        case "DECREMENTBY2":
          return {
            counter: state.counter - 2,
          };
    default: {
      return state;
    }
  }
};

// step 2
// const store = redux.createStore(); //it create the store

const store = redux.createStore(counterReducer); //now someone that subscribe to the reducer

const counterSubscriber = () => {
  const latestState = store.getState(); // getstate is a method which is availableon the store created with create store
  console.log("latestState ", latestState);
};
store.subscribe(counterSubscriber); //expects a fun when the data in store change
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "INCREMENTBY2" });
store.dispatch({ type: "INCREMENTBY2" });
store.dispatch({ type: "DECREMENTBY2" });
store.dispatch({ type: "DECREMENTBY2" });
