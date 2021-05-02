import React from 'react';

const NavRight = (props) =>{
  return(
    <div className={props.cN}>
      <div
        className={props.navbarKey === 'uk' ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('uk')}>
          UK
      </div>
      <div
        className={props.navbarKey === 'england' ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('england')}>
          England
      </div>
      <div
        className={props.navbarKey === 'scotland' ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('scotland')}>
          Scotland
      </div>
      <div
        className={props.navbarKey === 'wales' ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('wales')}>
          Wales
      </div>
      <div
        className={props.navbarKey === 'ireland' ? 'centralizer nav-el disabled' : 'centralizer nav-el'}
        onClick={() => props.handleKey('ireland')}>
          N.Ireland
      </div>
    </div>
  )
}

export default NavRight;
