import React, { useState } from "react";
import firebase, { microsoftProvider } from "../firebase.js";
import { useSelector, useDispatch } from "react-redux";

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
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(error.message);
      });
  };

  // firebase
  //   .auth()
  //   .getRedirectResult()
  //   .then((result) => {
  //     // IdP data available in result.additionalUserInfo.profile.
  //     // ...

  //     console.log("HFHSJKHKSHKJHFK");

  //     /** @type {firebase.auth.OAuthCredential} */
  //     var credential = result.credential;
  //     console.log(result);

  //     // OAuth access and id tokens can also be retrieved:
  //     var accessToken = credential.accessToken;
  //     var idToken = credential.idToken;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     // Handle error.
  //   });

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
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Password"
          securetextEntry
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
          onClick={logIn}
        >
          <text style={{ fontWeight: "bold", fontSize: 18 }}>Log In</text>
        </button>
      </div>
    </div>
  );
};

export default Login;
