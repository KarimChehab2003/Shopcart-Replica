
function Hero() {
    return (
        <section className="min-h-[60vh] h-fit flex flex-col justify-center items-start px-4 py-12 mb-8 hero-background lg:items-center lg:text-center">
            <div className="space-y-8 sm:w-[70vw] md:text-xl lg:text-2xl lg:w-[60vw]">

                <h1 className="text-4xl font-semibold capitalize text-emerald-900 leading-relaxed sm:text-5xl">shopping and department store.</h1>

                <p className="text-emerald-950 leading-relaxed">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>

                <button className="text-white capitalize font-medium bg-emerald-900 px-6 py-3 rounded-full cursor-pointer hover:bg-[#333] transition-colors ">learn more</button>
            </div>

        </section>
    );
}

export default Hero;