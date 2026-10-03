import React from 'react'
import { useTranslation } from 'react-i18next'

import taxiCarImg from '../../assets/taxiScoda.png'

export default function Section3T() {
  const { t } = useTranslation()

  // Данные для колонки "ПРЕИМУЩЕСТВА / Свое такси"
  const ownTaxiList = [
    { key: 'incomeBanner.advantages.ptc', defaultText: 'Авто в личной собственности по ПТС' },
    { key: 'incomeBanner.advantages.credit', defaultText: 'Платеж по кредиту от 90 руб. в день' },
    { key: 'incomeBanner.advantages.installment', defaultText: 'Рассрочка 0% без первоначального взноса' },
    { key: 'incomeBanner.advantages.gbo', defaultText: 'Бесплатная установка ГБО для экономии топлива' },
    { key: 'incomeBanner.advantages.gost', defaultText: 'Оклейка автомобиля по ГОСТу' },
    { key: 'incomeBanner.advantages.documents', defaultText: 'Быстрое оформление всех документов под ключ' },
  ]

  // Данные для колонки "НЕДОСТАТКИ / Аренда такси"
  const rentTaxiList = [
    { key: 'incomeBanner.disadvantages.autopark', defaultText: 'Авто в собственности автопарка' },
    { key: 'incomeBanner.disadvantages.rent', defaultText: 'Платеж за арендованное такси от 1200 руб. в день' },
    { key: 'incomeBanner.disadvantages.commissions', defaultText: 'Риск скрытых комиссий и переплат' },
    { key: 'incomeBanner.disadvantages.equipment', defaultText: 'Нельзя установить доп. оборудование' },
    { key: 'incomeBanner.disadvantages.gostMismatch', defaultText: 'Возможно несоответствие нормам ГОСТ' },
    { key: 'incomeBanner.disadvantages.longDocuments', defaultText: 'Долгое оформление документов' },
  ]

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1229px] mx-auto relative rounded-[28px] overflow-hidden bg-[#222222] min-h-[460px] shadow-lg flex items-center'>
        
        {/* ЛЕВАЯ ЧАСТЬ: Заголовок и автомобиль */}
        <div className='relative z-20 flex flex-col justify-between h-full p-[24px] sm:p-[40px] lg:p-[48px] max-w-[620px]'>
          
          {/* Главный заголовок */}
          <h2 className='text-[28px] sm:text-[36px] lg:text-[40px] font-black text-white leading-[1.1] mb-[20px] tracking-tight whitespace-pre-line'>
            {t('incomeBanner.title', 'Сколько можно\nзаработать на такси?')}
          </h2>

          {/* Желтый автомобиль (Позиционируется абсолютно, чтобы перекрывать край) */}
          <div className='absolute left-[-20px] top-[100px] w-[95%] w-[400px] w-[500px] z-10 pointer-events-none'>
            <img
              src={taxiCarImg}
              className='w-full h-auto object-contain object-left-bottom drop-shadow-2xl'
            />
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Две колонки сравнения (Преимущества / Недостатки) */}
        <div className='relative z-30 p-[24px] sm:p-[40px] lg:p-[48px] pl-[10px] grid grid-cols-1 sm:grid-cols-2 gap-x-[32px] gap-y-[24px] flex-1'>
          
          {/* Колонка 1: Свое такси (ПРЕИМУЩЕСТВА) */}
          <div className='space-y-[12px] text-white/90'>
            
            {/* Хедер колонки: Зеленый бейдж + Заголовок */}
            <div className='space-y-[6px] mb-[16px]'>
              <span className='inline-block bg-[#02BC3F] text-white text-[10px] font-bold px-[12px] py-[3px] rounded-full uppercase tracking-wider'>
                {t('incomeBanner.headings.advantages', 'ПРЕИМУЩЕСТВА')}
              </span>
              <h3 className='text-[18px] sm:text-[20px] lg:text-[22px] font-black leading-tight'>
                {t('incomeBanner.headings.ownTaxi', 'Свое такси')}
              </h3>
            </div>

            {/* Список из массива (map) */}
            {ownTaxiList.map((item, index) => (
              <div key={index} className='flex items-start gap-[10px]'>
                {/* Зеленая иконка Плюс */}
                <div className='w-[16px] h-[16px] rounded-full bg-[#02BC3F] text-white text-[12px] flex items-center justify-center font-black shrink-0 mt-[3px] shadow-sm'>
                  +
                </div>
                <span className='text-[11px] sm:text-[12px] font-medium leading-tight opacity-90'>
                  {t(item.key, item.defaultText)}
                </span>
              </div>
            ))}
          </div>

          {/* Колонка 2: Аренда такси (НЕДОСТАТКИ) */}
          <div className='space-y-[12px] text-white/90'>
            
            {/* Хедер колонки: Красный бейдж + Заголовок */}
            <div className='space-y-[6px] mb-[16px]'>
              <span className='inline-block bg-[#D92D20] text-white text-[10px] font-bold px-[12px] py-[3px] rounded-full uppercase tracking-wider'>
                {t('incomeBanner.headings.disadvantages', 'НЕДОСТАТКИ')}
              </span>
              <h3 className='text-[18px] sm:text-[20px] lg:text-[22px] font-black leading-tight opacity-95'>
                {t('incomeBanner.headings.rentTaxi', 'Аренда такси')}
              </h3>
            </div>

            {/* Список из массива (map) */}
            {rentTaxiList.map((item, index) => (
              <div key={index} className='flex items-start gap-[10px]'>
                {/* Красная иконка Минус */}
                <div className='w-[16px] h-[16px] rounded-full bg-[#D92D20] text-white text-[12px] flex items-center justify-center font-black shrink-0 mt-[3px] shadow-sm'>
                  -
                </div>
                <span className='text-[11px] sm:text-[12px] font-medium leading-tight opacity-80'>
                  {t(item.key, item.defaultText)}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}