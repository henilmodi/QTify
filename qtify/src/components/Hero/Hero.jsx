// src/components/Hero/Hero.jsx
import React from "react";
import styles from "./hero.module.css";
import heroImage from "../../assets/hero.svg";

const Hero = () => {
  return (
    <section className={styles.hero} data-testid="hero-section">
      <div className={styles.textContainer}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>

      <div className={styles.imageContainer}>
        <img src={heroImage} alt="headphones" />
      </div>
    </section>
  );
};

export default Hero;
