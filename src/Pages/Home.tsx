import { Link } from "react-router-dom"
import { Quote } from "../myTypes"

type Props = {
    quotes: Quote[]
}

export default function Home({ quotes }: Props) {
    return (
        <>
        <ul>
            {quotes.map(quote => (
                <Link to={`/quotes/${quote._id}`} key={quote._id}>
                    <li className='quoteLiEl' key={quote._id}>
                        <img src={quote.image} alt={`${quote.firstName} image`} />
                        <div className="quoteDivEl">
                            <p>{quote.content}</p>
                            <strong> ~ {quote.firstName} {quote.lastName}</strong>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
      </>
    )
}