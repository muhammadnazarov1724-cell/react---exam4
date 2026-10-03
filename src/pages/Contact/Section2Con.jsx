import React from 'react'

// Укажите путь к вашей статической картинке
import showroomImg from '../../assets/Rectangle 487.png'
import { useTranslation } from 'react-i18next'

export default function Section2Con() {
    const [t] = useTranslation()
  return (
    <section className='w-full bg-white text-[#222222] font-sans py-[60px] px-[20px]'>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center'>
        
        <div className='lg:col-span-5 flex flex-col gap-[20px]'>
          <h2 className='text-[36px] md:text-[44px] font-bold text-[#222222] leading-tight'>
            {t("aboutShortTitle")}
          </h2>
          <p className='text-[14px] md:text-[15px] text-[#555555] leading-[1.7]'>
            {t("aboutShortDesc")}
          </p>
        </div>

        <div className='lg:col-span-7 w-full h-[320px] sm:h-[400px] rounded-[24px] overflow-hidden shadow-sm'>
          <img
            src={showroomImg}
            alt={t("aboutShortTitle")}
            className='w-full h-full object-cover'
          />
        </div>

      </div>
    </section>
  )
}