import NavBar from './NavBar'
import FirstComp from './firstComp'
import SecondComp from './secondComp'
import ThirdComp from './thirdComp'
import FourthComp from './fourthComp'
import FifthComp from './fifthComp'
import Footer from './Footer'




export default function Body(){
    return(
        <div>
            <NavBar/>
            <FirstComp/>
            <SecondComp/>
            <ThirdComp/>
            <FourthComp/>
            <FifthComp/>
            <Footer/>   
        </div>
    )
}