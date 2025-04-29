function SavingCard({ price, image, color }) {
    const bgColorMap = {
        teal: 'bg-teal-100',
        yellow: 'bg-yellow-100',
        orange: 'bg-orange-100',
        red: 'bg-red-100'
    }

    const textColorMap = {
        orange: 'text-orange-800',
        red: 'text-red-800',
        teal: 'text-teal-800',
        yellow: 'text-yellow-600'

    }
    return (
        <div className={`flex flex-col space-y-2 rounded-lg ${bgColorMap[color]} `}>
            <div className="p-8">
                <h3 className="capitalize font-semibold text-xl mb-1">save</h3>
                <p className={`text-5xl font-semibold mb-4 ${textColorMap[color]}`}><sup>$</sup>{price}</p>
                <p className="capitalize">explore our furniture & home furnishing range</p>
            </div>
            <img src={image} alt={`image of a furniture`} className="rounded-b-lg" />
        </div>
    );
}

export default SavingCard;