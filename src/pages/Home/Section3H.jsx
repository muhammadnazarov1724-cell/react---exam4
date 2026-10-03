import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Section3H() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Запрос ТОЛЬКО к брендам
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/brands');
        setBrands(response.data);
      } catch (err) {
        console.error('Ошибка при загрузке брендов:', err);
        setError('Не удалось загрузить бренды');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (brand) => {
    const brandId = brand.id || brand.name || brand.title;
    navigate(`/brand`);
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Загрузка брендов...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;


  return (
    <div className="bg-[#f4f4f4] rounded-2xl p-6 md:p-8 my-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-[1200px] m-auto">
        
        {/* ЛЕВАЯ ЧАСТЬ: Список брендов из db.json (7 колонок из 12) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-2">
          {brands.map((brand, index) => {
            const brandName = brand.name || brand.title || brand.brand;
            const brandLogo = brand.image || brand.logo || brand.icon || brand.img;

            return (
              <div
                key={brand.id || index}
                onClick={() => handleBrandClick(brand)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacit border border-[#ccc] p-[7px_20px] rounded-[10px] hover:border-[#CA0100]"
              >
                {brandLogo && (
                  <img
                    src={brandLogo}
                    className="w-6 h-6 object-contain shrink-0"
                  />
                )}
                <span className="text-xs font-medium text-gray-800 truncate">
                  {brandName}
                </span>
              </div>
            );
          })}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Пустое место для будущей фильтрации (5 колонок из 12) */}
        <div className="lg:col-span-5 min-h-[250px]">
          {/* Место для фильтра */}
        </div>

      </div>
    </div>
  );
}