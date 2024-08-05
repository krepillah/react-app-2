// import Logo from '../images/logo.png'

export default function Header() {
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    <img src="/icons/fortnite-shop-logo.png" alt="fortnite shop logo" />
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://fortniteapi.io/" className="white-text">API</a></li>
                </ul>
            </div>
        </nav>
    )
}