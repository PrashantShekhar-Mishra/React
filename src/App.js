import Bottombar from './components/bottombar';
import NavBar from './components/navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import X99 from './components/x99Mark';
import Cart from './components/cart';
import Panel4 from './components/Headphone';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<X99/>}/>
            <Route path='/headphones'  element={<Panel4/>}/>
            <Route path='/speakers' element={<Panel4/>}/> 
            <Route path='/earphones' element={<Panel4/>}/>
            <Route path='/cart' element={<Cart/>} />
          </Routes>   
      </BrowserRouter>
      <Bottombar />

    </>
  );
}

export default App;
