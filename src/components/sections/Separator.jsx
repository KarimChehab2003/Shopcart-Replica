function Separator() {
    return (
        <section className="flex justify-start items-center bg-orange-100 p-8 my-8">
            <div className="space-y-4">
                <p className="font-semibold text-2xl">Get 5% Cash back</p>
                <p>on Shopcart.com</p>
                <button className="capitalize py-2 px-6 bg-emerald-900 rounded-full text-white hover:bg-[#333] cursor-pointer transition-colors duration-200">learn more</button>
            </div>
        </section>
    );
}

export default Separator;