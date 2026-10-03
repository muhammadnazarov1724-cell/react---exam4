import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from '../../components/CarCard';

export default function Section2H() {
  const [models, setModels] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Состояние для избранного (считываем из localStorage)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Авто-сохранение при клике
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // 3. Функция переключения сердечка
  const toggleFavorite = (carId) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:3001/models');
        setModels(response.data);
      } catch (err) {
        console.error('Ошибка при загрузке данных:', err);
        setError('Не удалось загрузить автомобили');
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  const toggleShow = () => {
    try {
      setIsExpanded((prev) => !prev);
    } catch (err) {
      console.error('Ошибка при переключении:', err);
    }
  };

  const visibleModels = isExpanded ? models : models.slice(0, 6);

  if (loading) return <div className="text-center p-8">Загрузка...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleModels.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      {/* Кнопка скрыть/показать ещё — твой оригинальный дизайн */}
      {models.length > 6 && (
        <div className="text-center mt-8">
          <button 
            onClick={toggleShow}
            className="w-full sm:w-auto px-8 py-3 bg-[#2b2b2b] text-white font-bold rounded-lg hover:bg-black transition-colors"
          >
            {isExpanded ? 'Скрыть' : 'Показать ещё'}
          </button>
        </div>
      )}
    </div>
  );
}