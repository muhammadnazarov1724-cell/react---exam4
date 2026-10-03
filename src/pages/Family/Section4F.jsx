import React from 'react'
import { useTranslation } from 'react-i18next'


import bgTreesImg from '../../assets/p1.png' 
import redCarImg from '../../assets/p2.png'
import coupleImg from '../../assets/p3.png' 

export default function Section4F() {
  const { t } = useTranslation()

  const conditionsList = [
    { key: 'discountBanner.items.subsidy10', defaultText: '10% размер субсидии от стоимости автомобиля без дополнительного оборудования' },
    { key: 'discountBanner.items.subsidy10', defaultText: '10% размер субсидии от стоимости автомобиля без дополнительного оборудования' },
    { key: 'discountBanner.items.subsidy10', defaultText: '10% размер субсидии от стоимости автомобиля без дополнительного оборудования' },
  ]

  const requirementsList = [
    { key: 'discountBanner.items.subsidy10', defaultText: '10% размер субсидии от стоимости автомобиля без дополнительного оборудования' },
    { key: 'discountBanner.items.subsidy10', defaultText: '10% размер субсидии от стоимости автомобиля без дополнительного оборудования' },
    { key: 'discountBanner.items.subsidy10', defaultText: '10% размер субсидии от стоимости автомобиля без дополнительного оборудования' },
  ]

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1400px] mx-auto relative rounded-[28px] overflow-hidden bg-[#F7F8FA] min-h-[480px] shadow-sm flex items-center'>
        
        <div className='absolute inset-0 z-0'>
          <img
            src={bgTreesImg}
            className='w-full h-full object-cover object-right opacity-60'
          />
        </div>

        <div className='absolute right-[18%] bottom-[15%] w-[45%] max-w-[500px] hidden md:block z-10 pointer-events-none'>
          <img
            src={redCarImg}
            className='w-full h-auto object-contain'
          />
        </div>

        <div className='absolute right-0 bottom-0 w-[42%] max-w-[480px] hidden md:block z-20 pointer-events-none'>
          <img
            src={coupleImg}
            className='w-full h-auto object-contain object-bottom'
          />
        </div>

        <div className='relative z-30 p-[24px] sm:p-[40px] lg:p-[48px] max-w-[760px]'>
          
          <h2 className='text-[28px] sm:text-[36px] lg:text-[40px] font-black text-[#111111] leading-[1.15] mb-[16px] tracking-tight'>
            {t('discountBanner.title', 'Получите скидку на покупку нового авто!')}
          </h2>

          <p className='text-[12px] sm:text-[13px] text-[#666666] leading-relaxed mb-[32px] max-w-[620px] font-normal'>
            {t(
              'discountBanner.subtitle',
              'Помогаем молодым семьям не только встать на ноги, но и сесть за руль! Если вы — будущие клиенты, государство оплатит 10% от общей суммы кредита на покупку нового автомобиля (для Дальнего Востока — 25%).'
            )}
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[32px] gap-y-[24px] max-w-[640px]'>
            
            <div className='space-y-[12px]'>
              <h3 className='text-[14px] font-bold text-[#111111] mb-[12px]'>
                {t('discountBanner.sections.conditions', 'Основные условия программ')}
              </h3>

              {conditionsList.map((item, index) => (
                <div key={index} className='flex items-start gap-[10px]'>
                  <span className='w-[16px] h-[16px] rounded-full bg-[#D92D20] text-white text-[10px] flex items-center justify-center font-bold shrink-0 mt-[2px] shadow-sm'>
                    ✓
                  </span>
                  <span className='text-[11px] font-medium text-[#444444] leading-tight'>
                    {t(item.key, item.defaultText)}
                  </span>
                </div>
              ))}
            </div>

            <div className='space-y-[12px]'>
              <h3 className='text-[14px] font-bold text-[#111111] mb-[12px]'>
                {t('discountBanner.sections.requirements', 'Общие требования для участия')}
              </h3>

              {requirementsList.map((item, index) => (
                <div key={index} className='flex items-start gap-[10px]'>
                  <span className='w-[16px] h-[16px] rounded-full bg-[#D92D20] text-white text-[10px] flex items-center justify-center font-bold shrink-0 mt-[2px] shadow-sm'>
                    ✓
                  </span>
                  <span className='text-[11px] font-medium text-[#444444] leading-tight'>
                    {t(item.key, item.defaultText)}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}