import React from 'react';

import './HeaderStyles.css';

export default function Header() {
  return(
    <div className="header">
      <div className="header-title">
        <h5>Theory</h5>
      </div>

      <div className="header-menu">
        <h5>Home</h5>
        <h5>Generic</h5>
        <h5>Elements</h5>
      </div>
    </div>
  );
}