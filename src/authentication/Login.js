import React, { useState } from "react";
import firebase from "../firebase.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import Logo from "./../img/logo.png";

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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const logIn = () => {
  //   console.log(email);
  //   console.log(password);
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       var user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //     });
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    // <div
    //   style={{
    //     alignSelf: "center",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     height: height * 0.35,
    //   }}
    // >
    //   <text style={{ fontSize: 45, fontWeight: "bold", textAlign: "center" }}>
    //     Thinkery
    //   </text>
    //   <div>
    //     <input
    //       style={styles.input}
    //       placeholder="Email"
    //       value={email}
    //       onChange={(event) => setEmail(event.nativeEvent.text)}
    //     />
    //     <input
    //       style={styles.input}
    //       placeholder="Password"
    //       securetextEntry
    //       value={password}
    //       onChange={(event) => setPassword(event.nativeEvent.text)}
    //     />
    //     <button
    //       style={{
    //         backgroundColor: "grey",
    //         height: 45,
    //         width: 90,
    //         borderRadius: 10,
    //         alignItems: "center",
    //         justifyContent: "center",
    //         alignSelf: "center",
    //         marginBottom: 10,
    //       }}
    //       onPress={logIn}
    //     >
    //       <text style={{ fontWeight: "bold", fontSize: 18 }}>Log In</text>
    //     </button>
    //   </div>
    // </div>
    <div className="Login">
      <div className="Logo">
        <img src={Logo} alt="Thinkery Logo" class="center"></img>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
