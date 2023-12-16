import React from 'react'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProductos(res.data);
    }).catch((error) => console.log(error))
  }, [])

  return (
    <ItemListContainer productos={productos}/>
  )
}

export default Home