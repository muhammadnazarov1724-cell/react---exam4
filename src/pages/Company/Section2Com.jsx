import React from 'react'
import { useTranslation } from 'react-i18next'

import mapImg from '../../assets/Group 3394.png'

export default function Section2Com() {
    let [t] = useTranslation()
  return (
    <section className='w-full bg-white py-[40px] px-[20px] font-sans'>
      <div className='max-w-[1200px] m-auto bg-[#F7F7F8] rounded-[24px] p-[32px] md:p-[48px] relative overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[30px] items-center'>
          
          <div className='lg:col-span-5 flex flex-col justify-between h-full z-10'>
            
            <div className='mb-[40px]'>
              <span className='text-[100px] md:text-[120px] font-extrabold text-[#D92D20] leading-none block tracking-tight'>
                {t("statsCitiesCount")}
              </span>
              <p className='text-[20px] md:text-[22px] font-bold text-[#D92D20] mt-[4px]'>
                {t("statsCitiesLabel")}
              </p>
            </div>

            <div className='flex items-center gap-[32px] sm:gap-[48px]'>
              
              <div className='flex items-center gap-[16px]'>
                <div className='w-[48px] h-[48px] bg-[#222222] rounded-full flex items-center justify-center shrink-0'>
                  <svg className='w-[24px] h-[24px] text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm9 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45v2h6v-2c0-2.66-5.33-4-7-4z' />
                  </svg>
                </div>
                <div>
                  <span className='text-[18px] font-bold text-[#222222] block leading-tight'>
                    {t("statsEmployeesCount")}
                  </span>
                  <span className='text-[14px] text-[#888888] font-medium'>
                    {t("statsEmployeesLabel")}
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-[16px]'>
                <div className='w-[48px] h-[48px] bg-[#222222] rounded-full flex items-center justify-center shrink-0'>
                  <svg className='w-[24px] h-[24px] text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z' />
                  </svg>
                </div>
                <div>
                  <span className='text-[18px] font-bold text-[#222222] block leading-tight'>
                    {t("statsYearsCount")}
                  </span>
                  <span className='text-[14px] text-[#888888] font-medium'>
                    {t("statsYearsLabel")}
                  </span>
                </div>
              </div>

            </div>

          </div>

          <div className='lg:col-span-7 relative flex justify-center items-center mt-[20px] lg:mt-0'>
            <img
              src={mapImg}
              className='w-full h-auto object-contain max-h-[380px]'
            />
          </div>

        </div>
      </div>
    </section>
  )
}