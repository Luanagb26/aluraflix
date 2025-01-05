import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";

function AppRoutes() {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="novovideo" element={<NovoVideo/>}/>
    </Routes>
  </BrowserRouter>
  )

}

export default AppRoutes;
