import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import taxi from '../../assets/taxi.png'

export default function Section2T() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('economy');

  // Массив карточек
  const cars = [
    {
      id: 'lada-granta-1',
      name: 'Lada Granta Liftback New 1.6 MT Comfort',
      oldPrice: '221 100',
      pricePerDay: '82',
      image: taxi,
      class: 'economy'
    },
    {
      id: 'lada-granta-2',
      name: 'Lada Granta Liftback New 1.6 MT Comfort',
      oldPrice: '221 100',
      pricePerDay: '82',
      image: taxi,
      class: 'economy'
    },
    {
      id: 'lada-granta-3',
      name: 'Lada Granta Liftback New 1.6 MT Comfort',
      oldPrice: '221 100',
      pricePerDay: '82',
      image: taxi,
      class: 'economy'
    },
    {
      id: 'lada-granta-4',
      name: 'Lada Granta Liftback New 1.6 MT Comfort',
      oldPrice: '221 100',
      pricePerDay: '82',
      image: taxi,
      class: 'economy'
    },
    {
      id: 'lada-granta-5',
      name: 'Lada Granta Liftback New 1.6 MT Comfort',
      oldPrice: '221 100',
      pricePerDay: '82',
      image: taxi,
      class: 'economy'
    },
    {
      id: 'lada-granta-6',
      name: 'Lada Granta Liftback New 1.6 MT Comfort',
      oldPrice: '221 100',
      pricePerDay: '82',
      image: taxi,
      class: 'economy'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-sans">
      
      {/* 1. ЗАГОЛОВОК С КЛЕТЧАТОЙ ЛЕНТОЙ ТАКСИ */}
      <div className="flex items-center justify-between gap-4 mb-8">
        {/* Левая шахматка */}
        <div className="hidden sm:block flex-1 h-6 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#facc15_10px,#facc15_20px)] rounded" />
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-900 shrink-0">
          {t('taxi_cars.section_title')}
        </h2>
        
        {/* Правая шахматка */}
        <div className="hidden sm:block flex-1 h-6 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#facc15_10px,#facc15_20px)] rounded" />
      </div>

      {/* 2. ПАНЕЛЬ ФИЛЬТРОВ И ВЫБОРА КЛАССА */}
      <div className="bg-gray-100/80 rounded-2xl p-4 mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Табы классов */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="text-xs sm:text-sm font-semibold text-gray-500 mr-2 w-full sm:w-auto">
            {t('taxi_cars.class_label')}
          </span>
          
          <button
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'economy'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t('taxi_cars.class_economy')}
          </button>

          <button
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'comfort'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t('taxi_cars.class_comfort')}
          </button>

          <button
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
              activeTab === 'comfort_plus'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t('taxi_cars.class_comfort_plus')}
          </button>
        </div>

        {/* Селекты Марка / Модель */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <select className="w-1/2 lg:w-40 bg-white border border-gray-200 text-gray-700 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none">
            <option>{t('taxi_cars.select_brand')}</option>
          </select>
          <select className="w-1/2 lg:w-40 bg-white border border-gray-200 text-gray-700 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none">
            <option>{t('taxi_cars.select_model')}</option>
          </select>
        </div>
      </div>

      {/* 3. СЕТКА КАРТОЧЕК (АДАПТИВНАЯ: 1 на моб, 2 на планшете, 3 на ПК) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => {

          return (
            <div
              key={car.id}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              {/* Верхняя панель: Избранное и Лейбл класса */}
              <div className="flex justify-between items-center mb-2">
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <svg
                    className={'w-5 h-5'}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase">
                  {t('taxi_cars.badge_economy')}
                </span>
              </div>

              <div className="my-2 flex justify-center">
                <img
                  src={car.image}
                  className="h-32 sm:h-36 object-contain"
                />
              </div>

              {/* Название и цены */}
              <div className="text-center space-y-1 mb-4">
                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug px-2">
                  {car.name}
                </h3>
                <div className="text-xs text-gray-400 line-through font-medium">
                  {t('taxi_cars.old_price_from', { price: car.oldPrice })}
                </div>
                <div className="text-xl sm:text-2xl font-black text-gray-900">
                  {t('taxi_cars.price_per_day', { price: car.pricePerDay })}
                </div>
              </div>

              {/* Список преимуществ */}
              <div className="space-y-2 mb-6 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    🎁
                  </div>
                  <span>{t('taxi_cars.feature_gbo')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    🎁
                  </div>
                  <span>{t('taxi_cars.feature_wrap')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    🎁
                  </div>
                  <span>{t('taxi_cars.feature_tires')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    🎁
                  </div>
                  <span>{t('taxi_cars.feature_credit')}</span>
                </div>
              </div>

              {/* Кнопки */}
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <button
                  type="button"
                  onClick={() => navigate(`/car/${car.id}`, { state: { car } })}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer"
                >
                  {t('taxi_cars.btn_more')}
                </button>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-3 rounded-xl transition-colors uppercase cursor-pointer"
                >
                  {t('taxi_cars.btn_request')}
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}