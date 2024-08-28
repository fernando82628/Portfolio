import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

import WorkIcon from "@material-ui/icons/Work";


function Experience() {
    return (

        <div className="experience">
          

            <VerticalTimeline lineColor="gray">

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="08/2017 - 08/2018"
                    iconStyle={{ background: "gray", color: "#e9c35b" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">M.D. Anderson School of Health Professions</h3>
                    <p>Bachelor of Science</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="04/2022 - 05/2022"
                    iconStyle={{ background: "gray", color: "#e9c35b" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Devmountain</h3>
                    <p>Coding Basics</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="09/2022 - 03/2023"
                    iconStyle={{ background: "gray", color: "#e9c35b" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">NuCamp</h3>
                    <p>Full Stack and Mobile app Developer Bootcamp</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    date="Present"
                    iconStyle={{ background: "gray", color: "#e9c35b" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                    <p>Hard working and dedicated Developer.</p>

                </VerticalTimelineElement>

                            

            </VerticalTimeline>
           
        </div>
    )
}

export default Experience;