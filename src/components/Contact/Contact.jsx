import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myamini2020@gmail.com">myamini2020@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/m-yamini1708">linkedin.com/m-yamini1708</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Yamini1714">github.com/Yamini1714</a>
        </li>
      </ul>
    </footer>
  );
};
