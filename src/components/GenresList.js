import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api/Categories';

const GenresList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Géneros</h2>
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4 mb-4" key={category}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresList;
