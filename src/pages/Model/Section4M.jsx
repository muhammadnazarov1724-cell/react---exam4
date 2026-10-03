import React from 'react'
import { useTranslation } from 'react-i18next'


import camryImg from '../../assets/day-exterior-3_040_FA20 2.png' 
import bgBanner from '../../assets/76857.png' 

export default function Section4M() {
  const { t } = useTranslation()

  return (
    <section className='w-full py-[30px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1229px] mx-auto relative'>
        
        <div 
          className='relative w-full rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat p-[32px] sm:p-[48px] lg:p-[60px] min-h-[380px] flex flex-col justify-between shadow-sm'
          style={{ backgroundImage: `url(${bgBanner})` }}
        >
          
          <div className='relative z-10 max-w-[650px]'>
            
            <div className='inline-block bg-[#D92D20] text-white text-[12px] sm:text-[13px] font-semibold px-[14px] py-[6px] rounded-full mb-[16px] shadow-sm'>
              {t('offerBanner.badge', 'Акция до 20.02.2021')}
            </div>

            <h2 className='text-[32px] sm:text-[42px] lg:text-[48px] font-black text-[#111111] leading-[1.1] mb-[32px] tracking-tight'>
              {t('offerBanner.title', 'Станьте владельцем Toyota Camry уже сегодня')}
            </h2>

            <h3 className='text-[16px] sm:text-[18px] font-extrabold text-[#111111] uppercase tracking-wide mb-[14px]'>
              {t('offerBanner.subtitle', 'ВАШЕ ПЕРСОНАЛЬНОЕ ПРЕДЛОЖЕНИЕ')}
            </h3>

            <form className='w-full space-y-[10px]'>
              <div className='flex flex-col sm:flex-row items-center gap-[12px] w-full'>
                
                <input
                  type='text'
                  placeholder={t('offerBanner.namePlaceholder', 'Ваше имя')}
                  className='w-full sm:w-[220px] h-[50px] bg-white rounded-[10px] px-[16px] text-[14px] text-[#111111] placeholder-[#888888] border border-gray-200 outline-none focus:ring-2 focus:ring-[#D92D20] transition-all shadow-sm'
                />

                <input
                  type='tel'
                  placeholder={t('offerBanner.phonePlaceholder', 'Ваш телефон')}
                  className='w-full sm:w-[220px] h-[50px] bg-white rounded-[10px] px-[16px] text-[14px] text-[#111111] placeholder-[#888888] border border-gray-200 outline-none focus:ring-2 focus:ring-[#D92D20] transition-all shadow-sm'
                />

                <button
                  type='submit'
                  className='w-full sm:w-auto h-[50px] px-[28px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] sm:text-[13px] tracking-wider uppercase rounded-[10px] transition-colors cursor-pointer shadow-md shrink-0'
                >
                  {t('offerBanner.button', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
                </button>

              </div>

              <p className='text-[10px] text-[#777777] leading-relaxed pt-[4px] max-w-[580px]'>
                {t('offerBanner.disclaimerText1', 'Нажимая кнопку "Получить предложение", Вы соглашаетесь с')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('offerBanner.disclaimerLink1', 'политикой конфиденциальности')}
                </a>{' '}
                {t('offerBanner.disclaimerText2', 'и')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('offerBanner.disclaimerLink2', 'правилами обработки персональных данных')}
                </a>
              </p>
            </form>

          </div>

          <div className='hidden lg:block absolute right-[20px] bottom-[20px] w-[500px] xl:w-[580px] pointer-events-none z-10'>
            <img 
              src={camryImg} 
              className='w-full h-auto object-contain'
            />
          </div>

        </div>

      </div>
    </section>
  )
}