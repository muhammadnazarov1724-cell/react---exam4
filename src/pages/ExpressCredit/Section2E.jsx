import React from 'react'
import { useTranslation } from 'react-i18next'

import bgTreesBuildingImg from '../../assets/p1.png' 
import silverSedanImg from '../../assets/png2.png'
import redSuvImg from '../../assets/png1.png'

export default function Section2E() {
  const { t } = useTranslation()

  const termsList = [
    {
      id: 'noIncome',
      titleKey: 'creditTerms.items.noIncome.title',
      defaultTitle: 'Без подтверждения дохода',
      descKey: 'creditTerms.items.noIncome.desc',
      defaultDesc:
        'Чтобы получить кредит, вам нужны паспорт и водительское удостоверение. Банк не требует подтверждение дохода, информацию о продавце и оформление КАСКО.',
    },
    {
      id: 'noDownPayment',
      titleKey: 'creditTerms.items.noDownPayment.title',
      defaultTitle: 'Без первоначального взноса',
      descKey: 'creditTerms.items.noDownPayment.desc',
      defaultDesc:
        'Кредит выдаётся без первоначального взноса на карту, с которой без процентов можно снять наличные. Банк доставит карту бесплатно.',
    },
    {
      id: 'noRegistration',
      titleKey: 'creditTerms.items.noRegistration.title',
      defaultTitle: 'Без сложностей с регистрацией',
      descKey: 'creditTerms.items.noRegistration.desc',
      defaultDesc:
        'Для регистрации автомобиля после покупки нужны только копии договора купли-продажи и паспорта транспортного средства. Да, это всё.',
    },
  ]

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1400px] mx-auto relative rounded-[28px] overflow-hidden bg-[#F4F5F7] min-h-[460px] shadow-sm flex items-center p-[24px] sm:p-[40px] lg:p-[48px]'>
        
        <div className='absolute inset-0 z-0'>
          <img
            src={bgTreesBuildingImg}
            className='w-full h-full object-cover object-center opacity-70'
          />
        </div>

        <div className='absolute right-[22%] bottom-[20%] w-[38%] max-w-[440px] hidden md:block z-10 pointer-events-none'>
          <img
            src={silverSedanImg}
            className='w-full h-auto object-contain'
          />
        </div>

        <div className='absolute right-[2%] bottom-[6%] w-[42%] max-w-[500px] hidden md:block z-20 pointer-events-none'>
          <img
            src={redSuvImg}
            className='w-full h-auto object-contain'
          />
        </div>

        <div className='relative z-30 max-w-[580px] space-y-[28px]'>
          
          <h2 className='text-[28px] sm:text-[36px] lg:text-[40px] font-black text-[#111111] leading-[1.1] tracking-tight'>
            {t('creditTerms.title', 'Условия получения кредита')}
          </h2>

          {/* Список условий из массива */}
          <div className='space-y-[20px]'>
            {termsList.map((item) => (
              <div key={item.id} className='flex items-start gap-[14px]'>
                
                <div className='w-[20px] h-[20px] rounded-full bg-[#D92D20] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-[3px] shadow-sm'>
                  ✓
                </div>

                <div className='space-y-[4px]'>
                  <h3 className='text-[16px] sm:text-[18px] font-extrabold text-[#111111] leading-tight'>
                    {t(item.titleKey, item.defaultTitle)}
                  </h3>
                  <p className='text-[11px] sm:text-[12px] text-[#666666] leading-relaxed font-normal max-w-[460px]'>
                    {t(item.descKey, item.defaultDesc)}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}