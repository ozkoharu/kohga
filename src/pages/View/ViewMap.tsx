import type { NextPage } from "next";
import Head from 'next/head';
import dynamic from "next/dynamic";
import L from 'leaflet';    //marker壊れたの直すよう
import { GuestHeader } from "../../components/templates/guest/guestHeader";
import React, { createContext, useState } from 'react';

export const TestCickContext = createContext({} as {
    clickflag: boolean
    setClickFlag: React.Dispatch<React.SetStateAction<boolean>>
})


const DynamicCreateMap = dynamic(() =>
    import('../../components/map/CreateMap'), { ssr: false }
);


const ViewMap: NextPage = () => {
    const [clickflag, setClickFlag] = useState<boolean>(false);

    return (
        <TestCickContext.Provider value={{ clickflag, setClickFlag }} >
            <GuestHeader />
            <DynamicCreateMap />
        </TestCickContext.Provider>
    )
}
export default ViewMap;