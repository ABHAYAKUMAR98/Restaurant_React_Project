import './App.css';
import React from 'react';
import Home from './component/Home';
import RestorantList from './component/RestorantList';
import RestorantDetails from './component/RestorantDetails';
import RestorantSearch from './component/RestorantSearch';
import RestorantCreate from './component/RestorantCreate';
import RestorantUpdate from './component/RestorantUpdate';
import Footer from './component/Footer';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router,
NavLink,
Routes,
Route
} from 'react-router-dom';

function App() {
  return (
    <div className='container'>
     
<Router>

<Navbar   collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand href="#home">My Restaurant </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav fixed="top" className="me-auto">
      <Nav.Link href="#features"><NavLink className={'link'} to="/">Home</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className={'link'} to="/list">List</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className={'link'} to="/details">Details</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className={'link'} to="/create">Create</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className={'link'} to="/update" >Update</NavLink></Nav.Link>
      <Nav.Link href="#features"><NavLink className={'link'} to="/search">Search</NavLink></Nav.Link>


    </Nav>
    <Nav>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Dashboard"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">LogIn</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">LogOut</NavDropdown.Item>
         
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/list' element={<RestorantList />} />
<Route path='/details' element={<RestorantDetails />} />
<Route path='/search' element={<RestorantSearch />} />
<Route path='/update/:id' element={<RestorantUpdate />} />
<Route path='/create' element={<RestorantCreate />} />

</Routes>
</Router>
<Footer />

    </div>

     

  
  );
}

export default App;
