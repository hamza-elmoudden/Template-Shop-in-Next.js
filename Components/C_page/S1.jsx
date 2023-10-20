import Link from "next/link"
export default function S1() {
  return (
    <>
    <section class="s1" >
        <div class="container mx-auto flex flex-col justify-center  h-full space-y-7 pl-5">
            <h1 class="font-serif text-4xl text-purple-400 ">Exclusive</h1>
            <h3 class="text-3xl  word-spisang  font-semibold text-purple-500">Featured Products</h3>
            <Link href="/products" class="w-fit bg-amber-500 py-5 px-12 rounded-full text-lg hover:bg-purple-500 font-bold hover:text-orange-300">Vies Collection</Link>
        </div>
    </section>
    </>
  )
}
