import interiorBackground from "../../assets/interiorBackground.png"

function Cashback() {
    return (
        <section className="flex justify-center items-center p-4 cashback-background">
            <div className="bg-emerald-900 text-white p-8 space-y-4 my-8">
                <p className="font-semibold text-2xl">Get 5% Cash back on $200</p>
                <p className="text-sm">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                <button className="capitalize border border-white rounded-full py-2 px-6 hover:bg-[#333] hover:border-[#333] transition-colors duration-200">learn more</button>
            </div>
        </section>
    );
}

export default Cashback;