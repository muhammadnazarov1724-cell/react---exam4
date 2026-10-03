import React from 'react'
import { useTranslation } from 'react-i18next'

import carImg from '../../assets/Group 645.png'

export default function Section5M() {
  const { t } = useTranslation()

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans bg-white'>
      <div className='max-w-[1229px] mx-auto'>
        
        <div className='flex items-center gap-[24px] mb-[32px]'>
          <div className='relative pb-[8px] border-b-4 border-[#D92D20]'>
            <span className='text-[28px] sm:text-[36px] font-black text-[#111111] tracking-tight'>
              {t('gallery.exterior', 'Экстерьер')}
            </span>
          </div>

          <span className='text-[28px] sm:text-[36px] font-light text-[#E0E0E0] select-none'>
            |
          </span>

          <div className='pb-[8px]'>
            <span className='text-[28px] sm:text-[36px] font-black text-[#D0D0D0] tracking-tight'>
              {t('gallery.interior', 'Интерьер')}
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[16px] mb-[28px]'>
          
          <div className='lg:col-span-9 relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-[20px] overflow-hidden bg-[#F2F2F2] shadow-sm'>
            <img
              src={carImg}
              className='w-full h-full object-cover'
            />

            <button
              type='button'
              className='absolute left-[16px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-[10px] bg-[#111111]/80 text-white flex items-center justify-center cursor-pointer z-10'
            >
              ‹
            </button>

            {/* Стрелка вправо */}
            <button
              type='button'
              className='absolute right-[16px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-[10px] bg-[#111111]/80 text-white flex items-center justify-center cursor-pointer z-10'
            >
              ›
            </button>
          </div>

          {/* Колонка справа: одна и та же картинка в уменьшенных размерах */}
          <div className='lg:col-span-3 flex lg:flex-col gap-[12px] overflow-hidden max-h-[480px]'>
            <div className='shrink-0 w-[140px] lg:w-full h-[95px] lg:h-[110px] rounded-[16px] overflow-hidden bg-[#F2F2F2]'>
              <img src={carImg} alt='Toyota Camry Thumb' className='w-full h-full object-cover' />
            </div>

            <div className='shrink-0 w-[140px] lg:w-full h-[95px] lg:h-[110px] rounded-[16px] overflow-hidden bg-[#F2F2F2]'>
              <img src={carImg} alt='Toyota Camry Thumb' className='w-full h-full object-cover' />
            </div>

            <div className='shrink-0 w-[140px] lg:w-full h-[95px] lg:h-[110px] rounded-[16px] overflow-hidden bg-[#F2F2F2]'>
              <img src={carImg} alt='Toyota Camry Thumb' className='w-full h-full object-cover' />
            </div>

            <div className='shrink-0 w-[140px] lg:w-full h-[95px] lg:h-[110px] rounded-[16px] overflow-hidden bg-[#F2F2F2] opacity-50'>
              <img src={carImg} className='w-full h-full object-cover' />
            </div>
          </div>

        </div>

        <p className='text-[12px] sm:text-[13px] text-[#777777] leading-[1.6] font-normal max-w-[1100px]'>
          {t(
            'gallery.description',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.'
          )}
        </p>

      </div>
    </section>
  )
}