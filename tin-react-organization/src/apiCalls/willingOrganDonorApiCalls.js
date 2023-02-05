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