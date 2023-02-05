import { Link } from 'react-router-dom';
import React from "react";

function OperationListTableRow(props) {
    const operation = props.operationData
    return (
        <tr>
            <td>{operation.willingOrganDonor.name}</td>
            <td>{operation.doctor.name}</td>
            <td>{operation.organ.name}</td>
            <td>{operation.successful.toString()}</td>
            <td>{operation.bedNumber}</td>
            <td>{operation.operationTimestamp}</td>
            <td>
                <ul className="list-actions">
                    <li>
                        <Link to={`details/${operation._id}`} className="list-actions-button-details">Details</Link>
                    </li>
                    <li>
                        <Link to={`edit/${operation._id}`} className="list-actions-button-edit">Edit</Link>
                    </li>
                    <li>
                        <Link to={`delete/${operation._id}`} className="list-actions-button-delete">Delete</Link>
                    </li>
                </ul>
            </td>
        </tr>
    )
}

export default OperationListTableRow