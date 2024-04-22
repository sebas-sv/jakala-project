export const getProducts = async () => {
    const url = `https://dulces-petalos.herokuapp.com/api/product`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
};