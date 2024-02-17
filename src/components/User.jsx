import React from "react";
import '../sass/components/_userProfile.scss';

function User () {

    return (
        <div className="header">
                <div>
                    <h2>Welcome back 
                        <br />
                        Tony Stark !
                    </h2>
                    <button className="edit-button">Edit Name</button>
                </div>
        </div>
    )
}

export default User