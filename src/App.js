import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import Sales from "./pages/sales/Sales";
import Single from "./pages/single/Single";
import ProductManagement from "./pages/management/productManagement/ProductManagement";
import ProductRegister from "./pages/management/productRegister/ProductRegister";
import BusinessRegister from "./pages/management/businessRegister/BusinessRegister";
import Chart from "./components/home/chart/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*

        <Route path="/">
          <Route index element={<Home />} />
          <Route path="logIn" element={<Login />} />
          <Route path="chart" element={<Chart />} />
          <Route path="users">
            <Route index element={<ProductManagement />} />
            <Route path="sales" element={<Sales />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="management">
            <Route index element={<ProductManagement />} />
            <Route path="sales" element={<Sales />} />
            <Route path=":productId" element={<Single />} />
          </Route>
        </Route>
*/}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/management/products" element={<ProductManagement />} />
        <Route path="/management/register/products" element={<ProductRegister />} />
        <Route path="/management/register/business" element={<BusinessRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
