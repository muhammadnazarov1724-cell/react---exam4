import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import boxingGloveImg from '../../assets/pngwing 3.png'

export default function Section5H() {
  const [t] = useTranslation()
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Обработка отправки формы
    console.log('Submitted phone:', phone)
  }

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] bg-white font-sans'>
      <div className='max-w-[1200px] mx-auto relative rounded-[24px] overflow-hidden bg-[#222222] text-white shadow-xl flex flex-col md:flex-row items-center min-h-[300px]'>
        
        {/* Левый блок с темно-красным градиентом и боксерской перчаткой */}
        <div className='relative w-full md:w-[42%] h-[220px] md:h-[320px] flex items-center justify-start bg-gradient-to-r from-[#660505] via-[#400B0B] to-transparent overflow-hidden shrink-0'>
          <img
            src={boxingGloveImg}
            alt='Boxing Glove'
            className='absolute left-[-20px] sm:left-0 top-1/2 -translate-y-1/2 h-[110%] sm:h-[120%] object-contain z-10 drop-shadow-2xl'
          />
        </div>

        {/* Правый блок с заголовками и формой */}
        <div className='w-full md:w-[58%] p-[24px] sm:p-[32px] md:p-[40px] flex flex-col justify-center z-10'>
          
          {/* Главный заголовок */}
          <h2 className='text-[22px] sm:text-[28px] md:text-[32px] font-black tracking-tight leading-[1.2] mb-[8px] text-white uppercase'>
            {t('promoTitle')}
          </h2>

          {/* Подзаголовок */}
          <p className='text-[15px] sm:text-[17px] text-[#DDDDDD] mb-[28px]'>
            {t('promoSubStart')}
            <span className='text-[#D92D20] font-bold'>
              {t('promoSubHighlight')}
            </span>
            {t('promoSubEnd')}
          </p>

          {/* Форма ввода */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-[12px]'>
            <div className='flex flex-col sm:flex-row gap-[12px] w-full'>
              
              {/* Инпут телефона */}
              <input
                type='tel'
                required
                placeholder={t('promoPhonePlaceholder')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full sm:w-[60%] bg-white text-[#222222] placeholder-[#888888] text-[14px] px-[20px] py-[14px] rounded-[8px] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />

              {/* Кнопка отправки */}
              <button
                type='submit'
                className='w-full sm:w-[40%] bg-[#D92D20] hover:bg-[#B82216] text-white text-[13px] font-bold tracking-wider uppercase px-[16px] py-[14px] rounded-[8px] transition-colors shrink-0'
              >
                {t('promoBtnSubmit')}
              </button>
            </div>

            {/* Согласие на обработку данных */}
            <p className='text-[11px] text-[#888888] leading-[1.4] mt-[4px]'>
              {t('promoConsentText')}{' '}
              <a href='#' className='underline hover:text-white transition-colors'>
                {t('promoConsentLink')}
              </a>
            </p>
          </form>

        </div>

      </div>
    </section>
  )
}