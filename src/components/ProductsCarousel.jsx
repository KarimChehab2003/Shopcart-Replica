import bestDealsData from "../assets/data/bestDeals";
import ProductCard from "./ProductCard";

function ProductsCarousel({ header }) {
    return (
        <section className="p-4 max-w-7xl mx-auto">
            <h2 className="capitalize font-semibold text-2xl mb-6">{header}</h2>

            <div className="flex justify-start items-start space-x-5 overflow-auto scroll-smooth pb-12">
                {
                    bestDealsData.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }

            </div>
        </section>
    );
}

export default ProductsCarousel;

