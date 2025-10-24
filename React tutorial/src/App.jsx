import React, { useEffect, useState } from "react";
import "./App.css";
import UseMemo from "./Components/UseMemo";
import UseCallback from "./Components/UseCallback";
import ImperParent from "./Components/UseImperativeHandle/ImperParent";
import UseLayout from "./Components/useLayout";
import UseRef from "./Components/UseRef"
import UseRef2 from "./Components/UseRef2"
import useFetch from "./Components/CustomHooks/useFetch";
import Api from "./Api";
import PreVal from "./PreVal";

// function App() {
//   const a = 10;
//   const b = 20;
//   const sum = a + b;
//   // let user = "manish";
//   const [user,setuser]=useState('manish');

//   // const [user, setUser] = use
//   function changeUser() {
//    setuser("newUser");

//   }
//   console.log(user)
//   return (
//     <div>
//       <h1>this is from app.jsx</h1>
//       <p>
//         The sum of {a} and {b} is {sum}
//       </p>
//       <p>Welcome, {user}!</p>
//       <button onClick={changeUser}>change user</button>
//     </div>
//   );
// }

function App() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("runs when count change");
  });
  if (count < 0) {
    setcount(0);
    alert("count cannot be negative");
  }
  return (
    <div>
      <h1 className="text-xl ">counter is {count}</h1>
      <button
        onClick={() => setcount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        increment count
      </button>
      <button onClick={() => setcount(count - 1)}>decrement count</button>
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <ImperParent/> */}
      {/* <UseLayout/> */}
      {/* <UseRef /> */}
      {/* <UseRef2/> */}
      <Api/>
      <PreVal/>
    </div>
  );
}
export default App;
