import React from 'react';

function Jobs(props){
    return(
        <div className="jobWrapper">
            <div className="jobInfo">
                <h3 className="schoolInfo">{props.workPlace}</h3>
                <h5 className="schoolInfo">{props.jobYear}</h5>
            </div>
            <p className="jobName">{props.jobName}</p>
            <div>
                <ul>
                    {/* <li>{props.jobDescription1}</li>
                    <li>{props.jobDescription2}</li>
                    <li>{props.jobDescription3}</li>
                    <li>{props.jobDescription4}</li> */}
                    {props.jobDescription1 ?  <li>{props.jobDescription1}</li> : <span></span>}
                    {props.jobDescription2 ?  <li>{props.jobDescription2}</li> : <span></span>}
                    {props.jobDescription3 ?  <li>{props.jobDescription3}</li> : <span></span>}
                    {props.jobDescription4 ?  <li>{props.jobDescription4}</li> : <span></span>}
                </ul>
            </div>
        </div>
    );
}


export default Jobs