import Axios from "axios"
export function lookUpData(pcc) {
    return Axios.post(`https://test.azwater.gov/annualreport/community/lookupdata?id=${pcc}`);
}
export function lookUpDetails(pcc) {
    return Axios.post(`https://test.azwater.gov/annualreport/community/lookupdetails?id=${pcc}`);
}
