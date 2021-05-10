import './styles.scss';

function Header() {
    return (
        <header className="headerContainer">
            <div>
                <button>INÍCIO</button>
            </div>
            <span>SERVICE NET</span>
            <div>
                <button>LOGIN</button>
                <button className="cadastro">CADASTRE-SE</button>
            </div>
        </header>
    )
}

export default Header;