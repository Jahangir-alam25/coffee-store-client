import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { _id,name, quantity, supplier, taste, price, details, photo } = useLoaderData();
    return (
        <div className="card card-side  shadow-sm bg-amber-50">
            <figure>
                <img
                    src={photo}
                    alt={name} />
            </figure>
            <div className="flex w-full mt-6 justify-between p-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Details: {details}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>

               
            </div>
        </div>
    );
};

export default CoffeeDetails;