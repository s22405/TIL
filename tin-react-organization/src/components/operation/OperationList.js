import { Link } from 'react-router-dom';

function OperationList() {
    return (
        <main>
            <h2>List of Operations</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>WILLING Organ Donor</th>
                    <th>Doctor</th>
                    <th>Organ</th>
                    <th>Successful</th>
                    <th>Bed Number</th>
                    <th>Operation Timestamp</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Jonathan Mother</td>
                    <td>Barry The Chopper</td>
                    <td>Heart</td>
                    <td>True</td>
                    <td>1</td>
                    <td>06 April 5500</td>
                    <td>
                        <ul className="list-actions">
                            <li>
                                <Link to="../../pages/operation/form-details.html" className="list-actions-button-details">Details</Link>
                            </li>
                            <li>
                                <Link to="../../pages/operation/form-edit.html" className="list-actions-button-edit">Edit</Link>
                            </li>
                            <li>
                                <Link to="https://www.youtube.com/watch?v=DEsqGOHo0nI" className="list-actions-button-delete">Delete</Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <p><Link to="../../pages/operation/form.html" className="button-add">Add a new Operation</Link></p>
        </main>
    )
}

export default OperationList