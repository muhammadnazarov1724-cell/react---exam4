import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Section2M() {
  const navigate = useNavigate()
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

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
  
  const [expandedModelId, setExpandedModelId] = useState(null);

  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    const fetchToyotaModels = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/models');
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

  const toggleAccordion = (id) => {
    setExpandedModelId(expandedModelId === id ? null : id);
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-sans">Загрузка...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4 font-sans mt-[70px]">
      {models.map((car) => {
        const benefit = car.oldPrice && car.price ? car.oldPrice - car.price : 300000;
        const isOpen = expandedModelId === car.id;
        const isFav = favorites.includes(car.id);

        return (
          <div key={car.id} className="bg-gray-100/60 rounded-3xl overflow-hidden border border-gray-200">
            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

              <div className="w-full lg:w-1/3 flex flex-col items-center relative">
                {/* ИНТЕРАКТИВНОЕ СЕРДЕЧКО ИЗБРАННОГО */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(car.id)}
                  className="absolute top-0 left-0 flex items-center gap-1 cursor-pointer border-none bg-transparent p-0 z-10"
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      isFav ? 'text-red-600 fill-red-600' : 'text-gray-400 fill-none'
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
                  <span className={`text-xs font-semibold ${isFav ? 'text-red-600' : 'text-gray-400'}`}>
                    {isFav ? 1 : 0}
                  </span>
                </button>

                <div className="h-32 flex items-center justify-center my-2">
                  {car.image && <img src={car.image} alt={car.name} className="max-h-full object-contain" />}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full border border-gray-300 bg-white"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-900"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
                </div>
              </div>

              <div className="w-full lg:w-1/4 space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                <div className="text-xs text-gray-500 font-medium">
                  В наличии: <span className="text-red-600 font-bold">{car.inStock || 20} авто</span>
                </div>
                <div className="space-y-1.5 pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold min-w-[32px] text-right">-20%</span>
                    <span className="w-4 h-4 bg-red-600 text-white rounded flex items-center justify-center text-[10px]">✓</span>
                    <span className="text-gray-700 font-medium">Покупка в трейд-ин</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold min-w-[32px] text-right">-10%</span>
                    <span className="w-4 h-4 bg-red-600 text-white rounded flex items-center justify-center text-[10px]">✓</span>
                    <span className="text-gray-700 font-medium">Кредит</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold min-w-[32px] text-right">-10%</span>
                    <span className="w-4 h-4 bg-red-600 text-white rounded flex items-center justify-center text-[10px]">✓</span>
                    <span className="text-gray-700 font-medium">Рас распродажа</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/4 space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 text-white flex items-center justify-center shrink-0">🎁</div>
                  <div className="text-xs leading-tight">
                    <div className="text-gray-700 font-medium">Страхование</div>
                    <div className="text-red-600 font-medium">в подарок</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">🎁</div>
                  <div className="text-xs leading-tight">
                    <div className="text-gray-700 font-medium">КАСКО</div>
                    <div className="text-red-600 font-medium">в подарок</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 text-white flex items-center justify-center shrink-0">🎁</div>
                  <div className="text-xs leading-tight">
                    <div className="text-gray-700 font-medium">Комплект резины</div>
                    <div className="text-red-600 font-medium">в подарок</div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col items-end justify-center space-y-3">
                <div className="text-right">
                  <div className="text-xs font-bold text-red-600">
                    Выгода до {benefit.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="flex items-baseline gap-2 justify-end">
                    <span className="text-2xl font-black text-gray-900">
                      от {(car.price || 980000).toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {(car.oldPrice || 1280000).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>

                <div className="flex items-center w-full max-w-md rounded-lg overflow-hidden text-[11px] font-bold text-white uppercase text-center shadow">
                  <button className="flex-1 py-3 px-1 bg-red-600 hover:bg-red-700 transition-colors [clip-path:polygon(0_0,92%_0,100%_100%,0_100%)]">
                    Купить <br /> со скидкой
                  </button>
                  <button className="flex-1 py-3 px-1 bg-zinc-800 hover:bg-zinc-900 transition-colors -ml-3 [clip-path:polygon(8%_0,92%_0,100%_100%,0_100%)]">
                    Рассчитать <br /> кредит
                  </button>
                  <button
                    onClick={() => toggleAccordion(car.id)}
                    className="flex-1 py-3 px-1 bg-gray-500 hover:bg-gray-600 transition-colors -ml-3  cursor-pointer"
                  >
                   Open 
                  </button>
                </div>
              </div>
            </div>

            {isOpen && (
              <div className="p-6 bg-gray-100/90 space-y-6 border-t border-gray-200">

                <div className="bg-white rounded-2xl p-6 shadow-sm relative">

                  <button
                    onClick={() => toggleAccordion(car.id)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
                  >
                    ▲
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                    <div className="lg:col-span-4 space-y-3">
                      <div className="relative inline-block">
                        <img src={car.image} alt={car.name} className="w-56 object-contain" />
                        <span className="absolute -top-2 right-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Выгода 300 000 ₽
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{car.name}</h4>
                        <p className="text-xs text-red-600 font-medium">В наличии с ПТС</p>
                        <p className="text-xs text-gray-500">В наличии: <b>1 авто</b> | Доступна в <b>10 цветах</b></p>
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-3">
                      <div className="flex flex-wrap gap-2 text-xs text-gray-700">
                        <span className="bg-gray-100 px-3 py-1.5 rounded-full">🚗 115 л.с.</span>
                        <span className="bg-gray-100 px-3 py-1.5 rounded-full">⛽ 5.3 л/км</span>
                        <span className="bg-gray-100 px-3 py-1.5 rounded-full">⏱ 10.3 с.</span>
                        <span className="bg-gray-100 px-3 py-1.5 rounded-full">🚀 189 км/ч</span>
                      </div>

                      {/* Кнопка "Полное описание" */}
                      <button
                        onClick={() => setShowFullDesc(!showFullDesc)}
                        className="w-full py-1.5 px-4 border border-red-500 text-red-600 text-xs font-semibold rounded-full flex items-center justify-between hover:bg-red-50 transition-colors"
                      >
                        <span>Полное описание</span>
                        <span>{showFullDesc ? '▲' : '▼'}</span>
                      </button>
                    </div>

                    {/* Подарки и итоговая цена */}
                    <div className="lg:col-span-4 flex flex-col items-end space-y-3">
                      <div className="space-y-1 text-xs text-right">
                        <div className="flex items-center justify-end gap-2 text-gray-700">
                          <span>Страхование <b className="text-red-600">в подарок</b></span>
                          <span className="w-5 h-5 bg-zinc-800 text-white rounded-full flex items-center justify-center text-[10px]">🎁</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 text-gray-700">
                          <span>Оборудование <b className="text-red-600">в подарок</b></span>
                          <span className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px]">🎁</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 text-gray-700">
                          <span>Комплект резины <b className="text-red-600">в подарок</b></span>
                          <span className="w-5 h-5 bg-zinc-800 text-white rounded-full flex items-center justify-center text-[10px]">🎁</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-black text-gray-900">1 615 000 ₽</div>
                        <div className="text-xs text-gray-400 line-through">1 915 000 ₽</div>
                        <div className="text-[11px] text-gray-500 mt-0.5">Кредит от 10 000 ₽/мес</div>
                      </div>

                      <div className="flex gap-2 w-full">
                        <button className="flex-1 bg-red-600 text-white py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-red-700">
                          Забронировать
                        </button>
                        <button className="bg-zinc-800 text-white px-3 py-2.5 rounded-xl font-bold text-xs">
                          B Trade-in
                        </button>
                        <button className="bg-gray-500 text-white px-3 py-2.5 rounded-xl font-bold text-xs"
                            onClick={() => navigate(`/car/${car.id}`, { state: { car } })}>
                          Подробнее
                        </button>
                      </div>
                    </div>
                  </div>

                  {showFullDesc && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 mt-6 border-t border-gray-100 text-xs text-gray-600">
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2 text-sm">Безопасность</h5>
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Запасное колесо неполноразмерное</li>
                          <li>Передние тормоза: Дисковые</li>
                          <li>Задние тормоза: Барабанные</li>
                          <li>Антиблокировочная система (ABS)</li>
                          <li>Система помощи при старте на подъеме (HAC)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2 text-sm">Экстерьер</h5>
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Задняя подвеска: Полунезависимая балка</li>
                          <li>Иммобилайзер</li>
                          <li>Вспомогательная система торможения (BAS)</li>
                          <li>Подушка безопасности водительская</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2 text-sm">Интерьер</h5>
                        <ul className="space-y-1 list-disc list-inside">
                          <li>Подушка безопасности пассажира</li>
                          <li>Дополнительный стоп-сигнал</li>
                          <li>ЭРА-ГЛОНАСС</li>
                          <li>Крепление ISOFIX</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-200">
                    <div>
                      <div className="font-bold text-sm text-gray-900">Рассрочка от ВТБ</div>
                      <div className="text-xs text-gray-500 mb-3">Рассрочка 0%</div>
                      <button className="bg-sky-100 text-sky-700 font-semibold px-3 py-1 rounded-lg text-xs">
                        Рассрочка
                      </button>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">💳</div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl flex items-center justify-between border-2 border-blue-500 shadow-sm">
                    <div>
                      <div className="font-bold text-sm text-gray-900 flex items-center gap-1">
                        <span className="text-red-600">🔄</span> Выгода по Trade-in
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Дополнительная выгода до 200 000 руб</div>
                      <button className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">
                        Trade-in
                      </button>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">👥</div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-200">
                    <div>
                      <div className="font-bold text-sm text-gray-900 flex items-center gap-1">
                        <span className="text-red-600">%</span> Первоначальный взнос 0%
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Кредит 1.9%</div>
                      <button className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">
                        Скидка
                      </button>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center text-2xl">👩‍💼</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-white px-6 py-3 rounded-2xl flex items-center justify-between text-xs text-gray-700 shadow-sm">
                    <span className="font-bold">2.0 AT Стандарт 2020</span>
                    <span>2.0 - 75 л.с.</span>
                    <span>6MT</span>
                    <span>2WD</span>
                    <span className="line-through text-gray-400">2 000 000 ₽</span>
                    <span className="font-bold text-gray-900">1 615 000 ₽</span>
                    <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">▲</button>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-2xl flex items-center justify-between text-xs text-gray-700 shadow-sm">
                    <span className="font-bold">2.0 AT Стандарт 2020</span>
                    <span>2.0 - 75 л.с.</span>
                    <span>6MT</span>
                    <span>2WD</span>
                    <span className="line-through text-gray-400">2 000 000 ₽</span>
                    <span className="font-bold text-gray-900">1 615 000 ₽</span>
                    <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">▲</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}