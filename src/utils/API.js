import Axios from "axios"
export function lookUpData(pcc) {
    return Axios.post(`test.azwater.gov/annualreport/community/lookupdata?id=${pcc}`);
}
export function lookUpDetails() {
    return Axios.post(`test.azwater.gov/annualreport/community/lookupdetails?id=${pcc}`);
}
