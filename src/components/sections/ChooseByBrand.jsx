import brandsArray from "../../assets/data/brands";
import BrandComponent from "../BrandCard";

function ChooseByBrand() {
    return (
        <section className="p-4 space-y-4 max-w-7xl mx-auto">
            <h2 className="capitalize font-semibold text-xl">choose by brand</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {brandsArray.map((brand) => (
                    <BrandComponent {...brand} />
                ))}
            </div>
        </section>
    );
}

export default ChooseByBrand;