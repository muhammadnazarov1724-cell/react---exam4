import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

import 'swiper/css'
import 'swiper/css/navigation'

import firstCarImg from '../../assets/f1.png'
import familyCarImg from '../../assets/f2.png'
import expressCreditImg from '../../assets/f3.png'
import { useNavigate } from 'react-router-dom'

export default function Section6H() {
  const [t] = useTranslation()
  const navigate = useNavigate()

  return (
    <section className='w-full bg-white py-[40px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto relative'>
        
        {/* Шапка */}
        <div className='flex items-center justify-between mb-[24px]'>
          <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111]'>
            {t('offersTitle')}
          </h2>

          <div className='flex items-center gap-[10px]'>
            <button
              type='button'
              aria-label='Previous'
              className='offers-prev-btn w-[40px] h-[40px] rounded-[10px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] flex items-center justify-center transition-colors cursor-pointer'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
            </button>

            <button
              type='button'
              aria-label='Next'
              className='offers-next-btn w-[40px] h-[40px] rounded-[10px] bg-[#D92D20] hover:bg-[#B82216] text-white flex items-center justify-center transition-colors cursor-pointer'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>

        {/* Слайдер с отдельной разметкой для каждой карточки */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.offers-prev-btn',
            nextEl: '.offers-next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='w-full'
        >
          {/* КАРТОЧКА 1: Первый автомобиль */}
          <SwiperSlide>
            <div className='relative w-full h-[220px] sm:h-[240px] rounded-[20px] overflow-hidden bg-[#F2F3F5] p-[24px] flex flex-col justify-between group cursor-pointer shadow-sm transition-transform duration-300 hover:-translate-y-1'>
              <img
                src={firstCarImg}
                className='absolute right-0 bottom-0 top-0 h-full w-[100%] object-cover object-left pointer-events-none'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#F2F3F5] via-[#F2F3F5]/90 to-transparent w-[65%] pointer-events-none' />

              <div className='relative z-10 max-w-[180px] sm:max-w-[200px]'>
                <h3 className='text-[18px] sm:text-[20px] font-bold text-[#111111] leading-[1.2] mb-[6px]'>
                  {t('offerFirstCarTitle')}
                </h3>
                <p className='text-[13px] text-[#777777] font-medium'>
                  {t('offerFirstCarSub')}
                </p>
              </div>

              <div className='relative z-10 mt-auto'>
                <button
                  type='button'
                  className='bg-[#D9D9D9] group-hover:bg-[#D92D20] text-[#333333] group-hover:text-white text-[12px] md:text-[13px] font-semibold px-[16px] py-[8px] rounded-[8px] transition-colors duration-200'
                  onClick={()=> navigate('/firstCar')}
                >
                  {t('offersBtnMore')}
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* КАРТОЧКА 2: Семейный автомобиль */}
          <SwiperSlide>
            <div className='relative w-full h-[220px] sm:h-[240px] rounded-[20px] overflow-hidden bg-[#F2F3F5] p-[24px] flex flex-col justify-between group cursor-pointer shadow-sm transition-transform duration-300 hover:-translate-y-1'>
              <img
                src={familyCarImg}
                className='absolute right-0 bottom-0 top-0 h-full w-[100%] object-cover object-left pointer-events-none'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#F2F3F5] via-[#F2F3F5]/90 to-transparent w-[65%] pointer-events-none' />

              <div className='relative z-10 max-w-[180px] sm:max-w-[200px]'>
                <h3 className='text-[18px] sm:text-[20px] font-bold text-[#111111] leading-[1.2] mb-[6px]'>
                  {t('offerFamilyTitle')}
                </h3>
                <p className='text-[13px] text-[#777777] font-medium'>
                  {t('offerFamilySub')}
                </p>
              </div>

              <div className='relative z-10 mt-auto'>
                <button
                  type='button'
                  className='bg-[#D9D9D9] group-hover:bg-[#D92D20] text-[#333333] group-hover:text-white text-[12px] md:text-[13px] font-semibold px-[16px] py-[8px] rounded-[8px] transition-colors duration-200'
                  onClick={()=> navigate('/family')}
                >
                  {t('offersBtnMore')}
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* КАРТОЧКА 3: Экспресс-кредит */}
          <SwiperSlide>
            <div className='relative w-full h-[220px] sm:h-[240px] rounded-[20px] overflow-hidden bg-[#F2F3F5] p-[24px] flex flex-col justify-between group cursor-pointer shadow-sm transition-transform duration-300 hover:-translate-y-1'>
              <img
                src={expressCreditImg}
                className='absolute right-0 bottom-0 top-0 h-full w-[100%] object-cover object-left pointer-events-none'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#F2F3F5] via-[#F2F3F5]/90 to-transparent w-[65%] pointer-events-none' />

              <div className='relative z-10 max-w-[180px] sm:max-w-[200px]'>
                <h3 className='text-[18px] sm:text-[20px] font-bold text-[#111111] leading-[1.2] mb-[6px]'>
                  {t('offerExpressTitle')}
                </h3>
                <p className='text-[13px] text-[#777777] font-medium'>
                  {t('offerExpressSub')}
                </p>
              </div>

              <div className='relative z-10 mt-auto'>
                <button
                  type='button'
                  className='bg-[#D9D9D9] group-hover:bg-[#D92D20] text-[#333333] group-hover:text-white text-[12px] md:text-[13px] font-semibold px-[16px] py-[8px] rounded-[8px] transition-colors duration-200'
                  onClick={()=> navigate('/expressCredit')}
                >
                  {t('offersBtnMore')}
                </button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  )
}