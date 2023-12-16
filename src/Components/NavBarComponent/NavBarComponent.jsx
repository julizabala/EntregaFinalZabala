import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NavBarComponent =() => {

  const [categorias, setCategorias] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then(res => setCategorias(res.data)).catch(error => console.log(error))

  }, [])

  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{fontSize: "50px", color: "red", fontWeight: "bold", fontStyle: "italic", textShadow: "3px 2px 4px #000006"}}><Link to={"/"} style={{textDecoration: "none"}}>The Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link href="#home" style={{fontSize:"35px", fontWeight: "bold", color: "red"}}>Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown"style={{fontSize:"35px", fontWeight: "bold", color: "red"}} >
              {
                categorias.map((categoria, index) => {
                  return (<NavDropdown.Item key={index}>
                    <Link to={`/category/${categoria}`} style={{textDecoration: "none", color: "black"}}>
                    {categoria}
                    </Link>
                  </NavDropdown.Item>)
                  
                })
                }
            </NavDropdown>
          </Nav>
          <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;