import React from 'react';
import Link from 'next/link';
import { _Basebutton } from "../../atoms/button/_Basebutton";

export const GuestHeader = () => {
    return (
        <header className="relative top-0 left-0 w-full h-16 z-10 bg-purple-600">
            <div className=''>
                <div className='hidden md:flex text-base font-robot'>
                    <nav className='flex items-center'>
                        <ul className='flex space-x-8'>
                            <li>
                                <Link href='../../View/ViewMap'>
                                    <a>目的地指定MAP</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='../../View/ViewTestMap'>
                                    <a>テスト用MAP</a>
                                </Link>
                            </li>
                            <li>
                                <_Basebutton />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}