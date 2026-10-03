import React from 'react'

import img1 from '../../assets/SB RUS RGB.png'
import img2 from '../../assets/Group 3379.png'
import img3 from '../../assets/Group 3378.png'
import { useTranslation } from 'react-i18next'



export default function Section3Com() {
    let [t] = useTranslation()
  return (
    <div className='max-w-[1200px] m-auto my-[40px] text-center lg:text-start'>

    <p className='lg:text-[40px] text-[30px] font-bold'>{t("partner")}</p>

    <div className='mt-[30px] flex flex-col lg:flex-row justify-between items-center gap-[25px]'>
        <div><img className='bg-[#EFF0F0] p-[34px_43px] rounded-[10px] w-[270px] h-[120px]' src={img1} alt="" /></div>
        <div><img className='bg-[#EFF0F0] p-[34px_43px] rounded-[10px] w-[270px] h-[120px]' src={img2} alt="" /></div>
        <div><img className='bg-[#EFF0F0] p-[34px_43px] rounded-[10px] w-[270px] h-[120px]' src={img3} alt="" /></div>
        <div><img className='bg-[#EFF0F0] p-[34px_43px] rounded-[10px] w-[270px] h-[120px]' src={img1} alt="" /></div>
    </div>

        
    </div>
  )
}
