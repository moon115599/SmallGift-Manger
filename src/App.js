import Test from "./Test";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import FindID from "./pages/find/findID/FindID";
import FindPassword from "./pages/find/findPassword/FindPassword";
import Single from "./pages/single/Single";
import Status from "./pages/status/Status";
import ProductManagement from "./pages/management/productManagement/ProductManagement";
import ProductRegister from "./pages/management/productRegister/ProductRegister";
import BusinessRegister from "./pages/management/businessRegister/BusinessRegister";

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
            <Route path="status" element={<Sales />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="management">
            <Route index element={<ProductManagement />} />
            <Route path="status" element={<Sales />} />
            <Route path=":productId" element={<Single />} />
          </Route>
        </Route>
*/}
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/find/id" element={<FindID />} />
        <Route path="/find/password" element={<FindPassword />} />
        <Route path="/management/products" element={<ProductManagement />} />
        <Route path="/management/register/products" element={<ProductRegister />} />
        <Route path="/management/register/business" element={<BusinessRegister />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
