import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Section2B() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchToyotaModels = async () => {
      try {
        setLoading(true);
        // GET-запрос к бэкенду
        const response = await axios.get('http://localhost:3001/models');

        // Фильтруем данные, оставляя только Toyota
        const toyotaCars = response.data.filter(
          (car) => car.brandId?.toLowerCase() === 'toyota'
        );

        setModels(toyotaCars);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToyotaModels();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-sans">Загрузка...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 font-sans">
      {models.map((car) => {

        const benefit = car.oldPrice && car.price ? car.oldPrice - car.price : null;

        return (
          <div
            key={car.id}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="w-full lg:w-1/3 flex flex-col items-center relative">

              <div className="absolute top-0 left-0 flex items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer text-xs font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>0</span>
              </div>

              {/* Изображение авто */}
              <div className="h-30 flex items-center justify-center my-2">
                {car.image && (
                  <img
                    src={car.image}
                    className="max-h-full object-contain"
                  />
                )}
              </div>

              {/* Точки цветов */}
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2.5 h-2.5 rounded-full border border-gray-300 bg-white"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-900"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
              </div>
            </div>

            {/* 2. Название, Наличие и Скидки с чекбоксами */}
            <div className="w-full lg:w-1/4 space-y-2">
              <h3 className="text-xl font-bold text-gray-900">
                {car.name}
              </h3>

              {car.inStock !== undefined && (
                <div className="text-xs text-gray-500 font-medium">
                  В наличии: <span className="text-red-600 font-bold">{car.inStock} авто</span>
                </div>
              )}

              {car.discounts && (
                <div className="space-y-1.5 pt-2 text-xs">
                  {car.discounts.tradeIn && (
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold min-w-[32px] text-right">{car.discounts.tradeIn}</span>
                      <span className="w-4 h-4 bg-red-600 text-white rounded flex items-center justify-center text-[10px] shrink-0">✓</span>
                      <span className="text-gray-700 font-medium">Покупка в трейд-ин</span>
                    </div>
                  )}
                  {car.discounts.credit && (
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold min-w-[32px] text-right">{car.discounts.credit}</span>
                      <span className="w-4 h-4 bg-red-600 text-white rounded flex items-center justify-center text-[10px] shrink-0">✓</span>
                      <span className="text-gray-700 font-medium">Кредит</span>
                    </div>
                  )}
                  {car.discounts.sale && (
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold min-w-[32px] text-right">{car.discounts.sale}</span>
                      <span className="w-4 h-4 bg-red-600 text-white rounded flex items-center justify-center text-[10px] shrink-0">✓</span>
                      <span className="text-gray-700 font-medium">Распродажа</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 3. Подарки с круглыми иконками */}
            <div className="w-full lg:w-1/4 space-y-3">
              {car.gifts && car.gifts.map((gift, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${idx === 1 ? 'bg-red-600' : 'bg-gray-700'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm-7 4h14v11H5V12z" />
                    </svg>
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="text-gray-700 font-medium">{gift}</div>
                    <div className="text-red-600 font-medium">в подарок</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Цены и Блок кнопок */}
            <div className="w-full lg:w-1/3 flex flex-col items-end justify-center space-y-3">
              <div className="text-right">
                {benefit && benefit > 0 && (
                  <div className="text-xs font-bold text-red-600">
                    Выгода до {benefit.toLocaleString('ru-RU')} ₽
                  </div>
                )}
                <div className="flex items-baseline gap-2 justify-end">
                  {car.price && (
                    <span className="text-2xl font-black text-gray-900">
                      от {car.price.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                  {car.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {car.oldPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                </div>
              </div>

              {/* Кнопки со скошенными краями */}
              <div className="flex items-center w-full max-w-md rounded-lg overflow-hidden text-[11px] font-bold text-white uppercase text-center shadow">
                <button className="flex-1 py-3 px-2 bg-red-600 hover:bg-red-700 transition-colors [clip-path:polygon(0_0,92%_0,100%_100%,0_100%)]">
                  Купить <br /> со скидкой
                </button>
                <button className="flex-1 py-3 px-2 bg-zinc-800 hover:bg-zinc-900 transition-colors -ml-3 [clip-path:polygon(8%_0,92%_0,100%_100%,0_100%)]">
                  Рассчитать <br /> кредит
                </button>
                <button className="flex-1 py-3 px-2 bg-gray-500 hover:bg-gray-600 transition-colors -ml-3 [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]"
                onClick={()=> navigate('/model')}
                >
                  Подробнее <br /> о модели
                </button>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}