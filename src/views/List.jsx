import Spinner from "../components/Spinner";
import Item from "../components/Item";
import Search from "../components/Search";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const List = ({ id }) => {
    const { products, isLoading } = useFetchProducts(id);
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
                    <div className="md:grid  mt-6  pl-16 pr-16 md:pl-32 md:pr-32">
                        <Search products={products} setFilteredProducts={setFilteredProducts} />
                    </div>
                    <div>
                        {
                            filteredProducts.length === 0 && <p className="pl-16 pt-8">No se encontraron productos.</p>
                        }
                    </div>
                    <div className="grid auto-rows-fr sm:grid-cols-3 md:grid-cols-4 gap-8 sm:pt-16 pt-8 pl-16 pr-16 md:pl-32 md:pr-32 content-center">
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
