import React, { Component } from "react";

import axios from "axios"
import { DataContext } from "../Context/DataContextProvider";

class ViewProfile extends Component {
    render() {
        return (
            <div>
                My Profile
            </div>
        );
    }
}

ViewProfile.contextType = DataContext
export default ViewProfile;
