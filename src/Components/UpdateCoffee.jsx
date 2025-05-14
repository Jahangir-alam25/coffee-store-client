import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const { _id,name, quantity, supplier, taste, price, details, photo } = useLoaderData();

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const coffee = Object.fromEntries(formData.entries());
        console.log(coffee);

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Coffee updated successfully');
                    form.reset();
                }
            })
    }
    return (
        <div className='p-24 text-center space-y-4'>
            <div className='p-12'>
                <h2 className='text-3xl font-bold text-center my-5'>Update Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee} className='bg-base-100 shadow-xl rounded-lg p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' defaultValue={name} placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input w-full" name='quantity' defaultValue={quantity} placeholder="Enter Quantity" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name='supplier' defaultValue={supplier} placeholder="Enter Supplier Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" name='taste' defaultValue={taste} placeholder="Enter Taste " />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name='price' defaultValue={price} placeholder="Enter Price" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name='details' defaultValue={details} placeholder="Enter Details" />

                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-4 p-4">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name='photo' defaultValue={photo} placeholder="Enter Photo URL" />

                </fieldset>
                <input type="submit" className='btn btn-block bg-rose-600' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;