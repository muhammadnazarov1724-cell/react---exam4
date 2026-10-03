import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {

    let [t] = useTranslation()

  let routeLinks = [
    { id: 1, title: "contactsRouteInner" },
    { id: 2, title: "contactsRouteOuter" },
    { id: 3, title: "contactsRouteCenter" },
  ]

  return (
    <section className='w-full bg-white text-[#222222] font-sans py-[40px] px-[20px]'>
      <div className='max-w-[1200px] m-auto'>
        
        <div className='border-b border-gray-200 pb-[16px] mb-[32px]'>
          <h1 className='text-[32px] md:text-[40px] font-bold text-[#222222]'>
            {t("contactsTitle")}
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[32px]'>
          
          <div className='flex items-start gap-[16px]'>
            <div className='w-[40px] h-[40px] bg-[#D92D20] rounded-full flex items-center justify-center shrink-0 text-white mt-[2px]'>
              <svg className='w-[20px] h-[20px]' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
              </svg>
            </div>
            <div className='flex flex-col gap-[6px]'>
              <h3 className='text-[18px] font-bold text-[#222222]'>
                {t("contactsPhoneTitle")}
              </h3>
              <div className='flex flex-col text-[14px] text-[#666666] gap-[2px]'>
                <a href='tel:+78005519431' className='hover:text-[#D92D20] transition-colors'>+7 (800) 551-94-31</a>
                <a href='tel:+74952921867' className='hover:text-[#D92D20] transition-colors'>+7 (495) 292-18-67</a>
              </div>
            </div>
          </div>

          <div className='flex items-start gap-[16px]'>
            <div className='w-[40px] h-[40px] bg-[#D92D20] rounded-full flex items-center justify-center shrink-0 text-white mt-[2px]'>
              <svg className='w-[20px] h-[20px]' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
              </svg>
            </div>
            <div className='flex flex-col gap-[6px]'>
              <h3 className='text-[18px] font-bold text-[#222222]'>
                {t("contactsAddressTitle")}
              </h3>
              <p className='text-[14px] text-[#666666] leading-[1.5]'>
                {t("contactsAddressText")}
              </p>
              <p className='text-[13px] text-[#D92D20] font-medium'>
                {t("contactsGpsText")}
              </p>
            </div>
          </div>

          <div className='flex items-start gap-[16px]'>
            <div className='w-[40px] h-[40px] bg-[#D92D20] rounded-full flex items-center justify-center shrink-0 text-white mt-[2px]'>
              <svg className='w-[20px] h-[20px]' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' />
              </svg>
            </div>
            <div className='flex flex-col gap-[6px]'>
              <h3 className='text-[18px] font-bold text-[#222222]'>
                {t("contactsRouteTitle")}
              </h3>
              <div className='flex flex-col gap-[4px] text-[14px]'>
                {routeLinks.map((route) => (
                  <a
                    key={route.id}
                    href='#'
                    className='text-[#666666] underline hover:text-[#D92D20] hover:no-underline transition-colors'
                  >
                    {t(route.title)}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className='w-full h-[400px] md:h-[480px] rounded-[16px] overflow-hidden border border-gray-200 shadow-sm relative'>
          <iframe
          title='SoftClub Location Map'
          src='https://yandex.ru/map-widget/v1/?ll=68.784800%2C38.559800&z=16&pt=68.784800,38.559800,pm2rdm'
          className='w-full h-full border-0'
          allowFullScreen={true}
          loading='lazy'
        />
        </div>

      </div>
    </section>
  )
}