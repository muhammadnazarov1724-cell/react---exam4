import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CarCard({ car, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();

  // Расчет выгоды: если есть oldPrice и price, вычитаем
  const benefit = car.oldPrice && car.price ? car.oldPrice - car.price : null;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col justify-between font-sans w-full max-w-sm sm:max-w-none mx-auto transition-all hover:shadow-lg">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="m-0 text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">
              {car.name}
            </h3>
            <span className="text-sm sm:text-base text-gray-600 font-semibold block mt-0.5">
              1.6 MPI MT Active
            </span>
          </div>

          {/* ИКОНКИ ИЗБРАННОГО И СРАВНЕНИЯ */} 
          <div className="flex items-center gap-2 text-gray-400 text-lg cursor-pointer">
            <button
              type="button"
              onClick={() => onToggleFavorite(car.id)}
              className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer border-none bg-transparent p-0"
            >
              <svg
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? 'text-red-600 fill-red-600' : 'text-gray-400 fill-none'
                }`}
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
              <span className={`text-xs font-semibold ${isFavorite ? 'text-red-600' : 'text-gray-400'}`}>
                {isFavorite ? 1 : 0}
              </span>
            </button>
            <span className="hover:text-gray-700 transition-colors">📊</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 flex-wrap gap-1">
          <span className="bg-[#d91b1b] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
            Предложение дня
          </span>
          {benefit && (
            <span className="text-[#d91b1b] text-[11px] sm:text-xs font-bold">
              Выгода до {benefit.toLocaleString()} ₽
            </span>
          )}
        </div>

        <div className="flex items-center mt-4 min-h-[120px] sm:min-h-[130px] relative">
          <div className="flex flex-col gap-2 z-10 min-w-[100px] sm:min-w-[110px]">
            {car.gifts && car.gifts.map((gift, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div className="bg-gray-900 text-white rounded-full w-5 h-5 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] shrink-0">
                  🎁
                </div>
                <span className="text-[10px] sm:text-xs text-gray-700 leading-tight">
                  {gift}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src={car.image}
              className="w-full max-h-28 sm:max-h-32 object-contain"
            />
          </div>
        </div>

        {/* ЦЕНА И КРЕДИТ */}
        <div className="flex items-baseline justify-between mt-4 mb-3">
          <span className="text-lg sm:text-xl font-black text-gray-900">
            от {car.price ? car.price.toLocaleString() : '1 615 000'} ₽
          </span>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            Кредит <strong className="text-gray-900 font-bold">от {car.creditPrice || '115 000'} ₽/мес.</strong>
          </span>
        </div>

        {/* ХАРАКТЕРИСТИКИ (4 ОВАЛА) */}
        <div className="grid grid-cols-4 gap-1.5 text-[10px] sm:text-[11px] text-gray-800 font-bold">
          <div className="border border-gray-200 rounded-full px-1.5 py-1 flex items-center justify-center gap-1">
            <span>🏎️</span> {car.hp || '115'} л.с.
          </div>
          <div className="border border-gray-200 rounded-full px-1.5 py-1 flex items-center justify-center gap-1">
            <span>⛽</span> {car.consumption || '5.3'} л/км
          </div>
          <div className="border border-gray-200 rounded-full px-1.5 py-1 flex items-center justify-center gap-1">
            <span>⏲️</span> {car.maxSpeed || '18'} км/ч
          </div>
          <div className="border border-gray-200 rounded-full px-1.5 py-1 flex items-center justify-center gap-1">
            <span>⏱️</span> {car.acceleration || '10,3'} с.
          </div>
        </div>
      </div>

      {/* ТЕ САМЫЕ 3 КНОПКИ В САМОМ ВНИЗУ */}
      <div className="mt-5 flex w-full h-[46px] rounded-lg overflow-hidden text-xs sm:text-sm font-extrabold text-white">
        {/* Кнопка 1: Резерв онлайн */}
        <button
          type="button"
          className="flex-1 bg-[#D92D20] hover:bg-[#B82216] transition-colors flex items-center justify-center pr-2 cursor-pointer"
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
        >
          Резерв
        </button>

        {/* Кнопка 2: Купить */}
        <button
          type="button"
          className="flex-1 bg-[#22252A] hover:bg-black transition-colors flex items-center justify-center mx-[-12px] z-10 cursor-pointer"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}
        >
          Купить
        </button>

        {/* Кнопка 3: Подробнее */}
        <button
          type="button"
          onClick={() => navigate(`/car/${car.id}`, { state: { car } })}
            className="flex-1 bg-[#73777A] hover:bg-[#5C6063] transition-colors flex items-center justify-center pl-2 cursor-pointer"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}