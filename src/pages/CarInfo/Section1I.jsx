import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Section1I() {
  const location = useLocation();
  const navigate = useNavigate();

  // Получаем объект автомобиля, переданный при клике из CarCard
  const clickedCar = location.state?.car;

  // Если вдруг страницу перезагрузили без state, задаем запасной вариант
  const car = {
    name: clickedCar?.name || 'Toyota Camry 2013',
    price: clickedCar?.price || 850000,
    creditPrice: clickedCar?.creditPrice || '12 000',
    image: clickedCar?.image || '',
    hp: clickedCar?.hp || '115',
    consumption: clickedCar?.consumption || '5.3',
    maxSpeed: clickedCar?.maxSpeed || '18',
    acceleration: clickedCar?.acceleration || '10,3',

    // Одинаковая (общая) информация для всех машин
    engine: '1.2 л',
    gearbox: 'Механика',
    drive: 'передний',
    body: 'седан',
    year: 2013,
    mileage: '1000 км',
  };

  const [isFav, setIsFav] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans space-y-6 mt-6">
      {/* Хлебные крошки */}
      <div className="text-xs text-gray-400 flex items-center gap-1">
        <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>
          Главная
        </span>
        <span>/</span>
        <span className="cursor-pointer hover:text-gray-600" onClick={() => navigate('/')}>
          Авто с пробегом
        </span>
        <span>/</span>
        <span className="text-gray-600 font-medium">{car.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ЛЕВАЯ ЧАСТЬ: Фотография из кликнутой карточки */}
        <div className="lg:col-span-7 space-y-3">
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[380px] flex items-center justify-center">
            {car.image ? (
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[380px] object-cover"
              />
            ) : (
              <div className="text-gray-400 text-sm">Нет изображения</div>
            )}

            {/* Иконки 360 и Избранное */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-xs font-bold text-gray-700">
                360°
              </button>
              <button
                onClick={() => setIsFav(!isFav)}
                className="w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-700"
              >
                <svg
                  className={`w-5 h-5 ${isFav ? 'text-red-600 fill-red-600' : 'text-gray-700 fill-none'}`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Галерея миниатюр (отображаем выбранное фото) */}
          {car.image && (
            <div className="flex gap-2">
              <div className="w-20 h-14 rounded-xl overflow-hidden border-2 border-red-600 shrink-0">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Динамические имя, цена + общие данные */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <h1 className="text-3xl font-black text-gray-900">{car.name}</h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span>Автомобиль сейчас смотрит 2 человека</span>
            </div>
          </div>

          {/* Характеристики с реальными данными карточки */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
            <span className="bg-gray-100 px-3 py-1.5 rounded-xl">⚙️ {car.engine}</span>
            <span className="bg-gray-100 px-3 py-1.5 rounded-xl">🚗 {car.hp} л.с.</span>
            <span className="bg-gray-100 px-3 py-1.5 rounded-xl">🕹️ {car.gearbox}</span>
            <span className="bg-gray-100 px-3 py-1.5 rounded-xl">📐 {car.drive}</span>
          </div>

          {/* Реальная цена из карточки */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-gray-900">
              {typeof car.price === 'number' ? car.price.toLocaleString('ru-RU') : car.price} ₽
            </span>
            <div className="text-xs text-gray-500">
              В кредит <br />
              <b className="text-gray-800">от {car.creditPrice} ₽/мес.</b>
            </div>
          </div>

          {/* Кнопки */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-red-600 text-white font-bold text-xs py-3.5 rounded-xl hover:bg-red-700 uppercase">
              Забронировать онлайн
            </button>
            <button className="bg-gray-100 text-gray-800 font-bold text-xs py-3.5 rounded-xl hover:bg-gray-200">
              Купить в кредит
            </button>
          </div>

          {/* Одинаковая информация для всех карточек */}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">🔄</div>
                <div>
                  <div className="font-semibold text-gray-900">Зачёт вашего</div>
                  <div className="text-gray-500 text-[11px]">авто в trade-in</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">%</div>
                <div>
                  <div className="font-semibold text-gray-900">Беспроцентная</div>
                  <div className="text-gray-500 text-[11px]">рассрочка 0%</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">🎁</div>
                <div>
                  <div className="font-semibold text-gray-900">Доп. выгода</div>
                  <div className="text-gray-500 text-[11px]">до 200 000 ₽</div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs border-l border-gray-100 pl-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Привод:</span>
                <span className="font-bold text-gray-800">{car.drive}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Кузов:</span>
                <span className="font-bold text-gray-800">{car.body}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Год:</span>
                <span className="font-bold text-gray-800">{car.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Пробег:</span>
                <span className="font-bold text-gray-800">{car.mileage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}