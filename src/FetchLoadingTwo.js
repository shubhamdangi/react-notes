import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "Error":
      return {
        loading: false,
        post: {},
        error: "something is not right",
      };
  }
};

function FetchLoadingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "Success", payload: res.data });
      })
      .catch((error) => {
        dispatch({
          type: "Error",
        });
      });
  });

  return (
    <div>
      {state.loading ? <h2>loading...</h2> : <h2>{state.post.title}</h2>} <br />
      {state.error ? <h2>{state.error}</h2> : null}
    </div>
  );
}

export default FetchLoadingTwo;
