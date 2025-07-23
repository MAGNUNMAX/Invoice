import React,{useState} from 'react';
import Receipt from './receipt';
import '../CSS/tax.css';

function Tax({Total, taxInvoice,TotalTax,dato,personName,invoiceNumber}){

    const [showReceipt, setShowReceipt] = useState(false);

    return(
        <div className='taxBox'>
            <div className="taxMath">
                <div className="taxShow">
                    <p id="totalTax">TOTAL = <span>{Total}</span> </p>
                      <p>+</p>  
                    <p id="taxCount">TAX (0.08) : <span> {taxInvoice}</span></p>
                </div>
            </div>
            <div className="sendbuton">

                <button className="reset" onClick={()=> {if (window.confirm("Do you want a new Invoice?")) window.location.reload()}}>New Invoice</button>
                <button className="print"onClick={() => setShowReceipt(true)}>Print</button>

            </div>

             {showReceipt && (
                
                <Receipt
                personName={personName}
                productList={dato}
                totalWithTax={TotalTax}
                setShowReceipt ={setShowReceipt}
                invoiceNumber={invoiceNumber}
        />
      )}
        
        </div>
    )
}

export default Tax;