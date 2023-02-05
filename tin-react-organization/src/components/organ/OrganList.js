import { Link } from 'react-router-dom';
import { getOrgansApiCall} from "../../apiCalls/organApiCalls";
import React, {useEffect, useState} from "react";
import OrganListTable from "./OrganListTable";

function OrganList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [organs, setOrgans] = useState([]);
    const organList = getOrgansApiCall();
    useEffect(() => {
        fetchOrganList()
    }, [])

    let content;

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading organs data...</p>
    } else {
        content = <OrganListTable organList={organs} />
    }

    return (
        <main>
            <h2>Organ list</h2>
            { content}
            <p className="section-buttons">
                <Link to="/organs/add" className="button-add">Add new organ</Link>
            </p>
        </main>
    )

    // return (
    //     <main>
    //         <h2>List of Organs</h2>
    //         <table className="table-list">
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Price</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {organList.map(organ => (
    //                     <tr key={organ._id}>
    //                         <td>{organ.name}</td>
    //                         <td>{organ.price}</td>
    //                         <td>
    //                             <ul className="list-actions">
    //                                 <li>
    //                                     <Link to={`details/${organ._id}`} className="list-actions-button-details">Details</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`edit/${organ._id}`} className="list-actions-button-edit">Edit</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`delete/${organ._id}`} className="list-actions-button-delete">Delete</Link>
    //                                 </li>
    //                             </ul>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //         <p><Link to="add" className="button-add">Add a new Organ</Link></p>
    //     </main>
    // )

    function fetchOrganList() {
        getOrgansApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setOrgans(data)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }
}

export default OrganList