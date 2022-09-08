import { IconButton, Stack, Box, Button, CssBaseline } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Description from "./Components/Description"
import HomeScrollerMagicScene from "./Components/HomeScrollerMagicScene"
import "./Styles/HomeStyles.css"

const HeaderSocial = () => (
    <div style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        alignItem: "right",
        display: "flex",
        justifyContent: "flex-end",
    }}>
        <div style={{ width: "fit-content" }}>
            <Stack direction="column" spacing={2} display="flex" justify="right" alignitem="right" color="white">
                <IconButton color="primary" href="https://github.com/theofrgs/" target="_blank" justify="left" alignitem="left">
                    <GitHubIcon style={{ color: "white", }} />
                </IconButton>
                <IconButton color="primary" href="https://www.linkedin.com/in/theo-fargeas-127046197/" target="_blank" justify="left" alignitem="left">
                    <LinkedInIcon style={{ color: "white", }} />
                </IconButton>
                <Box style={{ height: "30px" }} />
            </Stack>
        </div>
        <Box style={{ width: "2.5%" }} />
    </div>
)

const ContactEmail = () => (
    <Box sx={{}} style={{
        margin: 0,
        position: "fixed",
        bottom: 0,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "justify",
        whiteSpace: "nowrap",
        display: "flex",
        backgroundColor: "black",
    }}>
        <Box style={{
            whiteSpace: "nowrap",
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
            flex: "1",
            position: "relative",
            textAlign: "left",
            flexDirection: "column",
            left: "3%",
        }}>
            <div style={{ color: "white" }}>Email: </div>
            <a href="mailto:theo.fargeas@epitech.eu" bis_skin_checked="1" style={{ color: "white" }}><p>theo.fargeas@epitech.eu</p></a>
            <Box style={{ height: 30 }} />
        </Box>
    </Box>
)

const Header = () => (
    <Box sx={{}} style={{
        margin: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "justify",
        whiteSpace: "nowrap",
        display: "flex",
        backgroundColor: "black",
    }}>

        <Box style={{
            whiteSpace: "nowrap",
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
            flex: "1",
            position: "relative",
            textAlign: "left",
            top: "2%",
            left: "3%",
        }}>
            <Button variant="text" style={{ textTransform: "none" }}>
                <h3 style={{ color: "white" }}>Théo Fargeas</h3>
            </Button>
        </Box>
        <Box style={{
            justifyContent: "right",
            alignItems: "right",
            display: "flex",
            flex: "1",
            position: "relative",
            whiteSpace: "nowrap",
            textAlign: "right",
        }}>
            <Box style={{ height: "100px", }} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "right", }}>
                <Button variant="text" style={{ textTransform: "none" }} href="#home">
                    <h3 style={{ color: "white" }}>Accueil</h3>
                </Button>
                <Button variant="text" style={{ textTransform: "none", scrollBehavior: "smooth" }} href="#description">
                    <h3 style={{ color: "white" }}>Mon parcours</h3>
                </Button>
                <Button variant="text" style={{ textTransform: "none" }} href="#competences">
                    <h3 style={{ color: "white" }}>Mes compétences</h3>
                </Button>
                <Button variant="text" style={{ textTransform: "none" }} href="#experiences">
                    <h3 style={{ color: "white" }}>Mes expériences</h3>
                </Button>
            </div>
            <Box style={{ width: "6%" }} />
        </Box>
    </Box >
)

const HomeView = () => {

    return (
        <div >
            <HomeScrollerMagicScene />
            <div className="scroll-container">
                <div >
                    <CssBaseline />
                    <Header />
                    <ContactEmail />
                    <HeaderSocial />

                    <section>
                        <Description />
                    </section>
                    <section>
                        <div id="competences">
                            {/* <h2>Section 2</h2> */}
                        </div>
                    </section>
                    <section>
                        <div id="experiences">
                            {/* <h2>Section 3</h2> */}
                        </div>
                    </section>
                </div >
            </div>
        </div>
    )
}

export default HomeView