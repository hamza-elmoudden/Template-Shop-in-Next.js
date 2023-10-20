import  Header  from "./Header"
import Footer from "./Footer"

export default function Main_Lyout(props) {
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}