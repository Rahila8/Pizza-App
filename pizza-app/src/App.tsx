
import {  MouseEvent } from 'react'
import Button from './components/Button/Button'
import Input from './input/Input'




function App() {
//  const [counter,setCounter]= useState<number>(0)

 const addCounter = (e:MouseEvent) => {
    console.log(e)
}  
return (
    <>
     <Button onClick={addCounter}> кнопка </Button>
     <Button appearence='big'onClick={addCounter}> кнопка </Button>
    <Input placeholder='Email' />
    
  
   
    </>
  );
}

export default App
