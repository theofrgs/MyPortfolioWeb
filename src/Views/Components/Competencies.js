import * as React from 'react';
import { Box, CssBaseline } from "@mui/material";
import data from './comptencies.json'
import { Button } from 'semantic-ui-react'
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
        height: 10,
        width: '250px',
        backgroundColor: "black",
        borderRadius: 50,
        margin: 20
    }

    const fillerStyles = {
        height: '230%',
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
        <Box sx={{ margin: '10px', display: 'flex', flexDirection: 'row', alignContent: 'left', justifyContent: "space-between", color: "white", }}>
            <Box component="span" sx={{ minWidth: "300px", display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0px', borderColor: 'white', borderStyle: 'solid' }}>
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

const ListCompetencies = ({ it, data, key }) => {
    const showDefaultValue = 5
    const [show, setShow] = React.useState(showDefaultValue)

    return (
        <div key={key}>
            {it[0]}
            {Object.entries(data[it[0]]).slice(0, show).map((obj, keyData) => (
                <ComptenciesLangComponents obj={obj} key={keyData} />
            ))}
            {Object.entries(data[it[0]]).length > showDefaultValue ?
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white' }}>
                    <div style={{ height: '10px' }} />
                    <Button style={{ margin: "auto" }} onClick={() => { show === showDefaultValue ? setShow(Object.entries(data[it[0]]).length) : setShow(showDefaultValue) }}
                    > {show === showDefaultValue ? "+" : "-"} </Button>
                </Box>
                : null}
        </div>
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
            <Box sx={{ width: "80%", margin: '100px', display: 'flex', flexDirection: 'row', alignContent: 'left', justifyContent: "space-between", color: "white" }}>
                <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid',justifyContent: "center" }}>
                    Actuellement en 4 années à Epitech, je suis à San Francisco State University en Computer Science.
                    <div style={{height: "30px"}}/>
                    En première année à Epitech, la majorité des projets sont développés en C, l'intégralité de mes projets mathématiques ont été développer en Python. J'ai également eu l'occasion de créer plusieurs VM.
                    <div style={{height: "30px"}}/>
                    Lors de la seconde année à Epitech, on apprend la programation orientée Objet, cet apprentissage est passé essentiellement à travers le C++, mais j'ai l'opportunitée de découvrir d'autre langage à travers divers projets Haskell, Python, Docker, React.
                    <div style={{height: "30px"}}/>
                    La troisième année à Epitech est basé sur la diversification, j'ai ainsi l'occasion de créer des projets assez complets , création de sites web avec la stack React/JS Dockerisé avec un Backend en NodeJs, serveur vocal en C++, application Mobile en Flutter. J'ai également pu apprendre d'autre framerwork backend comme NestJs, Flask.
                    <div style={{height: "30px"}}/>
                    Durant la troisième année j'ai eu la chance de faire un stage de 4 mois chez Berny, ou j'ai travaillé sur un dashboard en react js avec un back en flask, sur plusieurs applications mobile en flutter.
                    <div />
                    Durant l'intégralité de ma scolarité la majorité de mes projets étaient Dockerisés, tester, avec des github action et des tests unitaires.
                </Box>
                <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                    {Object.entries(data).slice(0, 5).map((it, key) => (
                        <ListCompetencies data={data} key={key} it={it} />
                    ))}
                </Box>
            </Box>
        </div>
    )
}

export default Comptencies