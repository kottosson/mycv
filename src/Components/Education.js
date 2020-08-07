import React from 'react';


function Education(props){
    return(
        <div className="educationWrapper">
            <div className="educationInfo">
                <h3 className="schoolInfo">{props.school}</h3> 
                <h3 className="schoolInfo">{props.year}</h3>
            </div>
            <div>{props.degree}</div>
            <div>Bara allt gott og blessað þar</div>
        </div>
    );
}


export default Education