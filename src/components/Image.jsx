const Image = ({ name, imgUrl, noCut }) => {
    const altText = `Imagen de una ${name}`;

    return (
        <>
            {noCut ? (
                <img className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto" src={imgUrl} alt={altText} />
            ) : (
                <img className="w-full h-48 object-cover" src={imgUrl} alt={altText} />
            )
            }
        </>
    )
}

export default Image;