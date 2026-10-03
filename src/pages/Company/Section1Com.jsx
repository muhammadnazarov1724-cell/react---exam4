import React from 'react'
import { useTranslation } from 'react-i18next'

import r4 from '../../assets/Rectangle 489.png'

let advantages = [
    "aboutAdv1",
    "aboutAdv2",
    "aboutAdv3",
    "aboutAdv4",
    "aboutAdv5",
    "aboutAdv6",
    "aboutAdv7",
    "aboutAdv8",
    "aboutAdv9",
  ]

export default function Section1Com() {
    let [t] = useTranslation()
  return (
    <section className='w-full bg-white text-[#333333] font-sans py-[40px] px-[20px]'>
      <div className='max-w-[1200px] m-auto'>
        
        <div className='border-b border-gray-200 pb-[16px] mb-[32px]'>
          <h1 className='text-[32px] md:text-[40px] font-bold text-[#222222]'>
            {t("aboutTitle")}
          </h1>
        </div>

        <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#444444] mb-[28px]'>
          {t("aboutMainDesc")}
        </p>

        <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#444444] mb-[16px]'>
          {t("aboutChooseText")}
        </p>

        <ul className='flex flex-col gap-[8px] mb-[28px] pl-[10px]'>
          {advantages.map((adv, idx) => (
            <li key={idx} className='flex items-start gap-[12px] text-[14px] md:text-[15px] leading-[1.6] text-[#444444]'>
              <span className='w-[6px] h-[6px] rounded-full bg-[#D92D20] shrink-0 mt-[9px]' />
              <span>{t(adv)}</span>
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-[20px] text-[14px] md:text-[15px] leading-[1.7] text-[#444444]'>
          <p>{t("aboutFooter1")}</p>
          <p>{t("aboutFooter2")}</p>
          <p className='font-bold text-[#222222]'>{t("aboutSlogan")}</p>
        </div>

      </div>

      <div className='max-w-[1200px] m-auto mt-[50px]'>
       <p className='lg:text-[40px] text-[30px] font-bold'>{t("photo")}</p>
       <div className='flex flex-col lg:flex-row justify-between gap-[30px] mt-[20px]'>
        <div><img src={r4} alt="" /></div>
        <div><img src={r4} alt="" /></div>
        <div><img src={r4} alt="" /></div>
       </div>
      </div>
    </section>
  
  )
}
