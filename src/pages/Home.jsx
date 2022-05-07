import Footer from "../components/footer/Footer"
import Header from "../components/Header"
import NewsLetter from "../components/newsLetter/NewsLetter"
import Product from "../components/Products"
import Slider from "../components/Slider/Slider"

function Home(){
    return (
        <>
        <Header />
        <Product />
        <Slider />
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Home