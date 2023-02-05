import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getDoctorByIdApiCall} from "../../apiCalls/doctorApiCalls";

function DoctorDetails() {
    let { idDoctor } = useParams();
    idDoctor = parseInt(idDoctor);
    const doctor = getDoctorByIdApiCall(idDoctor);

    return (
        <main>
            <h2>Doctor details</h2>
            <p>Name: {doctor.name}</p>
            <p>Date Join: {doctor.dateJoin ? getFormattedDate(doctor.dateJoin) : ""} </p>
            <p>Date Leave: {doctor.dateLeave ? getFormattedDate(doctor.dateLeave) : ""} </p>
            <h2>Operation details</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>WILLING Organ Donor</th>
                        <th>Organ</th>
                        <th>Successful</th>
                        <th>Bed Number</th>
                        <th>Operation Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {doctor.operations.map(
                        operation =>
                            <tr key={operation._id}>
                                <td>{operation.willingOrganDonor.name}</td>
                                <td>{operation.organ.name}</td>
                                <td>{operation.successful.toString()}</td>
                                <td>{operation.bedNumber}</td>
                                <td>{operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/doctors" className="button-back">Back</Link>
            </div>
        </main>
    )
}
export default DoctorDetails