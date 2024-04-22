import { useEffect, useState } from "react";
import { getProduct } from "../helpers/getProduct";

export const useFetchProduct = (id) => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getDataProduct = async () => {
        const newProduct = await getProduct(id);
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