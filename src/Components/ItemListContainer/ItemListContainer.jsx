import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemListContainer = ({productos}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      
      {productos.map((product) => {
        return (
          <Card key={product.id} style={{ width: "25rem", margin: 10, border: "solid 3px", borderColor: "blue", padding: "10px" }}>
            <Card.Title style={{fontSize: "25px", fontWeight: "bold"}}>{product.title}</Card.Title>
           
             <Link to={`/item/${product.id}`}> <Card.Img variant="top" src={product.image} style={{width: "15rem", height: "15rem", marginLeft: "60px"}} /></Link>
            
            <Card.Body>
              
              <Card.Text style={{fontSize: "20px", fontWeight: "bold"}}>precio: {product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  )
}

export default ItemListContainer;