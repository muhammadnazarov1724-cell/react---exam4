import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import coveredCarImg from '../../assets/150502082 1 1.png'

export default function Section7H() {
  const [t] = useTranslation()

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [complectation, setComplectation] = useState('')

  const [loanSum, setLoanSum] = useState(0)
  const [loanTerm, setLoanTerm] = useState(6)
  const [initialFee, setInitialFee] = useState(0)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const termMarks = [6, 12, 24, 36, 48, 60, 72, 84]
  const sumMarks = ['0', '500т', '800т', '1,1м', '1,4м', '1,7м', '2м', '2,3м', '2,7м', '3м']

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ brand, model, complectation, loanSum, loanTerm, initialFee, name, phone })
  }

  return (
    <section className='w-full bg-[#F5F5F5] py-[50px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1200px] mx-auto'>
        
        {/* Заголовок */}
        <h2 className='text-[28px] md:text-[36px] font-bold text-[#111111] mb-[32px]'>
          {t('creditTitle')}
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-start'>
          
          {/* Левый блок (калькулятор) */}
          <div className='lg:col-span-8 bg-transparent flex flex-col gap-[30px]'>
            
            {/* Фильтры: Марка, Модель, Комплектация */}
            <div className='bg-[#E2E2E2] p-[12px] rounded-[16px] grid grid-cols-1 sm:grid-cols-3 gap-[10px]'>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className='w-full bg-white text-[#222222] text-[14px] font-medium px-[16px] py-[12px] rounded-[10px] outline-none cursor-pointer appearance-none bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%23222222%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")] bg-[length:12px_8px] bg-[right_16px_center] bg-no-repeat'
              >
                <option value=''>{t('creditBrand')}</option>
                <option value='kia'>Kia</option>
                <option value='hyundai'>Hyundai</option>
                <option value='skoda'>Skoda</option>
              </select>

              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className='w-full bg-white text-[#222222] text-[14px] font-medium px-[16px] py-[12px] rounded-[10px] outline-none cursor-pointer appearance-none bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%23222222%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")] bg-[length:12px_8px] bg-[right_16px_center] bg-no-repeat'
              >
                <option value=''>{t('creditModel')}</option>
                <option value='rio'>Rio</option>
                <option value='creta'>Creta</option>
                <option value='rapid'>Rapid</option>
              </select>

              <select
                value={complectation}
                onChange={(e) => setComplectation(e.target.value)}
                className='w-full bg-white text-[#222222] text-[14px] font-medium px-[16px] py-[12px] rounded-[10px] outline-none cursor-pointer appearance-none bg-[url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%23222222%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")] bg-[length:12px_8px] bg-[right_16px_center] bg-no-repeat'
              >
                <option value=''>{t('creditComplectation')}</option>
                <option value='comfort'>Comfort</option>
                <option value='luxe'>Luxe</option>
                <option value='style'>Style</option>
              </select>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-12 gap-[20px] items-center'>
              
              {/* Картинка авто и шкала взносов */}
              <div className='sm:col-span-5 flex flex-col items-center justify-center'>
                <img
                  src={coveredCarImg}
                  alt='Covered Car'
                  className='w-[85%] max-w-[280px] h-auto object-contain mb-[20px]'
                />
                
                <div className='w-full flex items-center justify-between gap-[10px]'>
                  <div className='flex flex-col items-center flex-1'>
                    <span className='bg-[#A0A0A0] text-white text-[12px] font-bold px-[16px] py-[4px] rounded-full mb-[6px]'>
                      {initialFee}
                    </span>
                    <span className='text-[11px] text-[#888888] text-center leading-[1.2]'>
                      {t('creditInitialFee')}
                    </span>
                  </div>

                  <div className='w-full h-[2px] bg-[#DDD] my-[8px]' />

                  <div className='flex flex-col items-center flex-1'>
                    <span className='bg-[#A0A0A0] text-white text-[12px] font-bold px-[16px] py-[4px] rounded-full mb-[6px]'>
                      {loanSum - initialFee < 0 ? 0 : loanSum - initialFee}
                    </span>
                    <span className='text-[11px] text-[#888888] text-center leading-[1.2]'>
                      {t('creditRemaining')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ползунки */}
              <div className='sm:col-span-7 flex flex-col gap-[24px]'>
                
                {/* Сумма кредита */}
                <div>
                  <div className='flex items-center justify-between mb-[8px]'>
                    <span className='text-[14px] text-[#666666] font-medium'>
                      {t('creditSumLabel')}
                    </span>
                    <span className='text-[22px] font-bold text-[#111111]'>
                      {loanSum}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0'
                    max='3000000'
                    step='100000'
                    value={loanSum}
                    onChange={(e) => setLoanSum(Number(e.target.value))}
                    className='w-full accent-[#D92D20] h-[4px] bg-[#DDD] rounded-lg appearance-none cursor-pointer'
                  />
                  <div className='flex justify-between text-[10px] text-[#A0A0A0] mt-[6px]'>
                    {sumMarks.map((m, idx) => (
                      <span key={idx}>{m}</span>
                    ))}
                  </div>
                </div>

                {/* Срок кредита */}
                <div>
                  <div className='flex items-center justify-between mb-[8px]'>
                    <span className='text-[14px] text-[#666666] font-medium'>
                      {t('creditTermLabel')}
                    </span>
                    <span className='text-[22px] font-bold text-[#111111]'>
                      {loanTerm} мес.
                    </span>
                  </div>
                  <input
                    type='range'
                    min='6'
                    max='84'
                    step='6'
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className='w-full accent-[#D92D20] h-[4px] bg-[#DDD] rounded-lg appearance-none cursor-pointer'
                  />
                  <div className='flex justify-between text-[11px] text-[#A0A0A0] mt-[6px]'>
                    {termMarks.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>

                {/* Первоначальный взнос */}
                <div className='flex items-center justify-between pt-[10px]'>
                  <span className='text-[14px] text-[#333333] font-semibold max-w-[140px]'>
                    {t('creditInitialFeeLabel')}
                  </span>
                  <input
                    type='number'
                    value={initialFee}
                    onChange={(e) => setInitialFee(Number(e.target.value))}
                    className='w-[140px] bg-white border border-[#E2E2E2] rounded-[8px] px-[12px] py-[8px] text-[14px] text-[#222222] outline-none focus:border-[#D92D20]'
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Правый блок (Карточка с выгодой и формой) */}
          <div className='lg:col-span-4 bg-white p-[28px] sm:p-[32px] rounded-[24px] shadow-sm flex flex-col justify-between'>
            
            <div>
              <h3 className='text-[22px] font-bold text-[#111111] leading-[1.2]'>
                {t('creditBenefitTitle')}
              </h3>
              <p className='text-[28px] sm:text-[32px] font-black text-[#D92D20] mb-[20px]'>
                {t('creditBenefitAmount')}
              </p>

              <form onSubmit={handleSubmit} className='flex flex-col gap-[12px]'>
                <input
                  type='text'
                  required
                  placeholder={t('creditNamePlaceholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full bg-[#FBFBFB] border border-[#E8E8E8] text-[#222222] text-[14px] px-[16px] py-[12px] rounded-[8px] outline-none focus:border-[#D92D20] transition-colors'
                />

                <input
                  type='tel'
                  required
                  placeholder={t('creditPhonePlaceholder')}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-full bg-[#FBFBFB] border border-[#E8E8E8] text-[#222222] text-[14px] px-[16px] py-[12px] rounded-[8px] outline-none focus:border-[#D92D20] transition-colors'
                />

                <button
                  type='submit'
                  className='w-full bg-[#D92D20] hover:bg-[#B82216] text-white text-[13px] font-bold tracking-wider uppercase py-[14px] rounded-[8px] transition-colors mt-[4px]'
                >
                  {t('creditBtnSubmit')}
                </button>
              </form>
            </div>

            <p className='text-[11px] text-[#999999] leading-[1.3] text-center mt-[20px]'>
              {t('creditConsentText')}{' '}
              <a href='#' className='underline hover:text-[#333333] transition-colors'>
                {t('creditConsentLink')}
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}