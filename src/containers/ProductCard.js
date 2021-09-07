import React from 'react';

const ProductCard = ({name, prize}) => {
    return (
        <div className='card'>
            <h1>{name}</h1>
            <p>{prize} €</p>
            <button>Buy</button>
        </div>
    );
};

export default ProductCard;