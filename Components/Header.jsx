import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Link from 'next/link'
import { signIn ,useSession,signOut} from 'next-auth/react';



export default function Header() {
  const {data:session}= useSession()
  function btn() {
    if(session){
      return (<><button  class="hover:text-fuchsia-500 text-slate-400" onClick={()=>signOut()}><LogoutIcon/></button></>)
    }else{return (<>
    <li>
    <button  class="hover:text-fuchsia-500 text-slate-400" onClick={()=>signIn()}><LoginIcon/></button>
    </li>
    <li><Link href="/register" class="hover:text-fuchsia-500 text-slate-400"><PersonAddAltIcon/></Link></li>
    </>)}
    
  }
  console.log(session)
  return (
    <div class="pt-3">
    <nav class="container  mx-auto p-6 flex align-middle justify-between text-lg font-bold text-red-50">
        <div class="LOGO text-slate-400"><Link href="/">SHOPE</Link></div>
        <ul class="flex space-x-10 uppercase">
        <li><Link href="/" class="hover:text-fuchsia-500 text-slate-400" >home</Link></li>
        <li><Link href="/products" class="hover:text-fuchsia-500 text-slate-400" >products</Link></li>
        <li><Link href="/Store" class="hover:text-fuchsia-500 text-slate-400" >store</Link></li>
        </ul>
        <ul class=" flex space-x-8 uppercase">
        {btn()}
        </ul>
    </nav>
    </div>
  )
}
