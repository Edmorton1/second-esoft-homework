import { useEffect, useState } from "react"

function App() {

  function Header() {
    const [name, setName] = useState(null)
    return <div></div>
  }

  function Clock() {
    const [name, setName] = useState(null)
    return <div></div>
  }

  function Greeting() {
    const [name, setName] = useState(null)
    return <div></div>
  }

  function Container() {
    const names = ['Vasya', 'Petya', 'Ivan', 'Lexa', 'Kirill']
    const getRandomName = () => names[Math.floor(Math.random() * 5)]
    const [name, setName] = useState<string | null>(null)

    useEffect(() => {
      setInterval(() => setName(getRandomName()), 100)
      clearInterval()
    }, [])


    return (
    <div>{name}</div>
  )
  }

  return (
    <Container />
  )
}

export default App
