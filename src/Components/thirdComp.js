import fourthImg from '../assets/bg-section-top-mobile-1.svg'
import sec_fourthImg from '../assets/bg-section-top-desktop-1.svg'
import fifthImg from '../assets/illustration-grow-together.svg'
import sixthImg from '../assets/bg-section-bottom-mobile-1.svg'
import sec_sixthImg from '../assets/bg-section-bottom-desktop-1.svg'



export default function ThirdComp(){
    return(
        <div>
            <div className='md:mt-20'>
                <div>
                <img src={fourthImg} className='w-full md:hidden'/>
                <img src={sec_fourthImg} className='md:w-full md:block hidden'/>
                </div>
                <div className='bg-primary px-4 md:flex md:flex-row-reverse md:-mt-6 md:px-8 lg:px-10 pb-10'>
                    <div>
                        <img src={fifthImg} />
                    </div>
                
                    <div className='px-4 md:px-8 lg:px-10  text-center md:mt-32 mt-20'>
                        <h2 className='font-bold text-xl xl:text-2xl'>Grow Together</h2>
                        <p className='font-medium xl:text-xl'>Generate meaningful discussions with your audienceand build a strong,
                        loyal community. Think of the insightful conversations you miss out with a feedback form.
                        </p>
                    </div>  
                </div>
                <div>
                    <img src={sixthImg} className='w-full md:hidden'/>
                    <img src={sec_sixthImg} className='md:w-full md:block hidden'/>
                </div>
            </div>
        </div>
    )
}