import React from 'react'
import { useTranslation } from 'react-i18next'

let services = [
    {
      id: 'body-repair',
      title: "techBodyRepairTitle",
      desc: "techBodyRepairDesc",
    },
    {
      id: 'locksmith-repair',
      title: "techLocksmithRepairTitle",
      desc: "techLocksmithRepairDesc",
    },
    {
      id: 'tire-service',
      title: "techTireServiceTitle",
      desc: "techTireServiceDesc",
    },
    {
      id: 'diagnostics',
      title: "techDiagnosticsTitle",
      desc: "techDiagnosticsDesc",
    },
    {
      id: 'oil-change',
      title: "techOilChangeTitle",
      desc: "techOilChangeDesc",
    },
    {
      id: 'maintenance',
      title: "techMaintenanceTitle",
      desc: "techMaintenanceDesc",
    },
    {
      id: 'alignment',
      title: "techAlignmentTitle",
      desc: "techAlignmentDesc",
    },
    {
      id: 'parts-selection',
      title: "techPartsSelectionTitle",
      desc: "techPartsSelectionDesc",
    },
    {
      id: 'insurance-renewal',
      title: "techInsuranceRenewalTitle",
      desc: "techInsuranceRenewalDesc",
    },
  ]

export default function Techcenter() {
    let [t] = useTranslation()
  return (
    <div>

    <section className='w-full bg-white text-[#222222] font-sans py-[40px] px-[20px] my-[30px]'>
      <div className='max-w-[1200px] m-auto'>
        
        <div className='border-b border-gray-200 pb-[16px] mb-[32px]'>
          <h1 className='text-[32px] md:text-[40px] font-bold text-[#222222]'>
            {t("techTitle")}
          </h1>
        </div>

        <p className='text-[14px] md:text-[15px] leading-[1.7] text-[#444444] max-w-[720px] mb-[48px]'>
          {t("techMainDesc")}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[40px]'>
          {services.map((item) => (
            <div key={t(item.id)} className='flex flex-col items-start'>
              
              <div className='flex items-center gap-[12px] mb-[12px]'>
                <span className='w-[20px] h-[3px] bg-[#D92D20] shrink-0 rounded-full' />
                <h3 className='text-[18px] md:text-[20px] font-bold text-[#222222] leading-tight'>
                  {t(item.title)}
                </h3>
              </div>

              <p className='text-[13px] md:text-[14px] text-[#666666] leading-[1.6] pl-[32px]'>
                {t(item.desc)}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>

    </div>
  )
}
