import React from "react";
import "../CSS/receipt.css";

function Receipt({ personName, productList, totalWithTax ,setShowReceipt, invoiceNumber }) {
  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="modal-overlay">
      <div className="receipt-container">
        <div className="receipt">
          <h2>🧾 Invoice</h2>
          <h2><strong>Client:</strong>{personName}</h2>
          <p id="invoiceshow">Invoice Number  {invoiceNumber}</p>
          <div className="headerName">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Price</p>
          </div>
          <hr />
          <div className="receipt-items">
            {Array.isArray(productList) && productList.map((item, index) => (
              <div className="receipt-item" key={index}>
                <div id="productName">{item.name}</div>
                <div id="productPrice">{item.price}</div>
                <div id="productQuantity">{item.quantity}</div>
                <div id="productPrice">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <hr />
          <div className="receipt-total">

            <strong>Total * Tax: ${totalWithTax}</strong>

          </div>
        </div>
        <div className="botonBox">
        <button className="print-button" onClick={handlePrint}>
          Print Receipt
        </button>
         <button className="print-button-close" onClick={()=>{ setShowReceipt(false)}}> Close Windows</button>
        </div>
      </div>
    </div>
  );
}

export default Receipt;



