import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import familyImg from '../../assets/stock-photo-laughing-fun-young-happy-parents-mom-mama-dad-papa-with-child-kid-daughter-teen-girl-in-white-1938829744 1.png' 
import carImg from '../../assets/2020-mazda3-sedan-prefferedpackage-soulred-car-0000 1 1.png'  
import bgImage from '../../assets/1088 1.png' 

export default function Section4B() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, phone })
  }

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1229px] mx-auto'>
        
        {/* Главная карточка баннера */}
        <div className='relative w-full min-h-[380px] lg:min-h-[420px] rounded-[24px] overflow-hidden bg-white shadow-sm flex items-center justify-between border border-gray-100'>
          
          {/* 1. Размытый фоновый слой (фон с деревьями/улицей) */}
          <div 
            className='absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none'
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          {/* 2. Изображение машины на заднем плане справа */}
          <div className='absolute right-[18%] md:right-[22%] bottom-[20px] z-10 hidden md:block w-[320px] lg:w-[420px] pointer-events-none'>
            <img
              src={carImg}
              alt='Car'
              className='w-full h-auto object-contain blur-[1px]'
            />
          </div>

          {/* 3. Изображение семьи (3 человека) на переднем плане справа */}
          <div className='absolute right-0 bottom-0 z-20 hidden md:block w-[300px] lg:w-[380px] pointer-events-none'>
            <img
              src={familyImg}
              alt='Happy Family'
              className='w-full h-auto object-contain object-bottom'
            />
          </div>

          {/* Левый контентный блок */}
          <div className='relative z-30 w-full md:max-w-[650px] lg:max-w-[720px] p-[24px] sm:p-[36px] lg:p-[44px]'>
            
            {/* Главный заголовок + 1,9% */}
            <div className='flex flex-wrap items-baseline gap-x-[16px] gap-y-[8px] mb-[20px]'>
              <h2 className='text-[26px] sm:text-[34px] lg:text-[40px] font-black text-[#111111] leading-[1.1] tracking-tight max-w-[480px]'>
                {t('govCredit.title', 'Госпрограмма льготного автокредитования')}
              </h2>

              <div className='flex items-baseline gap-[8px]'>
                <span className='text-[36px] sm:text-[44px] lg:text-[52px] font-black leading-none text-[#D92D20] tracking-tight'>
                  1,9%
                </span>
                <span className='text-[11px] sm:text-[12px] text-[#555555] font-semibold leading-tight max-w-[80px]'>
                  {t('govCredit.rateLabel', 'Ставка по кредиту')}
                </span>
              </div>
            </div>

            {/* Блок скидки -10% и описания */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[28px]'>
              <span className='text-[48px] sm:text-[56px] lg:text-[64px] font-black text-[#D92D20] leading-none tracking-tight shrink-0'>
                -10%
              </span>

              <div className='text-[11px] sm:text-[12px] text-[#444444] font-medium leading-[1.35] max-w-[420px]'>
                <span className='text-[#D92D20] font-bold block uppercase mb-[2px]'>
                  {t('govCredit.discountSubtitle', 'от стоимости авто')}
                </span>
                {t('govCredit.discountDesc', 'выгода по программе "Семейный автомобиль", "Первый автомобиль", "Автомобиль государственному медицинскому персоналу", "Автомобиль в трейд-ин"')}
              </div>
            </div>

            {/* Форма: Имя + Телефон + Кнопка */}
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-[10px] max-w-[600px] mb-[14px]'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('govCredit.namePlaceholder', 'Ваше имя')}
                className='w-full sm:w-[32%] h-[48px] bg-white border border-[#E0E0E0] rounded-[8px] px-[16px] text-[14px] text-[#111111] placeholder-[#888888] outline-none focus:border-[#D92D20] transition-colors'
              />

              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('govCredit.phonePlaceholder', 'Ваш телефон')}
                className='w-full sm:w-[32%] h-[48px] bg-white border border-[#E0E0E0] rounded-[8px] px-[16px] text-[14px] text-[#111111] placeholder-[#888888] outline-none focus:border-[#D92D20] transition-colors'
              />

              <button
                type='submit'
                className='w-full sm:w-[36%] h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] sm:text-[13px] tracking-wider rounded-[8px] uppercase transition-colors cursor-pointer shadow-sm shrink-0'
              >
                {t('govCredit.button', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
              </button>
            </form>

            {/* Юридическая сноска */}
            <p className='text-[10px] sm:text-[11px] text-[#888888] leading-tight max-w-[500px]'>
              {t('govCredit.disclaimerPrefix', 'Нажимая кнопку "Получить предложение", Вы соглашаетесь с')}{' '}
              <a href='#' className='underline hover:text-[#111111] transition-colors'>
                {t('govCredit.privacyLink', 'политикой конфиденциальности')}
              </a>{' '}
              {t('govCredit.and', 'и')}{' '}
              <a href='#' className='underline hover:text-[#111111] transition-colors'>
                {t('govCredit.termsLink', 'правилами обработки персональных данных')}
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}