import React, { lazy, Suspense } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Loyal from './components/Loyal'

const Home = lazy(()=> import('./pages/Home/Home'))
const Company = lazy(()=> import('./pages/Company/Company'))
const Techcenter = lazy(()=> import('./pages/Techcenter/Techcenter'))
const Otziv = lazy(()=> import('./pages/Otziv/Otziv'))
const Contact = lazy(()=> import('./pages/Contact/Contact'))
const Brand = lazy(()=> import('./pages/brand/Brand'))
const Family = lazy(()=> import('./pages/Family/Family'))
const FirstCar = lazy(()=> import('./pages/FirstCar/FirstCar'))
const ExprressCredit = lazy(()=> import('./pages/ExpressCredit/ExprressCredit'))
const Model = lazy(()=> import('./pages/Model/Model'))
const CreditRasrochka = lazy(()=> import('./pages/CreditRasrochka/CreditRasrochka'))
const Medicine = lazy(()=> import('./pages/Medicine/Medicine'))
const Rasrochka = lazy(()=> import('./pages/Rasrochka/Rasrochka'))
const ProgramaTrade = lazy(()=> import('./pages/ProgramaTrade/ProgramaTrade'))
const Probeg = lazy(()=> import('./pages/Probeg/Probeg'))
const Utilizia = lazy(()=> import('./pages/utilizia/Utlizia'))
const Favorite = lazy(()=> import('./pages/favorite/Favorite'))
const CarInfo = lazy(()=> import('./pages/CarInfo/CarInfo'))
const Taxi = lazy(()=> import('./pages/Taxi/Taxi'))
const NotFound = lazy(()=> import('./pages/notFound/NotFound'))

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Loyal/>,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home/>
            </Suspense>
          ),
        },
        {
        path: '/company',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Company/>
          </Suspense>
        )
        },
        {
        path: '/techcenter',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Techcenter/>
          </Suspense>
        )
        },
        {
        path: '/otziv',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Otziv/>
          </Suspense>
        )
        },        
        {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact/>
          </Suspense>
        )
        },
        {
        path: '/brand',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Brand/>
          </Suspense>
        )
        },
        {
        path: '/family',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Family/>
          </Suspense>
        )
        },
        {
        path: '/firstCar',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <FirstCar/>
          </Suspense>
        )
        },
        {
        path: '/expressCredit',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ExprressCredit/>
          </Suspense>
        )
        },
        {
        path: '/model',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Model/>
          </Suspense>
        )
        },
        {
        path: '/creditRasrochka',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CreditRasrochka/>
          </Suspense>
        )
        },
        {
        path: '/medicine',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Medicine/>
          </Suspense>
        )
        },        
        {
        path: '/rasrochka',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Rasrochka/>
          </Suspense>
        )
        },        
        {
        path: '/programaTrade',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProgramaTrade/>
          </Suspense>
        )
        },
        {
        path: '/probeg',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Probeg/>
          </Suspense>
        )
        },
        {
        path: '/utilizia',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Utilizia/>
          </Suspense>
        )
        },
        {
        path: '/favorite',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Favorite/>
          </Suspense>
        )
        },
        {
        path: '/car/:id',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CarInfo/>
          </Suspense>
        )
        },
        {
        path: '/taxi',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Taxi/>
          </Suspense>
        )
        },
      ]
    },
    {
      path: "*",
      element: <Suspense fallback={<h1>Loading...</h1>}>
        <NotFound/>
      </Suspense>
    }
  ]);

  return <RouterProvider router={router}/>
}
