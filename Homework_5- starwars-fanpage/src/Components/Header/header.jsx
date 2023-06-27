import './Header.css';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    const welcomeMessage = "Starwars Fan_page";
    const navlinks = ['Home', 'People', 'Planets'];

    return (
        <header>
            <nav className="navigation">
                <h3>{welcomeMessage}</h3>
                <ul className="navlinks">
                    <NavLink style={({isActive})=>({
                        color:isActive===true?"green":"black"

                    })} to ="/home">
                        <li>Home</li>
                    </NavLink>
                    <Link to="/people">
                        <li>People</li>
                    </Link>
                    <Link to="/planets">
                        <li>Planets</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};


export default Header;