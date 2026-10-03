import React from 'react'
import { useTranslation } from 'react-i18next'

// Импорт картинки накрытого авто (опционально)
import carCoveredImg from '../../assets/hideCar.png'

export default function Section2F() {
  const { t } = useTranslation()

  return (
    <section className='w-full py-[40px] px-[16px] md:px-[20px] font-sans bg-white'>
      <div className='max-w-[1229px] mx-auto my-[50px] space-y-[40px]'>
        
        {/* ================= 4 ПРЕИМУЩЕСТВА СВЕРХУ ================= */}
        <div>
          <h2 className='text-[32px] sm:text-[38px] font-black text-center text-[#111111] mb-[32px] tracking-tight'>
            {t('calc.advantages.title', 'Преимущества программы')}
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center text-center relative'>
            
            {/* 1. Первоначальный взнос */}
            <div className='flex flex-col items-center'>
              <div className='w-[60px] h-[60px] mb-[8px] flex items-center justify-center text-[#D92D20] text-[32px]'>
                🏷️
              </div>
              <span className='text-[20px] font-black text-[#111111] leading-none mb-[4px]'>
                {t('calc.advantages.downPaymentVal', 'от 0%')}
              </span>
              <span className='text-[12px] text-[#777777] font-medium'>
                {t('calc.advantages.downPaymentLabel', 'Первоначальный взнос')}
              </span>
            </div>

            {/* 2. Ответ специалистов */}
            <div className='flex flex-col items-center relative'>
              <div className='w-[60px] h-[60px] mb-[8px] flex items-center justify-center text-[#D92D20] text-[32px]'>
                🎧
              </div>
              <span className='text-[20px] font-black text-[#111111] leading-none mb-[4px]'>
                {t('calc.advantages.responseTimeVal', '30 минут')}
              </span>
              <span className='text-[12px] text-[#777777] font-medium'>
                {t('calc.advantages.responseTimeLabel', 'Ответ кредитных специалистов')}
              </span>
            </div>

            {/* 3. Ставка по кредиту */}
            <div className='flex flex-col items-center relative'>
              <div className='w-[60px] h-[60px] mb-[8px] flex items-center justify-center text-[#D92D20] text-[32px]'>
                %
              </div>
              <span className='text-[20px] font-black text-[#111111] leading-none mb-[4px]'>
                {t('calc.advantages.rateVal', 'от 1,9%')}
              </span>
              <span className='text-[12px] text-[#777777] font-medium'>
                {t('calc.advantages.rateLabel', 'Ставка по кредиту')}
              </span>
            </div>

            {/* 4. Одобрение кредита */}
            <div className='flex flex-col items-center'>
              <div className='w-[60px] h-[60px] mb-[8px] flex items-center justify-center text-[#D92D20] text-[32px]'>
                🤝
              </div>
              <span className='text-[20px] font-black text-[#111111] leading-none mb-[4px]'>
                {t('calc.advantages.approvalVal', '98%')}
              </span>
              <span className='text-[12px] text-[#777777] font-medium'>
                {t('calc.advantages.approvalLabel', 'Одобрение кредита')}
              </span>
            </div>

          </div>
        </div>

        {/* ================= ШАГ 1: ВАШ БУДУЩИЙ АВТОМОБИЛЬ ================= */}
        <div className='relative bg-[#F7F7F7] rounded-[24px] p-[24px] sm:p-[36px] lg:p-[40px]'>
          
          {/* Номер шага */}
          <div className='absolute -left-[14px] top-[32px] w-[32px] h-[32px] rounded-full bg-[#D92D20] text-white text-[14px] font-bold flex items-center justify-center shadow-md'>
            1
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-center'>
            
            {/* Форма выпадающих списков */}
            <div className='lg:col-span-6 space-y-[12px]'>
              <h3 className='text-[22px] sm:text-[26px] font-black text-[#111111] mb-[16px]'>
                {t('calc.step1.title', 'Ваш будущий автомобиль')}
              </h3>

              <div className='relative'>
                <select className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#111111] border border-transparent outline-none appearance-none cursor-pointer shadow-sm'>
                  <option value=''>{t('calc.step1.brand', 'Марка')}</option>
                </select>
                <span className='absolute right-[16px] top-1/2 -translate-y-1/2 text-[12px] text-[#888888] pointer-events-none'>▼</span>
              </div>

              <div className='relative'>
                <select className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#111111] border border-transparent outline-none appearance-none cursor-pointer shadow-sm'>
                  <option value=''>{t('calc.step1.model', 'Модель')}</option>
                </select>
                <span className='absolute right-[16px] top-1/2 -translate-y-1/2 text-[12px] text-[#888888] pointer-events-none'>▼</span>
              </div>

              <div className='relative'>
                <select className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#111111] border border-transparent outline-none appearance-none cursor-pointer shadow-sm'>
                  <option value=''>{t('calc.step1.equipment', 'Комплектация')}</option>
                </select>
                <span className='absolute right-[16px] top-1/2 -translate-y-1/2 text-[12px] text-[#888888] pointer-events-none'>▼</span>
              </div>
            </div>

            {/* Картинка машины и подпись */}
            <div className='lg:col-span-6 flex flex-col items-center justify-center relative pt-[20px] lg:pt-0'>
              <p className='text-[13px] text-[#888888] font-medium text-center mb-[12px]'>
                {t('calc.step1.hint', 'Выберите марку и модель автомобиля')}
              </p>
              <div className='max-w-[420px] w-full'>
                <img
                  src={carCoveredImg}
                  alt='Covered Car'
                  className='w-full h-auto object-contain mx-auto'
                />
              </div>
            </div>

          </div>
        </div>

        {/* ================= ШАГ 2: КУПИТЬ В КРЕДИТ ================= */}
        <div className='relative bg-[#F7F7F7] rounded-[24px] p-[24px] sm:p-[36px] lg:p-[40px]'>
          
          {/* Номер шага */}
          <div className='absolute -left-[14px] top-[32px] w-[32px] h-[32px] rounded-full bg-[#D92D20] text-white text-[14px] font-bold flex items-center justify-center shadow-md'>
            2
          </div>

          <div className='flex flex-col lg:flex-row justify-between gap-[24px] mb-[28px]'>
            <h3 className='text-[22px] sm:text-[26px] font-black text-[#111111]'>
              {t('calc.step2.title', 'Купить в кредит')}
            </h3>

            {/* Чекбоксы скидок */}
            <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]'>
              <label className='flex items-start gap-[8px] cursor-pointer text-[12px] text-[#555555] font-medium leading-snug max-w-[200px]'>
                <input type='checkbox' defaultChecked className='mt-[2px] accent-[#D92D20] w-[16px] h-[16px]' />
                <span>{t('calc.step2.discount10', 'Скидка от руководителя -10% от цены авто')}</span>
              </label>

              <label className='flex items-start gap-[8px] cursor-pointer text-[12px] text-[#555555] font-medium leading-snug max-w-[200px]'>
                <input type='checkbox' defaultChecked className='mt-[2px] accent-[#D92D20] w-[16px] h-[16px]' />
                <span>{t('calc.step2.discount30k', 'Акция "Выгодный кредит" Скидка 30 000 ₽')}</span>
              </label>
            </div>
          </div>

          {/* Ползунок срока + Инпут взноса */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-[24px] mb-[32px]'>
            
            {/* Ползунок (Срок кредита) */}
            <div className='lg:col-span-7 space-y-[8px]'>
              <div className='flex justify-between text-[13px] font-bold text-[#111111]'>
                <span>{t('calc.step2.termLabel', 'Срок кредита, месяцев')}</span>
                <span>{t('calc.step2.termValue', '36 мес.')}</span>
              </div>

              {/* Статичный диапазон */}
              <div className='relative pt-[8px] pb-[16px]'>
                <div className='w-full h-[4px] bg-gray-200 rounded-full relative'>
                  <div className='absolute left-0 top-0 h-full w-[40%] bg-[#D92D20] rounded-full' />
                  <div className='absolute left-[40%] top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-[#D92D20] rounded-full shadow-md' />
                </div>
                <div className='flex justify-between text-[11px] text-[#888888] mt-[12px] font-medium'>
                  <span>6</span>
                  <span>12</span>
                  <span>24</span>
                  <span>36</span>
                  <span>48</span>
                  <span>60</span>
                  <span>72</span>
                  <span>84</span>
                </div>
              </div>
            </div>

            {/* Поле первоначального взноса */}
            <div className='lg:col-span-5 flex items-start'>
              <input
                type='text'
                placeholder={t('calc.step2.downPaymentPlaceholder', 'Первоначальный взнос')}
                className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#111111] placeholder-[#888888] outline-none shadow-sm'
              />
            </div>

          </div>

          {/* Логотипы банков */}
          <div>
            <span className='block text-[13px] font-bold text-[#111111] mb-[12px]'>
              {t('calc.step2.selectBank', 'Выберите банк')}
            </span>

            <div className='flex flex-wrap items-center gap-[12px]'>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#21A038] shadow-sm'>
                СБЕР БАНК
              </div>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#00AAFF] shadow-sm'>
                ВТБ
              </div>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#EF3124] shadow-sm'>
                Альфа-Банк
              </div>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#21A038] opacity-60 shadow-sm'>
                СБЕР БАНК
              </div>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#00AAFF] opacity-60 shadow-sm'>
                ВТБ
              </div>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#EF3124] opacity-60 shadow-sm'>
                Альфа-Банк
              </div>
              <div className='h-[40px] px-[16px] bg-white rounded-[8px] border border-gray-200 flex items-center justify-center text-[12px] font-bold text-[#21A038] opacity-60 shadow-sm'>
                СБЕР БАНК
              </div>
            </div>
          </div>

        </div>

        {/* ================= ШАГ ТРЕЙД-ИН (СВЕРНУТЫЙ) ================= */}
        <div className='relative bg-[#F7F7F7] rounded-[24px] p-[20px] sm:p-[24px] flex items-center justify-between'>
          
          <div className='absolute -left-[14px] top-1/2 -translate-y-1/2 w-[32px] h-[32px] rounded-full bg-[#B0B0B0] text-white text-[16px] font-bold flex items-center justify-center shadow-md'>
            +
          </div>

          <span className='text-[20px] sm:text-[22px] font-extrabold text-[#A0A0A0] ml-[12px]'>
            {t('calc.tradeIn.title', 'Программа Trade-in')}
          </span>

          <button
            type='button'
            className='bg-[#D92D20] text-white font-bold text-[11px] px-[16px] py-[8px] rounded-[6px] tracking-wider uppercase cursor-pointer'
          >
            {t('calc.tradeIn.addBtn', 'ДОБАВИТЬ')}
          </button>
        </div>

        {/* ================= ШАГ 3: ПЕРСОНАЛЬНЫЕ ДАННЫЕ ================= */}
        <div className='relative bg-[#F7F7F7] rounded-[24px] p-[24px] sm:p-[36px] lg:p-[40px]'>
          
          {/* Номер шага */}
          <div className='absolute -left-[14px] top-[32px] w-[32px] h-[32px] rounded-full bg-[#D92D20] text-white text-[14px] font-bold flex items-center justify-center shadow-md'>
            3
          </div>

          <h3 className='text-[22px] sm:text-[26px] font-black text-[#111111] mb-[20px]'>
            {t('calc.step3.title', 'Персональные данные')}
          </h3>

          <form className='grid grid-cols-1 lg:grid-cols-2 gap-[16px] items-start'>
            
            {/* Левая колонка - поля ввода */}
            <div className='space-y-[12px]'>
              <input
                type='text'
                placeholder={t('calc.step3.namePlaceholder', 'Ваше имя')}
                className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#111111] placeholder-[#888888] outline-none shadow-sm'
              />

              <div className='relative'>
                <select className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#888888] outline-none appearance-none cursor-pointer shadow-sm'>
                  <option value=''>{t('calc.step3.phonePlaceholder', 'Номер телефона')}</option>
                </select>
                <span className='absolute right-[16px] top-1/2 -translate-y-1/2 text-[12px] text-[#888888] pointer-events-none'>▼</span>
              </div>

              <p className='text-[10px] text-[#888888] pt-[4px]'>
                {t('calc.step3.disclaimerText', 'Нажимая кнопку "Получить лучшие условия" Вы даете согласие на обработку своих')}{' '}
                <a href='#' className='underline hover:text-[#111111]'>
                  {t('calc.step3.disclaimerLink', 'персональных данных')}
                </a>
              </p>
            </div>

            {/* Правая колонка - Выбор подарка и кнопка */}
            <div className='space-y-[12px]'>
              <div className='relative'>
                <select className='w-full h-[52px] bg-white rounded-[12px] px-[16px] text-[14px] text-[#888888] outline-none appearance-none cursor-pointer shadow-sm'>
                  <option value=''>{t('calc.step3.selectGift', 'Выберите подарок')}</option>
                </select>
                <span className='absolute right-[16px] top-1/2 -translate-y-1/2 text-[12px] text-[#888888] pointer-events-none'>▼</span>
              </div>

              <button
                type='submit'
                className='w-full h-[52px] bg-[#D92D20] hover:bg-[#B82216] text-white font-extrabold text-[12px] sm:text-[13px] tracking-wider uppercase rounded-[12px] transition-colors cursor-pointer shadow-md'
              >
                {t('calc.step3.submitBtn', 'ПОЛУЧИТЬ ЛУЧШИЕ УСЛОВИЯ')}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}