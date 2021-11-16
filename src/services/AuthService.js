class AuthService {
   constructor(userInfo) {
       this.firstName = userInfo.firstName;
       this.lastName = userInfo.lastName;
       this.gender = userInfo.gender;
       this.age = userInfo.age;
       this.provider = userInfo.provider;
       this.phoneNumber = userInfo.phoneNumber;
       this.email = userInfo.email;
       this.password = userInfo.password;
       this.response = { status: "", AWSresponse: "" };
   }

   /**
    * Executes getAllPatients lambda function
    */
   async getAllPatients() {
       let response = await fetch(
           "https://4pmgyyqknb.execute-api.us-east-1.amazonaws.com/dev/patient/getAllPatients",
           {
               method: "GET",
           }
       )
           .then((response) => response.json())
           .then((responseJson) => {
               console.log("Getting Patients...");
               if (
                   responseJson.hasOwnProperty("message") ||
                   responseJson.hasOwnProperty("errorMessage")
               ) {
                   this.response.status = "Error";
               } else {
                   this.response.status = "Success";
               }
               this.response.AWSresponse = responseJson;
           })
           .catch((error) => {
               console.log("Error: ", error);
               this.response.status = "Error";
               this.response.AWSresponse = error;
           });
       return this.response;
   }

   /**
    * Executes login lambda function
    */
   async login() {
       await fetch(
           "https://4pmgyyqknb.execute-api.us-east-1.amazonaws.com/dev/users/login",
           {
               method: "POST",
               body: JSON.stringify({
                   email: this.email,
                   password: this.password,
               }),
           }
       )
           .then((response) => response.json())
           .then((responseJson) => {
               console.log("Loggin In...");
               if (
                   responseJson.hasOwnProperty("message") ||
                   responseJson.hasOwnProperty("errorMessage")
               ) {
                   this.response.status = "Error";
               } else {
                   this.response.status = "Success";
               }
               this.response.AWSresponse = responseJson;
           })
           .catch((error) => {
               console.log("Error: ", error);
               this.response.status = "Error";
               this.response.AWSresponse = error;
           });
       return this.response;
   }

   /**
    * Executes signup lambda function
    */
   async signup() {
       await fetch(
           "https://4pmgyyqknb.execute-api.us-east-1.amazonaws.com/dev/users/signUp",
           {
               method: "POST",
               body: JSON.stringify({
                   firstName: this.firstName,
                   lastName: this.lastName,
                   gender: this.gender,
                   age: this.age,
                   provider: this.provider,
                   phoneNumber: this.phoneNumber,
                   email: this.email,
                   password: this.password,
               }),
           }
       )
           .then((response) => response.json())
           .then((responseJson) => {
               console.log("responseJson", responseJson);
               if (
                   responseJson.hasOwnProperty("message") ||
                   responseJson.hasOwnProperty("errorMessage")
               ) {
                   this.response.status = "Error";
               } else {
                   this.response.status = "Success";
               }
               this.response.AWSresponse = responseJson;
           })
           .catch((error) => console.log("error: ", error));
       return this.response;
   }
}

export default AuthService;
