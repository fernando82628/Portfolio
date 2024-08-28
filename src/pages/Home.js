import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import thumbnail from "../assets/thumbnail.jpg";



function Home() {
    return (
        <div className="home">
            <div className="about">
              
                <h2>Hi, my name is Fernando</h2>
                <div className="socialMedia">
                    <p >
                        Web Developer at your service.
                    </p>

                    <a href="https://www.linkedin.com/in/fernando-quero-0159bb260/" target="_blank">
                        <LinkedInIcon />
                    </a>

                    <a href="mailto:fernando82628@yahoo.com" target="_blank">
                        <EmailIcon />
                    </a> 

                    <a href="https://github.com/fernando82628" target="_blank">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
            <div className="skills">

                <h1>Full Stack Skills</h1>

                <ol className="list">

                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML, BootStrap, CSS, ReactJS, React Native, TailwindCSS</span>
                    </li>

                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Javascript, Express, NodeJS, MongoDB</span>
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Home;