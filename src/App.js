import "./App.css";
import Home from "./Home";
// import Card from "./Card";
import Detail from "./Detail"
import {  Route, Routes } from 'react-router-dom'

function App() { 
  return (
    <>
      <Routes>
          <Route exact path={"/"} element={<Home/>} />
          <Route exact path={"/detail/:username"} element={<Detail/>} />
      </Routes>
    </>
  );
}

export default App;
