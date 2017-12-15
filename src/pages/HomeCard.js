import React from 'react';
import { css } from 'glamor';

const mainStyle = css({});

const HomeCard = ({ headline, description, link }) => (
  <a className={mainStyle} href={`/${link}`}>
    <div>{headline}</div>
    <div>{description}</div>
  </a>
);

export default HomeCard;
