import Axios from "axios"
export function lookUpData(pcc) {
    return Axios.post('test.azwater.gov/annualreport/lookupdata?id=' + pcc);
}
export function lookUpDetails() {
    console.log('details')
}
