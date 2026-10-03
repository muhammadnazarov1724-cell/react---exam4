import React from 'react'
import { useTranslation } from 'react-i18next'

import imgPrograms from '../../assets/x1.png'
import imgTerm from '../../assets/x2.png'
import imgKeys from '../../assets/x3.png'
import imgHandKeys from '../../assets/x4.png'
import imgThumbUp from '../../assets/x5.png'
import imgOperator from '../../assets/x6.png'

export default function Section3F() {
  const { t } = useTranslation()

  const advantageCards = [
    {
      id: 'programs',
      type: 'image',
      image: imgPrograms,
      textKey: 'creditAdvantages.cards.programs',
      defaultText: '40 кредитных программ на выбор',
    },
    {
      id: 'term',
      type: 'image',
      image: imgTerm,
      textKey: 'creditAdvantages.cards.term',
      defaultText: 'Срок кредитования до 7 лет',
    },
    {
      id: 'amount',
      type: 'image',
      image: imgKeys,
      textKey: 'creditAdvantages.cards.amount',
      defaultText: 'Размер кредита до 3 000 000 ₽',
    },
    {
      id: 'earlyRepayment',
      type: 'image',
      image: imgHandKeys,
      textKey: 'creditAdvantages.cards.earlyRepayment',
      defaultText: 'Досрочное погашение без штрафа',
    },
    {
      id: 'downPayment',
      type: 'text',
      highlightKey: 'creditAdvantages.cards.downPaymentTitle',
      defaultHighlight: '0%',
      textKey: 'creditAdvantages.cards.downPaymentDesc',
      defaultText: 'Первоначальный взнос от 0%',
    },
    {
      id: 'rate',
      type: 'text',
      highlightKey: 'creditAdvantages.cards.rateTitle',
      defaultHighlight: '1,9%',
      textKey: 'creditAdvantages.cards.rateDesc',
      defaultText: 'Ставка по кредиту от 1,9%',
    },
    {
      id: 'approvalRate',
      type: 'image',
      image: imgThumbUp,
      textKey: 'creditAdvantages.cards.approvalRate',
      defaultText: 'Процент одобрения кредита 98%',
    },
    {
      id: 'responseTime',
      type: 'image',
      image: imgOperator,
      textKey: 'creditAdvantages.cards.responseTime',
      defaultText: 'Ответ кредитных специалистов в течение 30 минут',
    },
  ]

  const conditionsList = [
    { key: 'creditAdvantages.conditions.list.downPayment', defaultText: 'Взнос 0 ₽' },
    { key: 'creditAdvantages.conditions.list.medical', defaultText: 'Автокредит для медицинских работников' },
    { key: 'creditAdvantages.conditions.list.term', defaultText: 'Срок кредита до 7 лет' },
    { key: 'creditAdvantages.conditions.list.discount60k', defaultText: 'Скидка 60 000 на покупку нового авто' },
    { key: 'creditAdvantages.conditions.list.firstCar', defaultText: 'Госпрограмма первое авто' },
    { key: 'creditAdvantages.conditions.list.tradeInDiscount', defaultText: '10% скидки по Trade-in на покупку нового авто' },
    { key: 'creditAdvantages.conditions.list.familyCar', defaultText: 'Семейный автомобиль' },
    { key: 'creditAdvantages.conditions.list.partners', defaultText: 'Более 30 банков партнеров' },
  ]

  const documentsList = [
    { key: 'creditAdvantages.documents.passport', defaultText: 'Паспорт' },
    { key: 'creditAdvantages.documents.driverLicense', defaultText: 'Водительское удостоверение' },
  ]

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans bg-white'>
      <div className='max-w-[1229px] mx-auto'>

        <h2 className='text-[28px] sm:text-[34px] font-black text-[#111111] mb-[28px] tracking-tight'>
          {t('creditAdvantages.title', 'Преимущества автокредита')}
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[48px]'>
          {advantageCards.map((card) => (
            <div
              key={card.id}
              className='bg-[#F7F7F7] rounded-[16px] p-[16px] min-h-[110px] flex items-center justify-between overflow-hidden shadow-sm'
            >
              {card.type === 'image' ? (
                <>
                  <img
                    src={card.image}
                    alt={card.id}
                    className='w-[80px] h-[80px] object-contain shrink-0'
                  />
                  <span className='text-[13px] font-bold text-[#333333] leading-snug pl-[12px] text-right sm:text-left'>
                    {t(card.textKey, card.defaultText)}
                  </span>
                </>
              ) : (
                <div className='flex items-center gap-[16px] w-full'>
                  <span className='text-[36px] font-black text-[#D92D20] leading-none shrink-0'>
                    {t(card.highlightKey, card.defaultHighlight)}
                  </span>
                  <span className='text-[13px] font-bold text-[#333333] leading-snug'>
                    {t(card.textKey, card.defaultText)}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[32px] pt-[20px] border-t border-gray-100'>
          
          <div className='lg:col-span-8'>
            <h3 className='text-[20px] font-black text-[#111111] mb-[20px]'>
              {t('creditAdvantages.conditions.title', 'Условия покупки')}
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[12px]'>
              {conditionsList.map((item, index) => (
                <div key={index} className='flex items-center gap-[10px]'>
                  <span className='w-[16px] h-[16px] rounded-full bg-[#D92D20] text-white text-[10px] flex items-center justify-center font-bold shrink-0'>
                    ✓
                  </span>
                  <span className='text-[13px] font-medium text-[#444444]'>
                    {t(item.key, item.defaultText)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-[32px]'>
            <h3 className='text-[20px] font-black text-[#111111] mb-[20px]'>
              {t('creditAdvantages.documents.title', 'Необходимые документы')}
            </h3>

            <div className='space-y-[12px]'>
              {documentsList.map((item, index) => (
                <div key={index} className='flex items-center gap-[10px]'>
                  <span className='w-[16px] h-[16px] rounded-full bg-[#D92D20] text-white text-[10px] flex items-center justify-center font-bold shrink-0'>
                    ✓
                  </span>
                  <span className='text-[13px] font-medium text-[#444444]'>
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