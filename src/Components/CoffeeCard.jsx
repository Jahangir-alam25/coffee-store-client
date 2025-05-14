import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, price, quantity, name, photo } = coffee;



    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });


    }
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
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>

                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffees/${_id}`} className="btn join-item">View</Link>
                        <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;