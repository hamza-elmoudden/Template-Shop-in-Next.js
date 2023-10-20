import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <>
    <section class="foot bg-slate-900">
      <div class="container mx-auto p-9 flex space-x-10 flex-col  justify-center items-center space-y-4 md:flex-row">
        <div class="w-1/3 flex space-x-5 ">
        <a href="" class=" pt-4 "><LocalShippingIcon class='width' /></a>
        <div class='space-y-2'>
          <h1 class="font-serif text-slate-100 text-2xl">FREE SHIPPING</h1>
          <p class='text-slate-400 text-lg font-serif'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odio, Obcaecati!</p>
        </div>
        </div>
        <div class="w-1/3 flex space-x-5">
        <a href="" class=" pt-4 "><MonetizationOnIcon class='width' /></a>
        <div class='space-y-2'>
          <h1 class="font-serif text-slate-100 text-2xl">PRICE PROMISE</h1>
          <p class='text-slate-400 text-lg font-serif'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odio, Obcaecati!</p>
        </div>
        </div>
        <div class="w-1/3 flex space-x-5">
        <a href="" class=" pt-4 "><BookmarkIcon class='width' /></a>
        <div class='space-y-2'>
          <h1 class="font-serif text-slate-100 text-2xl">LIFETIME WARRANTY</h1>
          <p class='text-slate-400 text-lg font-serif'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Odio, Obcaecati!</p>
        </div>
        </div>
    </div>
    <div>
      <ul class=' flex justify-center space-x-10 p-8 '>
        <li><a href="" class="text-amber-500"><InstagramIcon/></a></li>
        <li><a href="" class="text-amber-500"><FacebookIcon/></a></li>
        <li><a href="" class="text-amber-500"><TwitterIcon/></a></li>
        <li><a href="" class="text-amber-500"><GoogleIcon/></a></li>
        <li><a href="" class="text-amber-500"><YouTubeIcon/></a></li>
      </ul>
    </div>
    </section>
    </>
  )
}
