import React, { useState } from 'react'

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [idits,setIdits] = useState(null)
    const [data, setData] = useState([])
    const formHandler = (e) => {
        e.preventDefault()
        if(idits !== null){
          const newData = [...data]
          newData.splice(idits,1,inputs)
          console.log(newData);
          
          setData(newData)
          setIdits('')
        }else{
        setData([ ...data, inputs])
        }
        setInputs(
            {
                username:'',
                password:''
            }
        )
    }
    const idit = (idx) => {
        setInputs(data[idx])
        setIdits(idx)
        
        
    }
    const delet = (idx) => {
         console.log(idx);
         const allData = [...data]
         allData.splice(idx,1)
         setData(allData)
         
    }
    return (
        <>

            <div className='border w-fit m-4 rounded-lg'>
                <form onSubmit={formHandler} className='flex flex-col items-center p-4 '>
                    <input
                        name='username'
                        value={inputs.username}
                        onChange={(e) => setInputs({
                            ...inputs,
                            [e.target.name]: e.target.value
                        })}
                        className='border rounded-2xl   m-2 p-2 bg-amber-900 text-white'
                        type="text"
                        placeholder='Enter UserName..'
                    />
                    <input
                        name='password'
                        value={inputs.password}
                        onChange={(e) => setInputs({
                            ...inputs,
                            [e.target.name]: e.target.value
                        })}
                        className='border rounded-2xl m-2 p-2 bg-amber-900 text-white'
                        type="password"
                        placeholder='Enter Password.....'
                    />
                    <button
                        className='bg-amber-950 p-3 hover:bg-blue-200 hover:text-black hover:scale-95 leading-1.5 rounded-xl'
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className='border w-fit p-2 rounded-xl m-2 bg-slate-100 shadow-lg text-black flex flex-col items-center'>
                <h1 className='uppercase font-bold'>Login Details...........</h1>
                <ol>
                    {
                        data.map((item,idx)=>{
                            return <li className='border tracking-wider p-2  m-2 flex  justify-between gap-4' key={idx}>
                               <h3>{idx+1}. UserName : {item.username} - Password : {item.password}</h3>
                               <div className='flex gap-4 '>
                                <button onClick={()=> idit(idx)} className='border leading-1.5 p-2 uppercase rounded-lg bg-blue-600 text-white'>Edit</button>
                                <button onClick={()=>delet(idx)} className='border leading-1.5 p-2 uppercase rounded-lg bg-red-600 text-white'>Delete</button>
                               </div>
                               
                            </li>
                        })
                    }
                </ol>
            </div>

        </>

    )
}

export default Login