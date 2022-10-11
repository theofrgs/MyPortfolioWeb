import * as React from 'react';
import { Box, CssBaseline } from "@mui/material";
import data from './comptencies.json'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ComptenciesLangComponents = ({ obj }) => {
    var percentage = obj[1]["point"] * 25
    var color = "#33CD32";
    var years = Math.round(obj[1]["experiences"] / 12)
    var month = Math.round(((obj[1]["experiences"] / 12) - years) * 12)

    if (percentage <= 25)
        color = "#FF0000"
    else if (percentage <= 50)
        color = "#FFB03C"
    else if (percentage <= 75)
        color = "#88CAFC"


    const containerStyles = {
        height: 25,
        width: '250px',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 20
    }

    const fillerStyles = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 2,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <Box sx={{ margin: '10px', display: 'flex', flexDirection: 'row', alignContent: 'left', justifyContent: "space-between", color: "white" }}>
            <Box component="span" sx={{ minWidth:"300px", display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0px', borderColor: 'white', borderStyle: 'solid' }}>
                - {obj[0]} ({years > 0 ? years : month} {years > 0 ? years > 1 ? "ans" : "an" : "mois"} {years > 0 && month > 0 ? month : ""} {years > 0 && month > 0 ? "mois" : ""})
            </Box>
            {/* <div style={{ width: 60, height: 60 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`}
                    styles={buildStyles({
                        textColor: color,
                        pathColor: color,
                    })} />
            </div> */}
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${percentage}%`}</span>
                </div>
            </div>
            {/* {obj[1]["point"]} */}
        </Box>
    )
}

const Comptencies = () => {

    return (
        <div id="comptencies" style={{ width: '100%', minHeight: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', }}>
            <CssBaseline />
            <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white' }}>
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'left',  /* backgroundColor: "red", */ color: "white" }}>
                    <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                        Mes compétences
                    </Box>
                </Box>
            </Box>
            <Box sx={{  width: "80%", margin: '100px', display: 'flex', flexDirection: 'row', alignContent: 'left', justifyContent: "space-between", color: "white" }}>
                <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                    Création de projets Web et Mobile avec React, Flutter, NodeJs, Java
                    <div />
                    Création d'algorithmes et de projets.
                    <div />
                    Participation à plusieurs événements (DEVPARTY, HASHCODE google, Epitech JAM, projet Week Mugler).
                    <div />
                    Création de projet en C++. Création d'un projet mathématique en Python.
                    <div />
                    Pratique du DevOps (Github Action / JetKins/ Docker, Kubernetes)
                </Box>
                <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                    {Object.entries(data).slice(0, 5).map((it, key) => (
                        <div key={key}>
                            {it[0]}
                            {Object.entries(data[it[0]]).map((obj, keyData) => (
                                <ComptenciesLangComponents obj={obj} key={keyData} />
                            ))}
                        </div>
                    ))}
                </Box>
            </Box>
        </div>
    )
}

export default Comptencies