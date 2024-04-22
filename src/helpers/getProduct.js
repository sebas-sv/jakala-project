export const getProduct = async (id) => {
    const url = `https://dulces-petalos.herokuapp.com/api/product/${id}`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
};