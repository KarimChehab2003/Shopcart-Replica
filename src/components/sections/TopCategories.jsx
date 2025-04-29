import topCategoriesData from "../../assets/data/topCategoriesData";
import CategoryCard from "../CategoryCard";

function TopCategories() {
    console.log(topCategoriesData);
    return (
        <section className="p-4 space-y-6 mb-4 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold capitalize">shop our top categories</h2>
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
                {
                    topCategoriesData.map(({ name, image }, index) => (
                        <CategoryCard key={index} name={name} image={image} />
                    ))
                }
            </div>
        </section>
    );
}

export default TopCategories;