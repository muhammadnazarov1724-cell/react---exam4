import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  let [t] = useTranslation()

  let carBrandsCol1 = ['Kia', 'Hyundai', 'Skoda', 'Volkswagen', 'Toyota', 'Brilliance']
  let carBrandsCol2 = ['Changan', 'Chery', 'CheryExeed', 'Chevrolet', 'Citroen', 'Datsun']
  let carBrandsCol3 = ['Dongfeng', 'DW Hower', 'FAW', 'Ford', 'Foton', 'Geely']
  let carBrandsCol4 = ['Great Wall', 'Haima', 'Haval', 'Honda', 'JAC', 'Lada']
  let carBrandsCol5 = ['Lifan', 'Mazda', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot']
  let carBrandsCol6 = ['Ravon', 'Renault', 'SsangYong', 'Suzuki', 'UAZ', 'Zotye']

  let creditLinks = [
    { id: 1, title: "footerExpressCredit" },
    { id: 2, title: "footerFamilyCar" },
    { id: 3, title: "footerFirstCar" },
    { id: 4, title: "footerMedicalWorkers" },
    { id: 5, title: "footerInstallment" },
    { id: 6, title: "footerTradeIn" },
  ]

  let navTop = [
    "footerNavCatalog",
    "footerNavUsed",
    "footerNavCredit",
    "footerNavOffers",
    "footerNavTaxi"
  ]

  return (
    <footer className='w-full bg-[#222222] text-[#A0A0A0] font-sans text-[13px]'>
      <div className='border-b border-[#333333] py-[20px] px-[20px]'>
        <div className='max-w-[1250px] m-auto flex flex-wrap items-center justify-between gap-[20px] text-white font-bold tracking-wider text-[13px] md:text-[14px] uppercase'>
          {navTop.map((item, idx) => (
            <a key={idx} href='#' className='hover:text-[#E11D48] transition-colors'>
              {t(item)}
            </a>
          ))}
        </div>
      </div>

      <div className='max-w-[1300px] m-auto px-[20px] py-[40px]'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[30px]'>
          
          <div className='lg:col-span-7 flex flex-col gap-[20px]'>
            <div className='flex items-center gap-[16px] text-[13px] uppercase tracking-wider font-bold'>
              <span className='text-white border-b-2 border-[#D92D20] pb-[2px]'>
                {t("footerCatalogTitle")}
              </span>
              <a href='#' className='text-[#888888] hover:text-white transition-colors underline underline-offset-4'>
                {t("footerMore")}
              </a>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[12px] text-[13px]'>
              {[carBrandsCol1, carBrandsCol2, carBrandsCol3, carBrandsCol4, carBrandsCol5, carBrandsCol6].map((col, colIdx) => (
                <div key={colIdx} className='flex flex-col gap-[8px]'>
                  {col.map((brand, brandIdx) => (
                    <a key={brandIdx} href='#' className='hover:text-white transition-colors'>
                      {brand}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='lg:col-span-2 flex flex-col gap-[20px]'>
            <a href='#' className='text-[#888888] hover:text-white transition-colors text-[13px] underline underline-offset-4 font-normal'>
              {t("footerSitemap")}
            </a>

            <div className='flex flex-col gap-[12px]'>
              <span className='text-white font-bold uppercase tracking-wider border-b-2 border-[#D92D20] w-max pb-[2px]'>
                {t("footerCreditTitle")}
              </span>
              <div className='flex flex-col gap-[8px]'>
                {creditLinks.map((item) => (
                  <a key={item.id} href='#' className='hover:text-white transition-colors'>
                    {t(item.title)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='lg:col-span-3 flex flex-col gap-[16px]'>
            <span className='text-white font-bold uppercase tracking-wider border-b-2 border-[#D92D20] w-max pb-[2px]'>
              {t("footerContactsTitle")}
            </span>

            <div className='flex flex-col gap-[12px]'>

              <div className='flex items-start gap-[10px]'>
                <svg className='w-[16px] h-[16px] text-[#D92D20] shrink-0 mt-[2px]' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                </svg>
                <div className='flex flex-col font-bold text-white text-[14px]'>
                  <a href='tel:+78005519431' className='hover:text-[#D92D20] transition-colors'>+7 (800) 551-94-31</a>
                  <a href='tel:+74952921867' className='hover:text-[#D92D20] transition-colors'>+7 (495) 292-18-67</a>
                </div>
              </div>

              <div className='flex items-center gap-[10px]'>
                <svg className='w-[16px] h-[16px] text-[#D92D20] shrink-0' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z' />
                </svg>
                <span>{t("footerSchedule")}</span>
              </div>

              <div className='flex items-start gap-[10px]'>
                <svg className='w-[16px] h-[16px] text-[#D92D20] shrink-0 mt-[2px]' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                </svg>
                <div className='flex flex-col'>
                  <span>{t("footerAddress")}</span>
                  <a href='#' className='text-[#D92D20] underline hover:no-underline transition-all mt-[2px]'>
                    {t("footerMapRoute")}
                  </a>
                </div>
              </div>

              <div className='relative mt-[10px]'>
                <select
                  defaultValue='moscow'
                  className='w-full h-[40px] bg-[#333333] text-white px-[14px] rounded-[4px] appearance-none cursor-pointer focus:outline-none border border-[#444444] text-[13px] font-medium'
                >
                  <option value='moscow'>{t("cityMoscow")}</option>
                  <option value='spb'>{t("citySpb")}</option>
                </select>
                <svg
                  className='w-[14px] h-[14px] text-gray-400 pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='bg-[#181818] py-[24px] px-[20px]'>
        <div className='max-w-[1300px] m-auto flex flex-col lg:flex-row items-center justify-between gap-[20px] text-[12px] text-[#777777]'>
          
          <div className='flex flex-col gap-[8px]'>
            <p className='text-white font-medium'>{t("footerCopyright")}</p>
            <div className='flex items-center gap-[16px]'>
              <a href='#' className='hover:underline'>{t("footerPrivacy")}</a>
              <a href='#' className='hover:underline'>{t("footerTerms")}</a>
            </div>
          </div>

          <p className='max-w-[550px] leading-[1.6] text-center lg:text-left'>
            {t("footerDisclaimer")}
          </p>

          <div className='bg-white text-black p-[8px] px-[12px] rounded-[6px] flex items-center gap-[8px] shrink-0 shadow-sm'>
            <span className='text-[#FF0000] font-black text-[18px]'>Я</span>
            <div className='flex items-center gap-[4px] font-bold text-[16px]'>
              <span>5,0</span>
              <span className='text-gray-400 text-[12px]'>/5</span>
            </div>
            <div className='border-l border-gray-300 pl-[8px] text-[10px] text-gray-500 leading-tight'>
              Рейтинг организации в Яндексе
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}