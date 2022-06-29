
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DatePicker from './component/DatePicker';
import FormDate from './component/FormDate';
import ImageAudiences from './component/ImageAudiences';
import SlickSlider from './component/SlickSlider';
import Register from './component/Register';

function App() {
  return (
    <div className="App h-screen overflow-x-hidden  w-[100%] px-4 py-8 bg-gradient-to-b from-blue-400 to-pink-500 ">
          <DatePicker/>
          <FormDate/>
          <Register/>
          <ImageAudiences/>
          <SlickSlider/>
          
    </div>
  );
}

export default App;
