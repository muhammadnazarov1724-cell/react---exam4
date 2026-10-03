import React from 'react'
import { useTranslation } from 'react-i18next'

// Замените на путь к вашей картинке желтого авто
import yellowCarImg from '../../assets/taxi.png'

export default function Section5T() {
  const { t } = useTranslation()

  // Данные для выпадающих списков
  const carClasses = ['Старт', 'Эконом', 'Комфорт', 'Бизнес']
  const carBrands = ['Lada', 'Kia', 'Hyundai', 'Skoda']
  const carModels = ['Granta', 'Vesta', 'Rio', 'Solaris']
  const loanTerms = ['1 год', '2 года', '3 года', '5 лет', '7 лет']

  return (
    <section className="w-full py-12 px-4 font-sans bg-white">
      <div className="max-w-[760px] mx-auto">
        
        {/* Главный заголовок */}
        <h2 className="text-[28px] sm:text-[34px] font-black text-center text-gray-900 mb-10">
          {t('creditCalculator.title', 'Кредитный калькулятор')}
        </h2>

        {/* Основной контейнер с левой пунктирной линией */}
        <div className="relative pl-12 sm:pl-16 space-y-8">
          
          {/* Вертикальная пунктирная линия слева */}
          <div className="absolute left-[18px] sm:left-[22px] top-[20px] bottom-[40px] w-[1px] border-l-2 border-dashed border-gray-200 z-0" />

          {/* ШАГ 1: Выберите класс авто */}
          <div className="relative z-10 space-y-3">
            <div className="absolute left-[-48px] sm:left-[-64px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EBEBEB] text-gray-400 font-extrabold text-[15px] sm:text-[17px] flex items-center justify-center">
              1
            </div>

            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-gray-900">
              {t('creditCalculator.step1.title', 'Выберите класс авто')}
            </h3>

            <div className="relative">
              <select
                defaultValue="Старт"
                className="w-full h-[50px] bg-white border border-gray-200 rounded-[12px] px-4 pr-10 text-[14px] font-medium text-gray-800 appearance-none outline-none focus:border-[#D92D20] transition-colors cursor-pointer"
              >
                {carClasses.map((cls, idx) => (
                  <option key={idx} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ШАГ 2: Ваш будущий автомобиль */}
          <div className="relative z-10 space-y-3">
            <div className="absolute left-[-48px] sm:left-[-64px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EBEBEB] text-gray-400 font-extrabold text-[15px] sm:text-[17px] flex items-center justify-center">
              2
            </div>

            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-gray-900">
              {t('creditCalculator.step2.title', 'Ваш будущий автомобиль')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Селект марки */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full h-[50px] bg-white border border-gray-200 rounded-[12px] px-4 pr-10 text-[14px] font-medium text-gray-800 appearance-none outline-none focus:border-[#D92D20] transition-colors cursor-pointer"
                >
                  <option value="" disabled hidden>
                    {t('creditCalculator.step2.brandPlaceholder', 'Выберите марку')}
                  </option>
                  {carBrands.map((b, idx) => (
                    <option key={idx} value={b}>{b}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              {/* Селект модели */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full h-[50px] bg-white border border-gray-200 rounded-[12px] px-4 pr-10 text-[14px] font-medium text-gray-800 appearance-none outline-none focus:border-[#D92D20] transition-colors cursor-pointer"
                >
                  <option value="" disabled hidden>
                    {t('creditCalculator.step2.modelPlaceholder', 'Выберите модель')}
                  </option>
                  {carModels.map((m, idx) => (
                    <option key={idx} value={m}>{m}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Карточка выбранного авто */}
            <div className="bg-[#EFEFEF] rounded-[16px] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-3">
              <div className="space-y-3 text-center sm:text-left">
                <h4 className="text-[15px] sm:text-[16px] font-extrabold text-gray-900 leading-tight whitespace-pre-line">
                  {t('creditCalculator.step2.carName', 'Lada Granta Liftback New\n1.6 MT Comfort')}
                </h4>

                <div className="space-y-0.5">
                  <div className="text-[12px] text-gray-400 line-through">
                    {t('creditCalculator.step2.oldPrice', 'от 221 100 ₽')}
                  </div>
                  <div className="text-[18px] sm:text-[20px] font-black text-gray-900">
                    {t('creditCalculator.step2.dailyPrice', 'от 82 ₽/день')}
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-[260px] h-[110px] flex items-center justify-center">
                <img
                  src={yellowCarImg}
                  alt="Lada Granta"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* ШАГ 3: Срок кредита, мес. */}
          <div className="relative z-10 space-y-3">
            <div className="absolute left-[-48px] sm:left-[-64px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EBEBEB] text-gray-400 font-extrabold text-[15px] sm:text-[17px] flex items-center justify-center">
              3
            </div>

            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-gray-900">
              {t('creditCalculator.step3.title', 'Срок кредита, мес.')}
            </h3>

            <div className="relative">
              <select
                defaultValue="7 лет"
                className="w-full h-[50px] bg-white border border-gray-200 rounded-[12px] px-4 pr-10 text-[14px] font-medium text-gray-800 appearance-none outline-none focus:border-[#D92D20] transition-colors cursor-pointer"
              >
                {loanTerms.map((term, idx) => (
                  <option key={idx} value={term}>{term}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ШАГ 4: Персональные данные */}
          <div className="relative z-10 space-y-3">
            <div className="absolute left-[-48px] sm:left-[-64px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EBEBEB] text-gray-400 font-extrabold text-[15px] sm:text-[17px] flex items-center justify-center">
              4
            </div>

            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-gray-900">
              {t('creditCalculator.step4.title', 'Персональные данные')}
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder={t('creditCalculator.step4.namePlaceholder', 'Ваше имя')}
                className="w-full h-[50px] bg-white border border-gray-200 rounded-[12px] px-4 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:border-[#D92D20] transition-colors"
              />

              <input
                type="tel"
                placeholder={t('creditCalculator.step4.phonePlaceholder', 'Ваш телефон')}
                className="w-full h-[50px] bg-white border border-gray-200 rounded-[12px] px-4 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:border-[#D92D20] transition-colors"
              />
            </div>
          </div>

          {/* ФИНАЛЬНАЯ ГАЛОЧКА И КНОПКА */}
          <div className="relative z-10 pt-2 space-y-3">
            <div className="absolute left-[-48px] sm:left-[-64px] top-2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#EBEBEB] text-gray-400 font-bold text-[16px] flex items-center justify-center">
              ✓
            </div>

            <button
              type="button"
              className="w-full h-[52px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[13px] tracking-wider uppercase rounded-[10px] transition-colors cursor-pointer shadow-md"
            >
              {t('creditCalculator.step4.submitBtn', 'ОСТАВИТЬ ЗАЯВКУ')}
            </button>

            <p className="text-[10px] text-gray-400 text-center sm:text-left leading-relaxed">
              {t('creditCalculator.step4.disclaimerText', 'Нажимая кнопку "Оставить заявку" Вы даете согласие на обработку своих')}{' '}
              <a href="#" className="underline text-gray-500 hover:text-gray-700">
                {t('creditCalculator.step4.disclaimerLink', 'персональных данных')}
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}