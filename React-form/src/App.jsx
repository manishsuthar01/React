import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import FormValidation from "./components/FormValidation.jsx";
import UseForm from "./components/useForm.jsx";

function App() {

  return (
    <>
      <Navbar/>
      {/* <FormValidation/> */}
     <UseForm/>
    </>
  );
}

export default App;
