import OrganListTableRow from './OrganListTableRow'
import React from "react";

function OrganListTable(props) {
    const organs = props.organList
    return (
        <table className="table-list" >
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {organs.map(organ =>
                <OrganListTableRow organData={organ} key={organ._id} />
            )}
            </tbody>
        </table >
    )
}

export default OrganListTable