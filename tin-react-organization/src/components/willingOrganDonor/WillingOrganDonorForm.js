import { Link } from "react-router-dom";

function WillingOrganDonorForm() {
    return (
        <main>
            <h2>New WILLING Organ Donor</h2>
            <form className="form">
                <label htmlFor="name">Name: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="name" id="name" placeholder="1-200 char" value="" />
                <span id="errorName" className="errors-text"></span>

                <label htmlFor="cellNumber">CellNumber: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="number" name="cellNumber" id="cellNumber" min="1" max="99" placeholder="1-99" value="" />
                <span id="errorCellNumber" className="errors-text"></span>

                <label htmlFor="patientFrom">PatientFrom: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="date" name="patientFrom" id="patientFrom" value=""/>
                <span id="errorPatientFrom" className="errors-text"></span>

                <label htmlFor="patientTill">PatientTill: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="date" name="patientTill" id="patientTill" value=""/>
                <span id="errorPatientTill" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary"></p>
                    <input type="submit" value="Submit" className="form-button-submit"/>
                    <Link to="/willingOrganDonors" className="form-button-cancel">Cancel</Link>
                </div>

            </form>
        </main>
    )
}

export default WillingOrganDonorForm