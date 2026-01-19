import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <Wrapper>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
    

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    padding: 0 1rem;
    transition: color 1s ease;
  }

  a:hover {
    color: red;
  }
`;

export default Navbar;
