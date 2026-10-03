import React from 'react'
import { useTranslation } from 'react-i18next'

import familyCarBg from '../../assets/66666.png'

export default function Section1F() {
  const { t } = useTranslation()

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1229px] mx-auto relative'>
        
        <div
          className='relative w-full rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat p-[24px] sm:p-[36px] lg:p-[48px] pb-[100px] md:pb-[120px] shadow-sm'
          style={{ backgroundImage: `url(${familyCarBg})` }}
        >
          <div className='absolute inset-0 bg-black/10 pointer-events-none z-0' />

          <div className='relative z-10 max-w-[580px]'>
            
            <nav className='flex items-center gap-[8px] text-[12px] text-white/80 mb-[20px]'>
              <a href='#' className='hover:text-white transition-colors'>
                {t('familyCar.breadcrumb.home', 'Главная')}
              </a>
              <span>›</span>
              <a href='#' className='hover:text-white transition-colors'>
                {t('familyCar.breadcrumb.credit', 'Кредит и рассрочка')}
              </a>
              <span>›</span>
              <span className='text-white font-medium'>
                {t('familyCar.breadcrumb.current', 'Семейный автомобиль')}
              </span>
            </nav>

            <h1 className='text-[36px] sm:text-[48px] lg:text-[56px] font-black text-white leading-tight mb-[12px] tracking-tight'>
              {t('familyCar.title', 'Семейный автомобиль')}
            </h1>

            <p className='text-[13px] sm:text-[15px] font-medium text-white/95 leading-[1.35] mb-[28px] max-w-[500px]'>
              {t(
                'familyCar.description',
                'Программа "Семейный автомобиль" рассчитана на покупателей с одним и более несовершеннолетними детьми в семье'
              )}
            </p>

            <div className='space-y-[16px]'>
              
              <div className='inline-flex items-center gap-[12px] bg-[#D92D20] text-white rounded-full px-[20px] py-[8px] shadow-md'>
                <span className='text-[28px] sm:text-[34px] font-black leading-none tracking-tight'>
                  {t('familyCar.rateValue', 'от 1,9%')}
                </span>
                <span className='text-[11px] sm:text-[12px] font-bold leading-tight max-w-[80px] border-l border-white/30 pl-[10px]'>
                  {t('familyCar.rateLabel', 'По льготной ставке')}
                </span>
              </div>

              <div className='flex items-center gap-[10px] text-white pt-[4px]'>
                <span className='text-[36px] sm:text-[42px] font-black leading-none tracking-tight'>
                  -10%
                </span>
                <span className='text-[11px] sm:text-[12px] font-bold leading-tight max-w-[90px] text-white/90'>
                  {t('familyCar.discountLabel', 'От стоимости автомобиля')}
                </span>
              </div>

            </div>

          </div>
        </div>

        <div className='relative z-30 -mt-[60px] top-[30px] sm:-mt-[70px] max-w-[1140px] mx-auto bg-white rounded-[20px] p-[20px] sm:p-[28px] lg:p-[32px] shadow-xl border border-gray-100'>
          <form className='flex flex-col lg:flex-row lg:items-center justify-between gap-[20px]'>
            
            <div className='shrink-0'>
              <h3 className='text-[20px] sm:text-[22px] font-black text-[#111111] leading-tight max-w-[220px] mb-[8px]'>
                {t('familyCar.form.title', 'Получите специальную цену')}
              </h3>

              <div className='inline-block bg-[#D92D20] text-white text-[11px] font-bold px-[10px] py-[3px] rounded-full'>
                {t('familyCar.form.deadline', 'Только до 10.10.21')}
              </div>
            </div>

            <div className='w-full max-w-[760px] flex flex-col gap-[8px]'>
              <div className='flex flex-col sm:flex-row gap-[10px] w-full'>
                
                <input
                  type='text'
                  placeholder={t('familyCar.form.namePlaceholder', 'Ваше имя')}
                  className='w-full sm:w-[38%] h-[48px] bg-[#EFEFEF] rounded-[8px] px-[16px] text-[14px] text-[#111111] placeholder-[#777777] outline-none focus:bg-white focus:ring-1 focus:ring-[#D92D20] transition-all'
                />

                <input
                  type='tel'
                  placeholder={t('familyCar.form.phonePlaceholder', 'Ваш телефон')}
                  className='w-full sm:w-[38%] h-[48px] bg-[#EFEFEF] rounded-[8px] px-[16px] text-[14px] text-[#111111] placeholder-[#777777] outline-none focus:bg-white focus:ring-1 focus:ring-[#D92D20] transition-all'
                />

                <button
                  type='submit'
                  className='w-full sm:w-[24%] h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-black text-[12px] tracking-wider rounded-[8px] uppercase transition-colors cursor-pointer shadow-md shrink-0'
                >
                  {t('familyCar.form.button', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
                </button>

              </div>

              <p className='text-[10px] text-[#888888]'>
                {t('familyCar.form.disclaimerText', 'Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('familyCar.form.disclaimerLink', 'персональных данных')}
                </a>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}