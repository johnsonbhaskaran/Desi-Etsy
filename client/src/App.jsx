import ProductDetail from "./pages/ProductDetail";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {user ? (
        <Route path='/register' element={<Home />} />
      ) : (
        <Route path='/register' element={<Register />} />
      )}
      //? While there is a user logged in - will be redirected to Home
      {user ? (
        <Route path='/login' element={<Home />} />
      ) : (
        <Route path='/login' element={<Login />} />
      )}
      <Route path='/products/:category' element={<ProductsPage />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
