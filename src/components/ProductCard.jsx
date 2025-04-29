import { FaStar, FaHeart } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ name, image, price }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="space-y-4 md:flex-shrink-0 md:min-w-[400px]">
            {/* Image of Product */}
            <div className="flex justify-center items-center relative bg-gray-100 rounded-xl">
                <img src={image} alt={`image of a ${name}`} className="min-w-45" />
                <div className="absolute top-0 right-0 m-4 bg-white p-2 rounded-full ">
                    <FaHeart className={`text-2xl cursor-pointer ${liked ? "text-red-600" : "text-black"}`} onClick={() => setLiked((prevState) => !prevState)} />
                </div>
            </div>

            {/* Details of Product */}
            <div className="space-y-1">
                <div className="flex justify-between items-center font-semibold text-lg">
                    <p>{name}</p>
                    <p><sup>$</sup>{price}<sup>.99</sup></p>
                </div>
                <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div className="flex justify-start items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} className="text-green-600" />
                    ))}
                    <span className="ms-1 text-sm">(121)</span>
                </div>
            </div>

            <button className="border-2 border-emerald-900 rounded-full py-1.5 px-4 font-medium hover:bg-emerald-900 hover:text-white transition-colors duration-300 cursor-pointer">Add to Cart</button>
        </div>
    );
}

export default ProductCard;