import firstImg from '../assets/screen-mockups.svg'



export default function FirstComp(){
    return(
        <div>
            <div className='px-4 md:px-8 lg:px-10'>
                <div className='text-center mt-24 space-y-6 '>
                    <h1 className='text-4xl font-bold xl:text-4xl'>Build The Community Your Fans Will Love</h1>
                    <p className=' font-medium px-6 xl:text-xl'>Huddle re-imagines the way we build communities.
                         You have a <br></br>voice, but so does your audience. Create
                         connections with your<br></br> users as you engage in genuine discussion.
                    </p>
                </div>
                <div className='self-center items-center justify-center flex mt-9'>
                    <button className='bg-button px-4 rounded-full py-1 md:py-4 md:px-5  font-medium shadow-2xl text-white'>Get Started For Free</button>
                </div>
            </div>
            <div className='px-4 mt-24 md:px-8 lg:px-10 md:flex md:justify-center'>
                <img src={firstImg} alt='screen mockups' className='md:w-3/4 lg:w-2/3'/>
            </div>
        </div>
    )
}