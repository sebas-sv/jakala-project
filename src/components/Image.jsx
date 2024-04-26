const Image = ({ name, imgUrl, className }) => {
    const altText = `Imagen de una ${name}`;

    return (
        <img className={className} src={imgUrl} alt={altText} />
    )
}

export default Image;