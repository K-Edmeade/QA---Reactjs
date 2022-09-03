import React, { useState } from "react";

const Login = () =>{
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const printValues = e => {
    e.preventDefault();
    console.log(username,password);
 };

 return(
    <>
    <form onSubmit={printValues}>
        <label>User Name</label>
        <input name = "username"
        type = "text"
        value = {username}
        onChange ={e => setUsername(e.target.value)}/>
    
        <label> password</label>
        <input name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>Submit</button>
    </form>
    
    
    </>
 );

}

export default Login