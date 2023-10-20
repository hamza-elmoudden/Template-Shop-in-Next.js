import Cared from "@/Components/product/cared"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useRef } from 'react';

export default function products(props) {
    const [search,setsearch] = useState('')
    const[category,setcategry] = useState('')
    const produts = props.repo
    const pd_filter_list = produts.filter((e) =>  e.title.toLowerCase().includes(search.toLowerCase()))
                                  .filter((e)=>e.category.toLowerCase().includes(category))
    const pd_list = pd_filter_list.map((e)=>{ return(<Cared prod={e}/>)});
    const catr = pd_filter_list.filter((e)=>e.category.toLowerCase().includes(category))

  return (
    <>
    <section className='prod bg-zinc-50 '>
      <div class="p-7 w-100% flex justify-center items-center">
      <input type="text"  class="w-1/2 h-11 rounded-full input-seach" onChange={(e)=>setsearch(e.target.value)} />
        <a class="">
          <SearchIcon class="w-10"/>
        </a>
      </div>
      <div class="w-100% flex items-center justify-center">
        <ul class="flex  md:space-x-10 ">
          <li class="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 uppercase cursor-pointer" onClick={(e)=>setcategry(e.target.textContent)} >electronics</li>
          <li class="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 uppercase cursor-pointer" onClick={(e)=>setcategry(e.target.textContent)}>jewelery</li>
          <li class="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 uppercase cursor-pointer" onClick={(e)=>setcategry(e.target.textContent)}>men's clothing</li>
          <li class="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 uppercase cursor-pointer" onClick={(e)=>setcategry(e.target.textContent)}>women's clothing</li>
          <li class="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 uppercase cursor-pointer" onClick={(e)=>setcategry("")}>ALL</li>
        </ul>
      </div>
        <div className="container mx-auto 1/2 md:1/4">
        <div class="p-8 justify-center align-center flex flex-wrap space-x-6 space-y-9">
          {pd_list}
        </div>
        </div>
    </section>
    </>
  )
}


export const getStaticProps = (async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const repo = await res.json()
    return { props: { repo } }
  })