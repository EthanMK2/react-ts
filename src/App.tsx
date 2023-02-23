import { useState } from 'react'
import ToDos from './components/ToDos';

function App() {

  const moreToDos = <ul>
    <ToDos text=';dsfkj'></ToDos>
    <ToDos text=';dsfkj'></ToDos>
    <ToDos text=';dsfkj'></ToDos>
  </ul>

  return (
    <div className="App">
      <ToDos text="hello" key='Kdf;'/>
      <ToDos text="message is here" key='dkf' />
      <ToDos text='Children After this line?' key="dfas">Hi, this is the children of ToDos. <p>PARAGRAPH</p></ToDos>
      {moreToDos}
    </div>
  )
}

export default App
