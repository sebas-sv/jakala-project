export const getProducts = async () => {
    const url = `http://dulces-petalos.herokuapp.com/api/product`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
};