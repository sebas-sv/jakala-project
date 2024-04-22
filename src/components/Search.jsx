import { useState } from 'react';

const Search = ({ products, setFilteredProducts }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        const text = e.target.value;
        setSearchText(text);

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(text.toLowerCase()) ||
            product.binomialName.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <input
            type="text"
            id="search"
            className="col-start-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleSearchChange}
        />
    );
};

export default Search;
