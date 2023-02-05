import { getFormattedDate } from "../../helpers/dateHelper"
import React from "react";

function OperationDetailsData(props) {
    const operation = props.operation
    return (
        <>
            <p>Willing Organ Donor: {operation.willingOrganDonor.name}</p>
            <p>Doctor: {operation.doctor.name}</p>
            <p>Organ: {operation.organ.name}</p>
            <p>Successful: {operation.successful.toString()}</p>
            <p>Bed Number: {operation.bedNumber}</p>
            <p>Operation Timestamp: {operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</p>
        </>
    )
}

export default OperationDetailsData