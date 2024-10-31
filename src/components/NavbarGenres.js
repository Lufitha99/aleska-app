import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api/Categories'; // Asegúrate de que esta función esté en el archivo correcto

const CategoriesNav = ({ selectedCategory, setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        const data = await getAllCategories();
        setCategories(data);
        console.log('Categorías establecidas en el estado:', data); // Agrega esto
      };
      fetchCategories();
    }, []);

  return (
    <nav className="nav flex-column">
      <button 
        className={`nav-link ${selectedCategory === 'all' ? 'active' : ''}`} 
        onClick={() => setSelectedCategory('all')}
      >
        All
      </button>
      {categories.map((category) => (
        <button 
          key={category} 
          className={`nav-link ${selectedCategory === category ? 'active' : ''}`} 
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoriesNav;


// import React, { useEffect, useState } from 'react';
// import { getAllCategories } from '../api/Categories'; // Asegúrate de que esta función esté en el archivo correcto

// const CategoriesNav = ({ selectedCategory, setSelectedCategory, isLoggedIn, userId, userName }) => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const data = await getAllCategories();
//       setCategories(data);
//       console.log('Categorías establecidas en el estado:', data); // Agrega esto
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <nav className="nav flex-column">
//       {isLoggedIn ? (
//         <>
//           <span className="nav-link">Hola, {userName}</span>
//           <button 
//             className="nav-link" 
//             onClick={() => {/* Aquí puedes manejar la navegación a Home */}}
//           >
//             Home
//           </button>
//           <button 
//             className="nav-link" 
//             onClick={() => {/* Aquí puedes manejar la navegación a ReviewsList con el userId */}}
//           >
//             Mis Reseñas
//           </button>
//         </>
//       ) : (
//         <>
//           <button 
//             className={`nav-link ${selectedCategory === 'all' ? 'active' : ''}`} 
//             onClick={() => setSelectedCategory('all')}
//           >
//             All
//           </button>
//           {categories.map((category) => (
//             <button 
//               key={category} 
//               className={`nav-link ${selectedCategory === category ? 'active' : ''}`} 
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </>
//       )}
//     </nav>
//   );
// };

// export default CategoriesNav;
