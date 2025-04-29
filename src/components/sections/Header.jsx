import { FaPhoneAlt, FaAngleDown } from "react-icons/fa";

function Header() {
    return (
        <section className=" bg-emerald-900 text-white text-sm">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-2 py-2 px-4 md:flex-row md:justify-between">

                <div className="flex justify-center items-center space-x-2">
                    <FaPhoneAlt />
                    <span >+201008408815</span>
                </div>

                <p className="cursor-pointer hidden sm:block">Get 50% Off on Selected Items    |      Shop Now</p>

                <div className="flex justify-center items-center space-x-4">
                    <div className="flex justify-center items-center space-x-2">
                        <span>Eng</span>
                        <FaAngleDown />
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <span>Location</span>
                        <FaAngleDown />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;