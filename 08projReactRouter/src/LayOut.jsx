import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//<Outlet/> ye wo portion ko change kardega..baki uske uppar ka and niche ka jese ki header and footer change nai hoga wo sabme same rahega

function LayOut(){
    return(
      <>
      <Header/>
      <Outlet/>  
      <Footer/>
      </>
    )
}

export default LayOut