import { Link } from 'react-router-dom';

function WillingOrganDonorList() {
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
                    <tr>
                        <td>Jonathan Mother</td>
                        <td>1</td>
                        <td>05 April 5500</td>
                        <td>06 April 5500</td>
                        <td>
                            <ul className="list-actions">
                                <li>
                                    <Link to="../../pages/willingOrganDonor/form-details.html" className="list-actions-button-details">Details</Link>
                                </li>
                                <li>
                                    <Link to="../../pages/willingOrganDonor/form-edit.html" className="list-actions-button-edit">Edit</Link>
                                </li>
                                <li>
                                    <Link to="https://www.youtube.com/watch?v=p7YXXieghto" className="list-actions-button-delete">Delete</Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p><Link to="../../pages/willingOrganDonor/form.html" className="button-add">Add a new WILLING Organ Donor</Link></p>
        </main>
    )
}

export default WillingOrganDonorList