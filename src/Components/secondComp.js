import secondImg from '../assets/icon-communities.svg'
import thirdImg from '../assets/icon-messages.svg'


export default function SecondComp(){
    return(
    <div>
        <div className='md:flex md:justify-center'>
                <div className='px-4 md:px-8 lg:px-10 space-y-2 mt-24 flex-col flex  justify-start items-center'>             
                    <img src={secondImg} alt='community' className=''/>
                    <h1 className='text-4xl font-bold'>1.4k+</h1>
                    <p className=''>Communities Formed</p>  
                </div>
                <div className='px-4 space-y-2 md:px-8 lg:px-10 mt-24 flex-col flex  justify-start items-center'>             
                    <img src={thirdImg} alt='community' className=''/>
                    <h1 className='text-4xl font-bold'>2.7m+</h1>
                    <p className=''>Messages Sent</p>  
                </div>
            </div>
    </div>
    )
}