import seventhImg from '../assets/illustration-flowing-conversation.svg'


export default function FourthComp(){
    return(
        <div>
            <div className='md:flex'>
                <div className='px-4 md:px-8 lg:px-10 mt-28 flex justify-center'>
                    <img src={seventhImg} className='w-52 md:w-4/5 ' />
                </div>

                <div className='px-4 md:px-8 lg:px-10 text-center md:mt-44 mt-20 space-y-3'>
                    <h1 className='font-bold text-xl xl:text-2xl'>Flowing Conversations</h1>
                    <p className='font-medium xl:text-xl'>You wouldn't paginate a conversation in real life, so why do it online? 
                        Our threads have just-in-time loading for a more natural flow.</p>
                </div>
            </div>

        </div>
    )
}