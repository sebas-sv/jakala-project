export const getProducts = async (id) => {
    let url = `https://dulces-petalos.herokuapp.com/api/product`
    url += id !== undefined ? `/${id}` : '';

    const resp = await fetch(url)
    const data = await resp.json()

    return data
};