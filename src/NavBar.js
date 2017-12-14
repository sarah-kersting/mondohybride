import React from 'react';
import { css } from 'glamor';
import { colors } from './theme';

const mainStyle = css({
  backgroundColor: colors.primary,
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const linkStyle = css({
  color: colors.secondary,
  float: 'left',
  display: 'block',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
});

const NavBar = () => (
  <nav className={mainStyle}>
    <a className={linkStyle} href="/">
      Home
    </a>
    <a className={linkStyle} href="/hundkatzenschweinerei">
      {'Hundkatzenschweinerei'}
    </a>
  </nav>
);

export default NavBar;
