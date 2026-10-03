import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from '../../components/CarCard';

export default function Favorites() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Получаем список ID из localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Синхронизируем с localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // 3. Загружаем все машины из db.json
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/models');
        setCars(response.data);
      } catch (err) {
        console.error('Ошибка при загрузке избранных машин:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Переключение сердечка прямо на странице избранного
  const toggleFavorite = (carId) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  // Фильтруем только те машины, чей id есть в favorites
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  if (loading) {
    return <div className="text-center p-8">Загрузка избранного...</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Избранные автомобили</h1>

      {favoriteCars.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          У вас пока нет добавленных в избранное автомобилей.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}