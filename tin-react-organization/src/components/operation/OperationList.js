import { Link } from 'react-router-dom';
import { getOperationsApiCall} from "../../apiCalls/operationApiCalls";
import React, {useEffect, useState} from "react";
import OperationListTable from "./OperationListTable";

function OperationList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [operations, setOperations] = useState([]);

    let content;

    function fetchOperationList() {
        getOperationsApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setOperations(data)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchOperationList()
    }, [])

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading operations data...</p>
    } else if(operations.length==0) {
        content = <p>No operations.</p>
    } else {
        content = <OperationListTable operationList={operations} />
    }

    return (
        <main>
            <h2>Operation list</h2>
            { content}
            <p className="section-buttons">
                <Link to="/operations/add" className="button-add">Add new operation</Link>
            </p>
        </main>
    )

    // return (
    //     <main>
    //         <h2>List of Operations</h2>
    //         <table className="table-list">
    //             <thead>
    //                 <tr>
    //                     <th>WILLING Organ Donor</th>
    //                     <th>Doctor</th>
    //                     <th>Organ</th>
    //                     <th>Successful</th>
    //                     <th>Bed Number</th>
    //                     <th>Operation Timestamp</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {operationList().map(operation => (
    //                     <tr key={operation._id}>
    //                         <td>{operation.willingOrganDonor.name}</td>
    //                         <td>{operation.doctor.name}</td>
    //                         <td>{operation.organ.name}</td>
    //                         <td>{operation.successful}</td>
    //                         <td>{operation.bedNumber}</td>
    //                         <td>{operation.operationTimestamp}</td>
    //                         <td>
    //                             <ul className="list-actions">
    //                                 <li>
    //                                     <Link to={`details/${operation._id}`} className="list-actions-button-details">Details</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`edit/${operation._id}`} className="list-actions-button-edit">Edit</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`delete/${operation._id}`} className="list-actions-button-delete">Delete</Link>
    //                                 </li>
    //                             </ul>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //         <p><Link to="add" className="button-add">Add a new Operation</Link></p>
    //     </main>
    // )
}

export default OperationList