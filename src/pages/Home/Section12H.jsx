import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

import 'swiper/css'
import 'swiper/css/navigation'

import blogImg from '../../assets/Rectangle 438.png' 

export default function Section12H() {
  const [t] = useTranslation()
  const [activeTab, setActiveTab] = useState('dealership')

  const posts = [
    { id: 1, date: 'blogDate', title: 'blogArticleTitle', image: blogImg },
    { id: 2, date: 'blogDate', title: 'blogArticleTitle', image: blogImg },
    { id: 3, date: 'blogDate', title: 'blogArticleTitle', image: blogImg },
    { id: 4, date: 'blogDate', title: 'blogArticleTitle', image: blogImg },
    { id: 5, date: 'blogDate', title: 'blogArticleTitle', image: blogImg },
  ]

  const tabs = [
    { id: 'dealership', label: 'aboutDealerTabs.dealership' },
    { id: 'tradeIn', label: 'aboutDealerTabs.tradeIn' },
    { id: 'purchase', label: 'aboutDealerTabs.purchase' },
  ]

  return (
    <section className='w-full bg-white py-[50px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto'>
        
        <div className='mb-[60px]'>
          
          <div className='flex items-center justify-between mb-[28px]'>
            <div className='flex items-center gap-[16px]'>
              <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111]'>
                {t('blogTitle')}
              </h2>
              <button
                type='button'
                className='bg-[#D92D20] hover:bg-[#B82216] text-white text-[13px] font-semibold px-[16px] py-[8px] rounded-[20px] transition-colors cursor-pointer'
              >
                {t('blogAllBtn')}
              </button>
            </div>

            <div className='flex items-center gap-[10px]'>
              <button
                type='button'
                aria-label='Previous'
                className='blog-prev-btn w-[40px] h-[40px] rounded-[10px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] flex items-center justify-center transition-colors cursor-pointer shadow-sm'
              >
                <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                </svg>
              </button>

              <button
                type='button'
                aria-label='Next'
                className='blog-next-btn w-[40px] h-[40px] rounded-[10px] bg-[#D92D20] hover:bg-[#B82216] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm'
              >
                <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>
          </div>

          {/* Слайдер Блога */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.blog-prev-btn',
              nextEl: '.blog-next-btn',
            }}
            breakpoints={{
              540: { slidesPerView: 2 },
              800: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className='w-full'
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className='flex flex-col group cursor-pointer'>

                  <div className='w-full h-[160px] rounded-[20px] overflow-hidden mb-[12px] bg-[#F5F5F5]'>
                    <img
                      src={post.image}
                      alt={t(post.title)}
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  {/* Дата */}
                  <span className='text-[12px] text-[#A0A0A0] font-normal mb-[6px]'>
                    {t(post.date)}
                  </span>
                  {/* Заголовок карточки */}
                  <h3 className='text-[14px] md:text-[15px] font-bold text-[#111111] leading-[1.35] line-clamp-2 group-hover:text-[#D92D20] transition-colors'>
                    {t(post.title)}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <div>
          
          <div className='flex items-center gap-[32px] border-b border-[#EAEAEA] mb-[28px] pb-[12px]'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type='button'
                onClick={() => setActiveTab(tab.id)}
                className={`text-[15px] md:text-[16px] font-bold relative transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-[#D92D20]'
                    : 'text-[#333333] hover:text-[#111111]'
                }`}
              >
                {t(tab.label)}
                {activeTab === tab.id && (
                  <span className='absolute left-0 bottom-[-13px] w-full h-[3px] bg-[#D92D20] rounded-full' />
                )}
              </button>
            ))}
          </div>

          <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111] mb-[16px]'>
            {t('aboutDealerTitle')}
          </h2>

          <p className='text-[14px] md:text-[15px] text-[#666666] leading-[1.6] max-w-[1000px] font-normal'>
            {t(`aboutDealerText.${activeTab}`)}
          </p>

        </div>

      </div>
    </section>
  )
}