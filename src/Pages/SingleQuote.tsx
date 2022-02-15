import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Quote } from "../myTypes"

export default function SingleQuote() {

  const params = useParams()

  const [singleQuote, setSingleQuote] = useState<Quote | null>(null)

  useEffect(() => {
    fetch(`http://localhost:3001/quotes/${params.id}`)
      .then(resp => resp.json())
      .then(singleQuote => setSingleQuote(singleQuote))
  }, [])

  if (!singleQuote) return <main>Loading...</main>

  return (
    <div className="randomQuoteDivEl">
      <img className="randomQuoteImg" src={singleQuote.image} alt={`${singleQuote.firstName} image`} />
      <p className='quoteDivEl'>
        {singleQuote.content}
        <strong> ~ {singleQuote.firstName} {singleQuote.lastName}</strong>
        {singleQuote.dead? <span>{`Age at death: ${singleQuote.age} years`}</span> : <span>{`Age: ${singleQuote.age} years`}</span> } 
      </p>
    </div>
  )

}