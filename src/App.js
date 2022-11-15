/* eslint-disable */
import Test from "./Test";
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/signUp/SignUp";
import FindID from "./pages/find/findID/FindID";
import FindPassword from "./pages/find/findPassword/FindPassword";
import FindPasswordAfter from "./pages/find/findPassword/FindPasswordAfter";
import Single from "./pages/single/Single";
import Status from "./pages/status/Status";
import Review from "./pages/review/Review";
import ProductManagement from "./pages/management/productManagement/ProductManagement";
import ProductRegister from "./pages/management/productRegister/ProductRegister";
import BusinessRegister from "./pages/management/businessRegister/BusinessRegister";

import { NotFound } from "./pages/notFound/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import ChangePwd from "./pages/changePwd/ChangePwd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<PublicRoute element={<Test />} />} />
        <Route path="/login" element={<PublicRoute element={<LogIn />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
        <Route path="/find/id" element={<PublicRoute element={<FindID />} />} />
        <Route path="/find/password" element={<PublicRoute element={<FindPassword />} />} />
        <Route path="/find/password/after" element={<PublicRoute element={<FindPasswordAfter />} />} />

        <Route path="change/password" element={<PrivateRoute element={<ChangePwd />} />} />

        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/management/products" element={<PrivateRoute element={<ProductManagement />} />} />
        <Route path="/management/register/products" element={<PrivateRoute element={<ProductRegister />} />} />
        <Route path="/management/register/business" element={<PrivateRoute element={<BusinessRegister />} />} />
        <Route path="/status" element={<PrivateRoute element={<Status />} />} />
        <Route path="/review" element={<PrivateRoute element={<Review />} />} />
        <Route path="/*" element={<PublicRoute element={<NotFound />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
