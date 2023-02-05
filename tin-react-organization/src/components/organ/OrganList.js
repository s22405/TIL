import { Link } from 'react-router-dom';

function OrganList() {
    return (
        <main>
            <h2>List of Organs</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Heart</td>
                    <td>99.99</td>
                    <td>
                        <ul className="list-actions">
                            <li>
                                <Link to="../../pages/organ/form-details.html" className="list-actions-button-details">Details</Link>
                            </li>
                            <li>
                                <Link to="../../pages/organ/form-edit.html" className="list-actions-button-edit">Edit</Link>
                            </li>
                            <li>
                                <Link to="https://youtu.be/E8gmARGvPlI?t=17" className="list-actions-button-delete">Delete</Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <p><Link to="../../pages/organ/form.html" className="button-add">Add a new Organ</Link></p>
        </main>
    )
}

export default OrganList