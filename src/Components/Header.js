import React from 'react';
import KO from '/Users/ko/Desktop/Coding/React/mycv/src/Mix/KO.jpg'

function CVheader(){
    return(
        <div className="header">
            <div>
                <h1>Kjartan Ottósson</h1>
                <h4 className="headerInfo">Email: kjartan.ottosson@gmail.com</h4>
                <h4 className="headerInfo">Phone: 8490319</h4>
            </div>
            <img className="profilePhoto" src={KO}></img>
            
        </div>
    );
}


export default CVheader