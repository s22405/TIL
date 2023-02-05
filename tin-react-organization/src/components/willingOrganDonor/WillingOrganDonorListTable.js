import WillingOrganDonorListTableRow from './WillingOrganDonorListTableRow'
import React from "react";

function WillingOrganDonorListTable(props) {
    const willingOrganDonors = props.willingOrganDonorList
    return (
        <table className="table-list" >
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
            {willingOrganDonors.map(willingOrganDonor =>
                <WillingOrganDonorListTableRow willingOrganDonorData={willingOrganDonor} key={willingOrganDonor._id} />
            )}
            </tbody>
        </table >
    )
}

export default WillingOrganDonorListTable