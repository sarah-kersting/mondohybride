import React from 'react';
import { css } from 'glamor';
import { colors } from './theme';

const mainStyle = css({
  backgroundColor: colors.primary,
  width: '100%',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  color: colors.secondary,
});

const FooterBar = () => <footer className={mainStyle}>{'Made with love in Berlin'}</footer>;

export default FooterBar;
