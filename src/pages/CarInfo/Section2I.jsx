import React from 'react'
import { useTranslation } from 'react-i18next'

// Замените пути к изображениям на ваши локальные ресурсы
import vtbGirlImg from '../../assets/x1.png'
import tradeInCoupleImg from '../../assets/p3.png'
import creditGirlImg from '../../assets/n1.png'

export default function Section2I() {
  const { t } = useTranslation()

  // Данные для верхних баннеров
  const promoCards = [
    {
      img: vtbGirlImg,
      badgeText: 'ВТБ',
      badgeBg: 'bg-[#002882]',
      titleKey: 'carDetails.promo.vtbTitle',
      defaultTitle: 'Рассрочка от ВТБ',
      subKey: 'carDetails.promo.vtbSub',
      defaultSub: 'Рассрочка 0%',
      btnKey: 'carDetails.promo.vtbBtn',
      defaultBtn: 'Рассрочка',
    },
    {
      img: tradeInCoupleImg,
      badgeText: '🔄',
      badgeBg: 'bg-[#D92D20]',
      titleKey: 'carDetails.promo.tradeInTitle',
      defaultTitle: 'Выгода по Trade-in',
      subKey: 'carDetails.promo.tradeInSub',
      defaultSub: 'Дополнительная выгода\nдо 200 000 руб',
      btnKey: 'carDetails.promo.tradeInBtn',
      defaultBtn: 'Trade-in',
    },
    {
      img: creditGirlImg,
      badgeText: '%',
      badgeBg: 'bg-[#D92D20]',
      titleKey: 'carDetails.promo.creditTitle',
      defaultTitle: 'Первоначальный\nвзнос 0%',
      subKey: 'carDetails.promo.creditSub',
      defaultSub: 'Кредит 1,9%',
      btnKey: 'carDetails.promo.creditBtn',
      defaultBtn: 'Скидка',
    },
  ]

  // Характеристики для таблицы
  const specsList = [
    {
      titleKey: 'carDetails.specs.maxPower',
      defaultTitle: 'Максимальная мощность\nдвигателя(кВт) при об./мин.',
      valueKey: 'carDetails.specs.maxPowerVal',
      defaultValue: '110 л.с.',
    },
    {
      titleKey: 'carDetails.specs.transmission',
      defaultTitle: 'Тип трансмиссии',
      valueKey: 'carDetails.specs.transmissionVal',
      defaultValue: 'МКПП',
    },
    {
      titleKey: 'carDetails.specs.driveType',
      defaultTitle: 'Тип привода',
      valueKey: 'carDetails.specs.driveTypeVal',
      defaultValue: 'Передний',
    },
    {
      titleKey: 'carDetails.specs.engineVolume',
      defaultTitle: 'Объем двигателя, куб.см',
      valueKey: 'carDetails.specs.engineVolumeVal',
      defaultValue: '100',
    },
  ]

  return (
    <section className="w-full max-w-[1180px] mx-auto px-4 py-8 font-sans space-y-10">
      
      {/* 1. ВЕРХНИЕ 3 ПРОМО-КАРТОЧКИ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {promoCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] rounded-[20px] p-4 flex items-center justify-between min-h-[140px] relative overflow-hidden"
          >
            {/* Картинка слева/по центру */}
            <div className="w-[110px] h-[130px] shrink-0 flex items-end justify-center">
              <img
                src={card.img}
                alt="Promo"
                className="max-h-full object-contain"
              />
            </div>

            {/* Контент справа */}
            <div className="flex-1 pl-3 flex flex-col justify-between h-full py-1">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`w-5 h-5 rounded-full ${card.badgeBg} text-white text-[10px] font-bold flex items-center justify-center shrink-0`}>
                    {card.badgeText}
                  </span>
                  <h4 className="text-[14px] font-extrabold text-black leading-tight whitespace-pre-line">
                    {t(card.titleKey, card.defaultTitle)}
                  </h4>
                </div>
                <p className="text-[11px] text-gray-500 leading-tight whitespace-pre-line">
                  {t(card.subKey, card.defaultSub)}
                </p>
              </div>

              <div className="pt-2">
                <span className="inline-block bg-[#E5E5E5] text-[11px] font-bold text-gray-800 px-3 py-1 rounded-full">
                  {t(card.btnKey, card.defaultBtn)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. ТЕМНАЯ ПАНЕЛЬ-КАЛЬКУЛЯТОР */}
      <div className="bg-[#222222] rounded-[20px] p-6 lg:p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Слайдер 1: Первоначальный взнос */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-[13px] text-gray-300">
              <span>{t('carDetails.calculator.downPayment', 'Первоначальный взнос')}</span>
              <span className="text-[16px] font-black text-white">20%</span>
            </div>
            <div className="relative flex items-center">
              <input
                type="range"
                min="0"
                max="80"
                defaultValue="20"
                readOnly
                className="w-full h-[3px] bg-gray-600 rounded-lg appearance-none cursor-default accent-[#D92D20]"
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-medium">
              <span>0</span>
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
            </div>
          </div>

          {/* Слайдер 2: Срок кредита */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-[13px] text-gray-300">
              <span>{t('carDetails.calculator.term', 'Срок кредита')}</span>
              <span className="text-[16px] font-black text-white">
                24 {t('carDetails.calculator.termUnit', 'мес.')}
              </span>
            </div>
            <div className="relative flex items-center">
              <input
                type="range"
                min="6"
                max="84"
                defaultValue="24"
                readOnly
                className="w-full h-[3px] bg-gray-600 rounded-lg appearance-none cursor-default accent-[#D92D20]"
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-medium">
              <span>6</span>
              <span>12</span>
              <span>24</span>
              <span>36</span>
              <span>48</span>
              <span>60</span>
              <span>72</span>
              <span>84</span>
            </div>
          </div>

          {/* Ежемесячный платеж и Кнопка */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-4 pt-2 lg:pt-0">
            <div>
              <div className="text-[12px] text-gray-300">
                {t('carDetails.calculator.monthlyPayment', 'Ежемесячный платеж *')}
              </div>
              <div className="text-[20px] font-black leading-tight text-white">
                12 000 ₽/мес.
              </div>
              <div className="text-[9px] text-gray-500">
                {t('carDetails.calculator.note', '* Предварительный расчет')}
              </div>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto bg-[#D92D20] text-white text-[12px] font-extrabold uppercase px-6 py-3.5 rounded-[10px] whitespace-nowrap cursor-pointer hover:bg-[#B82216] transition-colors"
            >
              {t('carDetails.calculator.submitBtn', 'ПОДАТЬ ЗАЯВКУ НА КРЕДИТ')}
            </button>
          </div>

        </div>
      </div>

      {/* 3. ОПИСАНИЕ АВТОМОБИЛЯ */}
      <div className="space-y-4 pt-2">
        <h2 className="text-[22px] sm:text-[26px] font-black text-gray-900">
          {t('carDetails.description.title', 'Описание Toyota Camry 2013 2.0 AT Стандарт')}
        </h2>
        <div className="space-y-3 text-[12px] sm:text-[13px] text-gray-600 leading-relaxed">
          <p>{t('carDetails.description.p1')}</p>
          <p>{t('carDetails.description.p2')}</p>
        </div>
      </div>

      {/* 4. КОМПЛЕКТАЦИЯ (ТАБЛИЦА) */}
      <div className="space-y-6 pt-4">
        <h2 className="text-[22px] sm:text-[26px] font-black text-gray-900">
          {t('carDetails.specs.title', 'Комплектация Toyota Camry 2013 2.0 AT Стандарт')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {specsList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2.5 border-b border-gray-100 text-[13px]"
            >
              <span className="text-gray-900 font-bold whitespace-pre-line max-w-[280px] leading-tight">
                {t(item.titleKey, item.defaultTitle)}
              </span>
              <span className="text-gray-600 font-medium">
                {t(item.valueKey, item.defaultValue)}
              </span>
            </div>
          ))}
        </div>

        {/* Кнопка Показать еще */}
        <div className="flex justify-center pt-4">
          <button
            type="button"
            className="bg-[#D92D20] hover:bg-[#B82216] text-white text-[12px] font-extrabold uppercase px-10 py-3.5 rounded-[8px] transition-colors cursor-pointer"
          >
            {t('carDetails.specs.showMoreBtn', 'ПОКАЗАТЬ ЕЩЕ')}
          </button>
        </div>
      </div>

    </section>
  )
}