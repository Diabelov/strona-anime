/* eslint-disable jsx-a11y/alt-text */
import '../Scss/home.scss';
import evangelion from '../photos/evangelion.jpg'
import aot_1 from '../photos/aot_1.jpg'
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div className="home">
            <div className="item">
            <Link to='/evangelion'><img src={evangelion} className='logo' /></Link>
            <p className="tekst">Neon Genesis Evangelion</p>
            </div>
            <div className="item">
                <Link to='/aot'><img src={aot_1} className='logo' /></Link>
                <p className="tekst">Attack on Titan</p>
            </div>
        </div>
    )
}
export default Home;