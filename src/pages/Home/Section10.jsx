import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Otziv3() {

  const [t] = useTranslation()

  const [expandedCards, setExpandedCards] = useState({})

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const reviewsList = [
    { id: 1, author: "reviewAuthor", text: "reviewText" },
    { id: 2, author: "reviewAuthor", text: "reviewText" },
    { id: 3, author: "reviewAuthor", text: "reviewText" },
  ]

  return (
    <section className='w-full bg-white text-[#222222] font-sans py-[40px] px-[20px]'>
      <div className='max-w-[1200px] m-auto'>
        
        <div className='border-b border-gray-200 pb-[16px] mb-[32px]'>
          <h1 className='text-[32px] md:text-[40px] font-bold text-[#222222]'>
            {t("reviewsTitle")}
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[40px]'>
          {reviewsList.map((item) => {
            const isExpanded = !!expandedCards[item.id]

            return (
              <div
                key={item.id}
                className='bg-[#F3F3F3] rounded-[16px] overflow-hidden flex flex-col justify-between'
              >
                <div className='relative w-full aspect-[16/10] bg-[#292929] flex items-center justify-center group cursor-pointer'>
                  <div className='absolute inset-0 flex items-center justify-center opacity-10 font-black text-[90px] text-white select-none'>
                    A
                  </div>

                  {/* Кнопка Play */}
                  <button
                    type='button'
                    aria-label='Play video'
                    className='w-[52px] h-[52px] bg-[#D92D20] rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-200 group-hover:scale-110 z-10'
                  >
                    <svg className='w-[20px] h-[20px] ml-[3px]' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </button>
                </div>

                <div className='p-[20px] flex flex-col flex-grow justify-between gap-[16px]'>
                  <div>
                    <h3 className='text-[16px] font-bold text-[#222222] mb-[10px]'>
                      {t(item.author)}
                    </h3>
                    <p
                      className={`text-[13px] text-[#666666] leading-[1.6] transition-all duration-300 ${
                        isExpanded ? '' : 'line-clamp-4'
                      }`}
                    >
                      {t(item.text)}
                    </p>
                  </div>

                  <button
                    type='button'
                    onClick={() => toggleExpand(item.id)}
                    className='self-start bg-[#E4E4E4] hover:bg-[#DCDCD2] text-[#333333] text-[12px] font-medium py-[6px] px-[16px] rounded-[12px] flex items-center gap-[6px] transition-colors'
                  >
                    <span>{isExpanded ? t("reviewLess") : t("reviewMore")}</span>
                    <svg
                      className={`w-[12px] h-[12px] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className='flex justify-center'>
          <button
            type='button'
            className='bg-[#D92D20] hover:bg-[#B82216] text-white font-bold text-[13px] tracking-wider uppercase px-[36px] py-[14px] rounded-[6px] transition-colors shadow-sm'
          >
            {t("btnLoadMore")}
          </button>
        </div>

      </div>
    </section>
  )
}