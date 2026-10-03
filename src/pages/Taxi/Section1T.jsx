import React from 'react';
import { useTranslation } from 'react-i18next';

import bgCity from '../../assets/city.jpg'
import taxi from '../../assets/ефчш.png'

export default function Section1T() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Главный контейнер с жёлтым фоном */}
      <div className="relative bg-[#FFC700] rounded-3xl p-8 md:p-12 overflow-hidden shadow-sm">
        
        {/* ФОН ГОРОДА */}
        <div 
          className="absolute inset-0 bg-bottom bg-contain bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${bgCity})` }}
        />

        {/* Хлебные крошки */}
        <div className="relative z-10 text-xs font-medium text-gray-800 mb-6 flex items-center gap-1.5">
          <span className="cursor-pointer hover:underline">{t('breadcrumb_home')}</span>
          <span>&gt;</span>
          <span>{t('breadcrumb_taxi')}</span>
        </div>

        {/* Контентная сетка */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Левая колонка: Заголовок и Преимущества */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              {t('title_line1')} <br />
              {t('title_line2')}
            </h1>

            {/* 4 преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                  {t('feature_loan')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                  {t('feature_wrap')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                  {t('feature_date')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                  {t('feature_deposit')}
                </span>
              </div>
            </div>
          </div>

          {/* Правая колонка: Картинка ТАКСИ */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <img 
              src={taxi} 
              className="w-full max-w-md lg:max-w-none object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* БЕЛАЯ ФОРМА ВНИЗУ */}
        <div className="relative z-10 mt-8 bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <form className="flex flex-col lg:flex-row items-center gap-4 justify-between" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-1 text-center lg:text-left">
              <div className="font-extrabold text-base sm:text-lg text-gray-900 leading-tight">
                {t('form_title')}
              </div>
              <span className="inline-block bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
                {t('form_badge')}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-1 max-w-2xl">
              <input
                type="text"
                placeholder={t('input_name')}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder={t('input_phone')}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                {t('btn_submit')}
              </button>
            </div>
          </form>

          <p className="text-[10px] text-gray-400 mt-2 text-center lg:text-right">
            {t('policy_text')}{' '}
            <a href="#" className="underline hover:text-gray-600">
              {t('policy_link')}
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}