import React, { Component } from "react";
import { ProfileComponent } from "../components/Profile";

class ProfileContainer extends Component {
  render() {
    return (
      <ProfileComponent {...this.props} />
    )
  }
}

export default ProfileContainer;
