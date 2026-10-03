import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import redCar from '../../assets/rio_new 1.png'     
import whiteCar from '../../assets/ext-front_tcm-3020-1767644 1.png' 
import silverCar from '../../assets/rapid-entry-AVN 1.png' 
import cityBg from '../../assets/1059 2.jpg'   

export default function Section1H() {

    const [t] = useTranslation()
    
  const slides = [
    {
      id: 1,
      badge: 'heroBadge',
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
    },
    {
      id: 2,
      badge: 'heroBadge',
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
    },
    {
      id: 3,
      badge: 'heroBadge',
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
    },
  ]

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] bg-white my-[70px]'>
      <div className='max-w-[1330px] mx-auto relative group'>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          navigation={{
            prevEl: '.custom-swiper-prev',
            nextEl: '.custom-swiper-next',
          }}
          className='w-full rounded-[24px] bg-[#F2F3F5] overflow-hidden'
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className='relative w-full min-h-[420px] md:min-h-[480px] flex items-center px-[24px] sm:px-[40px] md:px-[70px] py-[40px] bg-no-repeat bg-right-bottom bg-contain overflow-hidden'
                style={{ backgroundImage: `url(${cityBg})` }}
              >
                <div className='grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-[20px] z-10'>
                  
                  <div className='lg:col-span-5 flex flex-col items-start z-10'>
                    <span className='bg-[#D92D20] text-white text-[12px] md:text-[13px] font-bold px-[14px] py-[6px] rounded-full mb-[20px] shadow-sm'>
                      {t(slide.badge)}
                    </span>

                    <h1 className='text-[28px] sm:text-[36px] md:text-[44px] font-extrabold text-[#111111] leading-[1.15] mb-[16px] max-w-[540px]'>
                      {t(slide.title)}
                    </h1>

                    <p className='text-[18px] md:text-[22px] font-normal text-[#777777]'>
                      {t(slide.subtitle)}
                    </p>
                  </div>

                  {/* Блок с машинами: увеличены размеры и скорректированы координаты позиционирования */}
                  <div className='lg:col-span-7 relative w-full h-[260px] sm:h-[320px] md:h-[380px] flex items-center justify-end mt-[20px] lg:mt-0'>
                    
                    {/* Серебристая машина (на заднем плане справа) */}
                    <img
                      src={silverCar}
                      alt='Silver Car'
                      className='absolute right-[-2%] bottom-[16%] w-[48%] sm:w-[50%] md:w-[52%] h-auto object-contain z-10 filter drop-shadow-md'
                    />

                    {/* Белая машина (в центре на среднем плане) */}
                    <img
                      src={whiteCar}
                      alt='White Car'
                      className='absolute right-[24%] bottom-[12%] w-[54%] sm:w-[58%] md:w-[60%] h-auto object-contain z-20 filter drop-shadow-lg'
                    />

                    {/* Красная машина (на переднем плане слева) */}
                    <img
                      src={redCar}
                      alt='Red Car'
                      className='absolute right-[42%] sm:right-[44%] bottom-[2%] w-[68%] sm:w-[72%] md:w-[75%] h-auto object-contain z-30 filter drop-shadow-2xl'
                    />

                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-pagination absolute bottom-[24px] left-[24px] sm:left-[40px] md:left-[70px] z-20 flex items-center gap-[8px] !w-auto' />

        <button
          type='button'
          aria-label='Previous slide'
          className='custom-swiper-prev absolute left-[-16px] md:left-[-24px] top-1/2 -translate-y-1/2 z-30 w-[44px] h-[44px] bg-white text-[#222222] hover:text-[#D92D20] rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 cursor-pointer'
        >
          <svg className='w-[20px] h-[20px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
          </svg>
        </button>

        <button
          type='button'
          aria-label='Next slide'
          className='custom-swiper-next absolute right-[-16px] md:right-[-24px] top-1/2 -translate-y-1/2 z-30 w-[44px] h-[44px] bg-white text-[#222222] hover:text-[#D92D20] rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105 cursor-pointer'
        >
          <svg className='w-[20px] h-[20px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </button>

      </div>

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #BDBDBD;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          margin: 0 4px !important;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: transparent;
          border: 2px solid #D92D20;
          width: 12px;
          height: 12px;
          position: relative;
        }
        .custom-pagination .swiper-pagination-bullet-active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 4px;
          background-color: #D92D20;
          border-radius: 50%;
        }
      `}</style>
    </section>
  )
}