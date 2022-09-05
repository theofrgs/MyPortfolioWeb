import * as React from 'react';
import { Box, CssBaseline } from "@mui/material";

/**
 * @class HomePage
 * class page to check if user is logged
 */
export default class Description extends React.Component {

    render() {
        return (
            <div id="description" >
                <CssBaseline />
                <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%', backgroundColor: 'black', height: "100vh", }}>
                    <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'left', width: '60%', /* backgroundColor: "red", */ color: "white" }}>
                        Mon parcours
                        <Box sx={{ height: '10px' }} />
                        <Box>
                            <Box component="span" sx={{ display: 'flex', p: 2, width: '95%', borderWidth: '0.8px', borderColor: 'white', borderStyle: 'solid' }}>
                                Je suis passionné par la conception de sites Web. Mon amour du développement et du graphisme me permet d'être polyvalent et adaptable aux tâches qui me sont confiées. Mon objectif est d'améliorer le Web en concevant de superbes expériences.
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div >
        )
    }
}
