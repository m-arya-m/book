import React from 'react';
import { Link, useNavigate } from 'react-router'
import { Nav, Button } from 'react-bootstrap'

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    navigate('/login');
  };

  return (
    <nav>
      <div className='navbar'>
        <div className='namenavbar'>
          <h1>Books</h1>
        </div>
        <div className="navbuttons">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Button variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
