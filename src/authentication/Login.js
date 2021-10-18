import React, { useState } from "react";
import firebase from "../firebase.js";

const { innerHeight: height, innerWidth: width } = window;

const styles = {
  input: {
    borderWidth: 1,
    lineHeight: 30,
    width: width * 0.15,
    height: 30,
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 20,
  },
};

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    console.log(email);
    console.log(password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("error");
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div
      style={{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        height: height * 0.35,
      }}
    >
      <text style={{ fontSize: 45, fontWeight: "bold", textAlign: "center" }}>
        TPEO Learning Platform
      </text>
      <div>
        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.nativeEvent.text)}
        />
        <input
          style={styles.input}
          placeholder="Password"
          securetextEntry
          value={password}
          onChange={(event) => setPassword(event.nativeEvent.text)}
        />
        <button
          style={{
            backgroundColor: "grey",
            height: 45,
            width: 90,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginBottom: 10,
          }}
          onPress={logIn}
        >
          <text style={{ fontWeight: "bold", fontSize: 18 }}>Log In</text>
        </button>
      </div>
    </div>
  );
};

export default Login;
