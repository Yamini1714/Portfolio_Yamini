import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yamini</h1>
        <p className={styles.description}>
        A skilled Full Stack Developer with expertise in React for front-end development and Spring Boot for back-end solutions. Passionate about building dynamic and efficient web applications, combining modern technologies to deliver robust user experiences
        </p>
        <div className={styles.buttonGroup}>
         <a href="mailto:myamini2020@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        

        </div>
       
        
      </div>
      <img
        src={getImageUrl("../heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};