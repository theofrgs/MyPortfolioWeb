import React, { useRef } from "react";

import { CssBaseline } from "@mui/material";

import { Controller, Scene } from "react-scrollmagic";
import "../Styles/HomeStyles.css"

const imgCache = {
    __cache: {},
    read(src) {
        if (!this.__cache[src]) {
            this.__cache[src] = new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    this.__cache[src] = true;
                    resolve(this.__cache[src]);
                };
                img.src = src;
            }).then((img) => {
                this.__cache[src] = true;
            });
        }
        if (this.__cache[src] instanceof Promise) {
            throw this.__cache[src];
        }
        return this.__cache[src];
    }
};

export const SuspenseImg = ({ src, ...rest }) => {
    imgCache.read(src);
    return <img src={src} {...rest} alt="..." />;
};

function WrappedComponent({ props }) {
    const ref = useRef();

    return (
        <Controller>
            <Scene duration="200%" triggerHook="onLeave" pinSettings={{ spacerClass: "adsza" }}>
                {progress => {
                    var i = Math.round(progress * 1 * 49);
                    // 49 = max frame
                    return (
                        <div style={{ height: "100vh", position: "relative" }} ref={ref}>
                            <SuspenseImg style={{
                                display: "block",
                                // height: "100%",
                                width: "100%",
                                // backgroundImage: `url('${props.pictures[i]}')`,
                                // backgroundSize: "cover",
                                backgroundPosition: "center"
                            }} src={props.pictures[i]} />
                        </div>
                    )
                }}
            </Scene>
        </Controller>
    )
}

const cachImg = async (srcArrays) => {
    const promises = await srcArrays.map((picture) => {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.picture = picture
            img.onload = resolve();
            img.onError = reject()

        })
    })
    await Promise.all(promises)
}

export default class HomeScrollerMagicScene extends React.Component {

    constructor() {
        super()
        this.pictures = [];
        this.state = {
            load: false,
        }
    }

    async componentDidMount() {
        [...Array(49).keys()].forEach((it) => {
            this.pictures.push("/images/fbf-" + String(it + 1).padStart(5, '0') + ".jpg")
        })
        this.pictures.forEach((picture) => {
            new Image().src = picture;
        });
        await cachImg(this.pictures)
        this.setState({ load: true })
        this.forceUpdate()
    }


    render() {
        return (
            <div id="home" style={{backgroundColor: "black"}}>
                <CssBaseline />
                {this.state.load ?
                    <div>
                        <WrappedComponent props={{ pictures: this.pictures }} />
                    </div>
                    : <div></div>}
            </div>
        )
    }
}
