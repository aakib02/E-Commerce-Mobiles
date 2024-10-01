import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Frontend/Login'
import Register from './Components/Frontend/Register'
import Navbar from './Components/Frontend/Navbar'
import Footer from './Components/Frontend/Footer'
import Admin from './Components/Admin/Admin'
import AddProduct from './Components/Admin/AddProduct'
import ShowProduct from './Components/Admin/showProduct'
function App() {
 

  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='admin' element={<Admin />}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/addproduct' element={<AddProduct/>}/>
  <Route path='/showproduct' element={<ShowProduct/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App
