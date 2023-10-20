import React from 'react'
import { removeItemFromList} from '../Toolkit/Slice/cartSlicer'
import { useDispatch,useSelector } from 'react-redux'
import Cookies from 'js-cookie';

export default function STORE() {
    const list  = useSelector((state) => state.liscard.list)
    const dispatch = useDispatch()
    const card = list.map((e)=>{
      return(
      <div class="md:h-40 py-4  md:py-0 border border-separate flex  flex-col space-y-3  md:flex-row items-center px-3 md:justify-between rounded-2xl bg-green-50 shadow-lg  hover:border-collapse md:space-x-2">
      <div class="">
        <img class="bg-slate-100 w-20 h-20 rounded-lg" src="" alt="" />
      </div>
      <div class="space-y-3">
        <p class="uppercase text-lg font-bold line-clamp-1">{e.title}</p>
        <p class="capitalize font-mono text-gray-700 text-base mb-4 line-clamp-1 ">{e.description}</p>
      </div>
      <div class="space-y-3">
        <p class="font-bold text-indigo-500 text-md">{e.price} $</p>
        <button class="bg-indigo-500 text-white px-2 py-2 rounded-lg hover:bg-indigo-600" onClick={()=>dispatch(removeItemFromList(e)) }>Remove Item</button>
      </div>
      </div>)
    })

  return (
    <>
    <div>
      <div class="container mx-auto pt-4 pb-4 height_100vh bg-slate-200 px-40">
        <div class=" h-full mx-auto  space-y-3">
              {card}
        </div>
      </div>
    </div>
    </>
  )
}
