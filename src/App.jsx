import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBarComponent from './Components/NavBarComponent/NavBarComponent'
import MainRouter from './routes/MainRouter'
import { CartProvider } from './context/CartContext'

function App() {

  

  

  return (
    
    <CartProvider>
      <div>
      <MainRouter/>
    </div>
    </CartProvider>
  )
}

export default App
