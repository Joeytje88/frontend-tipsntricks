import React from "react";

const Image = (props) => {
    return (
        <div className="game-img">
            <img
                src={props.link}
                alt={props.alt}/>
                <p>{props.name}</p>
        </div>
    )

}
export default Image;
