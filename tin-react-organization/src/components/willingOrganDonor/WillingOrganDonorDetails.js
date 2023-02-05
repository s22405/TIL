import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getWillingOrganDonorByIdApiCall} from "../../apiCalls/willingOrganDonorApiCalls";

function WillingOrganDonorDetails() {
    let { idWillingOrganDonor } = useParams();
    idWillingOrganDonor = parseInt(idWillingOrganDonor);
    const willingOrganDonor = getWillingOrganDonorByIdApiCall(idWillingOrganDonor);

    return (
        <main>
            <h2>WillingOrganDonor details</h2>
            <p>Name: {willingOrganDonor.name}</p>
            <p>CellNumber: {willingOrganDonor.cellNumber}</p>
            <p>PatientFrom: {willingOrganDonor.patientFrom ? getFormattedDate(willingOrganDonor.patientFrom) : ""}</p>
            <p>PatientTill: {willingOrganDonor.patientTill ? getFormattedDate(willingOrganDonor.patientTill) : ""}</p>
            <h2>Operation details</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Doctor</th>
                    <th>Organ</th>
                    <th>Successful</th>
                    <th>Bed Number</th>
                    <th>Operation Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {willingOrganDonor.operations.map(
                    operation =>
                        <tr key={operation._id}>
                            <td>{operation.doctor.name}</td>
                            <td>{operation.organ.name}</td>
                            <td>{operation.successful.toString()}</td>
                            <td>{operation.bedNumber}</td>
                            <td>{operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</td>
                        </tr>
                )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/willingOrganDonors" className="button-back">Back</Link>
            </div>
        </main>
    )
}
export default WillingOrganDonorDetails