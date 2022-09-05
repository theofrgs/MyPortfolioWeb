import React, { useRef } from "react";

import { Box, CssBaseline } from "@mui/material";
import ReactDOM from "react-dom";

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "../../Sequence";

// import styles from "../Styles/HomeScollerMagicStyles.css"

function WrappedComponent(props) {
    const ref = useRef();

    return (
        <Controller>
            <div>
                <Scene duration="150%" triggerHook="onLeave" pin>
                    {progress => {
                        return (
                            <div style={{ height: "100vh", position: "relative" }}>
                                <Sequence ref={ref} progress={progress} />
                            </div>
                        )
                    }}
                </Scene>
            </div>
        </Controller>
    )
}

export default class HomeScrollerMagicScene extends React.Component {

    render() {

        return (
            <div id="home" >
                {/* <CssBaseline /> */}
                <WrappedComponent />
            </div>
        )
    }
}
