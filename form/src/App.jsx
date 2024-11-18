import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('')
  const [form, setForm] = useState({name : "" , email: ""})

  const handleClick = () =>{
    alert("clicked dude")
  }

  const onmouse = () =>{
    alert("your div red")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form , [e.target.value]: e.target.value})
  }

  return (
    <>
 <div className="button">
  <button onClick={handleClick}>onClick</button>
 </div>

 {/* <div className="red" onMouseOver={onmouse}>
  hey i am red div
 </div> */}

 <input type='text' name="name" value={form.phone} onChange={handleChange}/>
 <input type='text'  name="email" value={form.mail} onChange={handleChange}/>

    </>
  )
}

export default App
