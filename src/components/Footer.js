import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.infoSection}>
          <h2 style={styles.title}>Aleska Store</h2>
          <p style={styles.contactItem}>
            <i className="fas fa-map-marker-alt" style={styles.icon}></i>
            Avenida de la Moda, 456, Ciudad de Estilo, California, 90210, Estados Unidos
          </p>
          <p style={styles.contactItem}>
            <i className="fas fa-phone" style={styles.icon}></i>
            +1 (555) 987-6543
          </p>
          <p style={styles.contactItem}>
            <i className="fas fa-envelope" style={styles.icon}></i>
            contacto@aleskastore.com
          </p>
        </div>
      <div style={styles.horarioSection}>
      <h2 style={styles.title}>Síguenos</h2>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" style={styles.icon}></i>
            </a>
            <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" style={styles.icon}></i>
            </a>
            <a href="https://instagram.com" style={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={styles.icon}></i>
            </a>
          </div>
        </div>
        <div style={styles.socialSection}>
        <h2 style={styles.title}>Horario de Atención</h2>
        <p style={styles.horarioInfo}>
          Lunes a Viernes: 9:00 AM - 6:00 PM<br />
          Sábado: 10:00 AM - 4:00 PM<br />
          Domingo: Cerrado
        </p>
      </div>


        
      </div>

      <p style={styles.copyRight}>© 2024 Aleska Store. Todos los derechos reservados.</p>
    </footer>
  );
}

// Estilos
const styles = {
    footer: {
      backgroundColor: "black",
      color: "white",
      padding: "20px",
      textAlign: "center",
      position: "relative",
      bottom: 0,
      width: "100%",
    },
    container: {
      display: "flex",
      flexDirection: "nowrap", 
      alignItems: "center", 
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    infoSection: {
      flex: "1 1 300px",
      margin: "10px",
      textAlign: "left", 
    },
    socialSection: {
      flex: "1 1 300px",
      margin: "10px",
      textAlign: "center", 
    },
    horarioSection: {
      flex: "1 1 300px",
      margin: "10px",
      textAlign: "center", 
    },
    title: {
      fontFamily: "'Abril Fatface', sans-serif",
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
    contactItem: {
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
    },
    link: {
      color: "white",
      margin: "0 10px",
      textDecoration: "none",
      fontSize: "1.5rem",
    },
    icon: {
      marginRight: "8px",
    },
    copyRight: {
      marginTop: "20px",
      fontSize: "0.9rem",
    },
    horarioInfo: {
      margin: "10px 0",
    },
  };
  
export default Footer;
