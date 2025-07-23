import React, { useReducer } from "react";

const initialState = {
  count: 0,
  user: { name: "Hari", age: 25, dept: "it" },
  cart: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return initialState;
    case "setUser":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
        },
      };
    case "increaseByValue":
      return { ...state, count: state.count + action.payload.value };
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "editCart":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, price: action.payload.price }
            : item
        ),
      };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <h1>
        count {state.count} {state.user.name} {state.user.age}
      </h1>
      <button onClick={() => dispatch({ type: "increment" })}>increse</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button
        onClick={() =>
          dispatch({ type: "setUser", payload: { name: "amar", age: 10 } })
        }
      >
        change name
      </button>
      <button
        onClick={() =>
          dispatch({ type: "increaseByValue", payload: { value: 9 } })
        }
      >
        increase by 9
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "addToCart",
            payload: { name: "orange", type: "fruit", price: 30, id: 2 },
          })
        }
      >
        add to cart
      </button>
      <button
        onClick={() =>
          dispatch({ type: "editCart", payload: { id: 1, price: 10 } })
        }
      >
        edit cart item
      </button>

      {state.cart.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      {state.cart.reduce((acc, curr) => acc + curr.price, 0)}
    </div>
  );
};

export default Reducer;
