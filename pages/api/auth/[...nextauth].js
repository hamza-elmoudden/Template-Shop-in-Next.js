

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "email", type: "text", placeholder: "email" },
            password: { label: "password", type: "password" }
          },
          async authorize(credentials, req) {
            const {email,password} = credentials
            const data = {
              email,
              password,
            }
            const request = new Request('https://api/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
            })
            const user = async ()=>{
             await fetch(request)
              .then((req)=>{req.json()})
              .catch((error)=>  error)
          } 
            if (user) {
              return user
            } else {
              return null
            }
          }
        })
      ],
    session:{
      strategy:"jwt"
    },
    pages:{
      signIn:"/auth/SignIn",
      // error:"/404"
      
    }
  });