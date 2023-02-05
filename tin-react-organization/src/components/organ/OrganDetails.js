import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getOrganByIdApiCall} from "../../apiCalls/organApiCalls";

function OrganDetails() {
    let { idOrgan } = useParams();
    idOrgan = parseInt(idOrgan);
    const organ = getOrganByIdApiCall(idOrgan);

    return (
        <main>
            <h2>Organ details</h2>
            <p>Name: {organ.name}</p>
            <p>Price: {organ.price} </p>
            <h2>Operation details</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>WILLING Organ Donor</th>
                        <th>Doctor</th>
                        <th>Successful</th>
                        <th>Bed Number</th>
                        <th>Operation Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {organ.operations.map(
                        operation =>
                            <tr key={operation._id}>
                                <td>{operation.willingOrganDonor.name}</td>
                                <td>{operation.doctor.name}</td>
                                <td>{operation.successful.toString()}</td>
                                <td>{operation.bedNumber}</td>
                                <td>{operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/organs" className="button-back">Back</Link>
            </div>
        </main>
    )
}
export default OrganDetails