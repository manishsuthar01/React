import React, { useReducer } from "react";
import { useEffect } from "react";

const ApiData = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA_START":
        return { ...state, loading: true };
      case "FETCH_DATA_SUCCESS":
        return { loading: false, error: null, data: action.payload };

      case "FETCH_DATA_FAILURE":
        return { loading: false, error: action.payload };
      case "DATA_DELETE":
        return {
          ...state,
          data: state.data.filter((item) => action.payload !== item.id),
        };
      default:
        return state;
    }
  };

  const deletedata = (id) => {
    dispatch({ type: "DATA_DELETE", payload: id });
  };
  const intval = {
    data: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, intval);

  useEffect(() => {
    getdata();
    console.group("ok");
  }, []);

  const getdata = async () => {
    dispatch({ type: "FETCH_DATA_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
  return (
    <div style={{ border: "2px solid", padding: 18, margin: 55, gap: 5 }}>
      <button>get data</button>
      {state.loading && <p>loading...</p>}
      {state.error && <p>Error:{state.error}</p>}
      <ul>
        {state.data.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <button onClick={()=>deletedata(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ApiData;
