import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'

// Erstat stilbillede-stierne med dine egne aktiver
import familyImg from '../../assets/Rectangle 438.png'
import travelImg from '../../assets/Rectangle 440.png'
import cityImg from '../../assets/Rectangle 439.png'

export default function Section4H() {
  const [t] = useTranslation()
  const navigate = useNavigate()

  const collections = [
    {
      id: 1,
      title: 'collectionFamilyTitle',
      image: familyImg,
    },
    {
      id: 2,
      title: 'collectionTravelTitle',
      image: travelImg,
    },
    {
      id: 3,
      title: 'collectionCityTitle',
      image: cityImg,
    },
    {
      id: 4,
      title: 'collectionFamilyTitle',
      image: familyImg,
    },
  ]

  return (
    <section className='w-full bg-white py-[40px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto relative'>
        
        {/* Оглавление и кнопки навигации */}
        <div className='flex items-center justify-between mb-[24px]'>
          <div className='flex items-center gap-[16px]'>
            <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111]'>
              {t('collectionsTitle')}
            </h2>
            <button
              type='button'
              className='bg-[#D92D20] hover:bg-[#B82216] text-white text-[12px] md:text-[13px] font-semibold px-[16px] py-[8px] rounded-full transition-colors'
            >
              {t('collectionsAllBtn')}
            </button>
          </div>

          {/* Стрелки навигации в правом верхнем углу */}
          <div className='flex items-center gap-[10px]'>
            <button
              type='button'
              aria-label='Previous'
              className='collections-prev-btn w-[40px] h-[40px] rounded-[10px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] flex items-center justify-center transition-colors cursor-pointer'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
            </button>

            <button
              type='button'
              aria-label='Next'
              className='collections-next-btn w-[40px] h-[40px] rounded-[10px] bg-[#D92D20] hover:bg-[#B82216] text-white flex items-center justify-center transition-colors cursor-pointer'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.collections-prev-btn',
            nextEl: '.collections-next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='w-full'
        >
          {collections.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='relative w-full h-[280px] sm:h-[300px] md:h-[320px] rounded-[20px] overflow-hidden group cursor-pointer shadow-sm'>

                <img
                  src={item.image}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                <div className='absolute bottom-0 left-0 right-0 p-[20px] flex items-end justify-between gap-[12px] z-10'>
                  <h3 className='text-white font-bold text-[18px] md:text-[20px] leading-[1.2] max-w-[180px]'>
                    {t(item.title)}
                  </h3>

                  <button
                    type='button'
                    className='bg-[#D92D20] hover:bg-[#B82216] text-white text-[12px] md:text-[13px] font-semibold px-[18px] py-[9px] rounded-[8px] transition-colors shrink-0'
                    onClick={()=> navigate('/family')}
                    >
                    {t('collectionsBtnView')}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}