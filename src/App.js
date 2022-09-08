import "./App.css";
import { TextField } from "@mui/material";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, clean } from "./Redux/slice";
import Card from "./Card";

function App() {
  const users = useSelector((state) => state.USERS.users);
  const dispatch = useDispatch();
  const [input, setInput] = useState(null);


 useEffect(() => 
 console.log(users)
 ,[users])
  const handleClick = () => {   
    dispatch(clean)
    dispatch(getUsers(input));
  };
  
  
  return (
    <div className="App">
      <div className="App-nav">
        <div className="App-nav-style">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            helperText="Su búsqueda treaerá todas las coincidencias"
            onChange={(e) => setInput(e.target.value)}
          />
          <div onClick={() => handleClick(input)} className="App-search-button">
            <img
              className="App-search-img"
              src="https://img.icons8.com/stickers/200/000000/search.png"
              alt="search-icon"
            />
          </div>
        </div>
      </div>
      <div className="App-card">
        {
          users.length > 0?(
            users.map((user) => <Card username={user.login} avatar_url={user.avatar_url} key={user.id} /> )
          )
          :
          <div className='Card'>Aún no hay busqueda realizada</div>
        }
        
      </div>
      
    </div>
  );
}

export default App;
