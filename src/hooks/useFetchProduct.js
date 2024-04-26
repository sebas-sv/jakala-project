import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetchProduct = (id) => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getDataProduct = async () => {
        const newProduct = await getProducts(id);
        setProduct(newProduct);
        setIsLoading(false)
    }

    useEffect(() => {
        getDataProduct();
    }, [])

    return {
        product,
        isLoading
    }

}