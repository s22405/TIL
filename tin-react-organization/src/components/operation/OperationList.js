import { Link } from 'react-router-dom';
import { getOperationsApiCall} from "../../apiCalls/operationApiCalls";
import React from "react";

function OperationList() {
    const operationList = getOperationsApiCall;
    return (
        <main>
            <h2>List of Operations</h2>
            <table className="table-list">
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
                    {operationList().map(operation => (
                        <tr key={operation._id}>
                            {/*TODO change these from static to dynamic*/}
                            {/*{operation.willingOrganDonor.map(*/}
                            {/*    willingOrganDonor =>*/}
                            {/*        <tr key={willingOrganDonor._id}>*/}
                            {/*            <td>{willingOrganDonor.name}</td>*/}
                            {/*        </tr>*/}
                            {/*)}*/}
                            {/*{operation.doctor.map(*/}
                            {/*    doctor =>*/}
                            {/*        <tr key={doctor._id}>*/}
                            {/*            <td>{doctor.name}</td>*/}
                            {/*        </tr>*/}
                            {/*)}*/}
                            {/*{operation.organ.map(*/}
                            {/*    organ =>*/}
                            {/*        <tr key={organ._id}>*/}
                            {/*            <td>{organ.name}</td>*/}
                            {/*        </tr>*/}
                            {/*)}*/}
                            <td>{operation.willingOrganDonor.name}</td>
                            <td>{operation.doctor.name}</td>
                            <td>{operation.organ.name}</td>
                            {/*<td>Jonathan Mother</td>*/}
                            {/*<td>BarryTheChopper</td>*/}
                            {/*<td>Heart</td>*/}
                            <td>{operation.successful}</td>
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
                    ))}
                </tbody>
            </table>
            <p><Link to="add" className="button-add">Add a new Operation</Link></p>
        </main>
    )
}

export default OperationList