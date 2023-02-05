import { Link } from 'react-router-dom';

function DoctorListTableRow(props) {
    const doctor = props.doctorData
    return (
        <tr>
            <td>{doctor.name}</td>
            <td>{doctor.dateJoin}</td>
            <td>{doctor.dateLeave}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`details/${doctor._id}`} className="list-actions-button-details">Details</Link></li>
                    <li><Link to={`edit/${doctor._id}`} className="list-actions-button-edit">Edit</Link></li>
                    <li><Link to={`delete/${doctor._id}`} className="list-actions-button-delete">Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default DoctorListTableRow