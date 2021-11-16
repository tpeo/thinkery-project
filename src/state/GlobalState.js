import React, { PureComponent } from "react";

const GlobalContext = React.createContext();

class GlobalState extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      userInfo: {
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        age: "",
        provider: "",
      },
    };
  }

  // Pulling in patients info and updating
  // global patient state
  updatePatients = (newPatients) => {
    let statePatients = this.state.patients;
    newPatients.map((patient, index) => {
      statePatients[index] = {};
      let statePatient = statePatients[index];
      let newPatient = newPatients[index];
      statePatient["name"] = `${newPatient["firstName"]} ${newPatient["lastName"]}`;
      statePatient["age"] = newPatient["age"];
      statePatient["gender"] = newPatient["gender"];
      statePatient["email"] = newPatient["email"];
      statePatient["phoneNumber"] = newPatient["phoneNumber"];
      statePatient["contact"] = newPatient["phoneNumber"];
      statePatient["provider"] = newPatient["provider"];

      // statePatients[index] = patient;
    });
    this.setState({
      patients: statePatients,
    });
  };

  // Returns patient information
  getPatients = () => {
    return this.state.patients;
  };

  updateUserInfo = (userInfo) => {
    var stateUserInfo = this.state.userInfo;
    for (const [key, value] of Object.entries(stateUserInfo)) {
      stateUserInfo[key] = userInfo[key];
    }
    this.setState({
      userInfo: stateUserInfo,
    });
  };

  getUserInfo = () => {
    console.log(this.state.userInfo);
    return this.state.userInfo;
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          updatePatients: this.updatePatients,
          getPatients: this.getPatients,
          updateUserInfo: this.updateUserInfo,
          getUserInfo: this.getUserInfo,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalState, GlobalContext };
