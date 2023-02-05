import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getOrganByIdApiCall} from "../../apiCalls/organApiCalls";
import OrganDetailsData from "./OrganDetailsData";

function OrganDetails() {
    let { idOrgan } = useParams();
    idOrgan = parseInt(idOrgan);
    const organ = getOrganByIdApiCall(idOrgan);

    const [org, setOrgan] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState(null)

    function fetchOrganDetails() {
        getOrganByIdApiCall(idOrgan)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setOrgan(null)
                        setMessage(data.message)
                    } else {
                        setOrgan(data)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchOrganDetails()
    }, [])

    let content;

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading organ data...</p>
    } else if (message) {
        content = <p>{message}</p>
    } else {
        content = <OrganDetailsData organData={org} />
    }
    return (
        <main>
            <h2>Organ data</h2>
            {content}
            <div className="section-buttons">
                <Link to="/organs" className="button-back">Back</Link>
            </div>
        </main>
    )

    // return (
    //     <main>
    //         <h2>Organ details</h2>
    //         <p>Name: {organ.name}</p>
    //         <p>Price: {organ.price} </p>
    //         <h2>Operation details</h2>
    //         <table className="table-list">
    //             <thead>
    //                 <tr>
    //                     <th>WILLING Organ Donor</th>
    //                     <th>Doctor</th>
    //                     <th>Successful</th>
    //                     <th>Bed Number</th>
    //                     <th>Operation Timestamp</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {organ.operations.map(
    //                     operation =>
    //                         <tr key={operation._id}>
    //                             <td>{operation.willingOrganDonor.name}</td>
    //                             <td>{operation.doctor.name}</td>
    //                             <td>{operation.successful.toString()}</td>
    //                             <td>{operation.bedNumber}</td>
    //                             <td>{operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</td>
    //                         </tr>
    //                 )}
    //             </tbody>
    //         </table>
    //         <div className="section-buttons">
    //             <Link to="/organs" className="button-back">Back</Link>
    //         </div>
    //     </main>
    // )
}
export default OrganDetails