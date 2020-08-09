import React from 'react';
import './App.css';
import CVheader from './Components/Header.js'
import Education from './Components/Education.js'
import Jobs from './Components/Jobs.js'
import {Container,Row,Col} from 'react-bootstrap';


function App() {
  return (
    <div className="uberAlles">
    <div className="container">
      <CVheader />
      <h1 className="openSans">Experience</h1>
      <Jobs 
        workPlace="Icelandair"
        jobYear="Nov 2019-Present"
        jobName="Pricing Analyst, Revenue Management"
        jobDescription1="Responsible for the performance of appointed market portfolio."
        jobDescription2="Responsible for analyzing demand in order to make correct decisions concerning pricing & availability while
        monitoring the competitive environment of the Scandinavian market."
        jobDescription3="Development of detailed pricing strategies and conducting rigorous & detailed evaluation of Icelandair ́s
        competitive positioning across all online markets and channel segments."
        jobDescription4="Working in a team composed of demand analysts, pricing analysts and marketing personnel to maximize revenue."/>

      <Jobs 
        workPlace="Icelandair"
        jobYear="Nov 2018-Nov 2019"
        jobName="Legal Advisor, Customer relations"
        jobDescription1="Handling legal disputes in passenger disruption cases."
        jobDescription2="Communication with law firms and government entities and settling cases before entering litigation."
        jobDescription3="Lead a team by providing company policy in a demanding and dynamic environment."
        />

      <Jobs 
        workPlace="Icelandair"
        jobName="Cabin crew"
        jobYear="Jun 2014-Aug 2019"
        jobDescription1="Trained for all kinds of emergency situations along with dealing with unforeseen circumstances."
        jobDescription2="Working with inflight crew to deliver the highest standard of service to our passengers"
        /> 

      <Jobs 
        workPlace="Advel lawyers"
        jobYear="Jan 2015-Jun 2015"
        jobName="Intern"
        jobDescription1="Assistant to the partners at Advel lawyers. Part of an internship in relation to my studies at the University of Iceland. After the internship my occupancy got extended to another project."
        />

      <Jobs 
        workPlace="Vörður Insurance"
        jobYear="May 2014-Sep 2014"
        jobName="Insurance counselor"
        jobDescription1="Provide customers with insurances tailored to their needs."
        jobDescription2="Handling all sorts of conflicts that arise with customers."
        />

        {/* <Jobs 
        workPlace=""
        jobYear=""
        jobName=""
        jobDescription1=""
        jobDescription2=""
        jobDescription3=""
        /> */}
      <h1 className="openSans">Education</h1>
      <Education 
        school="Háskóli Íslands" 
        year="2013-2016"
        degree="Magister juris (MA), Lögfræði"/>
      <Education 
        school="Háskóli Íslands" 
        year="2013-2016"
        degree="Masters"/>
        
      
    </div>
    </div>
    
  );
}

export default App;
