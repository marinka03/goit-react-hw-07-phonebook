import Filter from 'components/Filter';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import style from './Header.module.css';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 600;

  &.active {
    color: #FA7092;
  }
`;

function Header() {
  const { pathname } = useLocation();
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </nav>
        {pathname === '/contacts' && <Filter />}
      </div>
    </header>
  );
}

export default Header;
