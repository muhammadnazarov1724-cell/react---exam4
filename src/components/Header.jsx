import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

import logo from '../assets/logo1 1.png'
import gr from '../assets/Group-2.png'
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    // Варианты анимации для контейнера (поочередное появление элементов)
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='p-[10px] flex md:flex-col justify-between sticky top-0 z-50 w-full bg-white shadow-sm'
        >
            <section className='max-w-[1250px] m-auto mt-[20px] flex items-center gap-[20px]'>
                {/* Логотип с эффектом при клике и наведении */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')} 
                    className="cursor-pointer"
                >
                    <img className='w-[150px]' src={logo} alt="Logo" />
                </motion.div>

                {/* Навигация с анимацией каждого пункта */}
                <nav className='hidden lg:flex gap-[10px] text-[15px]'>
                    {[
                        { to: '/', label: t("podbor") },
                        { to: '/company', label: t("company") },
                        { to: '/techcenter', label: t("tech") },
                        { to: '/otziv', label: t("otziv") },
                        { to: '/contact', label: t("contact") },
                    ].map((item, index) => (
                        <motion.div key={index} variants={itemVariants} whileHover={{ y: -2 }}>
                            <NavLink 
                                to={item.to}
                                className='relative py-[4px] transition-colors duration-300 hover:text-[#CA0100] after:content-[""] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-[#CA0100] after:rounded-full after:transition-all after:duration-300 hover:after:w-full'
                            >
                                {item.label}
                            </NavLink>
                        </motion.div>
                    ))}
                </nav>

                {/* Селектор языка */}
                <motion.select 
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className='bg-white hidden lg:block border border-[#E5E7EB] rounded-[8px] px-[10px] py-[4px] outline-none cursor-pointer transition-all duration-300 hover:border-[#CA0100] hover:shadow-[0_0_0_3px_rgba(57,154,58,0.1)] focus:border-[#CA0100] focus:shadow-[0_0_0_3px_rgba(57,154,58,0.15)]' 
                    onChange={(e) => i18n.changeLanguage(e.target.value)} 
                    value={i18n.language}
                >
                    <option value="en">English 🇺🇲</option>
                    <option value="ru">Русский 🇷🇺</option>
                </motion.select>

                {/* Контакты */}
                <motion.div variants={itemVariants} className='hidden lg:flex flex-col items-end'>
                    <div className='flex items-center gap-[10px]'>
                        <div><img src={gr} alt="" /></div>
                        <p className='text-2xl font-bold'>+7 (800) 551-94-31</p>
                    </div>
                    <p>+7 (495) 292-18-67</p>
                </motion.div>

                <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-[#CA0100] hidden lg:block text-white font-bold text-[17px] p-[10px_23px] rounded-[10px] hover:bg-[#b50303] transition-colors'
                >
                    Обратный звонок
                </motion.button>
            </section>

            {/* Вторая секция */}
            <motion.section 
                variants={itemVariants}
                className='w-full bg-white border-b border-gray-200 py-[16px] px-[20px] font-sans'
            >
                <div className='max-w-[1200px] m-auto flex justify-between md:relative right-[20px]'>
                    <div className='hidden lg:flex gap-[50px]'>
                        <p onClick={()=> navigate('/')} className='hover:text-[#CA0100] hover:font-bold'>{t("navCatalog")}</p>
                        <p onClick={()=> navigate('/probeg')} className='hover:text-[#CA0100] hover:font-bold'>{t("navUsedCars")}</p>
                        <p onClick={()=> navigate('/creditRasrochka')} className='hover:text-[#CA0100] hover:font-bold'>{t("navCredit")}</p>
                        <p onClick={()=> navigate('/utilizia')} className='hover:text-[#CA0100] hover:font-bold'>{t("utilizia")}</p>
                        <p onClick={()=> navigate('/taxi')} className='hover:text-[#CA0100] hover:font-bold'>{t("navTaxiCredit")}</p>
                    </div>

                    {/* Иконки с эффектами взаимодействия */}
                    <div className='flex gap-[7px] relative left-[150px] lg:left-[0px]'>
                    <NavLink to="/favorite" className="hover:text-red-600 transition-colors">
                        <svg
                          className="w-6 h-6 stroke-current fill-none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </NavLink>

                        <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}