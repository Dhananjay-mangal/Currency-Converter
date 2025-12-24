import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-blue-500 p-4 text-white flex justify-between items-center'>
                
                <div className='flex items-center space-x-2'>
                    <img width="30" src="./icons/logo.webp" alt="Logo" />
                    <span className='text-xl font-bold'>Currency Converter</span>
                </div>
                <div className='flex items-center gap-4 mx-5'>
                    <ul className='flex gap-4 mx-4 font-semibold'>
                        <li className="cursor-pointer hover:text-grey-300 hover:underline transition">Home</li>
                        <li className="cursor-pointer hover:text-grey-300 hover:underline transition">About</li>
                        <li className="cursor-pointer hover:text-grey-300 hover:underline transition">Contact</li>
                    </ul>
                    <input type="text" className='p-1 px-2 rounded-full w-[140px] text-black' placeholder='Search...' />
                </div>

            </nav>
        </div>
    )
}

export default Navbar
