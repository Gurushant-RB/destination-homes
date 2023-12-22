import Havequestions from "./components/Havequestions/Havequestions";
import Contactform from "./components/contactform/Contactform";
import Images from "./components/contactform/images/Images";
import Corporate from "./components/corporate/Corporate";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";

function App() {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <Havequestions/>
      <Contactform/>
      <Corporate/>
      <Images/>
      
    </div>
  );
}

export default App;
