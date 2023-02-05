import { Link } from 'react-router-dom';
import { getDoctorsApiCall} from "../../apiCalls/doctorApiCalls";
import React, {useEffect, useState} from "react";
import DoctorListTable from "./DoctorListTable";

function DoctorList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const doctorList = getDoctorsApiCall();

    let content;

    function fetchDoctorList() {
        getDoctorsApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true)
                    setDoctors(data)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchDoctorList()
    }, [])


    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading doctors data...</p>
    } else if(doctors.length==0) {
        content = <p>No doctors.</p>
    } else {
        content = <DoctorListTable doctorList={doctors} />
    }


    return (
        <main>
            <h2>Doctor list</h2>
            { content}
            <p className="section-buttons">
                <Link to="/doctors/add" className="button-add">Add new doctor</Link>
            </p>
        </main>
    )

    // return (
    //     <main>
    //         <h2>List of Doctors</h2>
    //         <table className="table-list">
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>DateJoin</th>
    //                     <th>DateLeave</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {doctorList.map(doctor => (
    //                     <tr key={doctor._id}>
    //                         <td>{doctor.name}</td>
    //                         <td>{doctor.dateJoin}</td>
    //                         <td>{doctor.dateLeave}</td>
    //                         <td>
    //                             <ul className="list-actions">
    //                                 <li>
    //                                     <Link to={`details/${doctor._id}`} className="list-actions-button-details">Details</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`edit/${doctor._id}`} className="list-actions-button-edit">Edit</Link>
    //                                 </li>
    //                                 <li>
    //                                     <Link to={`delete/${doctor._id}`} className="list-actions-button-delete">Delete</Link>
    //                                 </li>
    //                             </ul>
    //                         </td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //         <p><Link to="add" className="button-add">Add a new psychopath</Link></p>
    //     </main>
    // )
}

export default DoctorList