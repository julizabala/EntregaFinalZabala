import React from 'react'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Item = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProducto(res.data);
    }).catch((error) => console.log(error))
  }, [id])
  return (
    <ItemDetailContainer producto={producto}/>
  )
}

export default Item