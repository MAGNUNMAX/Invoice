import React from 'react';
import "../CSS/add.css";


function Add({datos, setDatos, addProduct, personName}){

   

    function handleChange(event){
        const {name ,value}= event.target;
        setDatos({
            ...datos,
            [name]: value
        });
    };

    function submitInfo(event){  // send product to product.jsx
        event.preventDefault();
        if(!personName){
            alert('Please Enter a Name');
            return;
        }

        const{name, price, quantity} =datos;

        if(!name || !price || !quantity)return;

        const newProduct = {
            name,
            price: Number(price),
            quantity: Number(quantity)
        }

        addProduct(newProduct);

        setDatos({
            name: '',
            price: '',
            quantity: ''
        });
       
    }

    


    return(
        <div className='formImput'>
            <form className="formBox" onSubmit={submitInfo}>
               
                    <label htmlFor="add" className="addProduct">Add Product</label>
                    <input id="add" type="text" name="name" placeholder="Add product" value={datos.name} onChange ={handleChange} required></input>

                    <label htmlFor="price" className="addPrice">Add Price</label>
                    <input id="price" type= "number" name="price"placeholder='Add Price' value={datos.price} onChange ={handleChange} autoComplete='off' required></input>

                    <label htmlFor="quantity" className="quantity">Quantity</label>
                    <input id="quantity"  type="number" name="quantity" placeholder='How Many' value={datos.quantity} onChange ={handleChange} autoComplete='off' required></input>

                    <button className="imputSubmit" type='submit' >Add Product</button>
            </form>
                
        </div>
    )
}

export default Add;