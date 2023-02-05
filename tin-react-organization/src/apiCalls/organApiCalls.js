import { organDetailsList } from './organApiMockData';

const organsBaseUrl = 'http://localhost:3000/api/organs';

export function getOrgansApiCall() {
    const promise = fetch(organsBaseUrl);
    return promise;
}

export function getOrganByIdApiCall(idOrgan) {
    const url = `${organsBaseUrl}/${idOrgan}`;
    const promise = fetch(url);
    return promise;
}