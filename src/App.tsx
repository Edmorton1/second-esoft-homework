import { memo, useEffect, useState } from "react"

const Header = memo(() => {
  console.log("Header render")
  return <h1>Это мой первый React. проект!</h1>
})

const Clock = memo(() => {
  const [time, setTime] = useState<Date>(new Date())
  
  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000)

    return () => clearInterval(timeInterval)
  }, [])
  
  return (
    <>
      <div>{time.toLocaleDateString()} {time.toLocaleTimeString()}</div>
      {time.getMinutes() % 5 == 0 ? <div>Время делится на 5</div> : null}
    </>
  )
})

const Greeting = ({name}: {name: string}) => {
  const [render, setRender] = useState(0)
  console.log('Greeting render')

  useEffect(() => {
    setRender(render => render + 1)
    if (render === 0) {
      console.log(`Первый рендер ${name}`, render)
    } else {
      console.log(`Поменялся пропс ${name}`, render)
    }
  }, [name])

  return <div>{render <= 2 ? `Привет, ${name}!` : `Привет, у тебя поменялось имя, теперь ты ${name}!`}</div>
}

const Container = () => {
  const names = ['Vasya', 'Petya', 'Ivan', 'Lexa', 'Kirill']
  const getRandomName = () => names[Math.floor(Math.random() * 5)]
  const [name, setName] = useState<string>(getRandomName)

  useEffect(() => {
    const nameInterval = setInterval(() => setName(getRandomName()), 10000)
    
    return () => clearInterval(nameInterval)
  }, [])


  return (
    <>
      <Header />
      <Greeting name={name} />
      <Clock />
    </>
  )
}

function App() {

  return (
    <Container />
  )
}

export default App