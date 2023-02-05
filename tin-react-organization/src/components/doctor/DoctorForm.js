import {Link, useNavigate, useParams} from "react-router-dom";
import FormMode from '../../helpers/formHelper';
import {useEffect, useState} from "react";
import {addDoctorApiCall, getDoctorByIdApiCall, updateDoctorApiCall} from "../../apiCalls/doctorApiCalls";
import {checkRequired, checkTextLengthRange, checkNumberRange} from "../../helpers/validationCommon";
import FormInput from "../form/FormInput";
import FormButtons from "../form/FormButtons";

function DoctorForm() {
    const [doctor, setDoctor] = useState({
        'name': '',
        'dateJoin': '',
        'dateLeave': ''
    })
    const [errors, setErrors] = useState({
        'name': '',
        'dateJoin': '',
        'dateLeave': ''
    })
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const { idDoctor } = useParams()
    const currentFormMode = idDoctor ? FormMode.EDIT : FormMode.NEW
    const navigate = useNavigate()

    const errorsSummary = hasErrors() ? 'Form contains errors.' : ''
    const fetchError = error ? `Error: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message

    const pageTitle = currentFormMode === FormMode ? 'New psychopath' : 'Edit psychopath'

    function fetchDoctorDetails() {
        getDoctorByIdApiCall(idDoctor)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
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
                })
    }

    useEffect(() => {
        if (currentFormMode === FormMode.EDIT) {
            fetchDoctorDetails()
        }
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        const errorMessage = validateField(name, value)
        setErrors({
            ...errors,
            [name]: errorMessage
        })
        setDoctor({
            ...doctor,
            [name]: value
        })
    }

    function validateField(fieldName, fieldValue) {
        let errorMessage = ''
        if (fieldName === 'name') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            } else if (!checkTextLengthRange(fieldValue, 1, 200)) {
                errorMessage = 'Filed should contain from 1 to 200 characters.'
            }
        }
        if (fieldName === 'dateJoin') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            }
        }
        if (fieldName === 'dateLeave') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            }
        }
        return errorMessage;
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = {...errors}
        Object.entries(doctor).forEach(([key, value]) => {
            const errorMessage = validateField(key, value)
            serverFieldsErrors[key] = errorMessage
            if (errorMessage.length > 0) {
                isValid = false
            }
        })
        setErrors(serverFieldsErrors)
        return isValid
    }

    function hasErrors() {
        let hasErrors = false
        Object.values(errors).forEach((value) => {
            if (value.length > 0) {
                hasErrors = true
            }
        })
        return hasErrors
    }

    function handleSubmit(event) {
        event.preventDefault()
        const isValid = validateForm()
        if (isValid) {
            let promise, response
            if (currentFormMode === FormMode.NEW) {
                promise = addDoctorApiCall(doctor)
            } else if (currentFormMode === FormMode.EDIT) {
                promise = updateDoctorApiCall(idDoctor, doctor)
            }
            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        }
                    )
                    .then(
                        (data) => {
                            if (!response.ok && response.status === 500) {
                                const serverFieldsErrors = {...errors}
                                for (const i in data) {
                                    const errorItem = data[i]
                                    const errorMessage = errorItem.message
                                    const fieldName = errorItem.path
                                    serverFieldsErrors[fieldName] = errorMessage
                                }
                                setErrors(serverFieldsErrors)
                                setError(null)
                            } else {
                                setRedirect(true)
                            }
                        },
                        (error) => {
                            setError(error)
                        }
                    )
            }
        }
    }

    useEffect(() => {
        if (redirect) {
            navigate('/doctors')
        }
    }, [redirect])

    return (
        <main>
            <h2>{pageTitle}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    label="name"
                    required
                    error={errors['name']}
                    name="name"
                    placeholder="1-200 characters"
                    onChange={handleChange}
                    value={doctor['name']}
                />
                {/*<label htmlFor="name">Name: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="text" name="name" id="name" placeholder="1-200 char" value="" />*/}
                {/*<span id="errorName" className="errors-text"></span>*/}

                <FormInput
                    type="date"
                    label="dateJoin"
                    required
                    error={errors['dateJoin']}
                    name="dateJoin"
                    onChange={handleChange}
                    value={doctor['dateJoin']}
                />
                {/*<label htmlFor="dateJoin">dateJoin: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="date" name="dateJoin" id="dateJoin" value="" />*/}
                {/*<span id="errorDateJoin" className="errors-text"></span>*/}
                <FormInput
                    type="date"
                    label="dateLeave"
                    required
                    error={errors['dateLeave']}
                    name="dateLeave"
                    onChange={handleChange}
                    value={doctor['dateLeave']}
                />
                {/*<label htmlFor="dateLeave">DateLeave: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="date" name="dateLeave" id="dateLeave" value="" />*/}
                {/*<span id="errorDateLeave" className="errors-text"></span>*/}

                <FormButtons
                    formMode={currentFormMode}
                    error={globalErrorMessage}
                    cancelPath="/doctors"
                />
                {/*<div className="form-buttons">*/}
                {/*    <p id="errorsSummary" className="errors-text"></p>*/}
                {/*    <input type="submit" value="Submit" className="form-button-submit"/>*/}
                {/*    <Link to="/doctors" className="form-button-cancel">Cancel</Link>*/}
                {/*</div>*/}
            </form>
        </main>
    )
}

export default DoctorForm