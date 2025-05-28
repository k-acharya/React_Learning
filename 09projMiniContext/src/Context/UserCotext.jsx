import React from "react";
import Login from "../Components/Login";
import Profile from "../Components/Profile";

const UserContext = React.createContext() // ye bhi ak method ha ...like usestate jese method ha
//har ak cotext ak varible hota ha

//ak variable banaya and troug kardia output wo variable
export default UserContext;

//toh sabko ese wrap karadia UserContext ke andar toh ye banjayega PROVIDER: koi bhi iske andar jo components ha..unko is global context ka access miljayega
//context ko ak global variable hi manlo and usme ye provider banana padta ha: joki data provide karega..juki dusre file me ha
<UserContext> 
    <Login/>
</UserContext>