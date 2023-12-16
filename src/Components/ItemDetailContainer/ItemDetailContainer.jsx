import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetailContainer = ({producto}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      
      
        
          <Card key={producto.id} style={{ width: "45rem", margin: 10, border: "solid 3px", borderColor: "blue", padding: "20px" }}>
            <Card.Title style={{fontSize: "25px", fontWeight: "bold"}}>{producto.title}</Card.Title>
           
              <Card.Img variant="top" src={producto.image} style={{width: "15rem", height: "15rem", marginLeft: "190px"}} />
            
            <Card.Body>
              
              <Card.Text style={{fontSize: "40px", fontWeight: "bold"}}>precio: {producto.price}</Card.Text>
              <Card.Text style={{fontSize: "20px", fontWeight: "bold"}}>{producto.description}</Card.Text>
              <ItemCount/>
            </Card.Body>
          </Card>
        
      
    </div>
  )
}

export default ItemDetailContainer;