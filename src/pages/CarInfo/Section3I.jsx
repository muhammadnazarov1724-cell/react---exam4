import React from 'react'
import { useTranslation } from 'react-i18next'

// Единая фоновая картинка (небо, дорога, красная и белая машина)
import tradeInBgImg from '../../assets/2car.png'

export default function Section3I() {
  const { t } = useTranslation()

  // Массив выпадающих списков (селектов)
  const selectFields = [
    {
      id: 'brand',
      defaultOptionKey: 'tradeInBanner.form.selectBrand',
      defaultText: 'Марка',
      options: ['Toyota', 'Kia', 'Hyundai', 'Nissan'],
    },
    {
      id: 'model',
      defaultOptionKey: 'tradeInBanner.form.selectModel',
      defaultText: 'Модель',
      options: ['Camry', 'Rio', 'Optima', 'RAV4'],
    },
    {
      id: 'year',
      defaultOptionKey: 'tradeInBanner.form.selectYear',
      defaultText: 'Год выпуска',
      options: ['2023', '2022', '2021', '2020'],
    },
    {
      id: 'body',
      defaultOptionKey: 'tradeInBanner.form.selectBody',
      defaultText: 'Тип кузова',
      options: ['Седан', 'Кроссовер', 'Хэтчбек'],
    },
  ]

  return (
    <section className="w-full py-6 px-4 font-sans">
      <div className="max-w-[1200px] mx-auto relative rounded-[24px] overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 shadow-md bg-gray-900">
        
        {/* ЕДИНАЯ ФОНОВАЯ КАРТИНКА */}
        <div className="absolute inset-0 z-0">
          <img
            src={tradeInBgImg}
            alt="Trade-in Background"
            className="w-full h-full object-cover object-center sm:object-right"
          />
          {/* Легкое затемнение слева для идеальной читаемости текста на мобильных */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:hidden" />
        </div>

        {/* ВЕРХНИЙ ЗАГОЛОВОК И ТЕКСТ */}
        <div className="relative z-10 max-w-[500px] text-white space-y-2">
          {/* Красная плашка сверху */}
          <div className="w-[40px] h-[5px] bg-[#D92D20] rounded-full mb-3" />

          <h2 className="text-[32px] sm:text-[44px] font-black leading-tight tracking-tight">
            {t('tradeInBanner.title', 'Выгодный Trade-in')}
          </h2>

          <p className="text-[14px] sm:text-[16px] text-white/90 font-medium">
            {t('tradeInBanner.subtitle', 'Оценим вашу машину за 10 минут')}
          </p>
        </div>

        {/* ФОРМА (СЕЛЕКТЫ И ВВОД ТЕЛЕФОНА) */}
        <div className="relative z-10 mt-8 max-w-[700px]">
          <form className="space-y-4">
            
            {/* 4 Выпадающих списка (вынесены в массив) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {selectFields.map((field) => (
                <div key={field.id} className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-[46px] bg-white rounded-[10px] px-4 pr-8 text-[13px] text-gray-800 font-medium appearance-none outline-none cursor-pointer border border-transparent focus:border-[#D92D20] transition-colors"
                  >
                    <option value="" disabled hidden>
                      {t(field.defaultOptionKey, field.defaultText)}
                    </option>
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  {/* Иконка стрелочки вниз */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#D92D20]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Ввод телефона + Кнопка */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
              {/* Поле телефона */}
              <div className="lg:col-span-7">
                <input
                  type="tel"
                  placeholder={t('tradeInBanner.form.phonePlaceholder', 'Ваш телефон')}
                  className="w-full h-[48px] bg-white rounded-[10px] px-4 text-[13px] text-gray-900 placeholder-gray-400 outline-none border border-transparent focus:border-[#D92D20] transition-colors"
                />
              </div>

              {/* Кнопка отправки */}
              <div className="lg:col-span-5">
                <button
                  type="button"
                  className="w-full h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] tracking-wider uppercase rounded-[10px] transition-colors cursor-pointer shadow-md"
                >
                  {t('tradeInBanner.form.submitBtn', 'ОБРАТНЫЙ ЗВОНОК')}
                </button>
              </div>
            </div>

            {/* Юридический дисклеймер */}
            <p className="text-[10px] text-white/70 leading-relaxed pt-1">
              {t('tradeInBanner.form.disclaimerText', 'Нажимая кнопку «Получить предложение», Вы соглашаетесь с')}{' '}
              <a href="#" className="underline hover:text-white transition-colors">
                {t('tradeInBanner.form.disclaimerPrivacy', 'политикой конфиденциальности')}
              </a>{' '}
              {t('tradeInBanner.form.disclaimerAnd', 'и')}{' '}
              <a href="#" className="underline hover:text-white transition-colors">
                {t('tradeInBanner.form.disclaimerTerms', 'правилами обработки персональных данных')}
              </a>
            </p>

          </form>
        </div>

      </div>
    </section>
  )
}