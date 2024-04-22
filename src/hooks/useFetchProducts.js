import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (id) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getDataProducts = async () => {
        const newProducts = await getProducts(id);
        setProducts(newProducts);
        setIsLoading(false)
    }

    useEffect(() => {
        getDataProducts();
    }, [])

    return {
        products,
        isLoading
    }

}