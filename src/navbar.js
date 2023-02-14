import {Link} from 'react-router-dom';
import './navbar.scss'

function Navigation() {
    return (
        <div className={"Navbar"}>
            <Link to={'/'}>Strona główna </Link>
        </div>
    );
}

export default Navigation;