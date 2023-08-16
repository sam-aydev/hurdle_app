import logo from '../assets/logo.svg'


export default function NavBar(){
    return(
        <div>
            <div className='flex justify-between px-4 mt-2'>
                <div className='w-36'>
                    <img src={logo} />
                </div>
                <div>
                    <button className='text-button border-2 rounded-2xl px-2 md:py-1 md:px-4 border-button bg-white'>Try It Free</button>
                </div>
            </div>
        </div>
    )
}