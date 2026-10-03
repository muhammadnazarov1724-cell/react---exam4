import React from 'react'
import { useTranslation } from 'react-i18next'

import heroBgImg from '../../assets/never.png'

export default function Section1E() {
  const { t } = useTranslation()

  const breadcrumbsList = [
    { key: 'expressCredit.breadcrumbs.home', defaultText: 'Главная', href: '/' },
    { key: 'expressCredit.breadcrumbs.credit', defaultText: 'Кредит и рассрочка', href: '/credit' },
    { key: 'expressCredit.breadcrumbs.express', defaultText: 'Экспресс-кредит', href: null },
  ]

  const advantagesList = [
    {
      id: 'travel',
      icon: '👍',
      textKey: 'expressCredit.advantages.travel',
      defaultText: 'Компенсируем дорогу до автосалона всем покупателям',
    },
    {
      id: 'insurance',
      icon: '🕒',
      textKey: 'expressCredit.advantages.insurance',
      defaultText: 'БЫСТРОЕ оформление КАСКО и ОСАГО за 15 минут',
    },
    {
      id: 'discount',
      icon: '%',
      textKey: 'expressCredit.advantages.discount',
      defaultText: 'Скидка 30 000 рублей',
    },
  ]

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1380px] mx-auto relative rounded-[28px] overflow-hidden min-h-[580px] flex flex-col justify-between p-[24px] sm:p-[40px] lg:p-[48px] shadow-sm'>

        <div className='absolute inset-0 z-0'>
          <img
            src={heroBgImg}
            alt='Express Credit Background'
            className='w-full h-full object-cover object-right-top'
          />
          {/* Легкий градиентный оверлей для читаемости текста слева */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent' />
        </div>

        {/* ОСНОВНОЙ КОНТЕНТ ШАПКИ */}
        <div className='relative z-10 max-w-[680px] text-white space-y-[20px]'>
          
          {/* Хлебные крошки (Рендер из массива) */}
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

          <h1 className='text-[36px] sm:text-[48px] lg:text-[54px] font-black leading-none tracking-tight'>
            {t('expressCredit.title', 'Экспресс-кредит')}
          </h1>

          <p className='text-[13px] sm:text-[14px] text-white/90 leading-relaxed font-medium max-w-[540px]'>
            {t(
              'expressCredit.subtitle',
              'Воплотите мечту о новом автомобиле уже сегодня с выгодным предложением. Заполните заявку, чтобы получить уникальное предложение.'
            )}
          </p>

          <div className='inline-flex items-center bg-[#D92D20] text-white rounded-full px-[20px] py-[10px] gap-[12px] shadow-md'>
            <span className='text-[28px] sm:text-[34px] font-black leading-none tracking-tight'>
              {t('expressCredit.badge.rate', 'от 1,9%')}
            </span>
            <span className='text-[11px] font-bold leading-tight uppercase border-l border-white/30 pl-[12px] whitespace-pre-line'>
              {t('expressCredit.badge.label', 'По льготной\nставке')}
            </span>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-[16px] pt-[12px] max-w-[620px]'>
            {advantagesList.map((adv) => (
              <div key={adv.id} className='flex items-center gap-[10px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-white text-[#111111] flex items-center justify-center text-[18px] font-black shrink-0 shadow-sm'>
                  {adv.icon}
                </div>
                <span className='text-[11px] font-bold leading-snug text-white drop-shadow-sm whitespace-pre-line'>
                  {t(adv.textKey, adv.defaultText)}
                </span>
              </div>
            ))}
          </div>

        </div>

        <div className='relative z-10 mt-[40px] bg-white rounded-[20px] p-[20px] sm:p-[28px] shadow-lg border border-gray-100 max-w-[1130px] mx-auto w-full'>
          <form className='grid grid-cols-1 lg:grid-cols-12 gap-[16px] items-center'>
            
            <div className='lg:col-span-3 space-y-[6px]'>
              <h3 className='text-[18px] sm:text-[20px] font-black text-[#111111] leading-tight'>
                {t('expressCredit.form.title', 'Получите специальную цену')}
              </h3>
              <span className='inline-block bg-[#D92D20] text-white text-[11px] font-bold px-[12px] py-[3px] rounded-full'>
                {t('expressCredit.form.until', 'Только до 10.10.21')}
              </span>
            </div>

            {/* Инпут Имя */}
            <div className='lg:col-span-3'>
              <input
                type='text'
                placeholder={t('expressCredit.form.namePlaceholder', 'Ваше имя')}
                className='w-full h-[48px] bg-[#EEEEEE] rounded-[10px] px-[16px] text-[13px] text-[#111111] placeholder-[#777777] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />
            </div>

            <div className='lg:col-span-3'>
              <input
                type='tel'
                placeholder={t('expressCredit.form.phonePlaceholder', 'Ваш телефон')}
                className='w-full h-[48px] bg-[#EEEEEE] rounded-[10px] px-[16px] text-[13px] text-[#111111] placeholder-[#777777] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />
            </div>

            <div className='lg:col-span-3'>
              <button
                type='submit'
                className='w-full h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] tracking-wider uppercase rounded-[10px] transition-colors cursor-pointer shadow-md'
              >
                {t('expressCredit.form.submitBtn', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
              </button>
            </div>

            <div className='lg:col-span-12 pt-[4px]'>
              <p className='text-[10px] text-[#888888]'>
                {t('expressCredit.form.disclaimerText', 'Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('expressCredit.form.disclaimerLink', 'персональных данных')}
                </a>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}