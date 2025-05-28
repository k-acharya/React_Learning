import React,{useState, useContext} from "react";
import UserContext from "../Context/UserCotext";


//yaha pe baki sab toh normally pata hi ha js and prev react knowledge
//but userContext se data kese FETCH karunga wo {useContext} help karega
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
 
    const {setUser}= useContext(UserContext) 
    
    //ye setUser is taken from usercontextProvider go and see..so that value 
    //ye setUser ka access jo ha wo is usecontext se mil raha ha..toh usike lia us useContext ko properly context dena padta ha
    //  and wo milta ha (usercintext) se yaha

    const handleSubmit= (e)=> {
        e.preventDefault()
        setUser({username, password}) 
    }
    return(
        <div>
            <h2>Login</h2>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            {"  "}
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

//so data bhejna toh agaya..kese karte ha

export default Login