import { Link } from 'react-router-dom';
import React from "react";

function WillingOrganDonorListTableRow(props) {
    const willingOrganDonor = props.willingOrganDonorData
    return (
        <tr>
            <td>{willingOrganDonor.name}</td>
            <td>{willingOrganDonor.cellNumber}</td>
            <td>{willingOrganDonor.patientFrom}</td>
            <td>{willingOrganDonor.patientTill}</td>
            <td>
                <ul className="list-actions">
                    <li>
                        <Link to={`details/${willingOrganDonor._id}`} className="list-actions-button-details">Details</Link>
                    </li>
                    <li>
                        <Link to={`edit/${willingOrganDonor._id}`} className="list-actions-button-edit">Edit</Link>
                    </li>
                    <li>
                        <Link to={`delete/${willingOrganDonor._id}`} className="list-actions-button-delete">Delete</Link>
                    </li>
                </ul>
            </td>
        </tr>
    )
}

export default WillingOrganDonorListTableRow