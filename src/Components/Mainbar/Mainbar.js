import React from "react";
import './Mainbar.css';
import { Typewriter } from 'react-simple-typewriter';
import { Typography, Container, Button } from '@mui/material';
// import { BsFillCaretDownFill } from "react-icons/bs";



export default function Mainbar () {

    return (
        <>
            <div id="landing-message-container">

                <Typography
                    id="pulsetrack-landing-typography"
                    color="#4FFEEB"
                    style={{ fontWeight: 'bold' }}
                >
                    <p> Enhanced Visibility into Organizational Issues. </p>
                </Typography>

                <Typography
                    id="pulsetrack-landing-submessage"
                    color="#FF9900"
                    style={{ fontWeight: 'bold'}}
                >
                    <Typewriter
                        words={['Saving executives hundreds of hours.']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    >
                    </Typewriter>

                </Typography>

            </div>

            <div id="landing-use-case-container">
                <div id="use-case-one-words">
                    <span> Spotlight on Critical Issues </span>
                    <ul> 
                        <li className="use-case-subheader">
                            <b> Critical Issues - </b> Dive into recent high-severity problems flagged across your communication channels
                        </li>
                        <li className="use-case-subheader">
                            <b> Unified Communication Integration - </b> Pulse Track connects all your enterprise communications -- across all content, people, and interactions in your organization.
                        </li>
                    </ul>

                </div>

                <div id="use-case-one-words">
                    <span> Spotlight on Critical Issues </span>
                    <ul> 
                        <li className="use-case-subheader">
                            <b> Critical Issues - </b> Dive into recent high-severity problems flagged across your communication channels
                        </li>
                        <li className="use-case-subheader">
                            <b> Unified Communication Integration - </b> Pulse Track connects all your enterprise communications -- across all content, people, and interactions in your organization.
                        </li>
                    </ul>
                </div>

                <div id="use-case-two-words">
                    <span> Analytics on Business Challenges </span>
                    <ul> 
                        <li className="use-case-subheader">
                            <b> Problem Analysis - </b> Delve into the challenges and blockers encountered by teams across organizations. This feature enables you to identify and understand the key issues affecting different teams, providing insights into the obstacles they face and how these impact overall performance.
                        </li>
                        <li className="use-case-subheader">
                            <b> Problem Visualization - </b> View visual metrics that show how problems are growing and evolving over time. This feature provides a clear perspective on the development and trends of issues, helping you track their progression and understand their impact.
                        </li>
                    </ul>

                </div>
                
                <img id="use-case-one-photo" src={require("../../Images/use-case-photo-two.gif")}/>
                <img id="use-case-two-photo" src={require("../../Images/use-case-photo-one.jpeg")}/>
            </div>

            <div id="how-it-works-container">

                    <h1
                    id="hit-title"
                    style={{
                        fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)',
                        fontWeight: 700,
                        // margin: '10px 0',
                    }}
                    >
                        Transform Organizational Visibility
                    </h1>

                    <p
                        id="hit-subtext"
                        style={{
                            fontSize: '1.5rem',
                            margin: '20px 0',
                            fontWeight: 500,
                        }}
                    >
                        Identifying problems with limited organizational visibility is one of the biggest time-sinks for executives.
                    </p>

                    <p
                        id="hit-subtext-2"
                        style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.5,
                            maxWidth: '50%',
                        }}
                    >
                        Instead of scheduling endless meetings to identify issues, uncover key insights in a heartbeat.<br />
                        PulseTrack detects emerging problems at scale throughout your organization using AI-Powered omnichannel analytics.
                    </p>

                    <p
                        id="hit-last"
                        style={{
                            fontSize: '1.3rem',
                            marginTop: '30px',
                            color: "#FF9900"
                        }}
                        >
                        Save executives hours,{' '}
                        <span
                            style={{
                            fontWeight: 700,
                            }}
                        >
                            save companies millions.
                        </span>
                    </p>

            </div>




        </>
    )
}

    // return (
    //     <>
    //         <div id="mainbar-component">
    //             <div id="pulsetrack-landing-text">
    //                 Enhanced Visibility into Organizational Issues
    //             </div>
    //         </div>
    //     </>
    // )

    // return (
    //     <div id="mainbar-component">

    //         <Container 
    //             id="pulsetrack-landing-text"
    //         >
    //             <Typography
    //                 id="pulsetrack-landing-typography"
    //                 variant="h2"
    //                 maxWidth={800}
    //                 color="#4FFEEB"
    //                 style={{ fontWeight: 'bold' }}
    //             >

    //                 <Typewriter
    //                     words={['Enhanced Visibility into Organizational Issues.']}
    //                     loop={1}
    //                     cursor
    //                     cursorStyle='|'
    //                     typeSpeed={150}
    //                     deleteSpeed={50}
    //                     delaySpeed={1000}
    //                 />

    //             </Typography>


    //             <Button
    //                 id="landing-page-carat"
    //             >
    //                 <BsFillCaretDownFill
    //                     id="landing-page-carat"
    //                     color="#4FFEEB"
    //                     size="50"
    //                 />

    //             </Button>
    //         </Container>

    //         <hr className="landing-divider"/>

    //         <div id="about-container">
    //             <span id="about-title-text"> About </span>
    //             <span id="about-title-main-text"> Transform Organizational Visibility </span>

    //             <span id="about-title-sub-text"> Identifying problems with limited organizational visibility is one of the biggest time-sinks for executives. </span>

    //             <span id="about-title-sub-text-2"> Instead of scheduling endless meetings to identify issues, uncover key insights in a heartbeat. </span>
    //             <span id="about-title-sub-text-3"> PulseTrack detects emerging problems at scale throughout your organization using AI-Powered omnichannel analytics. </span>
    //             <span id="about-title-sub-text-4"> Save executives hours, save companies billions</span>
    //         </div>

    //         <hr id="second-hr" className="landing-divider"/> hello

            
    //         <div id="work-container">
    //             <span id="work-title-text"> Work </span>
    //             <span id="work-title-main-text"> How It Works </span>
    //             <span id="work-title-sub-text"> Deploy our app on your communication platforms. It monitors conversations to extract and aggregate problems discussed. The aggregated data is analyzed to provide a comprehensive dashboard, highlighting the most frequently mentioned issues within your organization. </span>
    //         </div>

    //         <div id="use-cases">
    //             <img id="use-case-photo-one" src={require("../../Images/use-case-stock-image-one.webp")}/>
    //             <span id="use-case-photo-one-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </span>

    //             <img id="use-case-photo-two" src={require("../../Images/use-case-stock-image-one.webp")}/>
    //             <span id="use-case-photo-two-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </span>




    //         </div>


    //     </div>
    // );