import './App.css';
import './navbar.scss'
import photo from './photos/evangelion.jpg'
import aot_1 from './photos/aot_1.jpg'
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div style={{display: "flex"}}>
            <div className="item">
            <Link to='/evangelion'>
                     <img src={photo} alt="photo" className='logo' />
            </Link>
            <p className="tekst">Neon Genesis Evangelion</p>
        </div>
            <div className="item">
                <Link to='/aot'>
                    <img src={aot_1} alt="aot" className='logo' />
                    </Link>
                <p className="tekst">Attack on Titan</p>
            </div>
            <div className="item">
        </div>


        </div>
    )
}
export default Home;