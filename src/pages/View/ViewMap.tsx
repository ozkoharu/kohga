import type { NextPage } from "next";
import Head from 'next/head';
import dynamic from "next/dynamic";
import L from 'leaflet';    //marker壊れたの直すよう
import { GuestHeader } from "../../components/templates/guest/guestHeader";



const DynamicCreateMap = dynamic(() =>
    import('../../components/map/CreateMap'), { ssr: false }
);


const ViewMap: NextPage = () => {
    return (
        <div>
            <GuestHeader />
            <DynamicCreateMap />
        </div>
    )
}
export default ViewMap;