import React from 'react'

import logo from '../../assets/svgs/logo.svg'
import zakaz1 from '../../assets/svgs/zakaz1.svg'
import zakaz2 from '../../assets/svgs/zakaz2.svg'
import zakaz3 from '../../assets/svgs/zakaz3.svg'
import zakaz4 from '../../assets/svgs/zakaz4.svg'
import zakaz5 from '../../assets/svgs/zakaz5.svg'
import zakaz6 from '../../assets/svgs/zakaz6.svg'


export const SlideBar = () => {
  return (
    <div className='border-r-2 h-[100vh] border-gray-300'>

    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
        <span></span>
        </label>

        <ul className="menu__box">
                
                <li className='flex justify-center border-b-2 border-gray-300 pb-[20px]'><a className=" flex items-center gap-2" href="#">
                    <img src={logo} alt="" />
                    <div>
                        <h3 className='text-[18px] font-bold'>Fast Food</h3>
                        <p className='text-gray-400 text-[14px]'>Online maxsulot sotuvi</p>
                    </div>
                </a>
                </li>
                <li><a className="menu__item" href="#"> <div className='flex items-center gap-3'><img src={zakaz1} alt="" /> Buyurtmalar</div></a></li>
                <li><a className="menu__item" href="#"> <div className='flex items-center gap-3'><img src={zakaz2} alt="" /> Maxsulotlar</div></a></li>
                <li><a className="menu__item" href="#"> <div className='flex items-center gap-3'><img src={zakaz3} alt="" /> Kategoriyalar</div></a></li>
                <li><a className="menu__item" href="#"> <div className='flex items-center gap-3'><img src={zakaz4} alt="" /> Filiyallar</div></a></li>
                <li><a className="menu__item" href="#"> <div className='flex items-center gap-3'><img src={zakaz5} alt="" /> Mijozlar</div></a></li>
                <li><a className="menu__item" href="#"> <div className='flex items-center gap-3'><img src={zakaz6} alt="" /> Xisobot</div></a></li>
        </ul>
    </div>

    </div>
  )
}
