import Image from "./Image";
const Item = ({ name, binomialName, price, imgUrl }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg ">
            <Image name={name} imgUrl={imgUrl} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1">{name}</div>
                <div className="font-bold text-xs mb-2">{binomialName}</div>
            </div>
            <div className="px-6 pb-2 ">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price} €</span>
            </div>
        </div>
    )
}

export default Item;