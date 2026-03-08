import Card_multiple from "./components/Card_multiple"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Props_with_Button_Function from "./components/Props_with_Button_Function"
import Props_with_Image from "./components/Props_with_Image"
import Card from "./components/card"
const App = () => {
  const showAlert = ()=>{
       alert("click korne ke liye donnobad")
  }
  return (
    <div className="parent">
      <h1>hello</h1>
      <Props_with_Button_Function text="click me la la la " handleClick={showAlert}/>
      <Props_with_Image name="Mamun" role="Frontend Developer" img="https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg"/>
      <Card_multiple title="React Course" description="Learn React step by step" button ="View Course"/>
       {/* <Navbar /> */}
       {/* <Card user='props worked'/> */}
       <Profile name="Abdullah Al Mamun" age={200} city="Dhaka" />
    </div>
  )
}

export default App
