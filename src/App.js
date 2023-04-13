import NavBar from './components/navbar'
import X99 from './components/x99Mark';
import Panel4 from './components/Headphone';
import Cart from './components/cart';
import Bottombar from './components/bottombar';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <NavBar />
        <Routes>
            <Route path='/' element={<X99/>} />
            <Route path='/headphones' element={<Panel4 />} />
           <Route path='/earphones' element={<Panel4 />} />
           <Route path='/speakers' element={<Panel4 />} />
           <Route path='/cart' element={<Cart />} />
           </Routes>
       </BrowserRouter> 
    <Bottombar />
  </div>
  );
}




export default App;