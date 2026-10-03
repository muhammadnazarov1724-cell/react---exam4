import React from 'react'
import { useTranslation } from 'react-i18next'

import advantage1 from '../../assets/r45.png' 
import advantage2 from '../../assets/Rectangle 115.png' 
import advantage3 from '../../assets/Rectangle 170.png' 
import advantage4 from '../../assets/Rectangle 450.png' 
import advantage5 from '../../assets/Rectangle 451.png' 
import advantage6 from '../../assets/Rectangle 452.png' 

export default function Section5B() {
  const { t } = useTranslation()

  const advantagesList = [
    {
      id: '01',
      img: advantage1,
      titleKey: 'advantages.items.1.title',
      defaultTitle: 'Автомобиль для любых задач',
      descKey: 'advantages.items.1.desc',
      defaultDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mauris odio, at mattis lacus ullamcorper sit amet.',
    },
    {
      id: '02',
      img: advantage2,
      titleKey: 'advantages.items.2.title',
      defaultTitle: 'Единый корпоративный стиль',
      descKey: 'advantages.items.2.desc',
      defaultDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mauris odio, at mattis lacus ullamcorper sit amet.',
    },
    {
      id: '03',
      img: advantage3,
      titleKey: 'advantages.items.3.title',
      defaultTitle: 'Современные технологичные решения',
      descKey: 'advantages.items.3.desc',
      defaultDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mauris odio, at mattis lacus ullamcorper sit amet.',
    },
    {
      id: '04',
      img: advantage4,
      titleKey: 'advantages.items.4.title',
      defaultTitle: 'Надежные запчасти от производителя',
      descKey: 'advantages.items.4.desc',
      defaultDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mauris odio, at mattis lacus ullamcorper sit amet.',
    },
    {
      id: '05',
      img: advantage5,
      titleKey: 'advantages.items.5.title',
      defaultTitle: 'Заслуживает доверия',
      descKey: 'advantages.items.5.desc',
      defaultDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mauris odio, at mattis lacus ullamcorper sit amet.',
    },
    {
      id: '06',
      img: advantage6,
      titleKey: 'advantages.items.6.title',
      defaultTitle: 'Качество, проверенное временем',
      descKey: 'advantages.items.6.desc',
      defaultDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo mauris odio, at mattis lacus ullamcorper sit amet.',
    },
  ]

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans bg-white'>
      <div className='max-w-[1229px] mx-auto'>
        
        <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-black text-[#111111] mb-[32px] tracking-tight'>
          {t('advantages.mainTitle', 'Преимущества Toyota')}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[36px]'>
          {advantagesList.map((item) => (
            <div key={item.id} className='flex flex-col'>
              
              <div className='w-full h-[200px] sm:h-[220px] rounded-[18px] overflow-hidden bg-[#F2F2F2] mb-[20px]'>
                <img
                  src={item.img}
                  alt={t(item.titleKey, item.defaultTitle)}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex items-start gap-[12px]'>
                
                <div className='w-[28px] h-[28px] rounded-full bg-[#D92D20] text-white flex items-center justify-center text-[12px] font-bold shrink-0 mt-[2px]'>
                  {item.id}
                </div>

                <div>
                  <h3 className='text-[15px] font-bold text-[#111111] leading-[1.25] mb-[8px] max-w-[260px]'>
                    {t(item.titleKey, item.defaultTitle)}
                  </h3>
                  <p className='text-[12px] text-[#666666] leading-[1.5] font-normal'>
                    {t(item.descKey, item.defaultDesc)}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}