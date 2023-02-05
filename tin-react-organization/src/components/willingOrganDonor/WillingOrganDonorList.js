import { Link } from 'react-router-dom';
import { getWillingOrganDonorsApiCall} from "../../apiCalls/willingOrganDonorApiCalls";
import React, {useEffect, useState} from "react";
import WillingOrganDonorListTable from "./WillingOrganDonorListTable";

function WillingOrganDonorList() {
    const willingOrganDonorList = getWillingOrganDonorsApiCall();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [willingOrganDonors, setWillingOrganDonors] = useState([]);
    useEffect(() => {
        fetchWillingOrganDonorList()
    }, [])

    let content;

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading willingOrganDonors data...</p>
    } else {
        content = <WillingOrganDonorListTable willingOrganDonorList={willingOrganDonors} />
    }

    return (
        <main>
            <h2>WillingOrganDonor list</h2>
            { content}
            <p className="section-buttons">
                <Link to="/willingOrganDonors/add" className="button-add">Add new willingOrganDonor</Link>
            </p>
        </main>
    )

    // return (
    //     <main>
    //         <h2>List of WILLING Organ Donors</h2>
    //         <table className="table-list">
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>CellNumber</th>
    //                     <th>PatientFrom</th>
    //                     <th>PatientTill</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {willingOrganDonorList.map(willingOrganDonor => (
    //                     <tr key={willingOrganDonor._id}>
    //                         <td>{willingOrganDonor.name}</td>
    //                         <td>{willingOrganDonor.cellNumber}</td>
    //                         <td>{willingOrganDonor.patientFrom}</td>
    //                         <td>{willingOrganDonor.patientTill}</td>
    //                         <td>
    //                             <ul className="list-actions">
    //                                 <li>
    //                                     <Link to={`details/${willingOrganDonor._id}`} className="list-actions-button-details">Details</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`edit/${willingOrganDonor._id}`} className="list-actions-button-edit">Edit</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`delete/${willingOrganDonor._id}`} className="list-actions-button-delete">Delete</Link>
    //                                 </li>
    //                             </ul>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //         <p><Link to="add" className="button-add">Add a new WILLING Organ Donor</Link></p>
    //     </main>
    // )

    function fetchWillingOrganDonorList() {
        getWillingOrganDonorsApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setWillingOrganDonors(data)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }
}

export default WillingOrganDonorList