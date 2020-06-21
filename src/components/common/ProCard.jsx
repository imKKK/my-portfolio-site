import React, { Fragment } from 'react';


function ProCard({ project }) {
    let imageObj = {
        ProIcon: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/project.svg"
    }
    return (
        <Fragment>
            <div className="pro-card-container">
                <div className="pro-card">
                    <div className="title">
                        <div className="proicon">
                            <img src={imageObj.ProIcon} alt="project icon" />
                        </div>
                        <div className="protitle">
                            <h1>{project.name}</h1>
                        </div>
                    </div>
                    <div className="description">
                        {project.description.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default ProCard;