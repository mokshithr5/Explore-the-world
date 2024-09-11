import './App.css'
import Navbar from './Components/Navbar';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';

function App() {
  return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/products" Component={Products} />
        <Route path="/sign-up" Component={SignUp} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
