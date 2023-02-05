import { Link } from 'react-router-dom';
import { getOrgansApiCall} from "../../apiCalls/organApiCalls";

function OrganList() {
    const organList = getOrgansApiCall();
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
                    {organList.map(organ => (
                        <tr key={organ._id}>
                            <td>{organ.name}</td>
                            <td>{organ.price}</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to={`details/${organ._id}`} className="list-actions-button-details">Details</Link>
                                    </li>
                                    <li>
                                        <Link to={`edit/${organ._id}`} className="list-actions-button-edit">Edit</Link>
                                    </li>
                                    <li>
                                        <Link to={`delete/${organ._id}`} className="list-actions-button-delete">Delete</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p><Link to="add" className="button-add">Add a new Organ</Link></p>
        </main>
    )
}

export default OrganList