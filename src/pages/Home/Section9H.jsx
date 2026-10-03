import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

import 'swiper/css'
import 'swiper/css/navigation'

import yandexLogo from '../../assets/yandex-maps-logo 1.png'
import googleLogo from '../../assets/Google_Maps_Logo 2.png'

export default function Section9H() {
  const [t] = useTranslation()

  const reviewCards = [
    { id: 1, site: 'reviewSite', name: 'dealershipName', rating: '4.5' },
    { id: 2, site: 'reviewSite', name: 'dealershipName', rating: '4.5' },
    { id: 3, site: 'reviewSite', name: 'dealershipName', rating: '4.5' },
    { id: 4, site: 'reviewSite', name: 'dealershipName', rating: '4.5' },
    { id: 5, site: 'reviewSite', name: 'dealershipName', rating: '4.5' },
  ]


  return (
    <section className='w-full bg-white py-[50px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto'>
        
        <div className='flex items-center justify-between mb-[28px]'>
          <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111]'>
            {t('trustTitle')}
          </h2>

          <div className='flex items-center gap-[10px]'>
            <button
              type='button'
              aria-label='Previous'
              className='trust-prev-btn w-[40px] h-[40px] rounded-[10px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] flex items-center justify-center transition-colors cursor-pointer shadow-sm'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
            </button>

            <button
              type='button'
              aria-label='Next'
              className='trust-next-btn w-[40px] h-[40px] rounded-[10px] bg-[#D92D20] hover:bg-[#B82216] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>

        {/* Верхний слайдер с маленькими карточками */}
        <div className='mb-[32px]'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: '.trust-prev-btn',
              nextEl: '.trust-next-btn',
            }}
            breakpoints={{
              540: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className='w-full py-[10px] px-[2px]'
          >
            {reviewCards.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='bg-white rounded-[16px] p-[20px] border border-[#F0F0F0] shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[130px]'>
                  <div>
                    <h3 className='text-[15px] font-bold text-[#111111] leading-[1.2]'>
                      {t(item.site)}
                    </h3>
                    <p className='text-[13px] text-[#999999] mt-[2px]'>
                      {t(item.name)}
                    </p>
                  </div>

                  <div className='flex items-center justify-between pt-[10px]'>
                    <span className='text-[11px] text-[#777777] font-medium'>
                      {t('recommend')}
                    </span>
                    <div className='flex items-center gap-[6px]'>
                      <span className='bg-[#4CAF50] text-white text-[12px] font-bold px-[6px] py-[2px] rounded-[6px]'>
                        {t(item.rating)}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
          
          <div className='bg-[#F5F5F5] rounded-[20px] p-[24px] sm:p-[28px] flex items-center justify-between shadow-sm'>
            <div className='flex flex-col gap-[6px]'>
              <div className='flex items-center gap-[8px]'>
                <img src={yandexLogo} />
              </div>
              <p className='text-[14px] text-[#888888] font-medium'>
                {t('dealershipName')}
              </p>
            </div>

            <div className='flex items-center gap-[16px]'>
              <div className='flex flex-col items-end gap-[4px]'>
                <span className='text-[12px] text-[#777777] font-medium'>
                  {t('recommend')}
                </span>
              </div>
              <div className='bg-[#52B766] text-white text-[28px] sm:text-[32px] font-extrabold px-[18px] py-[10px] rounded-[14px] leading-none'>
                4.5
              </div>
            </div>
          </div>

          {/* Блок Google Maps */}
          <div className='bg-[#F5F5F5] rounded-[20px] p-[24px] sm:p-[28px] flex items-center justify-between shadow-sm'>
            <div className='flex flex-col gap-[6px]'>
              <div className='flex items-center gap-[8px]'>
                <img src={googleLogo} className='h-[28px] object-contain' />
              </div>
              <p className='text-[14px] text-[#888888] font-medium'>
                {t('dealershipName')}
              </p>
            </div>

            <div className='flex items-center gap-[16px]'>
              <div className='flex flex-col items-end gap-[4px]'>
                <span className='text-[12px] text-[#777777] font-medium'>
                  {t('recommend')}
                </span>
              </div>
              <div className='bg-[#52B766] text-white text-[28px] sm:text-[32px] font-extrabold px-[18px] py-[10px] rounded-[14px] leading-none'>
                4.1
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}