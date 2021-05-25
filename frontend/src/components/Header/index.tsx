import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
    return (
        <header className="headerContainer">
            <div>
                <Link to="/">INÍCIO</Link>
            </div>
            <div>
                <Link to="/login">LOGIN</Link>
                <Link to="/cadastro" className="cadastro">CADASTRE-SE</Link>
            </div>
        </header>
    )
}

export default Header;