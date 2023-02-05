import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getWillingOrganDonorByIdApiCall} from "../../apiCalls/willingOrganDonorApiCalls";
import WillingOrganDonorDetailsData from "./WillingOrganDonorDetailsData";

function WillingOrganDonorDetails() {

    let { idWillingOrganDonor } = useParams();
    idWillingOrganDonor = parseInt(idWillingOrganDonor);
    const willingOrganDonor = getWillingOrganDonorByIdApiCall(idWillingOrganDonor);

    const [wod, setWillingOrganDonor] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState(null)

    function fetchWillingOrganDonorDetails() {
        getWillingOrganDonorByIdApiCall(idWillingOrganDonor)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setWillingOrganDonor(null)
                        setMessage(data.message)
                    } else {
                        setWillingOrganDonor(data)
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
        fetchWillingOrganDonorDetails()
    }, [])

    let content;

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading willingOrganDonor data...</p>
    } else if (message) {
        content = <p>{message}</p>
    } else {
        content = <WillingOrganDonorDetailsData willingOrganDonorData={wod} />
    }
    return (
        <main>
            <h2>WillingOrganDonor data</h2>
            {content}
            <div className="section-buttons">
                <Link to="/willingOrganDonors" className="button-back">Back</Link>
            </div>
        </main>
    )

    // return (
    //     <main>
    //         <h2>WillingOrganDonor details</h2>
    //         <p>Name: {willingOrganDonor.name}</p>
    //         <p>CellNumber: {willingOrganDonor.cellNumber}</p>
    //         <p>PatientFrom: {willingOrganDonor.patientFrom ? getFormattedDate(willingOrganDonor.patientFrom) : ""}</p>
    //         <p>PatientTill: {willingOrganDonor.patientTill ? getFormattedDate(willingOrganDonor.patientTill) : ""}</p>
    //         <h2>Operation details</h2>
    //         <table className="table-list">
    //             <thead>
    //             <tr>
    //                 <th>Doctor</th>
    //                 <th>Organ</th>
    //                 <th>Successful</th>
    //                 <th>Bed Number</th>
    //                 <th>Operation Timestamp</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {willingOrganDonor.operations.map(
    //                 operation =>
    //                     <tr key={operation._id}>
    //                         <td>{operation.doctor.name}</td>
    //                         <td>{operation.organ.name}</td>
    //                         <td>{operation.successful.toString()}</td>
    //                         <td>{operation.bedNumber}</td>
    //                         <td>{operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</td>
    //                     </tr>
    //             )}
    //             </tbody>
    //         </table>
    //         <div className="section-buttons">
    //             <Link to="/willingOrganDonors" className="button-back">Back</Link>
    //         </div>
    //     </main>
    // )
}
export default WillingOrganDonorDetails