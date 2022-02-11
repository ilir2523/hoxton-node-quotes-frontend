import { Quote } from "../myTypes"

type Props = {
    quotes: Quote[]
}

export default function Home({ quotes }: Props) {
    return (
        <ul>
            {quotes.map(quote => (
                <li className='quoteLiEl' key={quote.id}>
                    {quote.content}
                    <strong> ~ {quote.author}</strong>
                </li>
            ))}
        </ul>
    )
}