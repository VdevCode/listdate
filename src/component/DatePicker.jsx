import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {BsNewspaper} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
import {GrFacebook } from 'react-icons/gr'
import {ImMakeGroup } from 'react-icons/im'
import {BsSearch} from 'react-icons/bs'

const DatePicker = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const [openSearch,setOpenSearch] = useState(false)
    const handleSearch = () =>{
        setOpenSearch(!openSearch)
    }
    const handleMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return ( 

        <>
        <div className='flex justify-between'>
            <div>
            {openMenu ?(
                <MdOutlineClose className='animate-open' size={'28px'} color='red' onClick={handleMenu}/>
           ):
                <GiHamburgerMenu className='animate-open' size={'28px'} color='white' onClick={handleMenu}/>
           }
            {openMenu &&(
                <div className='MenuOpen absolute rounded-[4px] bg-gradient-to-b from-black  p-4  text-[1rem]'>
                    <div className='flex justify-between items-center'>
                        <AiFillHome color='red'/>
                        <li className='text-white mr-[7px]'>Trang chủ</li>
                    </div>
                   <div className='flex  items-center'>
                        <BsNewspaper color='yellow'/>
                         <li className='ml-[10px] text-white'>Tin tức</li>
                   </div>
                   <div className='flex justify-between items-center'>
                         <IoIosNotifications color='yellow'/>
                         <li  className='text-white ml-[10px]'>Thông Báo</li>
                   </div>
                    <div className='flex justify-between items-center'>
                        <GrFacebook color='blue'/>
                         <li  className='text-white mr-[7px]'>Facebook</li>
                   </div>
                    <div className='flex justify-between items-center'>
                         <ImMakeGroup color='green'/>
                         <li  className='text-white ml-[3px]'>Hoạt Động</li>
                    </div>
                 </div>
            )}
            </div>
            <div>
                {openSearch ? (
                    <BsSearch className='text-white bold' onClick={handleSearch}/>
                ):  
                    <BsSearch className='text-white bold' onClick={handleSearch}/>
                }
                {openSearch &&(
                    <input placeholder='search...' className='w-[50%] absolute ml-[-50%] rounded-[4px] p-[5px]  h-[4vh] outline-none '></input>
                )}
            </div>
            
        </div>
        <div className="text-center font-bold text-[1.2rem]">
            Let Date Picker
        </div>
        </>
     );
}
 
export default DatePicker;