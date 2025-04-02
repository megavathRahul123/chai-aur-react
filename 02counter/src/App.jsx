import { useState } from 'react'  //play wiyh hooks
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


//ui udation ko react control krtah hai
function App() {

  //what ever value we can put there it will be updated
  //use will return two things 1st value and 2nd function
  //default value = 5
  let [counter, setCounter] = useState(5)

  //let counter = 5
  const addValue = () => {
    //counter = counter + 1
    console.log('add value',counter)
    setCounter(counter + 1)
  }

  const removeValue = ()=>{
    console.log('remove value',counter)
    setCounter(counter - 1)
  }



  return (
    
    <>
    <h1>hi baiby</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>add value {counter}</button>
    <br/>
    <button onClick={removeValue}>subtract value {counter}</button>
    <p>helo world:{counter}</p>
      
    </>
   
  )
}

export default App
