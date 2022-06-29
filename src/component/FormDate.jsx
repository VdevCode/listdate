import { useState } from 'react';
import DateDisplay from './DateDisplay';


const FormDate = () => {
    const [date,setDate] = useState(Date.now())
    
    return ( 
    <>
        <div className='justify-center items-center text-center'>
             <input className="FormDate rounded-[4px] text-black text-[1.2rem] text-center  mt-[1.5rem]  outline-none " type='date' onChange={(e) => setDate(e.target.value) } ></input>    
        </div>
      
        <DateDisplay date={date}/>
      
    </>
     );
}
 
export default FormDate;