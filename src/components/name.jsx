import React, {useState} from "react";


import '../CSS/name.css';

function Name({addPerson}){
     const[nameText, setNameText]=useState('');
     const[isSubmitted, setIsSubmitted]=useState(false);

    function updateName(event){
       setNameText(event.target.value);

    } 

    function sendButton(){
      
        setIsSubmitted(true)
        addPerson(nameText);
    }

    


    return(
        <>
        
        {isSubmitted? <h2 className="nameBox name">{nameText}</h2>:(
            <div>
           <div className="nameBox">
            <label htmlFor="nameInput" className="nameLabel">Name</label>
            <input type="text" id="nameInput" placeholder="Name" value={nameText} onChange={updateName} />
             <button type="submit" className="button" onClick={sendButton}>Add </button>
        </div>
       
         </div>
        )}
       
        </>

    )
}

export default Name;