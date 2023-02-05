import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFormattedDate } from '../../helpers/dateHelper';
import {getDoctorByIdApiCall} from "../../apiCalls/doctorApiCalls";
import DoctorDetailsData from "./DoctorDetailsData";

function DoctorDetails() {
    let { idDoctor } = useParams();
    idDoctor = parseInt(idDoctor);
    const doctor = getDoctorByIdApiCall(idDoctor);

    const [doc, setDoctor] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState(null)

    function fetchDoctorDetails() {
        getDoctorByIdApiCall(idDoctor)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setDoctor(null)
                        setMessage(data.message)
                    } else {
                        setDoctor(data)
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
        fetchDoctorDetails()
    }, [])

    let content;

    if (error) {
        content = <p>Error: {error.message}</p>
    } else if (!isLoaded) {
        content = <p>Loading doctor data...</p>
    } else if (message) {
        content = <p>{message}</p>
    } else {
        content = <DoctorDetailsData doctorData={doc} />
    }
    return (
        <main>
            <h2>Doctor data</h2>
            {content}
            <div className="section-buttons">
                <Link to="/doctors" className="button-back">Back</Link>
            </div>
        </main>
    )


}
export default DoctorDetails