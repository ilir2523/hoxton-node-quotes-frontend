import { useEffect, useState } from 'react'
import './App.css'
import { Quote } from './myTypes'

function App() {

  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/quotes')
      .then(resp => resp.json())
      .then(quotes => setQuotes(quotes))
  }, [])

  console.log(quotes)

  // if (!quotes) return <h1>Loading...</h1>

  return (
    <div className="App">
      <h1>Quotes App</h1>
      <ul>
      {quotes.map(quote => (
        <li key={quote.id}>
          {quote.content} 
          <strong> ~ {quote.author}</strong>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default App
