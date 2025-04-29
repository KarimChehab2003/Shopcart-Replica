import ProductsCarousel from "./components/ProductsCarousel";
import BestDeals from "./components/sections/BestDeals";
import Cashback from "./components/sections/Cashback";
import ChooseByBrand from "./components/sections/ChooseByBrand";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Savings from "./components/sections/Savings";
import Separator from "./components/sections/Separator";
import TopCategories from "./components/sections/TopCategories";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <TopCategories />
            <ProductsCarousel header="todays best deals for you!" />
            <ChooseByBrand />
            <Savings />
            <ProductsCarousel header="weekly popular products" />
            <Cashback />
            <BestDeals />
            <Separator />
            <ProductsCarousel header="most selling products" />
            <Footer />
        </div>
    );
}

export default App;