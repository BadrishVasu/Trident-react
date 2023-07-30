import React from 'react'
import './pages.css'
import './about.css'
import {Fade} from 'react-awesome-reveal/Fade';

function About(){

    const quote = () => {
        return(
            <Fade direction="bottom" triggerOnce="true">
                <span style = "font-size:32;" 
                    className = "break-overflow align-centre"
                >
                    We believe that everything can be 3D printed, 
                    unfortunately not money beacause its 2D
                </span>
            </Fade>
        );
    }

    const vision = () => {
        return(
            <>
                <span className = "iblock width50per">
                    <Fade direction="bottom" triggerOnce="true">
                        <h1> Our Vision </h1>
                    </Fade>

                    <Fade direction="bottom" triggerOnce="true">
                        <span className="iblock">
                            We are a group of proactive individuals who decided that 
                            3D printing was the only way forward with our budget
                        </span>
                    </Fade>
                </span>
                <Fade>
                    <span className="iblock">
                        <img src="../assets/aboutpics/1.jpg"
                            alt = "Moving Forward builds Inspiration"
                            className = "shadow"
                            style = "width:30%;" />
                    </span>
                </Fade>
            </>
            
        );
    }

    const whatWeDo = () => {
        return(
            <>
                <img src = "../assets/aboutpics/2.jpg"
                    alt = "Moving Forward builds Inspiration"
                    className = "shadow"
                    style = "width:30%;" />

                <span className="iblock width50per">
                    <Fade direction="bottom" triggerOnce="true">
                        <h1>What We Do</h1>
                    </Fade>

                    <Fade direction="bottom" triggerOnce="true">
                        <span className="iblock">
                            We help design and develop industrial-grade parts and
                            machinery supplements in the form of replicable 3D
                            printable parts
                        </span>
                    </Fade>
                </span>
            </>
        );
    }
     
    return(
        <>
            <div id = "quotebg">
                {quote()}           
            </div>

            <div id = "ambitious">
                {vision()}
                <br />
                {whatWeDo()}
            </div>

        </>
    );

}


export default About;