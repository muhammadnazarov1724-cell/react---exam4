import React from 'react'
import Section1H from './Section1H'
import Section2H from './Section2H'
import Section3H from './Section3H'
import Section4H from './Section4H'
import Section5H from './Section5H'
import Section6H from './Section6'
import Section7H from './Section7H'
import Section8H from './Section8H'
import Section9H from './Section9H'
import Otziv from '../Otziv/Otziv'
import Otziv3 from './Section10'
import Section11H from './Section11H'
import Section12H from './Section12H'

export default function Home() {
  return (
    <div>

        <Section1H/>
        <Section3H/>
        <Section2H/>
        <Section4H/>
        <Section5H/>
        <Section6H/>
        <Section7H/>
        <Section8H/>
        <Section9H/>
        <Otziv3/>
        <Section11H/>
        <Section12H/>
                <div className='w-full h-[400px] md:h-[480px] rounded-[16px] overflow-hidden border border-gray-200 shadow-sm relative mt-[50px]'>
          <iframe
          title='SoftClub Location Map'
          src='https://yandex.ru/map-widget/v1/?ll=68.784800%2C38.559800&z=16&pt=68.784800,38.559800,pm2rdm'
          className='w-full h-full border-0'
          allowFullScreen={true}
          loading='lazy'
        />
        </div>

    </div>
  )
}
