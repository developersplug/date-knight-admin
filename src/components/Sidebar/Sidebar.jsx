import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoipsum from '../../assets/logoipsum.png';
import { IoMenu } from "react-icons/io5";


const Sidebar = ({ isOpen, toggleSideBar, onLoginClick }) => {

  return (
    <>

      <div onClick={toggleSideBar} className={`text-2xl md:hidden absolute top-1 left-2 z-10 `}>
        <IoMenu />
      </div>
      <div className={`w-[230px] bg-[#FFA764] p-2 md:p-4 min-h-screen h-[100%]  transition duration-3000 ease-in-out  ${isOpen ? 'translate-x-0' : 'hidden'} md:block `}>
        <div className='mb-8 flex justify-center items-center'>
          <img src={logoipsum} alt="Logo" />
        </div>
        <div className='w-[100%]'>
          <ul className='space-y-4 w-[100%]'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? 'text-[#FFA768] font-light text-sm md:font-normal md:text-xl whitespace-nowrap bg-gray-50 p-2 w-[100%] rounded-md' : 'text-white md:font-normal md:text-xl p-2 rounded-md w-[100%] whitespace-nowrap'
                }
              >
                Visitor Approval
              </NavLink>
            </li>
            <li>
              <NavLink
                to='candidate-approval'
                className={({ isActive }) =>
                  isActive ? 'text-[#FFA768] font-light text-sm md:font-normal md:text-xl whitespace-nowrap bg-gray-50 p-2 w-[100%] rounded-md ' : 'text-white md:font-normal md:text-xl w-[100%] rounded-md p-2 whitespace-nowrap'
                }
              >
                Candidate Approval
              </NavLink>
            </li>
            <li>
              <NavLink
                to='manage-event'
                className={({ isActive }) =>
                  isActive ? 'text-[#FFA768] p-2 whitespace-nowrap bg-gray-50 rounded-md font-light text-sm md:font-normal md:text-xl' : 'text-white  md:font-normal md:text-xl w-[100%] rounded-md p-2 whitespace-nowrap'
                }
              >
                Manage Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to='manage-winner'
                className={({ isActive }) =>
                  isActive ? 'text-[#FFA768] p-2 whitespace-nowrap bg-gray-50 rounded-md font-light text-sm md:font-normal md:text-xl' : 'text-white  md:font-normal md:text-xl w-[100%] rounded-md p-2 whitespace-nowrap'
                }
              >
                Manage Winner
              </NavLink>
            </li>
          </ul>
        </div>
        <button className='text-[#FFA768] p-2 whitespace-nowrap bg-gray-50 rounded-md font-light text-sm md:font-normal md:text-xl w-full md:mt-48 mt-40'>
          <Link to="/login" >Log in</Link>
        </button>
      </div>

    </>
  );
};

export default Sidebar;