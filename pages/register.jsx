import React, { useState } from 'react'

export default function register() {
    const [info,setinfo] = useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        password:"",
        confirm_password:""

    })
    const data = {
        first_name:info.first_name,
        last_name:info.last_name,
        email:info.email,
        phone:info.phone,
        password:info.password,
        confirm_password:info.confirm_password
    }
    const handerlform = (e)=>{setinfo({...info,[e.target.name]:e.target.value})}
    const handelsubmit = async(e)=>{
        e.preventDefault()
        const req = new Request('https://api/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        const  sand = async ()=>{
            fetch(req).then((req)=>req.json()).catch((error)=>  error)
        } 
    }
  return (
    <>
    <section class="height_100vh flex justify-center items-center border border-spacing-8">
        <form onSubmit={handelsubmit} class="w-80%  space-y-10 border border-spacing-4 p-6 shadow-lg rounded-lg">
        <div class="flex space-x-8 items-center  ">
            <div class="flex flex-col space-y-3 ">
                <label  htmlFor="" class="uppercase text-lg font-medium pl-2">first name</label>
                <input name='first_name' value={info.first_name} onChange={handerlform} class="w-96 px-3 py-2 rounded-lg outline-none border border-spacing-5" type="text" placeholder='FIRST NAME' />
            </div>
            <div class="flex flex-col space-y-3">
            <label  htmlFor="" class="uppercase text-lg font-medium pl-2">last name</label>
                <input name="last_name" value={info.last_name} onChange={handerlform} class="w-96 px-3 py-2 rounded-lg outline-none border border-spacing-5" type="text" placeholder='LAST NAME' />
            </div>
        </div>
        <div class="flex space-x-8 items-center ">
            <div class="flex flex-col space-y-3 ">
                <label  htmlFor="" class="uppercase text-lg font-medium pl-2">email</label>
                <input name="email" value={info.email} onChange={handerlform} class="w-96 px-3 py-2 rounded-lg outline-none border border-spacing-5" type="text" placeholder='EMAIL' />
            </div>
            <div class="flex flex-col space-y-3">
            <label  htmlFor="" class="uppercase text-lg font-medium pl-2">Phone</label>
                <input name="phone" value={info.phone} onChange={handerlform} class="w-96 px-3 py-2 rounded-lg outline-none border border-spacing-5" type="text" placeholder='PHONE'/>
            </div>
        </div>
        <div class="flex space-x-8 items-center ">
            <div class="flex flex-col space-y-3 ">
                <label  htmlFor="" class="uppercase text-lg font-medium pl-2">Passwod</label>
                <input name="password" value={info.password} onChange={handerlform} class="w-96 px-3 py-2 rounded-lg outline-none border border-spacing-5" type="password" placeholder='PASSWOD' />
            </div>
            <div class="flex flex-col space-y-3">
            <label  htmlFor="" class="uppercase text-lg font-medium pl-2">confirmer Passwod</label>
                <input name="confirm_password" value={info.confirm_password} onChange={handerlform} class="w-96 px-3 py-2 rounded-lg outline-none border border-spacing-5" type="password" placeholder='CONFIRMER PASSWOD'/>
            </div>
        </div>
        <div class="w-100% text-center">
        <button class=" text-center bg-slate-600 px-3 py-2 rounded-full text-lg font-medium uppercase w-1/2 hover:bg-slate-950 hover:text-indigo-200" type='Sbumit'>register</button>
        </div>
        </form>
    </section>
    </>
  )
}
