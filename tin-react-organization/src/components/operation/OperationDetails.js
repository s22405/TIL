import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getOperationByIdApiCall} from "../../apiCalls/operationApiCalls";
import OperationDetailsData from "./OperationDetailsData";

function OperationDetails() {
    const [ope, setOperation] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState(null)

    let { idOperation } = useParams();
    idOperation = parseInt(idOperation);

    function fetchOperationDetails() {
        getOperationByIdApiCall(idOperation)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setOperation(null)
                        setMessage(data.message)
                    } else {
                        setOperation(data)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchOperationDetails()
    }, [])

    let content;

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading operation data...</p>
    } else {
        content = <OperationDetailsData operationData={ope} />
    }

    return (
        <main>
            {content}
            <div className="section-buttons">
                <Link to="/operations" className="button-back">Back</Link>
            </div>
        </main>
    )

    // return (
    //     <main>
    //         <h2>Operation details</h2>
    //         <p>Willing Organ Donor: {operation.willingOrganDonor.name}</p>
    //         <p>Doctor: {operation.doctor.name}</p>
    //         <p>Organ: {operation.organ.name}</p>
    //         <p>Successful: {operation.successful.toString()}</p>
    //         <p>Bed Number: {operation.bedNumber}</p>
    //         <p>Operation Timestamp: {operation.operationTimestamp ? getFormattedDate(operation.operationTimestamp) : ""}</p>
    //         {/*<h2>Willing Organ Donor details</h2>*/}
    //         {/*<table className="table-list">*/}
    //         {/*    <thead>*/}
    //         {/*        <tr>*/}
    //         {/*            <th>Name</th>*/}
    //         {/*            <th>CellNumber</th>*/}
    //         {/*            <th>PatientFrom</th>*/}
    //         {/*            <th>PatientTill</th>*/}
    //         {/*        </tr>*/}
    //         {/*    </thead>*/}
    //         {/*    <tbody>*/}
    //         {/*    {operation.willingOrganDonor.map(*/}
    //         {/*        willingOrganDonor =>*/}
    //         {/*            <tr key={willingOrganDonor._id}>*/}
    //         {/*                <td>{willingOrganDonor.name}</td>*/}
    //         {/*                <td>{willingOrganDonor.cellNumber}</td>*/}
    //         {/*                <td>{willingOrganDonor.patientFrom ? getFormattedDate(willingOrganDonor.patientFrom) : ""}</td>*/}
    //         {/*                <td>{willingOrganDonor.patientTill ? getFormattedDate(willingOrganDonor.patientTill) : ""}</td>*/}
    //         {/*            </tr>*/}
    //         {/*    )}*/}
    //         {/*    </tbody>*/}
    //         {/*</table>*/}
    //         {/*/!*<h2>Doctor details</h2>*!/*/}
    //         {/*/!*<table className="table-list">*!/*/}
    //         {/*/!*    <thead>*!/*/}
    //         {/*/!*    <tr>*!/*/}
    //         {/*/!*        <th>Name</th>*!/*/}
    //         {/*/!*        <th>DateJoin</th>*!/*/}
    //         {/*/!*        <th>DateLeave</th>*!/*/}
    //         {/*/!*    </tr>*!/*/}
    //         {/*/!*    </thead>*!/*/}
    //         {/*/!*    <tbody>*!/*/}
    //         {/*/!*    {operation.doctor.map(*!/*/}
    //         {/*/!*        doctor =>*!/*/}
    //         {/*/!*            <tr key={doctor._id}>*!/*/}
    //         {/*/!*                <td>{doctor.name}</td>*!/*/}
    //         {/*/!*                <td>{doctor.dateJoin ? getFormattedDate(doctor.dateJoin) : ""}</td>*!/*/}
    //         {/*/!*                <td>{doctor.dateLeave ? getFormattedDate(doctor.dateLeave) : ""}</td>*!/*/}
    //         {/*/!*            </tr>*!/*/}
    //         {/*/!*    )}*!/*/}
    //         {/*/!*    </tbody>*!/*/}
    //         {/*/!*</table>*!/*/}
    //         {/*/!*<h2>Organ details</h2>*!/*/}
    //         {/*/!*<table className="table-list">*!/*/}
    //         {/*/!*    <thead>*!/*/}
    //         {/*/!*        <tr>*!/*/}
    //         {/*/!*            <th>Name</th>*!/*/}
    //         {/*/!*            <th>Price</th>*!/*/}
    //         {/*/!*        </tr>*!/*/}
    //         {/*/!*    </thead>*!/*/}
    //         {/*/!*    <tbody>*!/*/}
    //         {/*/!*    {operation.organ.map(*!/*/}
    //         {/*/!*        organ =>*!/*/}
    //         {/*/!*            <tr key={organ._id}>*!/*/}
    //         {/*/!*                <td>{organ.name}</td>*!/*/}
    //         {/*/!*                <td>{organ.price}</td>*!/*/}
    //         {/*/!*            </tr>*!/*/}
    //         {/*/!*    )}*!/*/}
    //         {/*/!*    </tbody>*!/*/}
    //         {/*/!*</table>*!/*/}
    //         <div className="section-buttons">
    //             <Link to="/operations" className="button-back">Back</Link>
    //         </div>
    //     </main>
    // )


}
export default OperationDetails