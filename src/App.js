import React from 'react'
import Header from './Header';
import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div>
      <Header name="AndradeDev" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
      <Counter count = {5}></Counter>
    </div>
  ); 
}

export default App;
