import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import posterImg from '../../assets/Rectangle 122.png'

export default function Section11H() {
  const [t] = useTranslation()
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Вставьте сюда вашу ссылку на видео
  const videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4'

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <section className='w-full bg-white py-[60px] px-[16px] md:px-[20px] font-sans'>
      <div className='max-w-[1000px] mx-auto text-center'>
        
        <h2 className='text-[32px] md:text-[40px] font-bold text-[#111111] mb-[16px]'>
          {t('aboutTitlee')}
        </h2>

        <p className='text-[14px] md:text-[15px] text-[#666666] leading-[1.6] max-w-[800px] mx-auto mb-[40px] font-normal'>
          {t('aboutDescription')}
        </p>

        <div className='relative w-full max-w-[900px] mx-auto rounded-[24px] overflow-hidden shadow-lg group bg-black aspect-video flex items-center justify-center'>
          
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterImg}
            playsInline
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className='w-full h-full object-cover cursor-pointer'
          />

          {/* Кнопка Play (показывается, когда видео стоит на паузе) */}
          {!isPlaying && (
            <button
              type='button'
              onClick={togglePlay}
              aria-label='Play video'
              className='absolute inset-0 m-auto w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full bg-[#D92D20] text-white flex items-center justify-center shadow-[0_0_25px_rgba(217,45,32,0.6)] transition-transform duration-300 hover:scale-110 cursor-pointer z-10'
            >
              <svg
                className='w-[24px] h-[24px] md:w-[28px] md:h-[28px] translate-x-[2px]'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </button>
          )}

        </div>

      </div>
    </section>
  )
}