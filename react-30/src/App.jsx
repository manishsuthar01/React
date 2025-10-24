import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Togle from "./Components/Togle";
import Timer from "./Components/Timer";
import Bgchange from "./Components/Bgchange";
import Routering from "./Components/Routering";
import Quote from "./Components/Quote";
import FileUp from "./Components/FileUp";
import SearchFilter from "./Components/SearchFilter";
import Pagination from "./Components/Pagination";
import ColorPicker from "./Components/ColorPicker";
import Menu from "./Components/Menu";
import { context } from "./Context/Context";
import Cart from "./Components/Cart";

function App() {
  // const { isdark, handlechange } = useContext(context);
  // const items = [
  //   "item1",
  //   "item 2",
  //   "item 3",
  //   "another item 1",
  //   "another item 2",
  // ];
  return (
    // <div className={isdark ? "dark" : "light"}>
    <div>
      {/* <button onClick={handlechange}>change the theme</button> */}
      {/* <Togle/> */}
      {/* <Timer /> */}
      {/* <Bgchange /> */}
      {/* <Routering /> */}
      {/* <Quote/> */}
      {/* <FileUp/>/ */}
      {/* <SearchFilter item={items}/> */}
      {/* <Pagination/> */}
      {/* <ColorPicker/> */}
      {/* <Menu/> */}
      <Cart />
    </div>
  );
}

export default App;
