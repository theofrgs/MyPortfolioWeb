import * as React from 'react';
import { Box, CssBaseline } from "@mui/material";

const Description = () => {
    return (
        <div id="description" style={{ width: '100%' }}>
            <CssBaseline />
            <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%', backgroundColor: 'black', height: "100vh", }}>
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'left', width: '60%', /* backgroundColor: "red", */ color: "white" }}>
                    Mon parcours
                    <Box sx={{ height: '10px' }} />
                    <Box>
                        <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, width: '95%', borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                <img style={{ width: "10%" }} src="profil.png" alt="profil"/>
                                <Box sx={{width: "10%" }}/>
                                <Box sx={{}}>
                                    Originaire de La Rochelle, j'ai ,durant trois ans, commencé mes études dans l'informatique chez Epitech à Nantes avant d'aller ma quatrième année à San Francisco pour commencer 2 semestres à l'étranger en Computer Science.
                                    <div style={{ height: "10px" }} />
                                    J'ai effectue plusieurs stages durant cette première période en études supérieur, un premier de six mois en développement 4D chez AlgoData en deuxième année puis un second de quatre mois chez Berny en fin de troisième année.
                                    <div style={{ height: "10px" }} />
                                    Détenteur d'un bachelor je suis développeur fullstack, principalement web avec la stack React/Js, je possède également 4 mois d'expérience avec le développement mobile en Flutter.  Durant mon cursus chez Epitech j'ai eu l'opportunité de travailler avec d'autres langages tels que le C++, le C, le python, le haskell, le java ou bien le bash. Mes années à Epitech m'ont permis de gagner en autonomie et également appris à travailler en équipe suite à de nombreux projets de groupe.
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}

export default Description