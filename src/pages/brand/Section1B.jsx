import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

// Импортируем две разные машины отдельно
import corollaImg from '../../assets/car_tcm-3020-1864333 5.png'
import rav4Img from '../../assets/ext-front_tcm-3020-1767644 5.png'

export default function Section1B() {
  const [t] = useTranslation()
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const features = [
    {
      id: 1,
      text: t('heroFeatures.bestPrice'),
      icon: (
        <svg className='w-[16px] h-[16px] text-[#D92D20]' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M2 10h3v10H2zm5-8h2v18H7zm5 5h2v13h-2zm5 3h2v10h-2z' />
        </svg>
      )
    },
    {
      id: 2,
      text: t('heroFeatures.credit'),
      icon: <span className='text-[#D92D20] font-bold text-[14px]'>%</span>
    },
    {
      id: 3,
      text: t('heroFeatures.tradeIn'),
      icon: (
        <svg className='w-[16px] h-[16px] text-[#D92D20]' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      )
    },
    {
      id: 4,
      text: t('heroFeatures.gift'),
      icon: (
        <svg className='w-[16px] h-[16px] text-[#D92D20]' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm9 3H3v10a2 2 0 002 2h14a2 2 0 002-2V11z' />
        </svg>
      )
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Данные формы:', formData)
  }

  return (
    <section className='w-full bg-white py-[20px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto'>
        
        {/* Главный фоновый баннер */}
        <div className='relative w-full bg-[#EFEFEF] rounded-[24px] p-[24px] md:p-[48px] overflow-hidden'>
          
          {/* Декоративный задний фоновый текст */}
          <span className='absolute right-[-20px] top-[-10px] text-[120px] lg:text-[200px] font-black text-white/50 select-none pointer-events-none leading-none z-0'>
            Toyota
          </span>

          {/* Хлебные крошки */}
          <nav className='relative z-10 flex items-center gap-[8px] text-[13px] text-[#888888] mb-[24px]'>
            <a href='#' className='hover:underline'>{t('breadcrumbs.home')}</a>
            <span>&gt;</span>
            <a href='#' className='hover:underline'>{t('breadcrumbs.catalog')}</a>
            <span>&gt;</span>
            <span className='text-[#333333] font-medium'>{t('breadcrumbs.brand')}</span>
          </nav>

          {/* Контент баннера */}
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-center mb-[40px]'>
            
            {/* Левая колонка — тексты и список преимуществ */}
            <div className='lg:col-span-6'>
              <div className='flex flex-wrap items-center gap-[12px] mb-[12px]'>
                <h1 className='text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-[#111111] leading-[1.1]'>
                  {t('heroTitle')}
                </h1>
                
                {/* Бейдж со скидкой */}
                <div className='bg-[#D92D20] text-white rounded-[30px] px-[16px] py-[6px] inline-flex items-center gap-[6px] shadow-sm'>
                  <span className='text-[12px] uppercase font-semibold opacity-90'>
                    {t('heroDiscount')}
                  </span>
                  <span className='text-[18px] font-extrabold leading-none'>
                    {t('heroDiscountAmount')}
                  </span>
                </div>
              </div>

              <p className='text-[15px] sm:text-[16px] text-[#555555] font-normal max-w-[500px] mb-[32px]'>
                {t('heroSubtitle')}
              </p>

              {/* Преимущества через .map() */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-[16px]'>
                {features.map((item) => (
                  <div key={item.id} className='flex items-center gap-[12px]'>
                    <div className='w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm'>
                      {item.icon}
                    </div>
                    <span className='text-[13px] sm:text-[14px] font-medium text-[#222222] leading-[1.3]'>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка — два автомобиля с визуальным перекрытием */}
            <div className='lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-[20px] lg:mt-0 min-h-[220px] sm:min-h-[280px]'>
              
              {/* Левая машина (на заднем плане) */}
              <div className='w-[55%] sm:w-[50%] absolute left-0 sm:left-[5%] bottom-0 z-10'>
                <img
                  src={corollaImg}
                  alt='Toyota Corolla'
                  className='w-full object-contain'
                />
              </div>

              {/* Правая машина (на переднем плане, перекрывает левую) */}
              <div className='w-[65%] sm:w-[60%] absolute right-0 bottom-0 z-20'>
                <img
                  src={rav4Img}
                  alt='Toyota RAV4'
                  className='w-full object-contain'
                />
              </div>

            </div>

          </div>

          {/* Плавающая нижняя форма */}
          <div className='relative z-30 bg-white rounded-[20px] p-[20px] sm:p-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#EAEAEA] max-w-[1100px] mx-auto'>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-12 gap-[16px] items-center'>
              
              <div className='lg:col-span-4 flex flex-col gap-[6px]'>
                <h3 className='text-[18px] sm:text-[20px] font-bold text-[#111111] leading-[1.2]'>
                  {t('heroForm.title')}
                </h3>
                <div>
                  <span className='bg-[#D92D20] text-white text-[11px] font-semibold px-[10px] py-[3px] rounded-[12px] inline-block'>
                    {t('heroForm.badge')}
                  </span>
                </div>
              </div>

              <div className='lg:col-span-3'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('heroForm.namePlaceholder')}
                  className='w-full h-[48px] bg-[#F5F5F5] border border-transparent focus:border-[#D92D20] focus:bg-white rounded-[10px] px-[16px] text-[14px] text-[#111111] outline-none transition-all'
                  required
                />
              </div>

              <div className='lg:col-span-3'>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('heroForm.phonePlaceholder')}
                  className='w-full h-[48px] bg-[#F5F5F5] border border-transparent focus:border-[#D92D20] focus:bg-white rounded-[10px] px-[16px] text-[14px] text-[#111111] outline-none transition-all'
                  required
                />
              </div>

              <div className='lg:col-span-2'>
                <button
                  type='submit'
                  className='w-full h-[48px] bg-[#D92D20] hover:bg-[#B82216] text-white font-bold text-[12px] sm:text-[13px] tracking-wider rounded-[10px] uppercase transition-colors cursor-pointer shadow-sm'
                >
                  {t('heroForm.submitBtn')}
                </button>
              </div>

              <div className='lg:col-span-12 mt-[-4px]'>
                <p className='text-[11px] text-[#A0A0A0] text-center lg:text-left'>
                  {t('heroForm.disclaimer')}
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}