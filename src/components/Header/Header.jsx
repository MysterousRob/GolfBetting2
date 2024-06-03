import React from 'react';
import Nav from '../../state/nav';

function Header() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
    <header style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between', maxWidth: '1200px',padding: '30px', paddingLeft: '100px',  }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>
        Golf Betting
      </h1>
      <div style={{ marginLeft: 'auto', alignContent: 'center', alignItems: 'right' }}>
        <Nav />
      </div>
    </header>
  </div>
  );
}

export default Header;

