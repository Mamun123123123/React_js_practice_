import Array_of_object from "./components/Array_of_object"
import Card_multiple from "./components/Card_multiple"
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
import UseState from "./components/UseState"
import UseState_arr from "./components/UseState_arr"
import Card from "./components/card"
import Nav from "./components1/Nav"
import Section1 from "./components1/section_1/Section1"
import Section2 from "./components1/section_2/Section2"
const App = () => {
  const showAlert = ()=>{
       alert("click korne ke liye donnobad")
  }
  const arr = [10,20,30,40]
  return (
    <>
    <Problem3 />
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
