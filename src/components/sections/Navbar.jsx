import { useState } from 'react';
import logo from '../../assets/eCommerceLogo.svg'
import { FaRegUser, FaAngleDown } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

function Navbar() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    return (

        <nav className='relative z-10'>
            <div className='bg-white flex justify-between items-center p-4 max-w-7xl mx-auto'>
                <figure>
                    <img src={logo} alt="" />
                </figure>

                {isMenuClicked ? (
                    <div className='absolute top-[100%] left-1/2 -translate-x-1/2 -z-10  w-sm'>
                        <ul className='bg-white flex flex-col justify-center items-center space-y-4 mt-2 p-4 rounded-2xl transition-transform slide-down '>
                            <li className='font-medium cursor-pointer'>Category</li>
                            <li className='font-medium cursor-pointer'>Deals</li>
                            <li className='font-medium cursor-pointer'>What's New</li>
                            <li className='font-medium cursor-pointer'>Delivery</li>
                        </ul>
                    </div>

                ) :
                    (<ul className='items-center space-x-4 hidden xl:flex'>
                        <li className='flex items-center space-x-2 cursor-pointer hover:opacity-50 transition-opacity   '>Category <FaAngleDown /></li>
                        <li className='cursor-pointer hover:opacity-50 transition-opacity   '>Deals</li>
                        <li className='cursor-pointer hover:opacity-50 transition-opacity   '>What's New</li>
                        <li className='cursor-pointer hover:opacity-50 transition-opacity   '>Delivery</li>
                    </ul>)
                }

                <input type="search" placeholder='Search Product' className='border border-gray-300 rounded-full px-4 py-2 focus:border-blue-500 transition-colors hidden md:block' />

                <div className='sm:flex items-center space-x-8 text-lg hidden'>
                    <p className='flex justify-center items-center space-x-2'>
                        <FaRegUser />
                        <span>Account</span>
                    </p>
                    <p className='flex justify-center items-center space-x-2'>
                        <BsCartPlus />
                        <span>Cart</span>
                    </p>
                </div>

                <>
                    <button className={`xl:hidden p-2 transition duration-300 cursor-pointer ${isMenuClicked ? "text-white bg-gray-400" : ""}`} onClick={() => setIsMenuClicked((prevState) => !prevState)}>&#9776;</button>
                </>
            </div>




        </nav>
    );
}

export default Navbar;