import { organList, organDetailsList } from './organApiMockData'

export function getOrgansApiCall() {
    return organList;
}

export function getOrganByIdApiCall(idOrgan) {
    const organ = organDetailsList.find(organ => organ._id === idOrgan)
    return organ;
}