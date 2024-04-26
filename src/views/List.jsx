import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useFetchProducts } from "../hooks/useFetchProducts";

import Spinner from "../components/Spinner";
import Item from "../components/Item";
import Search from "../components/Search";

const List = () => {
    const { products, isLoading } = useFetchProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className="px-16 pt-8 md:grid md:grid-cols-4 md:px-32 md:gap-8 md:pt-8">
                        <Search products={products} setFilteredProducts={setFilteredProducts} />
                    </div>
                    <div>
                        {
                            filteredProducts.length === 0
                            &&
                            <p className="p-16 text-center text-xl font-bold text-red-600">No se encontraron productos.</p>
                        }
                    </div>
                    <div className="grid content-center gap-2 pt-8 px-16 sm:grid-cols-3 sm:pt-16 sm:gap-4 md:grid-cols-4 md:px-32 md:gap-8">
                        {
                            filteredProducts.map((product) => (
                                <Link to={`/detail/${product.id}`} key={product.id}>
                                    <Item {...product} />
                                </Link>
                            ))
                        }
                    </div>

                </>
            )}
        </>
    );
};

export default List;
