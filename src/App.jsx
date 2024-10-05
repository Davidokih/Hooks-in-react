import Layout from "./components/Layout";
import Header from "./components/Header";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct";
import SignUp from "./components/SignUp";
import LayoutPage from "./page/LayoutPage";
import LayoutForBuyers from "./page/LayoutForBuyers";
import Login from "./page/login";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
          <Routes>
            {/* <Route path="/products" element={ <Layout><Card /></Layout>} /> */}
            <Route path="/sign-up" element={ <Layout><SignUp /></Layout>} />
            <Route path="/create-product" element={ <Layout><CreateProduct /></Layout>} />
          <Route path="/product/:id" element={ <Layout> <ProductDetail /></Layout> } />


          <Route path="/login" element={ <Login />} />
          
          <Route path='/seller/*' element={ <LayoutPage />} />
          <Route path='/*' element={ <LayoutForBuyers />} />
          </Routes>
      {/* </div> */}
      </BrowserRouter>
    </>
  )
}

export default App

// getState('dfghjkl')