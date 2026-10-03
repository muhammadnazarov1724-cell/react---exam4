import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

// Импорт картинки авто (замените на ваш путь)
import camryImg from '../../assets/cf3de6a6a3a8dcf216cb357b444fc381 1.png'

export default function Section1M() {
  const { t } = useTranslation()

  const colors = [
    { id: 'blue', hex: '#0070C0', name: 'Blue Metallic' },
    { id: 'red', hex: '#E60012', name: 'Red Passion' },
    { id: 'light-gray', hex: '#E5E5E5', name: 'Silver Metallic' },
    { id: 'white', hex: '#FFFFFF', name: 'White Pearl' },
    { id: 'gray', hex: '#888888', name: 'Dark Gray' },
    { id: 'black', hex: '#111111', name: 'Night Black' },
    { id: 'dark-red', hex: '#8B0000', name: 'Bordeaux' },
    { id: 'brown', hex: '#5A4032', name: 'Brown Metallic' },
  ]

  const [selectedColor, setSelectedColor] = useState(colors[5]) 
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ color: selectedColor.id, name, phone })
  }

  return (
    <section className='w-full py-[20px] px-[16px] md:px-[20px] font-sans mt-[50px]'>
      <div className='max-w-[1229px] mx-auto relative'>
        
        <div className='relative w-full bg-[#F4F4F4] rounded-[24px] p-[24px] sm:p-[36px] lg:p-[48px] pb-[100px] md:pb-[120px] overflow-hidden'>
          
          <nav className='flex items-center gap-[8px] text-[12px] text-[#999999] mb-[20px]'>
            <a href='#' className='hover:text-[#111111] transition-colors'>
              {t('carHero.breadcrumb.home', 'Главная')}
            </a>
            <span>›</span>
            <a href='#' className='hover:text-[#111111] transition-colors'>
              {t('carHero.breadcrumb.catalog', 'Каталог авто')}
            </a>
            <span>›</span>
            <a href='#' className='hover:text-[#111111] transition-colors'>
              Toyota
            </a>
            <span>›</span>
            <span className='text-[#666666]'>Toyota Camry</span>
          </nav>

          <div className='flex flex-col items-start md:items-end mb-[20px] md:absolute md:top-[48px] md:right-[48px] z-20'>
            <span className='text-[13px] text-[#333333] font-medium mb-[8px]'>
              {t('carHero.colorLabel', 'Цвет')}: {selectedColor.name}
            </span>
            <div className='flex items-center gap-[6px] flex-wrap'>
              {colors.map((color) => (
                <button
                  key={color.id}
                  type='button'
                  onClick={() => setSelectedColor(color)}
                  className={`w-[22px] h-[22px] rounded-full border border-gray-300 flex items-center justify-center transition-transform cursor-pointer relative ${
                    selectedColor.id === color.id ? 'scale-110 ring-2 ring-offset-1 ring-[#D92D20]' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor.id === color.id && (
                    <span className={`text-[10px] font-bold ${color.hex === '#FFFFFF' || color.hex === '#E5E5E5' ? 'text-black' : 'text-white'}`}>
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <h1 className='text-[36px] sm:text-[48px] lg:text-[56px] font-black text-[#111111] leading-none mb-[16px] tracking-tight'>
            Toyota Camry
          </h1>

          <div className='flex flex-wrap items-center gap-[12px] mb-[28px]'>
            <div>
              <span className='text-[14px] text-[#888888] line-through block leading-tight'>
                800 000 ₽
              </span>
              <span className='text-[28px] sm:text-[34px] font-black text-[#111111] leading-none'>
                {t('carHero.fromPrice', 'от 700 000 ₽')}
              </span>
            </div>

            <div className='bg-[#D92D20] text-white text-[12px] sm:text-[13px] font-bold px-[14px] py-[8px] rounded-[8px] shadow-sm ml-[4px]'>
              {t('carHero.benefitBadge', 'Выгода до 100 000₽')}
            </div>
          </div>

          <div className='space-y-[10px] max-w-[220px] mb-[30px] md:mb-0 relative z-10'>
            
            <div className='bg-white p-[10px_14px] rounded-[10px] shadow-sm flex items-center gap-[10px]'>
              <span className='text-[18px]'>🎁</span>
              <span className='text-[11px] font-bold text-[#111111] leading-tight'>
                {t('carHero.features.bestOffer', 'Улучшим любое предложение')}
              </span>
            </div>

            <div className='bg-white p-[10px_14px] rounded-[10px] shadow-sm flex items-center gap-[10px]'>
              <span className='text-[16px] font-black text-[#D92D20]'>0%</span>
              <span className='text-[11px] font-bold text-[#111111] leading-tight'>
                {t('carHero.features.noDeposit', 'Без первоначального взноса')}
              </span>
            </div>

            <div className='bg-white p-[10px_14px] rounded-[10px] shadow-sm flex items-center gap-[10px]'>
              <span className='text-[16px] font-bold text-[#D92D20]'>₽</span>
              <span className='text-[11px] font-bold text-[#111111] leading-tight'>
                {t('carHero.features.creditRate', 'Кредит от 1,9%')}
              </span>
            </div>

          </div>

          <div className='relative md:absolute md:left-[800px] md:-translate-x-1/2 md:bottom-[60px]  max-w-[80px] lg:max-w-[1080px] mx-auto pointer-events-none z-0'>
            <img
              src={camryImg}
              className='w-full h-auto object-contain'
            />
          </div>

        </div>

        <div className='relative z-30 top-[40px] sm:-mt-[70px] max-w-[1140px] mx-auto bg-white rounded-[20px] p-[20px] sm:p-[28px] lg:p-[32px] shadow-xl border border-gray-100'>
          <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row lg:items-center justify-between gap-[20px]'>
            
            <div className='shrink-0'>
              <h3 className='text-[20px] sm:text-[22px] font-black text-[#111111] leading-tight max-w-[220px] mb-[8px]'>
                {t('carHero.form.title', 'Получите специальную цену')}
              </h3>

              <div className='inline-block bg-[#D92D20] text-white text-[11px] font-bold px-[10px] py-[3px] rounded-full'>
                {t('carHero.form.deadline', 'Только до 10.10.21')}
              </div>
            </div>

            <div className='w-full max-w-[760px] flex flex-col gap-[8px]'>
              <div className='flex flex-col sm:flex-row gap-[10px] w-full'>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('carHero.form.namePlaceholder', 'Ваше имя')}
                  className='w-full sm:w-[38%] h-[48px] bg-[#EFEFEF] rounded-[8px] px-[16px] text-[14px] text-[#111111] placeholder-[#777777] outline-none focus:bg-white focus:ring-1 focus:ring-[#D92D20] transition-all'
                />

                <input
                  type='tel'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('carHero.form.phonePlaceholder', 'Ваш телефон')}
                  className='w-full sm:w-[38%] h-[48px] bg-[#EFEFEF] rounded-[8px] px-[16px] text-[14px] text-[#111111] placeholder-[#777777] outline-none focus:bg-white focus:ring-1 focus:ring-[#D92D20] transition-all'
                />

                <button
                  type='submit'
                  className='w-full sm:w-[24%] h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-black text-[12px] tracking-wider rounded-[8px] uppercase transition-colors cursor-pointer shadow-md shrink-0'
                >
                  {t('carHero.form.button', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ')}
                </button>
              </div>

              <p className='text-[10px] text-[#888888]'>
                {t('carHero.form.disclaimerText', 'Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих')}{' '}
                <a href='#' className='underline hover:text-[#111111] transition-colors'>
                  {t('carHero.form.disclaimerLink', 'персональных данных')}
                </a>
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}