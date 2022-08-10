import { useState } from 'react'
import { Product } from './components/Product'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>ROCKET<span>COFFEE</span></h1>
        <p>Aberto todos os dias. 8h-21h</p>
      </header>

      <section>
        <h2>Título</h2>
        <ul>
          <li>
            <Product name="Croissant" price="4,99">
              This is the product description.
            </Product>
            <Product name="Coxinha" price="4,99">
              This is the product description.
            </Product>
            <Product name="Coxinha" price="4,99">
              This is the product description.
            </Product>
            <Product name="Coxinha" price="4,99">
              This is the product description.
            </Product>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default App
