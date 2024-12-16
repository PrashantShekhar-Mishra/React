import NavBar from './components/navbar'
import X99 from './components/x99Mark';
import Headphone from './components/Headphone';
import Speaker from './components/Speaker';
import Cart from './components/cart';
import Bottombar from './components/bottombar';
import Earphone from './components/Earphone';
import Product from './components/products';

import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <NavBar />
        <Routes>
            <Route path='/' element={<X99/>} />
            <Route path='/headphones' element={<Headphone />} />
           <Route path='/earphones' element={<Earphone />} />
           <Route path='/speakers' element={<Speaker />} />
           <Route path='/cart' element={<Cart />} />
           </Routes>
       </BrowserRouter>
      <Product/>
    <Bottombar />
  </div>
  );
}




export default App;