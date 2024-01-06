import React from "react";

const HiddenModalDescription = ({ description }) => {
    function getList() {
        return description ? description.map((item, index) => <li key={index}>{item}</li>) : null;
    }

    return <div className="modal-description">{getList()}</div>;
};

export default HiddenModalDescription;
