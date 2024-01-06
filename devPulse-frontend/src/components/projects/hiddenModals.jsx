import React, { useState } from "react";
import HiddenModalDescription from "./hiddenModalsDescription";

const HiddenModals = ({ projects }) => {
    const [visibleModal, setVisibleModal] = useState(null);

    function showModal(name) {
        setVisibleModal(name);
    }

    function hideModal() {
        setVisibleModal(null);
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: "2rem",
        cursor: "pointer"
    };

    return (
        <div id="gallery-card">
            {projects.map((project, index) => (
                <div key={index}>
                    <div className={`modal-card ${visibleModal === project.name ? 'show' : ''}`}>
                        <div className="visual">
                            <img src={project.image} alt="" />
                        </div>
                        <div className="modal-info">
                            <h2>{project.name}</h2>
                            <HiddenModalDescription description={project.description} />
                            <div className="modal-bottom">
                                <a href={project.ref} target="_blank" rel="noopener noreferrer">
                                    <h3>{project.status}</h3>
                                </a>
                                <p className="close-icon" style={style} onClick={hideModal}>&#10005;</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`testbg col-12 col-sm-12 col-md-4 wow fadeIn project-card`}
                        style={{ backgroundImage: `url(${project.image})` }}
                        onClick={() => showModal(project.name)}
                    >
                        <div className="overlay">
                            <div className="text">
                                <h2>{project.name}</h2>
                            </div>
                            <div>
                                <button
                                    id={project.button + "-button"}
                                    className="project-button"
                                    onClick={() => showModal(project.name)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HiddenModals;
