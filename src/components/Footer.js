import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">

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

        </div >
        // {/* <p>&copy; 2023 website</p> 
        //         Line 15 is to apply own website. */}

    )
}

export default Footer;