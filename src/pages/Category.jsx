import React from 'react'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${categoryId}`).then((res) => {
      setProductos(res.data);
    }).catch((error) => console.log(error))
  }, [categoryId])

 

  return (
    <ItemListContainer productos={productos}/>
  )
}

export default Category;