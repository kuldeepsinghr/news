import React from "react";
import Main from "./component/Main";
import Search from "./component/Search";

function App() {

  // const [theme, setTheme]=useState("light")
  // useEffect(()=>{
  //   if(theme==="dark"){
  //     document.documentElement.classList.add("dark")
  //   }else{
  //     document.documentElement.classList.remove("dark")
  //   }
  // }, [theme])

  // const handleTheme=()=>{
  //   setTheme(theme==="dark"?"light": "dark")
  // }

  return (
    <>
      <Search/>
      <Main/>
    </>
  );
}

export default App;
