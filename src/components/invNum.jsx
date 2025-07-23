import React from "react";
import '../CSS/invNum.css';

function InvN({TotalTax, invoiceNumber}){
    return(
        <div className="invoBox">
            <div className="invN">
                <h2>Invoice Number : {invoiceNumber ?( <span>{invoiceNumber}</span>):(<span>0000</span>)}</h2>
            </div>

            <div className="totalPaid">
                <h2>ToTal : <span> {TotalTax}</span></h2>
            </div>
        
        </div>

    )
}

export default InvN;