import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/card.jsx";
import User from "./User.json";

function App() {
  return (
    <div className="App">
      {User.map((user,indx) => {
        return(
           <Card key={indx} name={user.name} age={user.age} profession={user.profession} />  
          );
      })}
    </div>
  );
}
 
export default App;      
 