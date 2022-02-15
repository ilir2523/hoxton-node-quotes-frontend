import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Hrader from './comonents/Header'
import { Quote } from './myTypes'
import AddQuote from './Pages/AddQuote'
import Home from './Pages/Home'
import RandomQuote from './Pages/RandomQuote'
import SingleQuote from './Pages/SingleQuote'

function App() {

  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/quotes')
      .then(resp => resp.json())
      .then(quotes => setQuotes(quotes))
  }, [])

  console.log(quotes)

  if (!quotes) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Hrader />
      <Routes>
      <Route index element={<Navigate to='/quotes' />} />
        <Route path="/quotes" element={<Home quotes={quotes} />}/>
        <Route path="/addQuote" element={<AddQuote quotes={quotes} setQuotes={setQuotes} />}/>
        <Route path="/randomQuote" element={<RandomQuote />}/>
        <Route path="/quotes/:id" element={<SingleQuote />}/>
      </Routes>
    </div>
  )
}

export default App
