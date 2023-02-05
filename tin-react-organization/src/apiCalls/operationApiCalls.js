import { operationList, operationDetailsList } from './operationApiMockData'

export function getOperationsApiCall() {
    return operationList;
}

export function getOperationByIdApiCall(idOperation) {
    const operation = operationDetailsList.find(operation => operation._id === idOperation)
    return operation;
}