import React from 'react';
// import styles from './Home.module.scss';
import Support from '../Support/Support';
import Card from '../Card/Card';
import ClientUse from '../ClientUse/ClientUse';
import GrowBusiness from '../GrowBusiness/GrowBusiness';
import HeroSection from '../HeroSection/HeroSection';
import RealTimeCollaboration from '../RealTimeCollaboration/RealTimeCollaboration';
import HomeJob from '../HomeJob/HomeJob';

export default function Home() {
  return (
    <>
      {/* <h1 className={styles.header}>Static Routes</h1>
      <p>Home</p> */}
      <GrowBusiness />
      <RealTimeCollaboration />
      <HomeJob />
      <HeroSection />
      <Card />
      <ClientUse />
      <Support />
    </>
  );
}
