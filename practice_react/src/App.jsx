import NavBer from "./Pages/NavBer"
import Note_app from "./Project1/Note_app"
import Image_galary from "./Project2/Image_galary"
import Array_of_object from "./components/Array_of_object"
import Axios_ from "./components/Axios_"
import Card_multiple from "./components/Card_multiple"
import Form_handling from "./components/Form_handling"
import Function from "./components/Function"
import Hiring from "./components/Hiring"
import Navbar from "./components/Navbar"
import Problem1 from "./components/Problem1"
import Problem2 from "./components/Problem2"
import Problem3 from "./components/Problem3"
import Profile from "./components/Profile"
import Props_with_Button_Function from "./components/Props_with_Button_Function"
import Props_with_Image from "./components/Props_with_Image"
import Tailwind from "./components/Tailwind"
import UseEffect from "./components/UseEffect"
import UseState from "./components/UseState"
import UseState_arr from "./components/UseState_arr"
import Card from "./components/card"

import Section1 from "./components1/section_1/Section1"
import Section2 from "./components1/section_2/Section2"
import { Routes,Route } from "react-router-dom"
import Name from "./Context/Name"
import { UserProvider } from "./Context/Context"
import Login from "./components/Login"
import Use_Effect from "./components/Use_Effect"
import { SetContext, SetContext_Provider } from "./Context1/Create_context"
import Use from "./Context1/Use"
import Food from "./Project3/Food"
import Fetch_url from "./components/Fetch_url"
import Home from "./personal/Home"
import About from "./personal/About"
import Contact from "./personal/Contact"
import Nav from "./personal/Nav"
import Photos from "./personal/Photos"
import Country from "./Project4/Country"
import Players from "./Dream_BPL_11/Players"


const App = () => {

  // const showAlert = ()=>{
  //      alert("click korne ke liye donnobad")
  // }
  // const arr = [10,20,30,40]
  return (
    <>
    <Players />
    {/* <Country /> */}
     {/* <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/photo" element={<Photos />}/>

    </Routes> */}
    {/* <Fetch_url /> */}
    {/* <Food /> */}
    {/* <SetContext_Provider>
      <Use />
    </SetContext_Provider> */}
      {/* <Use_Effect />  */}
      {/* <Login /> */}
      {/* <UserProvider>
        <Name />
        <About />
      </UserProvider> */}
     
      {/* <NavBer />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
         
      </Routes> */}



    {/* <Image_galary /> */}
    {/* <Note_app /> */}
    {/* <Form_handling /> */}
    {/* <UseState_arr /> */}

    {/* <Function /> */}
    {/* <Hiring /> */}








    {/* <Nav />
    <Section1 />
    <Section2 /> */}
    
    
    
    
     <div className="parent">
      {/* <Tailwind /> */}
      {/* <Array_of_object /> */}
       {/* {arr.map(item => <h2>{item}</h2>)} */}
      {/* <h1>hello</h1> */}
      {/* <Props_with_Button_Function text="click me la la la " handleClick={showAlert}/>
      <Props_with_Image name="Mamun" role="Frontend Developer" img="https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg"/>
      <Card_multiple title="React Course" description="Learn React step by step" button ="View Course"/>
       {/* <Navbar /> */}
       {/* <Card user='props worked'/> */}
       {/* <Profile name="Abdullah Al Mamun" age={200} city="Dhaka" /> */} 
    </div>
    </>
   
  )
}

export default App
