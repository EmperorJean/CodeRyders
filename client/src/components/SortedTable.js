import "../css/Patient.css";
import "../css/ExamPage.css"
import 'react-bootstrap';


function merge(lower, upper, delim) {
    let sort = [];
    let i = 0;
    let j = 0;
    switch(delim) {
        case "byPatientId":
            while (i < lower.length && j < upper.length) {
                if (lower[i].patientId > upper[j].patientId) {
                    sort.push(lower[i++]);
                } else {
                    sort.push(upper[j++]);
                }
            }
            while (i < lower.length) {
                sort.push(lower[i++]);
            }
            while (j < upper.length) {
                sort.push(upper[j++]);
            }
            break;
        case "byExamId":
            while (i < lower.length && j < upper.length) {
                if (lower[i]._id > upper[j]._id) {
                    sort.push(lower[i++]);
                } else {
                    sort.push(upper[j++]);
                }
            }
            while (i < lower.length) {
                sort.push(lower[i++]);
            }
            while (j < upper.length) {
                sort.push(upper[j++]);
            }
            break;
        case "byBrixia":
            while (i < lower.length && j < upper.length) {
                if (lower[i].brixiaScores > upper[j].brixiaScores) {
                    sort.push(lower[i++]);
                } else {
                    sort.push(upper[j++]);
                }
            }
            while (i < lower.length) {
                sort.push(lower[i++]);
            }
            while (j < upper.length) {
                sort.push(upper[j++]);
            }
            break;
        case "byAge":
            while (i < lower.length && j < upper.length) {
                if (lower[i].age > upper[j].age) {
                    sort.push(lower[i++]);
                } else {
                    sort.push(upper[j++]);
                }
            }
            while (i < lower.length) {
                sort.push(lower[i++]);
            }
            while (j < upper.length) {
                sort.push(upper[j++]);
            }
            break;
        case "byBMI":
            while (i < lower.length && j < upper.length) {
                if (lower[i].bmi > upper[j].bmi) {
                    sort.push(lower[i++]);
                } else {
                    sort.push(upper[j++]);
                }
            }
            while (i < lower.length) {
                sort.push(lower[i++]);
            }
            while (j < upper.length) {
                sort.push(upper[j++]);
            }
            break;
        case "byZip":
            while (i < lower.length && j < upper.length) {
                if (lower[i].zipCode > upper[j].zipCode) {
                    sort.push(lower[i++]);
                } else {
                    sort.push(upper[j++]);
                }
            }
            while (i < lower.length) {
                sort.push(lower[i++]);
            }
            while (j < upper.length) {
                sort.push(upper[j++]);
            }
            break;
        default:
            return;
    }
    return sort;
}

function mergeSort(arr, delim) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length /2);
    let lower = arr.slice(0, mid);
    let upper = arr.slice(mid);
    return merge(mergeSort(lower, delim), mergeSort(upper, delim), delim);
    
}

export function tableSort(sortQuery, input) {
    let sort = [...input];
    sort = mergeSort(sort, sortQuery);
    return sort;
}

export default tableSort;