import "./App.css";
import { TextField } from '@mui/material';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./Redux/slice";
function App() {
  useEffect(() => {
    console.log(input)
  })
  const dispatch = useDispatch()
  const [input, setInput] = useState(null)
  const handleClick = () =>{
    dispatch(getUsers(input))
  }
  const users = useSelector((state) => state.USERS.users)
  console.log(users)
  return (
    <div className="App">
      <div className="App-nav">
      <div className="App-nav-style">
        
        <TextField 
          id="outlined-basic"   
          label="Username" 
          variant="outlined"
          helperText="Su búsqueda treaerá todas las coincidencias"
          className="App-input"
          onChange={(e)=>setInput(e.target.value)}
           />
        
        <div onClick={()=> handleClick(input)} className="App-search-button">
          <img className="App-search-img" src="https://img.icons8.com/stickers/200/000000/search.png" alt="search-icon"/>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
