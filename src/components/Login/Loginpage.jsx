import React, { useState, useEffect } from 'react'
// import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import axios from 'axios'


const Loginpage = ({ onSignup }) => {

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', data);
        localStorage.setItem('loginData', JSON.stringify(data));

    };




    return (
        <>
            <div>
                <div className='absolute top-[50%] left-[50%] w-[300px] h-[350px] bg-gray-50 flex flex-col items-center -translate-x-[50%] -translate-y-[50%] justify-evenly rounded-md'>
                    {/* <div className='absolute right-3 top-3 text-[20px] cursor-pointer'>
                        <RxCross2 onClick={onClose} />
                    </div> */}
                    <h2 className='text-[#FFA768] text-[30px] font-semibold'>Login</h2>


                    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>

                        <input type="text"
                            name="username"
                            placeholder='Username'
                            value={data.username}
                            onChange={handleChange}
                            className='p-2 rounded-md border-none outline-none bg-gray-300 text-black' />


                        <input type="password"
                            name="password"
                            placeholder='Password'
                            value={data.password}
                            onChange={handleChange}
                            className='rounded-md p-2 border-none outline-none bg-gray-300 text-black' />
                        <h4 className='text-[#FFA768]'>Forget Password?</h4>
                        <button
                            type="submit"
                            className='bg-[#FFA768] p-2  whitespace-nowrap text-gray-50  w-[50%] rounded-md font-light text-sm md:font-normal md:text-xl'>
                            Login
                        </button>
                    </form>

                    <h4>
                        Already have an account?{' '}
                        <span
                            style={{ color: '#FFA768', textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            <Link to="/signup" onClick={onSignup}>Sign Up</Link>
                        </span>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Loginpage
