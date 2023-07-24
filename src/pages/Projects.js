import React from "react";
import ProjectItem from "../components/ProjectItem";
//import satLogoOrange from '../assets/satLogoOrange.png';
//import satLogo from '../assets/satLogo.png';
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectList">
                {/* <ProjectItem name="Group project" image={satLogoOrange}/>
                <ProjectItem image={satLogo}/>
                <ProjectItem name="Group project" image={satLogo}/>
                <ProjectItem name="Group project" image={satLogoOrange}/> */}

                {/* Lines 13-16 are individual ProjectItem versus map function below which is cleaner code. */}

                {ProjectList.map((project, idx) => {
                    return <ProjectItem id={idx} name={project.name} image={project.image} />
                })}

            </div>
        </div>
    )
}

export default Projects;