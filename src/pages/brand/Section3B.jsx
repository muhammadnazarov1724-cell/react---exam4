import React from 'react'
import priusImg from '../../assets/1 627.png'

export default function Section3B() {
  const cars = [
    { id: 1, name: 'Toyota Prius' },
    { id: 2, name: 'Toyota Prius' },
    { id: 3, name: 'Toyota Prius' },
    { id: 4, name: 'Toyota Prius' },
  ]

  return (
    <section className='w-full bg-white py-[40px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto'>
        
        <div className='flex items-center justify-between mb-[28px]'>
          <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111]'>
            Архивные модели
          </h2>

          <div className='flex items-center gap-[10px]'>
            <button
              type='button'
              aria-label='Previous'
              className='w-[40px] h-[40px] rounded-[10px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] flex items-center justify-center transition-colors cursor-pointer shadow-sm'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
            </button>

            <button
              type='button'
              aria-label='Next'
              className='w-[40px] h-[40px] rounded-[10px] bg-[#D92D20] hover:bg-[#B82216] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm'
            >
              <svg className='w-[18px] h-[18px]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>

        {/* Сетка карточек через .map() */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
          {cars.map((car, index) => (
            <div
              key={index}
              className='bg-white rounded-[20px] p-[20px] border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between'
            >
              <div>
                {/* Название и Логотип бренда */}
                <div className='flex items-center justify-between mb-[16px]'>
                  <h3 className='text-[18px] font-bold text-[#111111]'>
                    {car.name}
                  </h3>
                  <div className='w-[24px] h-[24px] rounded-full bg-[#D92D20] text-white flex items-center justify-center text-[10px] font-bold'>
                    T
                  </div>
                </div>

                {/* Изображение машины */}
                <div className='w-full h-[120px] flex items-center justify-center mb-[16px]'>
                  <img
                    src={priusImg}
                    alt={car.name}
                    className='max-w-full max-h-full object-contain'
                  />
                </div>

                {/* Цены и Скидки */}
                <div className='mb-[16px]'>
                  <span className='text-[12px] text-[#D92D20] font-bold block mb-[2px]'>
                    Выгода до 300 000 ₽
                  </span>
                  <div className='flex items-baseline gap-[8px]'>
                    <span className='text-[20px] font-black text-[#111111]'>
                      от 980 000 ₽
                    </span>
                    <span className='text-[13px] text-[#A0A0A0] line-through font-normal'>
                      1 280 000 ₽
                    </span>
                  </div>
                </div>

                {/* Список условий со скидками и галочками */}
                <div className='space-y-[6px] border-t border-[#F0F0F0] pt-[12px] mb-[16px] text-[12px]'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <span className='text-[#D92D20] font-bold mr-[4px]'>-20%</span>
                      <span className='text-[#444444]'>Покупка в трейд-ин</span>
                    </div>
                    <div className='w-[16px] h-[16px] rounded-[4px] bg-[#D92D20] text-white flex items-center justify-center text-[10px]'>
                      ✓
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div>
                      <span className='text-[#D92D20] font-bold mr-[4px]'>-10%</span>
                      <span className='text-[#444444]'>Кредит</span>
                    </div>
                    <div className='w-[16px] h-[16px] rounded-[4px] bg-[#D92D20] text-white flex items-center justify-center text-[10px]'>
                      ✓
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div>
                      <span className='text-[#D92D20] font-bold mr-[4px]'>-10%</span>
                      <span className='text-[#444444]'>Распродажа</span>
                    </div>
                    <div className='w-[16px] h-[16px] rounded-[4px] bg-[#D92D20] text-white flex items-center justify-center text-[10px]'>
                      ✓
                    </div>
                  </div>
                </div>

                {/* Подарки */}
                <div className='space-y-[8px] mb-[20px] text-[11px]'>
                  <div className='flex items-center gap-[8px]'>
                    <div className='w-[22px] h-[22px] rounded-full bg-[#333333] text-white flex items-center justify-center shrink-0'>
                      🎁
                    </div>
                    <div>
                      <span className='text-[#333333] font-medium block leading-none'>Страхование</span>
                      <span className='text-[#D92D20] font-semibold'>в подарок</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-[8px]'>
                    <div className='w-[22px] h-[22px] rounded-full bg-[#D92D20] text-white flex items-center justify-center shrink-0'>
                      🎁
                    </div>
                    <div>
                      <span className='text-[#333333] font-medium block leading-none'>КАСКО</span>
                      <span className='text-[#D92D20] font-semibold'>в подарок</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-[8px]'>
                    <div className='w-[22px] h-[22px] rounded-full bg-[#777777] text-white flex items-center justify-center shrink-0'>
                      🎁
                    </div>
                    <div>
                      <span className='text-[#333333] font-medium block leading-none'>Комплект резины</span>
                      <span className='text-[#D92D20] font-semibold'>в подарок</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки */}
              <div className='space-y-[8px]'>
                <button
                  type='button'
                  className='w-full h-[40px] bg-[#EFEFEF] hover:bg-[#E2E2E2] text-[#333333] font-semibold text-[13px] rounded-[10px] transition-colors cursor-pointer'
                >
                  Подробнее
                </button>

                <button
                  type='button'
                  className='w-full h-[40px] bg-[#D92D20] hover:bg-[#B82216] text-white font-bold text-[13px] rounded-[10px] transition-colors cursor-pointer shadow-sm'
                >
                  Забронировать
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}