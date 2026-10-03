import React from 'react'
import { useTranslation } from 'react-i18next'

import b1 from '../../assets/bank.png'
import b2 from '../../assets/bank-2.png'
import b3 from '../../assets/bank-3.png'

export default function Section8H() {
    const [t] = useTranslation()
  return (
    <div className='max-w-[1200px] m-auto my-[50px]'>
        <p className='text-[28px] md:text-[36px] font-bold text-[#111111] text-center md:text-start mb-[32px]'>
        {t("partnerBanksTitle")}
        </p>
        <div className='flex flex-col md:flex-row gap-[20px] justify-between items-center'>
            <div><img src={b1} alt="" /></div>
            <div><img src={b2} alt="" /></div>
            <div><img src={b3} alt="" /></div>
            <div><img src={b1} alt="" /></div>
        </div>
    </div>
  )
}
