import React from 'react'
import { useTranslation } from 'react-i18next'

// Единое готовое фоновое изображение (с авто и трассой)
import tradeInBgImg from '../../assets/2car.png'

export default function Section1P() {
  const { t } = useTranslation()

  const breadcrumbsList = [
    { key: 'tradeIn.breadcrumbs.home', defaultText: 'Главная', href: '/' },
    { key: 'tradeIn.breadcrumbs.credit', defaultText: 'Кредит и рассрочка', href: '/credit' },
    { key: 'tradeIn.breadcrumbs.program', defaultText: 'Госпрограмма Trade-in', href: null },
  ]

  const advantagesList = [
    {
      id: 'equipment',
      icon: '⚙️',
      textKey: 'tradeIn.advantages.equipment',
      defaultText: 'Установка любого дополнительного оборудования',
    },
    {
      id: 'gift',
      icon: '🎁',
      textKey: 'tradeIn.advantages.gift',
      defaultText: 'Каждому покупателю ТО 0 и ТО-1 в подарок!',
    },
    {
      id: 'bonusCard',
      icon: '💳',
      textKey: 'tradeIn.advantages.bonusCard',
      defaultText: 'Бонусная карта на сервисное обслуживание',
    },
  ]

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1400px] mx-auto relative rounded-[28px] overflow-hidden min-h-[580px] flex flex-col justify-between p-[24px] sm:p-[40px] lg:p-[48px] shadow-sm bg-gray-900'>
        
        <div className='absolute inset-0 z-0'>
          <img
            src={tradeInBgImg}
            className='w-full h-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent' />
        </div>

        <div className='absolute right-[8%] sm:right-[12%] top-[10%] hidden md:flex items-baseline gap-[12px] z-10 text-white'>
          <span className='text-[64px] lg:text-[88px] font-black leading-none tracking-tight drop-shadow-md'>
            {t('tradeIn.badge.discount', '-10%')}
          </span>
          <span className='text-[12px] font-bold uppercase leading-tight opacity-90 whitespace-pre-line drop-shadow'>
            {t('tradeIn.badge.discountLabel', 'От стоимости\nавтомобиля')}
          </span>
        </div>

        <div className='relative z-20 max-w-[620px] text-white space-y-[20px]'>
          
          {/* Хлебные крошки из массива */}
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
            {t('tradeIn.title', 'Госпрограмма Trade-in')}
          </h1>

          <p className='text-[14px] sm:text-[16px] text-white/90 font-bold leading-snug max-w-[480px] whitespace-pre-line'>
            {t(
              'tradeIn.subtitle',
              'Обменяйте свой автомобиль\nна новый с максимальной скидкой'
            )}
          </p>

          <div className='inline-flex items-center bg-[#D92D20] text-white rounded-full px-[20px] py-[10px] gap-[12px] shadow-md'>
            <span className='text-[28px] sm:text-[34px] font-black leading-none tracking-tight'>
              {t('tradeIn.badge.rate', 'от 1,9%')}
            </span>
            <span className='text-[11px] font-bold leading-tight uppercase border-l border-white/30 pl-[12px] whitespace-pre-line'>
              {t('tradeIn.badge.rateLabel', 'По льготной\nставке')}
            </span>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-[16px] pt-[12px] max-w-[640px]'>
            {advantagesList.map((adv) => (
              <div key={adv.id} className='flex items-center gap-[10px]'>
                <div className='w-[44px] h-[44px] rounded-full bg-white text-[#111111] flex items-center justify-center text-[18px] shrink-0 shadow-md'>
                  {adv.icon}
                </div>
                <span className='text-[11px] font-bold leading-snug text-white drop-shadow-sm'>
                  {t(adv.textKey, adv.defaultText)}
                </span>
              </div>
            ))}
          </div>

        </div>

        <div className='relative z-20 mt-[40px] bg-white rounded-[20px] p-[20px] sm:p-[28px] shadow-lg border border-gray-100 max-w-[1130px] mx-auto w-full'>
          <form className='grid grid-cols-1 lg:grid-cols-12 gap-[16px] items-center'>
            
            <div className='lg:col-span-3 space-y-[6px]'>
              <h3 className='text-[18px] sm:text-[20px] font-black text-[#111111] leading-tight'>
                {t('tradeIn.form.title', 'Получите специальную цену')}
              </h3>
              <span className='inline-block bg-[#D92D20] text-white text-[11px] font-bold px-[12px] py-[3px] rounded-full'>
                {t('tradeIn.form.until', 'Только до 10.10.21')}
              </span>
            </div>

            <div className='lg:col-span-3'>
              <input
                type='text'
                placeholder={t('tradeIn.form.namePlaceholder', 'Ваше имя')}
                className='w-full h-[48px] bg-[#EEEEEE] rounded-[10px] px-[16px] text-[13px] text-[#111111] placeholder-[#777777] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />
            </div>

            <div className='lg:col-span-3'>
              <input
                type='tel'
                placeholder={t('tradeIn.form.phonePlaceholder', 'Ваш телефон')}
                className='w-full h-[48px] bg-[#EEEEEE] rounded-[10px] px-[16px] text-[13px] text-[#111111] placeholder-[#777777] outline-none border border-transparent focus:border-[#D92D20] transition-colors'
              />
            </div>

            <div className='lg:col-span-3'>
              <button
                type='submit'
                className='w-full h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] tracking-wider uppercase rounded-[10px] transition-colors cursor-pointer shadow-md'
              >
                {t('tradeIn.form.submitBtn', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
              </button>
            </div>

            <div className='lg:col-span-12 pt-[4px]'>
              <p className='text-[10px] text-[#888888]'>
                {t('tradeIn.form.disclaimerText', 'Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('tradeIn.form.disclaimerLink', 'персональных данных')}
                </a>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}