import OperationListTableRow from './OperationListTableRow'
import React from "react";

function OperationListTable(props) {
    const operations = props.operationList
    return (
        <table className="table-list" >
            <thead>
                <tr>
                    <th>WILLING Organ Donor</th>
                    <th>Doctor</th>
                    <th>Organ</th>
                    <th>Successful</th>
                    <th>Bed Number</th>
                    <th>Operation Timestamp</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {operations.map(operation =>
                    <OperationListTableRow operationData={operation} key={operation._id} />
                )}
            </tbody>
        </table >
    )
}

export default OperationListTable