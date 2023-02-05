import { operationDetailsList } from './operationApiMockData';
const operationsBaseUrl = 'http://localhost:3000/api/operations';

export function getOperationsApiCall() {
    const promise = fetch(operationsBaseUrl);
    return promise;
}

export function getOperationByIdApiCall(idOperation) {
    const url = `${operationsBaseUrl}/${idOperation}`;
    const promise = fetch(url);
    return promise;
}