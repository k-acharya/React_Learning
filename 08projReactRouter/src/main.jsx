import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import LayOut from './LayOut.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx' //components and usme koi method ho toh sai se lehilo aksath

const router = createBrowserRouter([
  {
    path:'/',  // '/' top level element ..iske sndar nesting horahi ha..toh ye kya chij render karega wo element humko batana padta ha
    element: <LayOut/>, //ye layout se aya ha
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contactus",
        element: <ContactUs/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        loader: githubInfoLoader,
        path: "github",
        element: <Github/>
      }
    ]
  }
])
//or another way for easy sintex
// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route Route path="/" element={<LayOut/>}>
//       <Route Route path="home" element={<Home/>}/>
//       <Route Route path="about" element={<About/>}/>
//       <Route Route path="contactus" element={<ContactUs/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
