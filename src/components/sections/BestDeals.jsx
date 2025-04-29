import { useState } from "react";
import bestDealsArray from "../../assets/data/bestDeals";
import ProductCard from "../ProductCard";
function BestDeals() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = ["Gadgets", "Fashion", "Toys", "Education", "Beauty", "Fitness", "Furniture", "Sneakers"];

    return (
        <section className="p-4 my-8 space-y-6 max-w-7xl mx-auto">
            <p className="text-2xl font-semibold capitalize">Todays Best Deals for you!</p>

            <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                    <button key={index} className={`border py-3 px-6 rounded-full font-medium cursor-pointer transition-colors duration-200 text-sm ${selectedCategory == category ? "border-emerald-900 bg-emerald-900 text-white" : "border-gray-400"}`} onClick={() => setSelectedCategory(category)}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {bestDealsArray.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
}

export default BestDeals;