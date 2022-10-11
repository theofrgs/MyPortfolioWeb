import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AndroidIcon from '@mui/icons-material/Android';
import FeedIcon from '@mui/icons-material/Feed';
import { Box } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeData = ({ icon, img, primaireColor, secondColor, jobData }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: primaireColor, color: secondColor }}
            contentArrowStyle={{ borderRight: '7px solid ' + primaireColor }}
            date={jobData.date}
            iconStyle={{ background: primaireColor, color: secondColor, display: 'flex', justifyContent: 'center' }}
            icon={icon}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", width: "100%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'left' }}>
                    <h3 className="vertical-timeline-element-title">{jobData.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{jobData.company}</h4>
                </Box>
                <Box>
                    {img}
                </Box>
            </Box>
            <p>
                {jobData.description}
            </p>
        </VerticalTimelineElement>
    )
}

const Experiences = () => {

    return (
        <div id="experiences" style={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: 'black' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '20%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'left', width: '60%', color: "white" }}>
                    Mes expériences
                    <Box sx={{ height: '10px' }} />
                    <VerticalTimeline animate={false}>
                        <TimeData
                            icon={
                                // <SchoolIcon />
                            <div></div>
                                // <img style={{ width: "100%", height: "100%" }} src="epitech_logo.png" alt="img"></img>
                                // <img style={{ width: "70px", }} src="berny_logo.png" alt="img"></img>
                            }
                            primaireColor="rgb(33, 150, 243)"
                            secondColor='#fff'
                            img={<img style={{ width: "70px" }} src="epitech_logo.png" alt="img"></img>}
                            jobData={{
                                title: "Étudiant en quatrième année",
                                company: "Epitech, San Francisco",
                                date: "Octobre 2019 - présent",
                                description: "Actuellement en 4ème année à San Francisco State University. Développement d'applications, participation à plusieurs événements (DEVFEST, DEVPARTY, HASHCODE Google, Epitech JAM), projet gagnant avec la marque Mugler. Création de projets Web et Mobile avec React, Flutter, NodeJs, Java. Création d'algorithmes et de projets. Participation à plusieurs événements (DEVPARTY, HASHCODE google, Epitech JAM, projet Week Mugler). Création de projet en C++. Création d'un projet mathématique en Python. Pratique du DevOps (Github Action / JetKins/ Docker, Kubernetes)"
                                // description: "Développeur Web / Mobile fullstack avec les technologies ReactJS / Flutter. Mise en place d'une api Flash en ligne avec un doplet. Développement d'une application mobile Flutter. Mise en place d'un serveur keycloak avec vérification d'email, numéro de téléphone, google, Facebook."
                            }} />
                        <TimeData
                            icon={
                                // <AndroidIcon />
                            <div></div>
                                // <img style={{ width: "100%", height: "100%" }} src="berny_empty_logo.png" alt="img"></img>
                            }
                            primaireColor="#fff"
                            secondColor='black'
                            img={<img style={{ width: "70px" }} src="berny_logo.png" alt="img"></img>}
                            jobData={{
                                title: "Stage dévelopeur fullstack",
                                company: "Berny, Nantes",
                                date: "Avril 2022 - Juillet 2022",
                                description: "Développeur FullStack chez Berny, développement web (React JS, python), développement mobile (Flutter), développement cloud (Google cloud). J'ai également pu utiliser d'autre technologies tels que Kyecloak, Hasura, Heroku, GKE, Digital Ocean."
                                // description: "Développeur Web / Mobile fullstack avec les technologies ReactJS / Flutter. Mise en place d'une api Flash en ligne avec un doplet. Développement d'une application mobile Flutter. Mise en place d'un serveur keycloak avec vérification d'email, numéro de téléphone, google, Facebook."
                            }} />
                        <TimeData
                            icon={
                            // <FeedIcon />
                            <div></div>
                            // <img style={{ width: "100%", height: "100%" }} src="algodata_logo.png" alt="img"></img>
                        }
                            primaireColor="rgb(255, 87, 51)"
                            secondColor='#fff'
                            img={<img style={{ width: "70px" }} src="algodata_logo.png" alt="img"></img>}
                            jobData={{
                                title: "Stage dévelopeur 4D",
                                company: "Algodata, Nantes",
                                date: "Juillet 2020 - Décembre 2020",
                                description: "Développeur 4D, orienté objet"
                            }} />
                    </VerticalTimeline>
                </Box>
            </Box>
        </div >
    )
}

export default Experiences