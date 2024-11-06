// src/components/Contact.js
import React, { useEffect } from "react";
import styles from '../styles/ContactStyles.module.css';

const Contact = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(`.${styles["contact-section"]}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles["fade-in"]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles["contact-container"]} aria-label="Sección Contacto">
            <header className={styles["contact-hero"]}>
                <h1>Contáctanos</h1>
                <p>Estamos aquí para ayudarte con cualquier consulta.</p>
            </header>

            <article className={styles["contact-content"]}>
                 
                <section className={styles["contact-section"]} aria-label="Información de Contacto">
                    <h2 className={styles["contact-title"]}>Información de Contacto</h2>
                    <p className={styles["contact-text"]}>Puedes comunicarte con Aleska Store a través de los siguientes medios:</p>
                    <ul className={styles["contact-list"]}>
                        <li><strong>Dirección:</strong> </li>
                        <li>Avenida de la moda 456, ciudad de Estilo, estado California</li>
                        <li><strong>Codigo Postal:</strong> </li>
                        <li>90210</li>
                        <li><strong>Telefono:</strong> </li>
                        <li>+1 (555) 987 6543</li>
                        <li><strong>Correo Electronico:</strong> </li>
                        <li>contacto@aleskastore.com</li>
                        <li><strong>horarios de atencion:</strong> </li>
                        <li>Lunes a Viernes: 9:00 AM-600 PM</li>
                        <li> Sabados: 10:00 AM-4:00 PM</li>
                        <li> Domingos: Cerrado</li>
                        
                    </ul>
                </section>

               
            </article>
        </section>
    );
};

export default Contact;