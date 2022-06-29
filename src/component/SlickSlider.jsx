import {Carousel} from 'react-responsive-carousel'

import slickder1 from '../assets/desktop/slickder1.svg'
import slickder2 from '../assets/desktop/slickder2.svg'
import slickder3 from '../assets/desktop/slickder3.svg'
const SlickSlider = () => {
    return ( 
        //thư viện slick slider trên google
      <Carousel className='mt-[1.5rem] text-center justify-center items-center'>
            <div>
                <img src={slickder1} className="h-[13vh] w-[100px]"/>
            </div>
            
            <div>
                <img src={slickder2} className="h-[13vh] w-[100px]"/>
            </div>

            <div>
                <img src={slickder3} className="h-[13vh] w-[100px]"/>
            </div>
            
        </Carousel>
     );
}
 
export default SlickSlider;