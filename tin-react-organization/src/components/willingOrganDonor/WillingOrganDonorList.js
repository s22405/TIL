import { Link } from 'react-router-dom';
import { getWillingOrganDonorsApiCall} from "../../apiCalls/willingOrganDonorApiCalls";

function WillingOrganDonorList() {
    const willingOrganDonorList = getWillingOrganDonorsApiCall();
    return (
        <main>
            <h2>List of WILLING Organ Donors</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CellNumber</th>
                        <th>PatientFrom</th>
                        <th>PatientTill</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {willingOrganDonorList.map(willingOrganDonor => (
                        <tr key={willingOrganDonor._id}>
                            <td>{willingOrganDonor.name}</td>
                            <td>{willingOrganDonor.cellNumber}</td>
                            <td>{willingOrganDonor.patientFrom}</td>
                            <td>{willingOrganDonor.patientTill}</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to={`details/${willingOrganDonor._id}`} className="list-actions-button-details">Details</Link>
                                    </li>
                                    <li>
                                        <Link to={`edit/${willingOrganDonor._id}`} className="list-actions-button-edit">Edit</Link>
                                    </li>
                                    <li>
                                        <Link to={`delete/${willingOrganDonor._id}`} className="list-actions-button-delete">Delete</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><Link to="add" className="button-add">Add a new WILLING Organ Donor</Link></p>
        </main>
    )
}

export default WillingOrganDonorList