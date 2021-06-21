import React from "react";
import "./loading.css";

function Error (props) {

        return (
            <React.Fragment>
                <div className="content">
                    <div>
                        <h1>Error</h1>
                        <h2>{props.errorMessage}</h2>
                    </div> 
                </div>
            </React.Fragment>
        )
    }


export default Error;
