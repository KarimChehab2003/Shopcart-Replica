function BrandComponent({ name, image }) {
    return (
        <div className="flex items-center p-4 bg-gray-100 rounded-lg space-x-4 outline-0 outline-white hover:outline-1 hover:outline-black transition-all duration-300 ">
            <img src={image} alt={`image of ${name}`} className="hover:scale-110 transition-transform duration-200" />
            <div>
                <h2 className="font-medium">{name}</h2>
                <p className="text-xs">Delivery with in 24 hours</p>
            </div>
        </div>
    );
}

export default BrandComponent;