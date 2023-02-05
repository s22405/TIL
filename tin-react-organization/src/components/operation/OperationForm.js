import { Link } from 'react-router-dom';
import { getDoctorsApiCall } from '../../apiCalls/doctorApiCalls';
import { getOrgansApiCall } from '../../apiCalls/organApiCalls';
import { getWillingOrganDonorsApiCall } from '../../apiCalls/willingOrganDonorApiCalls';
import FormMode from '../../helpers/formHelper';

function OperationForm() {
    const allWillingOrganDonors = getWillingOrganDonorsApiCall();
    const allDoctors = getDoctorsApiCall();
    const allOrgans = getOrgansApiCall();

    return (
        <main>
            <h2>New Operation</h2>
            <form className="form">
                <label htmlFor="idWillingOrganDonor">WillingOrganDonor: <abbr title="required" aria-label="required">*</abbr></label>
                <select name="idWillingOrganDonor" id="idWillingOrganDonor" required>
                    <option value="">-- Choose WillingOrganDonor --</option>
                    {allWillingOrganDonors.map(willingOrganDonor =>
                        (<option key={willingOrganDonor._id} value={willingOrganDonor._id} label={willingOrganDonor.name}></option>)
                    )}
                </select>
                <span id="errorIdWillingOrganDonor" className="errors-text"></span>

                <label htmlFor="idDoctor">Doctor: <abbr title="required" aria-label="required">*</abbr></label>
                <select name="idDoctor" id="idDoctor" required>
                    <option value="">-- Choose Doctor --</option>
                    {allDoctors.map(doctor =>
                        (<option key={doctor._id} value={doctor._id} label={doctor.name}></option>)
                    )}
                </select>
                <span id="errorIdDoctor" className="errors-text"></span>

                <label htmlFor="idOrgan">Organ: <abbr title="required" aria-label="required">*</abbr></label>
                <select name="idOrgan" id="idOrgan" required>
                    <option>-- Choose Organ --</option>
                    {allOrgans.map(organ =>
                        (<option key={organ._id} value={organ._id} label={organ.name}></option>)
                    )}
                </select>
                <span id="errorIdOrgan" className="errors-text"></span>

                <label htmlFor="successful">Successful: </label>
                <select name="successful" id="successful">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <span id="errorSuccessful" className="errors-text"></span>

                <label htmlFor="bedNumber">BedNumber: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="number" name="bedNumber" id="bedNumber" min="1" max="99" placeholder="1-99" value=""/>
                <span id="errorBedNumber" className="errors-text"></span>

                <label htmlFor="operationTimestamp">OperationTimestamp: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="date" name="operationTimestamp" id="operationTimestamp" value=""/>
                <span id="errorOperationTimestamp" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary"></p>
                    <input type="submit" value="Submit" className="form-button-submit"/>
                    <Link to="/operations" className="form-button-cancel">Cancel</Link>
                </div>

            </form>
        </main>
    )
}

export default OperationForm