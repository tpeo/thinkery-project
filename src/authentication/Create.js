import React, { useState } from "react";
import firebase, { db } from "../firebase.js";

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

const Create = ({}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const create = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var userRef = db.collection("users").doc(user.uid);

        userRef.set({
          uid: user.uid,
          firstName,
          lastName,
          phone,
          email,
        });
        // ...
      })
      .catch((error) => {
        console.log("error");
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
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
        Create Account
      </text>
      <div>
        <input
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.nativeEvent.text)}
        />
        <input
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.nativeEvent.text)}
        />
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
        <input
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChange={(event) => setPhone(event.nativeEvent.text)}
        />

        <button
          style={{
            backgroundColor: "grey",
            height: 45,
            width: 150,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onPress={create}
        >
          <text style={{ fontWeight: "bold", fontSize: 18 }}>
            Create Account
          </text>
        </button>
      </div>
    </div>
  );
};

export default Create;
