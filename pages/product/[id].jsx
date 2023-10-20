import React from 'react'
import { useRouter } from 'next/router'
export default function id(props) {
    const prodact = props.repo
    const router = useRouter()
  return (
    <> 
      <section class="height_100vh ">
        <div class="container mx-auto pt-5 pb-5"> 
              <div class="flex space-x-5">
                <img  class="w-1/2" src={prodact.image} alt="" />
                <div class="flex flex-col justify-around">
                  <h1 class="w-100% font-bold text-lg pt-32 uppercase">{prodact.title}</h1>
                  <h1 class=" bg-indigo-400 px-3 py-3 w-20 rounded-full shadow-sm text-center">
                    {prodact.price}$
                  </h1>
                  <h5 class="text-lg uppercase ">{prodact.category}</h5>
                  <div class="text-clip text-slate-400">
                    {prodact.description}
                  </div>
                  <button class="bg-slate-800 py-5 rounded-full font-bold uppercase text-lg shadow-lg hover:bg-cyan-900">By Now</button>
                </div>
              </div>
        </div>
      </section> 
    </>
  )
}




export async function getServerSideProps(context) {
    const productId = context.query.id;
    console.log(productId)
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const repo = await res.json();
  
    return {
      props: {
        repo,
      },
    };
  }