import type { NextPage } from "next";
import Head from 'next/head';
import dynamic from "next/dynamic";
import L from 'leaflet';    //marker壊れたの直すよう
import { GuestHeader } from "../../components/templates/guest/guestHeader";



const DynamicTestMap = dynamic(() =>
    import('../../components/map/testMap'), { ssr: false }
);


const ViewTestMap: NextPage = () => {
    return (
        <div>
            <GuestHeader />
            <DynamicTestMap />
        </div>
    )
}
export default ViewTestMap;