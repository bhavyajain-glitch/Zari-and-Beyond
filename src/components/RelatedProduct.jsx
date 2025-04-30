import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter(item => 
                item.category === category && 
                item.subCategory === subCategory &&
                item._id !== window.location.pathname.split('/').pop() 
            );
            setRelated(productCopy.slice(0, 4)); 
        }
    }, [products, category, subCategory]);

    if (related.length === 0) return null; 
    return (
        <div className='mt-20 mb-16'>
            <div className='mb-10'>
                <h2 className="text-xl font-light tracking-wide text-center">You May Also Like</h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6'>
                {related.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProduct;