import React from 'react'
import 'react-bootstrap'

function Exams(){
    return(
        <>
        <h1>Hello From Exams</h1>

        <div className='containerExams'>
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Exam ID</th>
                        <th>Image</th>
                        <th>Key Findings</th>
                        <th>Brixia Score</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>BMI</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>COVID-19-AR-16434381</td> 
                        <td>Exam-1</td>
                        <td>IMAGE LOL</td>
                        <td>No relevant findings</td>
                        <td>1,2,3,4</td>
                        <td>44</td>
                        <td>F</td>
                        <td>64.6</td>
                        <td>721</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Exams;