import { useState } from 'react'
import { Product } from './components/Product'
import './App.css'

function App() {
const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>ROCKET<span>COFFEE</span></h1>
        <p>Aberto todos os dias. 8h-21h</p>
      </header>

      <section>
        <ul>
          <li>
            <h2>Cafés</h2>
            <Product setTotal={setTotal} name="Americano" price={2.99}>
              50ml de café americano.
            </Product>
            <Product setTotal={setTotal} name="Expresso - pequeno" price={3.99}>
              150ml de café expresso.
            </Product>
            <Product setTotal={setTotal} name="Café com leite - pequeno" price={4.99}>
              150ml de café com leite.
            </Product>
            <Product setTotal={setTotal} name="Expresso - grande" price={6.99}>
              300ml de café expresso.
            </Product>
            <Product setTotal={setTotal} name="Café com leite - grande" price={7.99}>
              300ml de café com leite.
            </Product>
            <Product setTotal={setTotal} name="Cappuccino" price={7.99}>
              150ml de Cappuccino.
            </Product>
            <Product setTotal={setTotal} name="Latte" price={8.99}>
              150ml de Latte.
            </Product>
            <Product setTotal={setTotal} name="Café gelado" price={5.99}>
              150ml de café gelado.
            </Product>
            <Product setTotal={setTotal} name="Americano gelado" price={5.99}>
              150ml de americano gelado.
            </Product>
          
          </li>
          <li>
            <h2>Lanches</h2>
            <Product setTotal={setTotal} name="Croissant" price={5.99}>
              De frango
            </Product>
            <Product setTotal={setTotal} name="Coxinha" price={4.99}>
              De frango
            </Product>
            <Product setTotal={setTotal} name="Pastel" price={3.99}>
              De frango e carne
            </Product>
            <Product setTotal={setTotal} name="Hamburgão" price={4.99}>
              Com Hamburger, alface, tomate, maionese caseira, milho, ervilha, queijo e presunto
            </Product>
          </li>
          <li>
            <h2>Bebidas</h2>
            <Product setTotal={setTotal} name="Água mineral" price={1.99}>
              Com gás ou sem gás.
            </Product>
            <Product setTotal={setTotal} name="Refrigerante lata" price={2.99}>
              Coca-Cola, Fanta, Sprite, Guaraná, Laranjinha, Água da Serra
            </Product>
            <Product setTotal={setTotal} name="Refrigerante 600ml" price={4.99}>
              Coca-Cola, Fanta, Sprite, Guaraná, Laranjinha, Água da Serra
            </Product>
            <Product setTotal={setTotal} name="Refrigerante 1l" price={5.99}>
              Coca-Cola, Fanta, Sprite, Guaraná, Laranjinha, Água da Serra
            </Product>
            <Product setTotal={setTotal} name="Suco classic 300ml" price={6.99}>
              Laranja, limão, maçã, morango e goiaba
            </Product>
            <Product setTotal={setTotal} name="Suco jumbo 500ml" price={7.99}>
              Laranja, limão, maçã, morango e goiaba
            </Product>
          </li>
          <li>
            <h2>SEU PEDIDO</h2>
            <Product name="TOTAL" price={total}>
              Soma do seu pedido!
            </Product>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default App
