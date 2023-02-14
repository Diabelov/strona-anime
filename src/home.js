import './App.css';
import './navbar.scss'
import photo from './photo.jpg'
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div className='item'>

            <Link to='/evangelion'>
<img src={photo} alt="photo" className='logo' />
            </Link>
            <a class='tekst'>Neon Genesis Evangelion</a>


        </div>
    )
}
export default Home;