import React from 'react';


function Education(props){
    return(
        <div className="educationWrapper">
            <div className="educationInfo">
                <h3 className="schoolInfo">{props.school}</h3> 
                <h5 className="schoolInfo">{props.year}</h5>
            </div>
            <div className="schoolDegree">{props.degree}</div>
            <div className="schoolDescription">
                <ul>
                    {props.eduDescription1 ?  <li>{props.eduDescription1}</li> : <span></span>}
                    {props.eduDescription2 ?  <li>{props.eduDescription2}</li> : <span></span>}
                    {props.eduDescription3 ?  <li>{props.eduDescription3}</li> : <span></span>}
                </ul>
            </div>
        </div>
        
    );
}


export default Education