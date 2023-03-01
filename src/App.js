import './App.css';


import ItemList from './Component/ItemList'
import NavBar from './Component/NavBar';
import {
  BrowserRouter, Routes, Route,
  Link
}
  from 'react-router-dom'; import AddProduct from './Component/AddProduct';
import Login from './Component/Login';
import Sidebar from './Component/SideBar';
import Cards from './Component/Cards';
import PrintCards from './Component/PrintCards';
import AddToCart from './Component/AddToCart';
import TotalBellingDetails from './Component/TotalBellingDetails';
import MyOrders from './Component/MyOrders';
import ViewOrder from './Component/ViewOrder';


function App() {
  return (
    <>
      <div className="App">


        <BrowserRouter>




          <NavBar />
          <Routes>

            <Route path='/' element={<NavBar />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path="/printcard" element={<PrintCards/>} />
            <Route path='/productlist' element={<ItemList />} />
            <Route path='/addedcarts' element={<AddToCart/>} />
            <Route path = "/payment/:total" element={<TotalBellingDetails/>}/>
            <Route path='/myorder' element={<MyOrders/>}/>
            <Route path='/vieworder' element={<ViewOrder/>}/>
            

          </Routes>


        </BrowserRouter>


      </div>
    </>

  );
}

export default App;




// import './App.css';
// import Sidebar from './SideBar';
// import { BrowserRouter as Router } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Sidebar />
//       </div>
//     </Router>
//   );
// }

// export default App;