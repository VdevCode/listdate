const DateDisplay = (props) => {
    const {date} = props

    return ( 
        <div className="mt-[1rem] text-white text-center" >
            My Date: {date}
        </div>
     );
}
 
export default DateDisplay;