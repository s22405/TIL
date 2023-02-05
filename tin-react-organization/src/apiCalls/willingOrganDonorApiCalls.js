import { willingOrganDonorDetailsList } from './willingOrganDonorApiMockData';

const willingOrganDonorsBaseUrl = 'http://localhost:3000/api/willingOrganDonors';

export function getWillingOrganDonorsApiCall() {
    const promise = fetch(willingOrganDonorsBaseUrl);
    return promise;
}

export function getWillingOrganDonorByIdApiCall(idWillingOrganDonor) {
    const url = `${willingOrganDonorsBaseUrl}/${idWillingOrganDonor}`;
    const promise = fetch(url);
    return promise;
}

export function addWillingOrganDonorApiCall(willingOrganDonor) {
    const willingOrganDonorString = JSON.stringify(willingOrganDonor)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: willingOrganDonorString
    }
    const promise = fetch(willingOrganDonorsBaseUrl, options);
    return promise;
}
export function updateWillingOrganDonorApiCall(idWillingOrganDonor, willingOrganDonor) {
    const url = `${willingOrganDonorsBaseUrl}/${idWillingOrganDonor}`
    const willingOrganDonorString = JSON.stringify(willingOrganDonor)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: willingOrganDonorString
    }
    const promise = fetch(url, options);
    return promise;
}