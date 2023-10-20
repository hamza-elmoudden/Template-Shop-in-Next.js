import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function S2() {
  return (
    <>
    <section class="container mx-auto p-16" >
        <div class=" flex space-x-3  space-y-3  justify-center items-center flex-col md:flex-row">
            <div class="w-1/3 space-x-4 flex flex-col items-center space-y-5 border border-neutral-400  rounded-lg pt-10 pb-10 shadow-xl move">
                <div class="bg-slate-500 p-4 rounded-full ">
                    <a href="" class="text-orange-300"><LocalShippingIcon/></a>
                </div>
                <h1 class="font-bold text-lg hover:text-fuchsia-700">FREE SHIPPING</h1>
                <p class="text-gray-400 font-mono">Free Shipping On All Order Over 100.00</p>
            </div>
            <div class="w-1/3 space-x-4 flex flex-col items-center space-y-5 border border-neutral-400  rounded-lg pt-10 pb-10 shadow-xl move">
                <div class="bg-slate-500 p-4 rounded-full ">
                    <a href="" class="text-orange-300"><LocalPhoneIcon/></a>
                </div>
                <h1 class="font-bold text-lg hover:text-fuchsia-700">ONLINE SUPPORT 24/7</h1>
                <p class="text-gray-400 font-mono">We Will Assist You With Your Inquiries</p>
            </div>
            <div class="w-1/3 space-x-4 flex flex-col items-center space-y-5 border border-neutral-400  rounded-lg pt-10 pb-10 shadow-xl move">
                <div class="bg-slate-500 p-4 rounded-full ">
                    <a href="" class="text-orange-300"><CurrencyExchangeIcon/></a>
                </div>
                <h1 class="font-bold text-lg hover:text-fuchsia-700">MONEY BACK GURANTEE</h1>
                <p class="text-gray-400 font-mono">Free Shipping On All Order Over 100.00</p>
            </div>
        </div>
    </section>
    </>
  )
}
