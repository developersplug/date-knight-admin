import React, { useState } from 'react'
import axios from 'axios';
import { serverUrl } from '../../api';


const Signuppage = () => {
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: '',
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const res = axios.post(`${serverUrl}admin/signup`, formData)
            console.log(res.data)
        } catch (error) {
         console.log(error)

        }

        setFormData('');
    };


    return (

        <div>
            <div className='absolute top-[50%] left-[50%] w-[300px] h-[350px] bg-gray-50 flex flex-col items-center -translate-x-[50%] -translate-y-[50%] justify-evenly rounded-md'>

                <h2 className='text-[#FFA768] text-[30px] font-semibold'>Sign Up</h2>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>

                    <input type="text"
                        placeholder='Username'
                        name="username"
                        className='p-2 rounded-md border-none outline-none bg-gray-300 text-black'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input type="email"
                        placeholder='email'
                        name="email"
                        className='p-2 rounded-md border-none outline-none bg-gray-300 text-black'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="password"
                        placeholder='Password'
                        name="password"
                        className='rounded-md p-2 border-none outline-none bg-gray-300 text-black'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className='bg-[#FFA768] p-2  whitespace-nowrap text-gray-50  w-[50%] rounded-md font-light text-sm md:font-normal md:text-xl'>
                        Sign up
                    </button>

                </form>
            </div>
        </div>

    )
}

export default Signuppage
