import './App.css'
import { useState } from 'react'
import getCityLocation from './hooks/getCityKey'
function App() {  
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');

  function searchQuery(event: Event): void{
  event.preventDefault();
  setData(getCityLocation(query));
  }

  return (
    <>
      <h1>Hello World</h1>
      <form onSubmit={(submit) => searchQuery(submit)}>
      <label>
      City Location Search
      <input onChange={(input) => setQuery(input.target.value) } type='text'/>
      </label>
      <button type="submit">Get City Location</button>
      </form>
      <h2>City: key {data}</h2>
    </>
  )
}

export default App
