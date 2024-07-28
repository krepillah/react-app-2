// import Logo from '../images/logo.png'

export default function Header() {
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    <img src="" alt="KARO-logo" />
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#" className="deep-orange-text">Вход</a></li>
                </ul>
            </div>
        </nav>
    )
}