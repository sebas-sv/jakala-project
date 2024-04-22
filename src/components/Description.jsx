const Description = ({ name, binomialName, price, wateringsPerWeek, fertilizerType, heightInCm }) => {
    return (
        <div>
            <ul>
                <li><b>Nombre:</b> {name}</li>
                <li><b>Nombre científico:</b> {binomialName}</li>
                <li><b>Precio:</b> {price} €</li>
                <li><b>Riegos por semana:</b> {wateringsPerWeek}</li>
                {fertilizerType === 'phosphorus' ? (
                    <li><b>Tipo de fertilizante:</b> Fosforado</li>
                ) : (
                    <li><b> de fertilizante:</b> Nitrogenado</li>
                )}
                <li><b>Altura:</b> {heightInCm} cm</li>
            </ul>
        </div>
    )
}

export default Description;