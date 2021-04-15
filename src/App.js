import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./Components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";


function App () {

  const [users, setUsers] = useState([]);
  const req = axios.get("https://jsonplaceholder.typicode.com/users");
 
  useEffect(() => {
    req.then(response => setUsers(response.data));
  }, []);

  return (
    <div className="App" >
      <NavBar />
      <UserList users={users} />
    </div>
  );
}

export default App;