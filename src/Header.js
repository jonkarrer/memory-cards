import React from 'react';
import './Header.css';
function Header() {
    return (
      <React.Fragment>
        <div id="Header">
          <div className="level-wrapper">
            <h1 className="red" id="level">
              
            </h1>
          </div>
        </div>
        <div className="main-underline" id="underLine">
          <div className="main-underline_insert"></div>
        </div>
      </React.Fragment>
    )
  }


export default Header
