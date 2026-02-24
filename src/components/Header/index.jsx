import "./styled.css";

export default function Header({logo, links = [], buttons = [], backgroundColor = "#ffffff", textColor = "#000000", buttonVariant = "primary"}) {
    return (
        <header className="header" style={{ backgroundColor, color: textColor }}>
            <div className="header__logo">
                <img src={logo.src} alt={logo.alt} />
            </div>

            <nav className="header__nav">
                {links.map((link, index) => (
                    <a key={index} href={link.href}>{link.label}</a>
                ))}
                {buttons.map((button, index) => (
                    <button key={index} className={`btn btn--${buttonVariant}`} onClick={button.onClick}>{button.label}</button>
                ))}
            </nav>
        </header>
    );
}