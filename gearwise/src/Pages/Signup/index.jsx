import { Link ,useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Googleimg from '../../img/google.png'

function Login() {
  //google oauth function
  const googleAuth = () => {
    window.open(`${"http://localhost:8080"}/auth/google/callback`, "_self");
  };

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [profilephoto, setProfilephoto] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const submit = async (e)=> {
    e.preventDefault();
      let result = await fetch('http://localhost:4005/api/customers/signup',{
      method:'post',
      body: JSON.stringify({username,email,phoneno,gender,address,password}),
      headers:{
        'Content-Type' : 'application/json'
      },})
      // const response = await axios
      //   .post("http://localhost:4005/api/customers/signup", {
      //     username,
      //     email,
      //     phoneno,
      //     gender,address,password
      //   })
      console.log("user",username);
      console.log("mail",email);
      console.log(phoneno);
      console.log(gender);
      console.log(address);
      console.log(password);
          // if (result === "user exist") {
          //   alert("User already exists");
          // } else {
          //   alert("sucess");
          //   // history("/Login", { state: { id: email } });
          // }
    result = await result.json
  }
  return (
    <div>
    <Navbar/>
    <div className={styles.container}>
      {/* <h1 className={styles.heading}>Sign up</h1> */}
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src="/images/signup.jpg" // Ensure the correct path to the image
            alt="signup"
          />
        </div>
        <div className={styles.right}>
          <br/>
          <h2 className={styles.from_heading}>Create Account</h2>
          <form className={styles.right}>
            <input
              type="text"
              className={styles.input}
              placeholder="userame"
              // Uncomment and handle the username state if needed
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Phone Number"
              // Uncomment and handle the username state if needed
              onChange={(e) => setPhoneno(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Gender"
              // Uncomment and handle the username state if needed
              onChange={(e) => setGender(e.target.value)}
            /> 

            <input
              type="text"
              className={styles.input}
              placeholder="Address"
              // Uncomment and handle the username state if needed
              onChange={(e) => setAddress(e.target.value)}
            />
            {/* <input
              type="text"
              className={styles.input}
              placeholder="Profile photo"
              // Uncomment and handle the username state if needed
              onChange={(e) => setProfilephoto(e.target.value)}
            /> */}
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Email"
            />

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Password"
            />
            <br/>
            <button type="submit" className="btn btn-custom" onClick={submit}>
              Sign Up
            </button>
          </form>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn}>
            <img
              src={Googleimg}
              alt="google icon"
              onClick={googleAuth}
            />
            <span onClick={googleAuth}>Sign up with Google</span>
          </button>
          <p className={styles.text}>
            Already Have Account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;