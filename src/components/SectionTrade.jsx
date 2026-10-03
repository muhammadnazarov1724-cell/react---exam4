import React from 'react'
import { useTranslation } from 'react-i18next'

import carsImage from '../assets/1 50502083.png'

export default function SectionTrade() {
  const { t } = useTranslation()

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1229px] mx-auto'>
        
        <div className='relative w-full min-h-[328px] rounded-[25px] bg-gradient-to-r from-[#262626] via-[#262626] to-[#1F1F1F] overflow-hidden flex items-center justify-between shadow-lg'>
          
          <div className='absolute left-0 top-0 bottom-0 w-full max-w-[585px] h-[327px] z-10 hidden md:block'>
            <img
              src={carsImage}
              className='w-full h-full object-cover object-left pointer-events-none'
            />
          </div>

          <div className='relative z-20 w-full md:w-[600px] ml-auto p-[24px] sm:p-[36px] lg:p-[40px] text-white'>
            
            <div className='flex flex-wrap items-baseline gap-x-[16px] gap-y-[8px] mb-[12px]'>
              <h2 className='text-[24px] sm:text-[28px] lg:text-[32px] font-black uppercase tracking-tight leading-none'>
                {t('tradeIn.title', 'ВЫГОДНЫЙ TRADE-IN')}
              </h2>

              <div className='flex items-baseline gap-[6px]'>
                <span className='text-[16px] font-bold uppercase text-white'>
                  {t('tradeIn.from', 'ОТ')}
                </span>
                <span className='text-[40px] sm:text-[48px] font-black leading-none text-white tracking-tight'>
                  1,9%
                </span>
                <span className='text-[11px] sm:text-[12px] text-[#CCCCCC] font-medium leading-tight max-w-[80px]'>
                  {t('tradeIn.subRate', 'По льготной ставке')}
                </span>
              </div>
            </div>

            <p className='text-[13px] sm:text-[14px] text-[#AAAAAA] font-normal mb-[24px] max-w-[480px]'>
              {t('tradeIn.subtitle', 'Обменяйте свой автомобиль на новый с максимальной скидкой')}
            </p>

            <form className='flex flex-col sm:flex-row gap-[12px] max-w-[520px] mb-[12px]'>
              <input
                type='tel'
                placeholder={t('tradeIn.phonePlaceholder', 'Ваш телефон')}
                className='w-full sm:w-[58%] h-[48px] bg-white rounded-[10px] px-[18px] text-[14px] text-[#111111] placeholder-[#888888] outline-none'
              />

              <button
                type='button'
                className='w-full sm:w-[42%] h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] sm:text-[13px] tracking-wider rounded-[10px] uppercase transition-colors cursor-pointer shadow-md shrink-0'
              >
                {t('tradeIn.button', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
              </button>
            </form>

            <p className='text-[10px] sm:text-[11px] text-[#777777]'>
              {t('tradeIn.disclaimerText', 'Нажимая кнопку "Получить предложение" Вы даете согласие на обработку своих')}{' '}
              <a href='#' className='underline hover:text-white transition-colors'>
                {t('tradeIn.disclaimerLink', 'персональных данных')}
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}