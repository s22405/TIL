import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/operations">Operations</Link></li>
                <li><Link to="/willingOrganDonors">WillingOrganDonors</Link></li>
                <li><Link to="/organs">Organs</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation