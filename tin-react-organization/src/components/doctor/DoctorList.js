import { Link } from 'react-router-dom';

function DoctorList() {
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
                <tr>
                    <td>Barry The Chopper</td>
                    <td>01 April 5500</td>
                    <td>Null</td>
                    <td>
                        <ul className="list-actions">
                            <li>
                                <Link to="../../pages/doctor/form-details.html" className="list-actions-button-details">Details</Link>
                            </li>
                            <li>
                                <Link to="../../pages/doctor/form-edit.html" className="list-actions-button-edit">Edit</Link>
                            </li>
                            <li>
                                <Link to="https://www.youtube.com/watch?v=qOb-Ha7UaEw" className="list-actions-button-delete">Delete</Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <p><Link to="../../pages/doctor/form.html" className="button-add">Add a new psychopath</Link></p>
        </main>
    )
}

export default DoctorList