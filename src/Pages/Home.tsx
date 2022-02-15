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
                <Link to={`/quotes/${quote.id}`} key={quote.id}>
                    <li className='quoteLiEl' key={quote.id}>
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