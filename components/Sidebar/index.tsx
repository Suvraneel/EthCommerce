import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBoltLightning,
    faBox,
    faFile,
    faUsers,
    faChartBar,
    faDollarSign,
    faSearch,
    faBook,
    faQuestion,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Sidebar() {
    const menu = [
        { label: 'QuickStart', icon: faBoltLightning },
        { label: 'Products', icon: faBox },
        { label: 'Posts', icon: faFile },
        { label: 'Audience', icon: faUsers },
        { label: 'Analytics', icon: faChartBar },
        { label: 'Payouts', icon: faDollarSign },
        { label: 'Discover', icon: faSearch },
        { label: 'Library', icon: faBook },
        { label: 'Help', icon: faQuestion },
        { label: 'Settings', icon: faCog },
    ]
    return (
        <div
            className='flex flex-col transition-all	ease-out duration-1000 w-20 hover:w-56 h-screen bg-black text-white divide-y divide-blue-200 overflow-hidden sticky top-0 left-0 z-10'>
            <div className="h-20">
                <img src='images/Gumroad_logo.png' className='w-full invert p-8' />
            </div>
            {menu.map((item, i) => {
                return (
                    <Link key={i}
                        href={'/' + item.label.toLowerCase()}
                        passHref
                    >
                        <div className='flex justify-start items-center gap-5 py-4 px-8'>
                            <div className='pr-2'>
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    size='1x'
                                    className="w-5 h-5"
                                    color="white"
                                />
                            </div>
                            <h1 className='text-lg'>{item.label}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}