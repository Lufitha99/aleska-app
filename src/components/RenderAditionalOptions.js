import React, { useState } from 'react';
import styles from '../styles/RenderAditionalOptions.module.css'

const RenderAdditionalOptions = ({ category }) => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionClick = (categoryKey, option) => {
    setSelectedOption(prev => ({ ...prev, [categoryKey]: option }));
  };

  return (
    <>
      {category === "jewelery" && (
        <>
          <div className="form-group my-3">
            <label><strong>Material:</strong></label>
            <div className={styles.optionGroup}>
              {['Oro', 'Plata', 'Platino', 'Acero inoxidable'].map((material) => (
                <button
                  key={material}
                  className={`${styles.optionButton} ${selectedOption['material'] === material ? styles.selected : ''}`}
                  onClick={() => handleOptionClick('material', material)}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Tipo de piedra:</strong></label>
            <div className={styles.optionGroup}>
              {['Diamante', 'Rubí', 'Esmeralda', 'Zafiro', 'Perla'].map((piedra) => (
                <button
                  key={piedra}
                  className={`${styles.optionButton} ${selectedOption['piedra'] === piedra ? styles.selected : ''}`}
                  onClick={() => handleOptionClick('piedra', piedra)}
                >
                  {piedra}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {category === "electronics" && (
        <>
          <div className="form-group my-3">
            <label><strong>Capacidad de almacenamiento:</strong></label>
            <div className={styles.optionGroup}>
              {['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'].map((storage) => (
                <button
                  key={storage}
                  className={`${styles.optionButton} ${selectedOption['storage'] === storage ? styles.selected : ''}`}
                  onClick={() => handleOptionClick('storage', storage)}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Color:</strong></label>
            <div className={styles.colorGroup}>
              {['black', 'white', 'gray', 'blue', 'gold'].map((color) => (
                <button
                  key={color}
                  className={`${styles.colorCircle} ${selectedOption['color'] === color ? styles.selected : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleOptionClick('color', color)}
                />
              ))}
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Tamaño de pantalla:</strong></label>
            <div className={styles.optionGroup}>
              {['5"', '6.1"', '10"', '13"', '15"'].map((size) => (
                <button
                  key={size}
                  className={`${styles.optionButton} ${selectedOption['screenSize'] === size ? styles.selected : ''}`}
                  onClick={() => handleOptionClick('screenSize', size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {(category === "men's clothing" || category === "women's clothing") && (
        <>
          <div className="form-group my-3">
            <label><strong>Talla:</strong></label>
            <div className={styles.optionGroup}>
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`${styles.optionButton} ${selectedOption['size'] === size ? styles.selected : ''}`}
                  onClick={() => handleOptionClick('size', size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group my-3">
            <label><strong>Color:</strong></label>
            <div className={styles.colorGroup}>
              {['black', 'white', 'gray', 'blue', 'gold'].map((color) => (
                <button
                  key={color}
                  className={`${styles.colorCircle} ${selectedOption['color'] === color ? styles.selected : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleOptionClick('color', color)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RenderAdditionalOptions;
