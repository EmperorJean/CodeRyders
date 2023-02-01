import React from 'react';
import './App.css';
import { Patient } from './hooks/Patient';
import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <div>

          {/* Run a for loop and pass in the data instead of hard codding for each piece of data , file to edit it is located in client/src/hooks/Patient.js*/}
          <Patient  id = "61e83d679dc59e6e8e11a1cb" patientId = "COVID-19-AR-16424082" age = "48" sex = "M" zipCode = "721" bmi = "29.8" v = "0" examId = "Exam-2"
                    keyFindings = "significant worsening of airspace disease, now very extensive and patchy sparing only apices."
                    brixiaScores = "1,2,3,4"
                    imageUrl = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png"
 />

        </div>
      </header>
    </div>
  );
}

export default App;
