import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import ProductInfo from "./ProductInfo";

function Pages(){
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/product-info/:name" element={<ProductInfo />}></Route>
        </Routes>
    )
}

export default Pages