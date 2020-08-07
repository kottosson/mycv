import React from 'react';
import './App.css';
import CVheader from './Components/Header.js'
import Education from './Components/Education.js'
import Jobs from './Components/Jobs.js'
import {Container,Row,Col} from 'react-bootstrap';


function App() {
  return (
    <div className="container">
      <CVheader />
      <h1>Experience</h1>
      <Jobs 
        workPlace="Icelandair"
        jobYear="Nov 2019-Present"
        jobName="Pricing Analyst, Revenue Management"
        jobDescription1="Ábyrgur fyrir verðlagningu á tilgreindum mörkuðum í leiðakerfi Icelandair"
        jobDescription2="Eftirlit með tekjuinnflæði, ákvörðunartaka um framboð og verðlagningu."
        jobDescription3="Greining á vöruframboði, verðstrúktúr og hegðun samkeppnisaðila á markaði."
        jobDescription4="Kynningar fyrir yfirmenn og aðra samstarfsmenn."/>

        <Jobs 
        workPlace="Icelandair"
        jobYear="Nov 2019-Present"
        jobName="Pricing Analyst, Revenue Management"
        jobDescription1="Ábyrgur fyrir verðlagningu á tilgreindum mörkuðum í leiðakerfi Icelandair"
        jobDescription2="Eftirlit með tekjuinnflæði, ákvörðunartaka um framboð og verðlagningu."
        jobDescription3="Greining á vöruframboði, verðstrúktúr og hegðun samkeppnisaðila á markaði."
        jobDescription4="Kynningar fyrir yfirmenn og aðra samstarfsmenn."/>
      <h1>Education</h1>
      <Education 
        school="Háskóli Íslands" 
        year="2013-2016"
        degree="Masters"/>
      <Education 
        school="Háskóli Íslands" 
        year="2013-2016"
        degree="Masters"/>
        
      
    </div>
  
    
  );
}

export default App;
