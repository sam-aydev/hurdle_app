import eightImg from '../assets/bg-section-top-mobile-2.svg'
import sec_eightImg from '../assets/bg-section-top-desktop-2.svg'
import ningthImg from '../assets/illustration-your-users.svg'
import tenthImg from '../assets/bg-section-bottom-mobile-2.svg'
import sec_tenthImg from '../assets/bg-section-bottom-desktop-2.svg'




export default function FifthComp(){
    return(
        <div>
             <div className=''>
                <div className='mt-28  '>
                    <div>

                         <img src={eightImg} className='w-full md:hidden'/>
                         <img src={sec_eightImg} className=' md:w-screen md:-mt-2 md:block hidden'/>
                    </div>
                    
                    <div className='bg-primary md:flex md:flex-row-reverse md:justify-center' >
                        <div className=' flex justify-center'>
                            <img src={ningthImg} className='w-52 md:w-3/4'/>
                        </div>
                            <div className='mt-20 md:mt-10 px-4 md:px-8 lg:px-10 text-center space-y-3'>
                                <h2 className='font-bold text-xl xl:text-2xl'>Your Users</h2>
                                <p className='font-medium xl:text-xl'>
                                    It takes no time at all to integrate Huddle with your app's authentication solution.
                                    This means once signed in to your app, your users can start chatting immediately.
                                </p>
                            </div>
                                      
                    </div>
                            <img src={tenthImg} className='w-full md:hidden'/>
                            <img src={sec_tenthImg} className='  md:w-screen md:block hidden'/>
                </div>
            </div>
            <div className='mt-20 px-4 md:px-8 lg:px-10 text-center space-y-3   justify-center '>
                <h2 className='font-bold text-xl xl:text-2xl'>Ready To Build Your Community?</h2>
                <button className='bg-button px-4 rounded-full md:py-3 py-1 font-medium shadow-2xl text-white'>Get Started For Free</button>
            </div>
        </div>
    )
}