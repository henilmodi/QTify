// src/components/Hero/Hero.jsx
import React from "react";
import styles from "./hero.module.css";
import heroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands podcast episodes</h2>
      </div>

      <div className={styles.imageContainer}>
        <img src={heroImage} alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;
