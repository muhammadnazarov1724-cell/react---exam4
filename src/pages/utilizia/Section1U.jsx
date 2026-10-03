import React from 'react'
import { useTranslation } from 'react-i18next'

import recyclingBgImg from '../../assets/utilavto.png'

export default function Section1U() {
  const { t } = useTranslation()

  const breadcrumbsList = [
    { key: 'recycling.breadcrumbs.home', defaultText: 'Главная', href: '/' },
    { key: 'recycling.breadcrumbs.specialOffers', defaultText: 'Спецпредложения', href: '/offers' },
    { key: 'recycling.breadcrumbs.program', defaultText: 'Утилизация', href: null },
  ]

  const badgeInfo = {
    rateKey: 'recycling.badge.rate',
    defaultRate: 'от 1,9%',
    labelKey: 'recycling.badge.rateLabel',
    defaultLabel: 'По льготной\nставке',
  }

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1400px] mx-auto relative rounded-[28px] overflow-hidden min-h-[580px] flex flex-col justify-between p-[24px] sm:p-[40px] lg:p-[48px] shadow-sm bg-gray-900'>
        
        <div className='absolute inset-0 z-0'>
          <img
            src={recyclingBgImg}
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent' />
        </div>

        <div className='relative z-20 max-w-[620px] text-white space-y-[20px]'>
          
          <nav className='flex items-center gap-[8px] text-[12px] text-white/80 font-medium'>
            {breadcrumbsList.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className='text-white/50'>&gt;</span>}
                {item.href ? (
                  <a href={item.href} className='hover:text-white transition-colors'>
                    {t(item.key, item.defaultText)}
                  </a>
                ) : (
                  <span className='text-white/60'>{t(item.key, item.defaultText)}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className='text-[36px] sm:text-[48px] lg:text-[54px] font-black leading-tight tracking-tight'>
            {t('recycling.title', 'Утилизация авто')}
          </h1>

          <p className='text-[14px] sm:text-[15px] text-white/90 font-medium leading-relaxed max-w-[540px] whitespace-pre-line drop-shadow-sm'>
            {t(
              'recycling.subtitle',
              'Стать участником программы «Утилизации авто» может любой клиент без\nограничений по возрасту, основное условие - покупка автомобиля впервые.'
            )}
          </p>

          <div className='pt-[8px]'>
            <div className='inline-flex items-center bg-[#D92D20] text-white rounded-full px-[24px] py-[12px] gap-[14px] shadow-md'>
              <span className='text-[32px] sm:text-[38px] font-black leading-none tracking-tight'>
                {t(badgeInfo.rateKey, badgeInfo.defaultRate)}
              </span>
              <span className='text-[11px] font-bold leading-tight uppercase border-l border-white/30 pl-[14px] whitespace-pre-line'>
                {t(badgeInfo.labelKey, badgeInfo.defaultLabel)}
              </span>
            </div>
          </div>

        </div>

        <div className='relative z-20 mt-[40px] bg-white rounded-[20px] p-[20px] sm:p-[28px] shadow-lg border border-gray-100 max-w-[1130px] mx-auto w-full'>
          <form className='grid grid-cols-1 lg:grid-cols-12 gap-[16px] items-center'>
            
            <div className='lg:col-span-3 space-y-[6px]'>
              <h3 className='text-[18px] sm:text-[20px] font-black text-[#111111] leading-tight'>
                {t('recycling.form.title', 'Получите специальную цену')}
              </h3>
              <span className='inline-block bg-[#D92D20] text-white text-[11px] font-bold px-[12px] py-[3px] rounded-full'>
                {t('recycling.form.until', 'Только до 10.10.21')}
              </span>
            </div>

            <div className='lg:col-span-3'>
              <input
                type='text'
                placeholder={t('recycling.form.namePlaceholder', 'Ваше имя')}
                className='w-full h-[48px] bg-[#EEEEEE] rounded-[10px] px-[16px] text-[13px] text-[#111111] placeholder-[#777777] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />
            </div>

            <div className='lg:col-span-3'>
              <input
                type='tel'
                placeholder={t('recycling.form.phonePlaceholder', 'Ваш телефон')}
                className='w-full h-[48px] bg-[#EEEEEE] rounded-[10px] px-[16px] text-[13px] text-[#111111] placeholder-[#777777] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />
            </div>

            <div className='lg:col-span-3'>
              <button
                type='submit'
                className='w-full h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] tracking-wider uppercase rounded-[10px] transition-colors cursor-pointer shadow-md'
              >
                {t('recycling.form.submitBtn', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
              </button>
            </div>

            <div className='lg:col-span-12 pt-[4px]'>
              <p className='text-[10px] text-[#888888]'>
                {t('recycling.form.disclaimerText', 'Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('recycling.form.disclaimerLink', 'персональных данных')}
                </a>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}