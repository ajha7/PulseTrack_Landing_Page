import React from 'react';
import './Landing.css'
import Topbar from '../Topbar/Topbar';
import Mainbar from '../Mainbar/Mainbar';


export default function Landing () {
    
    return (
        <>

                <div id="topbar-landing">
                    <Topbar/>
                </div>

                <div id="mainbar-landing">
                    <Mainbar/>
                </div>
                
        </>
    )
}