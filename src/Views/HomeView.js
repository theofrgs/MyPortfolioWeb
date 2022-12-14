import { IconButton, Stack, Box, Button, CssBaseline } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Description from "./Components/Description"
import Experiences from "./Components/Experiences"
import Competencies from "./Components/Competencies"
import HomeScrollerMagicScene from "./Components/HomeScrollerMagicScene"
import "./Styles/HomeStyles.css"
import "./Styles/style.css"

const HeaderSocial = () => (
    <div className='header-social'>
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
    <Box sx={{}} className="contact-email">
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
            <Box style={{ height: 20 }} />
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
        zIndex: 100,
        // backgroundColor: "black",
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
                <h3 style={{ color: "white" }}>Th??o Fargeas</h3>
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
                <Button variant="text" style={{ textTransform: "none" }} href="#comptencies">
                    <h3 style={{ color: "white" }}>Mes comp??tences</h3>
                </Button>
                <Button variant="text" style={{ textTransform: "none" }} href="#experiences">
                    <h3 style={{ color: "white" }}>Mes exp??riences</h3>
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
            <CssBaseline />
            <Header />
            <ContactEmail />
            <HeaderSocial />
            <section>
                <Description />
            </section>
            <section>
                <Competencies />
            </section>
            <section>
                <Experiences />
            </section>
            <div style={{ height: "100px", backgroundColor: "black", width: "100%" }}></div>
        </div>
    )
}

export default HomeView