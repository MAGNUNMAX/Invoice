import React, { useState } from 'react';
import Name from './components/name';
import InvN from './components/invNum';
import Tax from './components/tax';
import Add from './components/add';
import Product from './components/product';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './CSS/App.css'


function App() {

  const[datos, setDatos]= useState({
    name: "",
    price: "",
    quantity: "",
  });

  

  const[products, setProduct]= useState([]);

  function addProduct(newProduct){
    setProduct([...products, newProduct ]);

  }

  function handleDelete(indexToRemove){
    const updateProduct = products.filter((_,index)=>index !== indexToRemove);
    setProduct(updateProduct);
  }

            /* Person Name */

  const [personName, setPersonName]= useState('');

  const [invoiceNumber, setInvoiceNumver] = useState();

  function addPerson(newPerson){
    setPersonName(newPerson);
    const uniqueInvoice = generateRandomInvoice();
    setInvoiceNumver(uniqueInvoice);
  };

  function generateRandomInvoice(){
    const fourRandomNumber = Math.floor(1000 + Math.random()*9000);
    return fourRandomNumber;
  }


  /* Total */

  const Total = products.reduce((acum,prod)=>acum + prod.price * prod.quantity, 0);

  /* total * tax */
  const taxInvoice = (Total.toFixed(2)* 0.08);
  const TotalTax = taxInvoice + Total;
  
  

  return (
    <>
    <div id="bigBox">
      <div className="border one">
        <h1 className='title'>INVOICE</h1>
      </div>

      <div className="border two">
        <div className="name">

          <Name
          addPerson ={addPerson}
          
          />
          <InvN 
            TotalTax ={TotalTax.toFixed(2)}
            invoiceNumber = {invoiceNumber}
          />

        </div>
      
      </div>

      <div className="border three">

                              {/* seccion add product */}
          <Add 
            datos ={datos}
            setDatos={setDatos}
            addProduct={addProduct}
            personName={personName}
            
           />
      
        
      </div>

                              {/* seccion invoice data */}
      <div className="border four">

        <h3>invoice Data</h3>

        {products.length === 0 ? (
        <Product name ="name" price={0} quantity={0} />
              ) : (
              
                products.map((item, index) => (
                  <Product 
                    key={index}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    deleteButton={
                        <button id="deleteButton" onClick={()=> handleDelete(index)}>
                          <HighlightOffIcon color="warning" />
                        </button>
                    }
                  />
                ))
                
               
              )}


        
      </div>

      <div className="border five">
                                  {/* seccion tax */}

        <Tax
        Total={Total.toFixed(2)}
        taxInvoice = {taxInvoice}
        TotalTax ={TotalTax.toFixed(2)}
        dato ={products}
        personName={personName}
        invoiceNumber={invoiceNumber}
         />
        
      </div>

    </div>
    </>
  )
}

export default App;
