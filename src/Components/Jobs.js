import React from 'react';

function Jobs(props){
    return(
        <div className="jobWrapper">
            <div className="jobInfo">
                <h3 className="schoolInfo">{props.workPlace}</h3>
                <h3 className="schoolInfo">{props.jobYear}</h3>
            </div>
            <p className="jobName">{props.jobName}</p>
            <div>
                <ul>
                    <li>{props.jobDescription1}</li>
                    <li>{props.jobDescription2}</li>
                    <li>{props.jobDescription3}</li>
                    <li>{props.jobDescription4}</li>
                </ul>
            </div>
        </div>
    );
}


export default Jobs