import React, { useEffect } from "react";
import styles from '../styles/AboutStyles.module.css';

const About = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(`.${styles["about-section"]}`);
        const handleScroll = () => {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100) {
                    section.classList.add(styles["fade-in"]);
                }
            });
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles["about-container"]} aria-label="Sección Acerca de Nosotros">
            <header className={styles["about-hero"]}>
                <h1>Acerca de nosotros</h1>
                <p>Compromiso con la elegancia y la calidad para todos.</p>
            </header>

            <article className={styles["about-content"]}>
                <section className={styles["about-section"]} aria-label="Nuestra Misión">
                    <h2 className={styles["about-title"]}>Nuestra Misión</h2>
                    <p className={styles["about-text"]}>En Aleska, buscamos ofrecer productos de alta calidad que resalten la personalidad y estilo de cada cliente, asegurándonos de que la elegancia sea accesible para todos.</p>
                </section>

                <section className={styles["about-section"]} aria-label="Nuestra Visión">
                    <h2 className={styles["about-title"]}>Nuestra Visión</h2>
                    <p className={styles["about-text"]}>Queremos ser líderes en el mercado de la moda, promoviendo prácticas sostenibles y transformando la industria hacia un modelo inclusivo y consciente del medio ambiente.</p>
                </section>

                <section className={styles["about-section"]} aria-label="Nuestros Valores">
                    <h2 className={styles["about-title"]}>Nuestros valores</h2>
                    <ul className={styles["about-list"]}>
                        <li><strong>Calidad:</strong> Productos cuidadosamente seleccionados para garantizar la mejor calidad.</li>
                        <li><strong>Sostenibilidad:</strong> Comprometidos con el cuidado del medio ambiente.</li>
                        <li><strong>Inclusión:</strong> Moda para todos, sin excepciones.</li>
                        <li><strong>Transparencia:</strong> Relaciones honestas y abiertas con nuestros clientes.</li>
                    </ul>
                </section>
            </article>
        </section>
    );
};

export default About;
