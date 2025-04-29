

function CategoryCard({ name, image }) {
    return (
        <div className="relative overflow-hidden rounded-xl">
            <img src={image} className="w-full h-full hover:scale-110 duration-300 transition-transform" />
            <p className="absolute top-0 left-0 text-white text-xl font-semibold m-4">{name}</p>
        </div>
    );
}

export default CategoryCard;