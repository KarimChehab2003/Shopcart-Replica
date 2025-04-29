import savingsArray from "../../assets/data/saving";
import SavingCard from "../SavingCard";

function Savings() {
    return (
        <section className="p-4 space-y-4 max-w-7xl mx-auto" >
            <h2 className="capitalize font-semibold text-2xl">get up to 70% off</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 space-y-4">
                {savingsArray.map((saving, index) => (
                    <SavingCard key={index} {...saving} />
                ))}
            </div>
        </section>
    );
}

export default Savings;