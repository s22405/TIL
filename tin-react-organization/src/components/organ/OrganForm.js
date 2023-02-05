import {Link, useNavigate, useParams} from "react-router-dom";
import FormMode from '../../helpers/formHelper'
import {useEffect, useState} from "react";
import {addOrganApiCall, getOrganByIdApiCall, updateOrganApiCall} from "../../apiCalls/organApiCalls";
import {checkRequired, checkTextLengthRange, checkNumberRange} from "../../helpers/validationCommon";
import FormInput from "../form/FormInput";
import FormButtons from "../form/FormButtons";

function OrganForm() {
    const [organ, setOrgan] = useState({
        'name': '',
        'price': ''
    })
    const [errors, setErrors] = useState({
        'name': '',
        'price': ''
    })
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const { idOrgan } = useParams()
    const currentFormMode = idOrgan ? FormMode.EDIT : FormMode.NEW
    const navigate = useNavigate()

    const errorsSummary = hasErrors() ? 'Form contains errors.' : ''
    const fetchError = error ? `Error: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message

    const pageTitle = currentFormMode === FormMode ? 'New organ' : 'Edit organ'

    function fetchOrganDetails() {
        getOrganByIdApiCall(idOrgan)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setMessage(data.message)
                    } else {
                        setOrgan(data)
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
            fetchOrganDetails()
        }
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        const errorMessage = validateField(name, value)
        setErrors({
            ...errors,
            [name]: errorMessage
        })
        setOrgan({
            ...organ,
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
        if (fieldName === 'price') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Field is required.'
            } else if (!checkNumberRange(fieldValue, 0, 99999.99)) {
                errorMessage = 'Filed should be between 0 and 99999.99.'
            }
        }
        return errorMessage;
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = {...errors}
        Object.entries(organ).forEach(([key, value]) => {
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
                promise = addOrganApiCall(organ)
            } else if (currentFormMode === FormMode.EDIT) {
                promise = updateOrganApiCall(idOrgan, organ)
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
            navigate('/organs')
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
                    value={organ['name']}
                />
                {/*<label htmlFor="name">Name: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="text" name="name" id="name" placeholder="1-200 char" value="" />*/}
                {/*<span id="errorName" className="errors-text"></span>*/}

                <FormInput
                    type="number"
                    label="price"
                    required
                    error={errors['price']}
                    name="price"
                    placeholder="0-99999.99"
                    onChange={handleChange}
                    value={organ['price']}
                />
                {/*<label htmlFor="price">Price: <abbr title="required" aria-label="required">*</abbr></label>*/}
                {/*<input type="number" step="0.01" name="price" id="price" min="0" max="99999.99" placeholder="0-9999.99" value=""/>*/}
                {/*<span id="errorPrice" className="errors-text"></span>*/}

                <FormButtons
                    formMode={currentFormMode}
                    error={globalErrorMessage}
                    cancelPath="/organs"
                />
                {/*<div className="form-buttons">*/}
                {/*    <p id="errorsSummary"></p>*/}
                {/*    <input type="submit" value="Submit" className="form-button-submit"/>*/}
                {/*    <Link to="/organs" className="form-button-cancel">Cancel</Link>*/}
                {/*</div>*/}

            </form>
        </main>
    )
}

export default OrganForm