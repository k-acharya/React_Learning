import React from "react";
import UserContext from "./UserCotext";

//children ak just name ha jo ki ..koi bhi value aya ha div wagera me wo pass kardo
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
           {children}   
        </UserContext.Provider>
    )

}

export default UserContextProvider