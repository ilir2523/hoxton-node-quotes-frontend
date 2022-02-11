import { useEffect, useState } from "react"
import { Quote } from "../myTypes"

export default function RandomQuote() {
    const [randomQuote, setRandomQuote] = useState<Quote | null>(null)

    useEffect(() => {
        fetch('http://localhost:3001/randomQuote')
          .then(resp => resp.json())
          .then(randomQuote => setRandomQuote(randomQuote))
      }, [])

      if (!randomQuote) return <h1>Loading...</h1>

    return (
        <p className='quoteLiEl'>
            {randomQuote.content}
            <strong> ~ {randomQuote.author}</strong>
        </p>
    )
}