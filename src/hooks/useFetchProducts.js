import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getDataProducts = async () => {
        const newProducts = await getProducts();
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