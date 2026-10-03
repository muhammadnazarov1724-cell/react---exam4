import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Section3M() {
  const { t } = useTranslation()


  const [activeItems, setActiveItems] = useState({
    special: true,
    cash: true,
    tradeIn: true,
    recycling: false,
    credit: false,
    govProgram: true,
  })

  const toggleItem = (key) => {
    setActiveItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className='w-full py-[30px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1229px] mx-auto space-y-[24px] my-[30px]'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
          
          <div className={`relative p-[20px] rounded-[18px] bg-white border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between min-h-[140px] ${
            activeItems.special ? 'border-gray-200' : 'border-gray-100 opacity-60'
          }`}>
            <div className='flex items-start justify-between z-10'>
              <div>
                <h3 className='text-[15px] font-bold text-[#111111] leading-tight'>
                  {t('discounts.special.title', 'Специальное предложение')}
                </h3>
                <p className='text-[12px] text-[#888888] mt-[2px]'>
                  {t('discounts.special.sub', 'от представительства')}
                </p>
              </div>

              <button
                type='button'
                onClick={() => toggleItem('special')}
                className={`w-[48px] h-[26px] rounded-full p-[2px] transition-colors cursor-pointer shrink-0 ${
                  activeItems.special ? 'bg-[#D92D20]' : 'bg-[#E5E5E5]'
                }`}
              >
                <div className={`w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform ${
                  activeItems.special ? 'translate-x-[22px]' : 'translate-x-0'
                }`}>
                  {activeItems.special && <span className='text-[#D92D20] font-bold'>🏷️</span>}
                </div>
              </button>
            </div>

            <div className='text-[22px] font-extrabold text-[#111111] z-10 mt-[16px]'>
              -35% ₽
            </div>

            <div className='absolute right-[-10px] bottom-[-10px] text-[#F0F0F0] text-[80px] pointer-events-none select-none z-0 leading-none'>
              🏷️
            </div>
          </div>

          <div className={`relative p-[20px] rounded-[18px] bg-white border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between min-h-[140px] ${
            activeItems.cash ? 'border-gray-200' : 'border-gray-100 opacity-60'
          }`}>
            <div className='flex items-start justify-between z-10'>
              <div>
                <h3 className='text-[15px] font-bold text-[#111111] leading-tight'>
                  {t('discounts.cash.title', 'Скидка за наличные')}
                </h3>
                <p className='text-[12px] text-[#888888] mt-[2px]'>
                  {t('discounts.cash.sub', 'от ABC Auto')}
                </p>
              </div>

              <button
                type='button'
                onClick={() => toggleItem('cash')}
                className={`w-[48px] h-[26px] rounded-full p-[2px] transition-colors cursor-pointer shrink-0 ${
                  activeItems.cash ? 'bg-[#D92D20]' : 'bg-[#E5E5E5]'
                }`}
              >
                <div className={`w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform ${
                  activeItems.cash ? 'translate-x-[22px]' : 'translate-x-0'
                }`}>
                  {activeItems.cash && <span className='text-[#D92D20] font-bold'>👛</span>}
                </div>
              </button>
            </div>

            <div className='text-[22px] font-extrabold text-[#111111] z-10 mt-[16px]'>
              -40 000 ₽
            </div>

            <div className='absolute right-[-10px] bottom-[-10px] text-[#F0F0F0] text-[80px] pointer-events-none select-none z-0 leading-none'>
              👛
            </div>
          </div>

          <div className={`relative p-[20px] rounded-[18px] bg-white border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between min-h-[140px] ${
            activeItems.tradeIn ? 'border-gray-200' : 'border-gray-100 opacity-60'
          }`}>
            <div className='flex items-start justify-between z-10'>
              <div>
                <h3 className='text-[15px] font-bold text-[#111111] leading-tight'>
                  {t('discounts.tradeIn.title', 'Выгода за Trade-in')}
                </h3>
                <p className='text-[12px] text-[#888888] mt-[2px]'>
                  {t('discounts.tradeIn.sub', 'от ABC Auto')}
                </p>
              </div>

              <button
                type='button'
                onClick={() => toggleItem('tradeIn')}
                className={`w-[48px] h-[26px] rounded-full p-[2px] transition-colors cursor-pointer shrink-0 ${
                  activeItems.tradeIn ? 'bg-[#D92D20]' : 'bg-[#E5E5E5]'
                }`}
              >
                <div className={`w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform ${
                  activeItems.tradeIn ? 'translate-x-[22px]' : 'translate-x-0'
                }`}>
                  {activeItems.tradeIn && <span className='text-[#D92D20] font-bold'>🔄</span>}
                </div>
              </button>
            </div>

            <div className='flex items-baseline justify-between z-10 mt-[16px]'>
              <span className='text-[22px] font-extrabold text-[#111111]'>
                -120 000 ₽
              </span>
              <a href='#' className='text-[11px] text-[#999999] underline hover:text-[#111111] transition-colors'>
                {t('discounts.more', 'Подробнее')}
              </a>
            </div>

            <div className='absolute right-[-10px] bottom-[-10px] text-[#F0F0F0] text-[80px] pointer-events-none select-none z-0 leading-none'>
              🔄
            </div>
          </div>

          <div className={`relative p-[20px] rounded-[18px] bg-white border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between min-h-[140px] ${
            activeItems.recycling ? 'border-gray-200' : 'border-gray-100'
          }`}>
            <div className='flex items-start justify-between z-10'>
              <div>
                <h3 className={`text-[15px] font-bold leading-tight ${activeItems.recycling ? 'text-[#111111]' : 'text-[#BBBBBB]'}`}>
                  {t('discounts.recycling.title', 'Выгода за утилизацию')}
                </h3>
                <p className={`text-[12px] mt-[2px] ${activeItems.recycling ? 'text-[#888888]' : 'text-[#CCCCCC]'}`}>
                  {t('discounts.recycling.sub', 'от ABC Auto')}
                </p>
              </div>

              <button
                type='button'
                onClick={() => toggleItem('recycling')}
                className={`w-[48px] h-[26px] rounded-full p-[2px] transition-colors cursor-pointer shrink-0 ${
                  activeItems.recycling ? 'bg-[#D92D20]' : 'bg-[#E5E5E5]'
                }`}
              >
                <div className={`w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform ${
                  activeItems.recycling ? 'translate-x-[22px]' : 'translate-x-0'
                }`}>
                  {activeItems.recycling && <span className='text-[#D92D20] font-bold'>♻️</span>}
                </div>
              </button>
            </div>

            <div className='flex items-baseline justify-between z-10 mt-[16px]'>
              <span className={`text-[22px] font-extrabold ${activeItems.recycling ? 'text-[#111111]' : 'text-[#CCCCCC]'}`}>
                -60 000 ₽
              </span>
              <a href='#' className={`text-[11px] underline transition-colors ${activeItems.recycling ? 'text-[#999999] hover:text-[#111111]' : 'text-[#CCCCCC]'}`}>
                {t('discounts.more', 'Подробнее')}
              </a>
            </div>

            <div className='absolute right-[-10px] bottom-[-10px] text-[#F4F4F4] text-[80px] pointer-events-none select-none z-0 leading-none'>
              ♻️
            </div>
          </div>

          <div className={`relative p-[20px] rounded-[18px] bg-white border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between min-h-[140px] ${
            activeItems.credit ? 'border-gray-200' : 'border-gray-100'
          }`}>
            <div className='flex items-start justify-between z-10'>
              <div>
                <h3 className={`text-[15px] font-bold leading-tight ${activeItems.credit ? 'text-[#111111]' : 'text-[#BBBBBB]'}`}>
                  {t('discounts.credit.title', 'Скидка при оформлении')}
                </h3>
                <p className={`text-[12px] mt-[2px] ${activeItems.credit ? 'text-[#888888]' : 'text-[#CCCCCC]'}`}>
                  {t('discounts.credit.sub', 'Авто в кредит 1,9%')}
                </p>
              </div>

              <button
                type='button'
                onClick={() => toggleItem('credit')}
                className={`w-[48px] h-[26px] rounded-full p-[2px] transition-colors cursor-pointer shrink-0 ${
                  activeItems.credit ? 'bg-[#D92D20]' : 'bg-[#E5E5E5]'
                }`}
              >
                <div className={`w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform ${
                  activeItems.credit ? 'translate-x-[22px]' : 'translate-x-0'
                }`}>
                  {activeItems.credit && <span className='text-[#D92D20] font-bold'>%</span>}
                </div>
              </button>
            </div>

            <div className='flex items-baseline justify-between z-10 mt-[16px]'>
              <span className={`text-[22px] font-extrabold ${activeItems.credit ? 'text-[#111111]' : 'text-[#CCCCCC]'}`}>
                -40 000 ₽
              </span>
              <a href='#' className={`text-[11px] underline transition-colors ${activeItems.credit ? 'text-[#999999] hover:text-[#111111]' : 'text-[#CCCCCC]'}`}>
                {t('discounts.more', 'Подробнее')}
              </a>
            </div>

            <div className='absolute right-[-10px] bottom-[-10px] text-[#F4F4F4] text-[80px] font-black pointer-events-none select-none z-0 leading-none'>
              %
            </div>
          </div>

          <div className={`relative p-[20px] rounded-[18px] bg-white border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between min-h-[140px] ${
            activeItems.govProgram ? 'border-gray-200' : 'border-gray-100 opacity-60'
          }`}>
            <div className='flex items-start justify-between z-10'>
              <div>
                <h3 className='text-[15px] font-bold text-[#111111] leading-tight'>
                  {t('discounts.govProgram.title', 'Госпрограмма')}
                </h3>
                <p className='text-[11px] text-[#888888] mt-[2px] max-w-[200px] leading-tight'>
                  {t('discounts.govProgram.sub', 'Семейный автомобиль, Первый автомобиль, Работникам медицины, Госпрограмма Trade-in')}
                </p>
              </div>

              <button
                type='button'
                onClick={() => toggleItem('govProgram')}
                className={`w-[48px] h-[26px] rounded-full p-[2px] transition-colors cursor-pointer shrink-0 ${
                  activeItems.govProgram ? 'bg-[#D92D20]' : 'bg-[#E5E5E5]'
                }`}
              >
                <div className={`w-[22px] h-[22px] rounded-full bg-white shadow-md flex items-center justify-center text-[10px] transition-transform ${
                  activeItems.govProgram ? 'translate-x-[22px]' : 'translate-x-0'
                }`}>
                  {activeItems.govProgram && <span className='text-[#D92D20] font-bold'>🦅</span>}
                </div>
              </button>
            </div>

            <div className='text-[20px] sm:text-[22px] font-extrabold text-[#111111] z-10 mt-[16px]'>
              10% {t('discounts.govProgram.calcText', 'от цены авто')}
            </div>

            <div className='absolute right-[-10px] bottom-[-10px] text-[#F0F0F0] text-[80px] pointer-events-none select-none z-0 leading-none'>
              🦅
            </div>
          </div>

        </div>

        <div className='w-full rounded-[18px] overflow-hidden flex flex-col md:flex-row items-stretch shadow-md'>
          
          <div className='w-full md:w-[35%] bg-[#F7F7F7] p-[20px] sm:p-[24px] flex flex-col justify-center'>
            <span className='text-[12px] text-[#888888] font-medium block mb-[4px]'>
              {t('discounts.summary.maxLabel', 'Максимальная скидка')}
            </span>
            <span className='text-[24px] sm:text-[28px] font-black text-[#A0A0A0]'>
              {t('discounts.summary.upTo', 'до')} 500 000 ₽
            </span>
          </div>

          <div className='w-full md:w-[65%] bg-[#D92D20] p-[20px] sm:p-[24px] flex flex-col sm:flex-row items-center justify-between gap-[16px]'>
            <div>
              <span className='text-[12px] text-white/80 font-medium block uppercase mb-[2px]'>
                {t('discounts.summary.yourDiscount', 'Ваша скидка')}
              </span>
              <span className='text-[28px] sm:text-[34px] font-black text-white leading-none tracking-tight'>
                {t('discounts.summary.upTo', 'до')} 500 000 ₽
              </span>
            </div>

            <button
              type='button'
              className='w-full sm:w-auto h-[48px] px-[28px] bg-white hover:bg-gray-100 text-[#D92D20] font-black text-[12px] tracking-wider uppercase rounded-[8px] transition-colors cursor-pointer shadow-sm shrink-0'
            >
              {t('discounts.summary.button', 'ЗАФИКСИРОВАТЬ УСЛОВИЯ')}
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}