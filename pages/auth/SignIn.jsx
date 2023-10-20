import React from 'react'
import { useState } from 'react'
import {signIn} from "next-auth/react"

export default function SignIn() {
    const [info,setinfo] = useState({
        email:"",
        password:""
    })
    const handerlform = (e)=>{setinfo({...info,[e.target.name]:e.target.value})}
    const handelsubmit = async(e)=>{
        // handle form her
        e.preventDefault()
        console.log(`email:${info.email} and password ${info.password}`)
        const res = await signIn('Credentials',{
          email:info.email,
          password:info.password,
          redirect:false
        })

    }
    


    
  return (
    <>
    <section class="height_100vh flex justify-center items-center border border-spacing-8">
            <form onSubmit={handelsubmit} class="w-80% flex h-96 flex-col justify-around border border-spacing-8 p-10 rounded-lg shadow-lg items-center">
                <label htmlFor="email" class="uppercase text-lg font-medium text-slate-700">Email</label>
                <input type="email" id="email" name='email' placeholder='EMAIL'  class="w-80 p-3 rounded-lg text-indigo-500 outline-none border border-spacing-10 hover:border-cyan-700"value={info.email}  onChange={handerlform}/>
                <label htmlFor="password" class="uppercase text-lg font-medium text-slate-700">Password</label>
                <input type="password" id="password" name="password" class="w-80 p-3 rounded-lg text-indigo-500 outline-none border border-spacing-10 hover:border-cyan-700" placeholder='PASSWORD' value={info.password} onChange={handerlform}/>
                <button class="uppercase border border-spacing-4 py-2 px-4 rounded-full border-x-cyan-950 text-lg font-medium bg-zinc-600 hover:bg-sky-900">Submit</button>
            </form>
    </section>
    </>
  )
}
