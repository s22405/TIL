import { Link } from 'react-router-dom';
import React from "react";

function OrganListTableRow(props) {
    const organ = props.organData
    return (
        <tr>
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
    )
}

export default OrganListTableRow