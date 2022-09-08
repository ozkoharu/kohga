import React from 'react';
import { TestCickContext } from '../../../pages/View/ViewMap';
import { useContext } from 'react';


export const _Basebutton = () => {
    const { clickflag, setClickFlag } = useContext(TestCickContext);

    return (
        <button onClick={(e) => setClickFlag(true)}>
            目的地確定
        </button>
    )
}
export default _Basebutton;
