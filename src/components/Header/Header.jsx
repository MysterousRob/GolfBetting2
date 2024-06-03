import React from 'react';
import Nav from '../../state/nav';

function Header() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Golf Betting
      </h1>
      <div style={{ marginLeft: 'auto' }}>
        <Nav />
      </div>
    </header>
  </div>
  );
}

export default Header;

