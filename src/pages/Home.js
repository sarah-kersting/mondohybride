import React from 'react';
import { css } from 'glamor';

const mainStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px',
});

const Home = () => (
  <div className={mainStyle}>
    <div>{`Hundkatzenschweinerei - Was ist das? (Hundkatzenschweinereien - what is that?)`}</div>
    <div
    >{`Die Hundkatzenschweinerei in Mythologie und Geschichte (The hundkatzenschweinerei in mythology and history)`}</div>

    <div>{`Popkulturelle Schweinereien (popcultural schweinereien)`}</div>

    <div
    >{`'Klassische' Schweinereien - vom Maultier zu Dolly ('Classical' Schweinereien - from mules to Dolly)`}</div>

    <div
    >{`Bioengineering und Schweinereien - die Technik (Bioengineering and Schweinereien - the techniques)`}</div>

    <div
    >{`Die eierlegende Wollmilchsau - die Vision (The egg-laying woolly milksow - the vision)`}</div>

    <div
    >{`Hundkatzenschweinereien vorgestellt- die besten Schweinereien aus Berliner Garagen (Hundkatzenschweinereien inroduced - the best schweinereien out of Berlin's garages)`}</div>

    <div
    >{`Schwein oder nicht Schwein - die ethische Debatte (To pig oder not to pig - the ethical debate)`}</div>
  </div>
);

export default Home;
