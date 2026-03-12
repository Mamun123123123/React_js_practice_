import React, { useState } from 'react'

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [data, setData] = useState([])
    const formHandler = (e) => {
        e.preventDefault()
        setData([ ...data, inputs])
        setInputs(
            {
                username:'',
                password:''
            }
        )
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
                            return <li className='border p-2  m-2' key={idx}>
                               <h3>{idx+1}. UserName : {item.username} - Password : {item.password}</h3>
                            </li>
                        })
                    }
                </ol>
            </div>

        </>

    )
}

export default Login