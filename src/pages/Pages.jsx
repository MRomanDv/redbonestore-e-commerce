import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login/Login";
import ProductInfo from "./ProductInfo";
import Registro from "./registro/Registro";

function Pages(){
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/product-info/:name" element={<ProductInfo />}></Route>
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}

export default Pages