import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About=()=>{
    return <section className={styles.container}>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")}alt="Me sitting with a laptop"/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor-Icon"/>
                    <div>
                        <h3 >Front-end Developer</h3>
                        <p >I'm a front-end developer skilled in HTML, CSS, React, and Bootstrap, with a focus on creating responsive and user-friendly web applications. My expertise lies in building dynamic interfaces that enhance the user experience.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server-Icon"/>
                    <div>
                        <h3 >Back-end Developer</h3>
                        <p >As a back-end developer with expertise in MySQL Server and REST APIs, my focus is on optimizing data handling and ensuring seamless integration between front-end and back-end systems.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};
