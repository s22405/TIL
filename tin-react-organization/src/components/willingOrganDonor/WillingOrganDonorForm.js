import {Link, useNavigate, useParams} from "react-router-dom";
import FormMode from '../../helpers/formHelper';
import {
    addWillingOrganDonorApiCall,
    getWillingOrganDonorByIdApiCall,
    updateWillingOrganDonorApiCall
} from "../../apiCalls/willingOrganDonorApiCalls";
import {useEffect, useState} from "react";
import {checkRequired, checkTextLengthRange, checkNumberRange} from "../../helpers/validationCommon";
import FormInput from "../form/FormInput";
import FormButtons from "../form/FormButtons";

function WillingOrganDonorForm() {
    const [willingOrganDonor, setWillingOrganDonor] = useState({
        'name': '',
        'cellNumber': '',
        'patientFrom': '',
        'patientTill': ''
    })
    const [errors, setErrors] = useState({
        'name': '',
        'cellNumber': '',
        'patientFrom': '',
        'patientTill': ''
    })
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const { idWillingOrganDonor } = useParams()
    const currentFormMode = idWillingOrganDonor ? FormMode.EDIT : FormMode.NEW
    const navigate = useNavigate()

    const errorsSummary = hasErrors() ? 'Form contains errors.' : ''
    const fetchError = error ? `Error: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message

    const pageTitle = currentFormMode === FormMode ? 'New willing Organ Donor' : 'Edit willing organ donor'


    function fetchWillingOrganDonorDetails() {
        getWillingOrganDonorByIdApiCall(idWillingOrganDonor)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setMessage(data.message)
                    } else {
                        setWillingOrganDonor(data)
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
            fetchWillingOrganDonorDetails()
        }
    }, [])

    useEffect(() => {
        if (redirect) {
            navigate('/willingOrganDonors')
        }
    }, [redirect])

    function handleChange(event) {
        const { name, value } = event.target
        const errorMessage = validateField(name, value)
        setErrors({
            ...errors,
            [name]: errorMessage
        })
        setWillingOrganDonor({
            ...willingOrganDonor,
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
        if (fieldName === 'cellNumber') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            }else if (!checkNumberRange(fieldValue, 1, 99)) {
                errorMessage = 'Filed should be between 1 and 99.'
            }
        }
        if (fieldName === 'patientFrom') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            }
        }
        if (fieldName === 'patientTill') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            }
        }
        return errorMessage;
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = {...errors}
        Object.entries(willingOrganDonor).forEach(([key, value]) => {
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
                promise = addWillingOrganDonorApiCall(willingOrganDonor)
            } else if (currentFormMode === FormMode.EDIT) {
                promise = updateWillingOrganDonorApiCall(idWillingOrganDonor, willingOrganDonor)
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
                    value={willingOrganDonor['name']}
                />
                {/*<label htmlFor="name">Name: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="text" name="name" id="name" placeholder="1-200 char" value="" />*/}
                {/*<span id="errorName" className="errors-text"></span>*/}
                <FormInput
                    type="number"
                    label="cellNumber"
                    required
                    error={errors['cellNumber']}
                    name="cellNumber"
                    placeholder="1-99"
                    onChange={handleChange}
                    value={willingOrganDonor['cellNumber']}
                />
                {/*<label htmlFor="cellNumber">CellNumber: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="number" name="cellNumber" id="cellNumber" min="1" max="99" placeholder="1-99" value="" />*/}
                {/*<span id="errorCellNumber" className="errors-text"></span>*/}

                <FormInput
                    type="date"
                    label="patientFrom"
                    required
                    error={errors['patientFrom']}
                    name="patientFrom"
                    onChange={handleChange}
                    value={willingOrganDonor['patientFrom']}
                />
                {/*<label htmlFor="patientFrom">PatientFrom: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="date" name="patientFrom" id="patientFrom" value=""/>*/}
                {/*<span id="errorPatientFrom" className="errors-text"></span>*/}


                <FormInput
                    type="date"
                    label="patientTill"
                    required
                    error={errors['patientTill']}
                    name="patientTill"
                    onChange={handleChange}
                    value={willingOrganDonor['patientTill']}
                />
                {/*<label htmlFor="patientTill">PatientTill: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="date" name="patientTill" id="patientTill" value=""/>*/}
                {/*<span id="errorPatientTill" className="errors-text"></span>*/}

                <FormButtons
                    formMode={currentFormMode}
                    error={globalErrorMessage}
                    cancelPath="/willingOrganDonors"
                />
                {/*<div className="form-buttons">*/}
                {/*    <p id="errorsSummary"></p>*/}
                {/*    <input type="submit" value="Submit" className="form-button-submit"/>*/}
                {/*    <Link to="/willingOrganDonors" className="form-button-cancel">Cancel</Link>*/}
                {/*</div>*/}

            </form>
        </main>
    )
}

export default WillingOrganDonorForm