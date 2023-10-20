import Link from 'next/link'
import { addItemToList,removeItemFromListمن } from '../../Toolkit/Slice/cartSlicer'
import { useDispatch,useSelector } from 'react-redux'

export default function Cared(props) {
    const list  = useSelector((state) => state.liscard.list)
    const dispatch = useDispatch()
    const prod = props.prod
  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-xs move">
    <img src={prod.image} alt="Image" class="w-full max-h-50  object-cover"/>
    <div class="px-6 py-4">
    <h3 class="font-bold text-xl mb-2 line-clamp-2">{prod.title}</h3>
    <p class="text-gray-700 text-base mb-4 line-clamp-3">
      {prod.description}
    </p>
    <div class="flex items-center justify-between space-x-2">
    <span class="font-bold text-indigo-500 text-md">{prod.price}$</span>
    <button onClick={()=>dispatch(addItemToList(prod))} class="bg-indigo-500 text-white px-2 py-2 rounded-lg hover:bg-indigo-600" >Add to card </button>
    <Link href={`/product/${prod.id}`} class="bg-indigo-500 text-white px-3 py-2 rounded-lg hover:bg-indigo-600">
    Buy Now
    </Link>
    </div>
    </div>
    </div>
  )
}
