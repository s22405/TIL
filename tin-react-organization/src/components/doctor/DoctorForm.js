import { Link } from "react-router-dom";

function DoctorForm() {
    return (
        <main>
            <h2>New Psychopath</h2>
            <form className="form">
                <label htmlFor="name">Name: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="name" id="name" placeholder="1-200 char" value="" />
                <span id="errorName" className="errors-text"></span>

                <label htmlFor="dateJoin">dateJoin: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="date" name="dateJoin" id="dateJoin" value="" />
                <span id="errorDateJoin" className="errors-text"></span>

                <label htmlFor="dateLeave">DateLeave: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="date" name="dateLeave" id="dateLeave" value="" />
                <span id="errorDateLeave" className="errors-text"></span>
                <div className="form-buttons">
                    <p id="errorsSummary" className="errors-text"></p>
                    <input type="submit" value="Submit" className="form-button-submit"/>
                    <Link to="/doctors" className="form-button-cancel">Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default DoctorForm