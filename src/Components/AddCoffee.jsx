import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);
        fetch("http://localhost:3000/coffees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Coffee Added Successfully",
                    icon: "success",
                    draggable: true
                });
                form.reset();
            })

    }
    return (
        <div className='p-24 text-center space-y-4'>
            <div className='p-12'>
                <h2 className='text-3xl font-bold text-center my-5'>Add Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} className='bg-base-100 shadow-xl rounded-lg p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input w-full" name='quantity' placeholder="Enter Quantity" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name='supplier' placeholder="Enter Supplier Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" name='taste' placeholder="Enter Taste " />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name='price' placeholder="Enter Price" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name='details' placeholder="Enter Details" />

                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-4 p-4">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name='photo' placeholder="Enter Photo URL" />

                </fieldset>
                <input type="submit" className='btn btn-block bg-rose-600' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;