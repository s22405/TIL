import { Link } from "react-router-dom";

function OrganForm() {
    return (
        <main>
            <h2>New Organ</h2>
            <form className="form">
                <label htmlFor="name">Name: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="text" name="name" id="name" placeholder="1-200 char" value="" />
                <span id="errorName" className="errors-text"></span>

                <label htmlFor="price">Price: <abbr title="required" aria-label="required">*</abbr></label>
                <input type="number" step="0.01" name="price" id="price" min="0" max="99999.99" placeholder="0-9999.99" value=""/>
                <span id="errorPrice" className="errors-text"></span>

                <div className="form-buttons">
                    <p id="errorsSummary"></p>
                    <input type="submit" value="Submit" className="form-button-submit"/>
                    <Link to="/organs" className="form-button-cancel">Cancel</Link>
                </div>

            </form>
        </main>
    )
}

export default OrganForm