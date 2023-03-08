import "../css/Patient.css";
import "../css/ExamPage.css"
import 'react-bootstrap';


function mergeHigher(lower, upper, delim) {
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

function mergeLower(lower, upper, delim) {
    let sort = [];
    let i = 0;
    let j = 0;
    switch(delim) {
        case "byPatientId":
            while (i < lower.length && j < upper.length) {
                if (lower[i].patientId < upper[j].patientId) {
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
                if (lower[i]._id < upper[j]._id) {
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
                if (lower[i].brixiaScores < upper[j].brixiaScores) {
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
                if (lower[i].age < upper[j].age) {
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
                if (lower[i].bmi < upper[j].bmi) {
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
                if (lower[i].zipCode < upper[j].zipCode) {
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

function mergeSort(arr, delim, up_down) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length /2);
    let lower = arr.slice(0, mid);
    let upper = arr.slice(mid);
    let merged = [];
    switch(delim) {
        case "byPatientId":
            merged = (!up_down.byPatientId) ? mergeHigher(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim) : 
            mergeLower(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim);
            break;
        case "byExamId":
            merged = (!up_down.byExamId) ? mergeHigher(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim) : 
            mergeLower(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim);
            break;
        case "byBrixia":
            merged = (!up_down.byBrixia) ? mergeHigher(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim) : 
            mergeLower(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim);
            break; 
        case "byAge":
            merged = (!up_down.byAge) ? mergeHigher(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim) : 
            mergeLower(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim);
            break; 
        case "byBMI":
            merged = (!up_down.byBMI) ? mergeHigher(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim) : 
            mergeLower(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim);
            break;
        case "byZip":
            merged = (!up_down.byZip) ? mergeHigher(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim) : 
            mergeLower(mergeSort(lower, delim, up_down), mergeSort(upper, delim, up_down), delim);
            break;
        default:
            return;  
    }
    return merged; 
}

export function tableSort(sortQuery, input, up_down) {
    let sort = [...input];
    console.log("Before sort");
    console.log(up_down);
    sort = mergeSort(sort, sortQuery, up_down);
    return sort;
}

export default tableSort;
