import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllProducts, getProductsByCategory } from "../api/Products";
import SearchBar from "./SearchBar";
import styles from "../styles/ProductList.module.css";

const ProductsList = ({ setFavorites, favorites,userId, addToCart  }) => {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [message, setMessage] = useState(""); 
  const [showMessage, setShowMessage] = useState(false); 
  const [cartItems, setCartItems] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      let data;
      if (!categoryName || categoryName === "all") {
        data = await getAllProducts();
      } else {
        data = await getProductsByCategory(categoryName);
      }
      setProducts(data);
      setDisplayedProducts(data);
      setCurrentPage(0);
    };

    fetchProducts();
  }, [categoryName]);

  const handleSearchResults = (filteredProducts) => {
    setDisplayedProducts(filteredProducts);
    setCurrentPage(0);
  };

  const paginatedProducts = 
    !categoryName || categoryName === "all"
      ? displayedProducts.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        )
      : displayedProducts;

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < displayedProducts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === product.id)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMessage(`"${product.title}" ha sido añadido a favoritos.`);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); 
        return [...prevFavorites, product];
      }
      return prevFavorites; 
    });
  };
  const handleAddProductToCart = (product) => {
    if (userId) {
      addToCart(product); 
      setCartItems((prevItems) => [...prevItems, product]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMessage(`"${product.title}" ha sido añadido al carrito.`);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); 
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMessage("Debes estar logueado para agregar productos al carrito.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); 
    }
  };

  return (
    <div className={`${styles.containerProduct} mt-5 text-center`}>
      <SearchBar products={products} onSearchResults={handleSearchResults} favorites={favorites.length} userId={userId} cartItemsCount={cartItems.length} />
      
  
      {showMessage && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      
      <div className="row">
        {paginatedProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className={`card h-100 product-container ${styles.card}`}>
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top product-image"
                />
                <Link to={`/product/${product.id}/${product.category}`}>
                  <button
                    className={`btn m-2 ${styles.btnDetail}`}
                    title="Detail"
                  >
                    <i
                      className="fas fa-eye"
                      style={{ fontSize: "x-large", color: "white" }}
                    ></i>
                  </button>
                </Link>
                <button
                  className={`btn m-2 ${styles.btnFavorite}`}
                  title="Add Favorites"
                  onClick={() => handleAddToFavorites(product)}
                >
                  <i
                    className="fa-solid fa-heart"
                    style={{ fontSize: "x-large", color: "black" }}
                  ></i>
                </button>
                <button className={`btn m-2 ${styles.btnCart}`} title="Add to Cart" onClick={() => handleAddProductToCart(product)}>
                  <i className="fa-solid fa-shopping-cart" style={{ fontSize: "x-large", color: "black" }}></i>
                </button>
              </div>
              <div className="card-body">
                <h5 className={`card-title ${styles.title}`}>{product.title}</h5>
                <p className={`card-text ${styles.price}`}>Precio: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(!categoryName || categoryName === "all") && (
        <div className={styles["button-container"]}>
          <button className={`btn btn-dark m-2 ${styles.btnBottom}`} onClick={handlePrevious} disabled={currentPage === 0}>
            Anterior
          </button>
          <button
            className={`btn btn-dark m-2 ${styles.btnBottom}`}
            onClick={handleNext}
            disabled={(currentPage + 1) * itemsPerPage >= displayedProducts.length}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
