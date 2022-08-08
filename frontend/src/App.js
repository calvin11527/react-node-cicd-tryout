import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
const GetNamesAPIPath = process.env.REACT_APP_API_GETNAMES

function App() {
  const [username, setUsername] = useState('')
  useEffect(() => {
    getNames()
  }, [])

  const getNames = async () => {
    const res = await axios.get(GetNamesAPIPath)
    setUsername(res.data)
  }
  return (
    <>
      <h1>Frontend</h1>
      <h3>{username}</h3>
    </>
  )
}

export default App
