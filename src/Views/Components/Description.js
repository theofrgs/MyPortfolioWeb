import * as React from 'react';
import { Box, CssBaseline } from "@mui/material";
import "../Styles/style.css"

const Description = () => {
    return (
        <div id="description" className="description">
            <CssBaseline />
            <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%', backgroundColor: 'black', }}>
                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'left', width: '60%', /* backgroundColor: "red", */ color: "white" }}>
                    Mon parcours
                    <Box sx={{ height: '10px' }} />
                    <Box>
                        <Box component="span" sx={{ display: 'flex', flexDirection: 'column', p: 2, width: '95%', borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                                <img style={{ width: "10%", height: "10%" }} src="profil.png" alt="profil" />
                                <Box sx={{ width: "10%" }} />
                                <Box sx={{}}>
                                    Originaire de La Rochelle, j'ai fait mes études en informatique chez Epitech à Nantes jusqu'à l'obtention de mon Bachelor avant d'aller faire ma quatrième année à San Francsico pour effectuer mes deux semestres à l'étranger en computer Science
                                    <div style={{ height: "10px" }} />
                                    Durant mes trois premières années j'ai fait plusieurs stages un premier de six mois en deuxième année en développement 4D chez AlgoData puis un second de quatre mois chez Berny en fin de troisième année.
                                    <div style={{ height: "10px" }} />
                                    Détenteur d'un Bachelor je suis développeur Fullstack, principalement web avec la Stack React/Js, je possède également quatre mois d'expérience dans le développement mobile en Flutter. Durant mon cursus chez Epitech j'ai eu l'opportunitée de travailler avec d'autres langages tels que le C++, le C, le python, le haskell, le java ou bien le bash. Mes années à Epitech m'ont permis de gagner en autonomie et également appris à travailler en équipe grâce à de nombreux projets de groupe.
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Description