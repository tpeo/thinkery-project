import React from "react";
import { Button } from "antd";
import "./NotFound.css";

function NotFound() {
    return (
        <div>
            404 - Not Found!
            <p>
               <Button type="primary"
                size="large"
                className="Home" 
                href={"/home"}>
                    Go Home
                </Button>
            </p>
        </div>
    );
}

export default NotFound;
