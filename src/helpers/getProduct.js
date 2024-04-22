export const getProduct = async (id) => {
    const url = `http://dulces-petalos.herokuapp.com/api/product/${id}`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
};