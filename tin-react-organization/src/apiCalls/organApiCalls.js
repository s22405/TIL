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

export function addOrganApiCall(organ) {
    const organString = JSON.stringify(organ)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: organString
    }
    const promise = fetch(organsBaseUrl, options);
    return promise;
}
export function updateOrganApiCall(idOrgan, organ) {
    const url = `${organsBaseUrl}/${idOrgan}`
    const organString = JSON.stringify(organ)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: organString
    }
    const promise = fetch(url, options);
    return promise;
}