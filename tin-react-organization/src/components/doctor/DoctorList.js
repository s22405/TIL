import { Link } from 'react-router-dom';
import { getDoctorsApiCall} from "../../apiCalls/doctorApiCalls";

function DoctorList() {
    const doctorList = getDoctorsApiCall();
    return (
        <main>
            <h2>List of Doctors</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DateJoin</th>
                        <th>DateLeave</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorList.map(doctor => (
                        <tr key={doctor._id}>
                            <td>{doctor.name}</td>
                            <td>{doctor.dateJoin}</td>
                            <td>{doctor.dateLeave}</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to={`details/${doctor._id}`} className="list-actions-button-details">Details</Link>
                                    </li>
                                    <li>
                                        <Link to={`edit/${doctor._id}`} className="list-actions-button-edit">Edit</Link>
                                    </li>
                                    <li>
                                        <Link to={`delete/${doctor._id}`} className="list-actions-button-delete">Delete</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><Link to="add" className="button-add">Add a new psychopath</Link></p>
        </main>
    )
}

export default DoctorList