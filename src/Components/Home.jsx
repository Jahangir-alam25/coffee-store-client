import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
   
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-11/12 mx-auto'>
             {coffees.map(coffee => (
                <CoffeeCard key={coffee._id} coffee={coffee} />
            ))}
           </div>
        </div>
    );
};

export default Home;