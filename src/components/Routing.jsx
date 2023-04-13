import NavBar from './navbar';
import X99 from './x99Mark';
import Panel4 from './Headphone';
import Cart from './cart';
import Bottombar from './bottombar';
import { BrowserRouter,Routes,Route} from "react-router-dom";

function Rout() {
  return (
    <div>
        <NavBar />
            <Route path='/home' element={<X99/>} />
            <Route path='/headphones' element={<Panel4 />} />
            <Route path='/earphones' element={<Panel4 />} />
            <Route path='/speakers' element={<Panel4 />} />
            <Route path='/cart' element={<Cart />} />    
      <Bottombar />
    </div>
  );
}
export default Rout;
