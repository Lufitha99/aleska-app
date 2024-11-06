import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/Products";
import styles from "../styles/ProductDetail.module.css";
 import ProductActions from "./ProductActions";
import Swal from 'sweetalert2'; // Asegúrate de haber instalado sweetalert2

const ProductDetail = ({ addToCart, userId }) => {
  const { id, category } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(""); // Estado para el mensaje
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, category]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === "") return;

    setReviews([
      {
        text: reviewText,
        rating: userRating,
        image: reviewImage,
        date: new Date(),
        likes: 0,
        dislikes: 0,
      },
      ...reviews,
    ]);

    setReviewText("");
    setUserRating(0);
    setReviewImage(null);
  };

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setReviewImage(imageUrl);
    }
  };

  const handleReaction = (index, type) => {
    setReviews(reviews.map((review, i) => (
      i === index ? { ...review, [type]: review[type] + 1 } : review
    )));
  };
  const handleAddProductToCart = (product) => {
    if (userId) {
      setCartItems((prevItems) => {
        const updatedCartItems = [...prevItems, product];
        console.log("Cantidad de productos en el carrito:", updatedCartItems.length); // Muestra la cantidad de productos en consola
        return updatedCartItems;
      });
      setMessage(`"${product.title}" ha sido añadido al carrito.`);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); 
    } else {
      setMessage("Debes estar logueado para agregar productos al carrito.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); 
    }
  };
  const handlePayment = async () => {
    await Swal.fire({
      title: 'Pago Confirmado',
      text: 'Los productos llegarán en 7 días hábiles.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });

  };
  // Muestra opciones adicionales según la categoría del producto
  const renderAdditionalOptions = () => {
    if (category === "jewelery") {
      return (
        <>
          <div className="form-group my-3">
            <label><strong>Material:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>Oro</button>
              <button className={styles.optionButton}>Plata</button>
              <button className={styles.optionButton}>Platino</button>
              <button className={styles.optionButton}>Acero inoxidable</button>
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Tipo de piedra:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>Diamante</button>
              <button className={styles.optionButton}>Rubí</button>
              <button className={styles.optionButton}>Esmeralda</button>
              <button className={styles.optionButton}>Zafiro</button>
              <button className={styles.optionButton}>Perla</button>
            </div>
          </div>
        </>
      );
    }
    if (category === "electronics") {
      return (
        <>
          <div className="form-group my-3">
            <label><strong>Capacidad de almacenamiento:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>64 GB</button>
              <button className={styles.optionButton}>128 GB</button>
              <button className={styles.optionButton}>256 GB</button>
              <button className={styles.optionButton}>512 GB</button>
              <button className={styles.optionButton}>1 TB</button>
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Color:</strong></label>
            <div className={styles.colorGroup}>
              <button className={styles.colorCircle} style={{ backgroundColor: 'black' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'white' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'gray' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'blue' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'gold' }}></button>
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Tamaño de pantalla:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>5"</button>
              <button className={styles.optionButton}>6.1"</button>
              <button className={styles.optionButton}>10"</button>
              <button className={styles.optionButton}>13"</button>
              <button className={styles.optionButton}>15"</button>
            </div>
          </div>
        </>
      );
    }
    if (category === "men's clothing" || category === "women's clothing") {
      return (
        <>
          <div className="form-group my-3">
            <label><strong>Talla:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>S</button>
              <button className={styles.optionButton}>M</button>
              <button className={styles.optionButton}>L</button>
              <button className={styles.optionButton}>XL</button>
              <button className={styles.optionButton}>XXL</button>
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Color:</strong></label>
            <div className={styles.colorGroup}>
              <button className={styles.colorCircle} style={{ backgroundColor: 'black' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'white' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'gray' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'blue' }}></button>
              <button className={styles.colorCircle} style={{ backgroundColor: 'gold' }}></button>
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Material:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>Algodón</button>
              <button className={styles.optionButton}>Poliéster</button>
              <button className={styles.optionButton}>Lana</button>
              <button className={styles.optionButton}>Mezcla de algodón</button>
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Estilo:</strong></label>
            <div className={styles.optionGroup}>
              <button className={styles.optionButton}>Casual</button>
              <button className={styles.optionButton}>Deportivo</button>
              <button className={styles.optionButton}>Formal</button>
            </div>
          </div>
        </>
      );
    }
    return null;
  };
 
  if (loading) return <p>Cargando detalles...</p>;
  if (!product) return <p>No se encontró el producto.</p>;
 
  return (
    <div className={styles.container}>
      <div className="row">
      <ProductActions userId={userId} cartItemsCount={cartItems.length} />

      {showMessage && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
        <div className="col-md-6">
          <h2 className={styles.titleProduct}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.rating}>
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
            <span> ({product.rating.count} opiniones)</span>
          </div>
          <p className={styles.description}><strong>Descripción:</strong> {product.description}</p>
          
         
          {/* Sección de opciones adicionales */}
          {renderAdditionalOptions()}
 
          {/* Información adicional que solicitaste */}
          <p>Categoría: {category}</p>
         
          <button
        className={styles.button}
        onClick={handlePayment}
      >
        Comprar
      </button>
          <button className={styles.button} onClick={() => handleAddProductToCart(product)}>Añadir al carrito</button>
        </div>
      </div>
 
      <div className="mt-5">
        <h3>Opiniones de Usuarios</h3>
        {userId && (
        <form onSubmit={handleReviewSubmit} className="mb-4">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Escribe tu opinión..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>
         
          <div className="form-group" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="mr-2">Califica:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= userRating ? styles.starFilled : styles.starEmpty}
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="file"
                className={styles.customFileInput}
                onChange={handleImageChange}
              />
              <button
                type="button"
                className={styles.button}
                onClick={() => document.querySelector(`input[type='file']`).click()}
              >
                <i className="fa-solid fa-paperclip"></i>
              </button>
              <button type="submit" className={styles.button}>Enviar</button>
            </div>
          </div>
          
        </form>
        )}
  {!userId && <p>Inicia sesión para dejar una reseña.</p>}
        <div>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <p>{review.text}</p>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, star) => (
                    <span key={star} className={star < review.rating ? styles.starFilled : styles.starEmpty}>★</span>
                  ))}
                </div>
                {review.image && (
                  <img src={review.image} alt="Reseña" className={styles.reviewImage} />
                )}
                <small>{review.date.toLocaleString()}</small>
                <div className="d-flex mt-2">
                  <button onClick={() => handleReaction(index, "likes")} className={styles.reactionButton}>
                  <i className="fa-solid fa-thumbs-up"></i> {review.likes}
                  </button>
                  <button onClick={() => handleReaction(index, "dislikes")} className={styles.reactionButton}>
                  <i className="fa-solid fa-thumbs-down"></i> {review.dislikes}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay opiniones aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};
 
export default ProductDetail;
 