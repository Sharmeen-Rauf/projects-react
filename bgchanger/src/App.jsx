import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'

function App() {

  const [color , setColor] = useState("lavender")

  const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <>

<Navbar/>
<div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={() => {setColor("red")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "red"}}>
    Red
    </button>

    <button onClick={() => {setColor("green")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "green"}}>
    Green
    </button>

    <button onClick={() => {setColor("blue")}}
     className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "blue"}}>
    Blue
    </button>

    <button onClick={() => {setColor("purple")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "purple"}}>
    Purple
    </button>

    <button onClick={() => {setColor("orange")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "orange"}}>
    Orange
    </button>
    <button onClick={() => {setColor("black")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "black"}}>
    Black
    </button>

    <button onClick={() => {setColor("skyblue")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "skyblue"}}>
    Sky Blue
    </button>

    <button onClick={() => {setColor("grey")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "grey"}}>
    Grey
    </button>

    <button onClick={() => {setColor("silver")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "silver"}}>
    Silver
    </button>

    <button onClick={() => {setColor("gold")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "gold"}}>
    Golden
    </button>

    <button onClick={() => {setColor("brown")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "brown"}}>
    Brown
    </button>
  </div>
</div>


<div className='fixed flex flex-wrap justify-center top-20 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={() => {setColor(randomColor);}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: randomColor}}>
   Random Color
    </button>

    <button onClick={() => {setColor("magenta")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "magenta"}}>
    Magenta
    </button>

    <button onClick={() => {setColor("highlight")}}
     className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "highlight"}}>
    Highlight
    </button>

    <button onClick={() => {setColor("#4a044e")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg to-fuchsia-950'
    style={{backgroundColor: "#4a044e"}}>
    Fuchia
    </button>

    <button onClick={() => {setColor("aqua");}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "aqua"}}>
    Aqua
    </button>
    <button onClick={() => {setColor("transparent")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "transparent"}}>
    Transparant
    </button>

    <button onClick={() => {setColor("#881337")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "#881337"}}>
   Rose
    </button>

    <button onClick={() => {setColor("#84cc16")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "#84cc16"}}>
    Lime
    </button>

    <button onClick={() => {setColor("#022c22")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
    style={{backgroundColor: "#022c22"}}>
    Emerald
    </button>

    <button onClick={() => {setColor("#312e81")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "#312e81"}}>
    Indigo
    </button>

    <button onClick={() => {setColor("violet")}}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style={{backgroundColor: "violet"}}>
    Violet
    </button>
  </div>
</div>
</div>
    </>
  )
}

export default App 
