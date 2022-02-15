import { Link } from "react-router-dom";

export default function Hrader() {
    return (
        <header className="header">
            <h1><Link className="homeLinkEl" to={'/quotes'}>
                Quote App
            </Link></h1>
            <ul>
                <li className="headerNavLiEl">
                    <Link className="headerLinkEl" to={'/randomQuote'}>
                        Random Quote
                    </Link>
                    <Link className="headerLinkEl" to={'/addQuote'}>
                        Add Quote
                    </Link>
                </li>
            </ul>
        </header>
    )
}