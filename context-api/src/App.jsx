import Header from "./components/Header";
import Footer from "./components/Footer";
import { useCallback, useContext } from "react";
import { ContextData } from "./Context/context";
import Section from "./components/section";


function App() {
  const Data=useContext(ContextData) 
  console.log(Data)
  return (
    <div>
      i am APP 
      <Header /> 
      <Section/>
      <Footer /> 
    </div>  
  );   
}
 
export default App;
