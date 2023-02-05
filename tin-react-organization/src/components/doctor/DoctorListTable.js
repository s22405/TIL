import DoctorListTableRow from './DoctorListTableRow'
import React from "react";

function DoctorListTable(props) {
    const doctors = props.doctorList //TODO define doctorList
    return (
        <table className="table-list" >
            <thead>
            <tr>
                <th>Name</th>
                <th>DateJoin</th>
                <th>DateLeave</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {doctors.map(doctor =>
                <DoctorListTableRow doctorData={doctor} key={doctor._id} />
            )}
            </tbody>
        </table >
    )
}

export default DoctorListTable