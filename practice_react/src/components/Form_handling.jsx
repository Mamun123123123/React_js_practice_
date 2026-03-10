import { useState } from "react"
const Form_handling = () => {
    const [text, setText] = useState('')
    const [data,setData] = useState([])
    const handleInput = (e) => {
            console.log(e);
            
            setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
         console.log(e);
         setData([...data,text])
         setText("")
         
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" name="name" value={text} onChange={handleInput} />
        <button>submit</button>     
      </form>
      <div>
        {data.map((item,index)=>{
           return <h1 key={index}>{item}</h1>
        })}
      </div>
    </div>
  )
}

export default Form_handling
