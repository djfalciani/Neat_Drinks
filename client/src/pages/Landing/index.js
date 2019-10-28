// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import DialogBox from "../../components/Dialog";
import SubmitButton from "../../components/SubmitButton";
// import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";
import API from "../../utils/API";

export default function Landing() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
    // Step #1 - Put email/password into Object...
    API.getLogin({
      email: email,
      password: password
    }).then();
  };

  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();

  function handleClick() {
    // textInput.current.focus();
    let test = textInput.current.value;
    console.log("btn Clicked");
    alert(test);
  }
  

  // Login Btn Method
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("Sign Up Button Clicked");
  //   // API.createUser();
  //   console.log(e);
  // };

  return (
    <div>
      <Logo />
      
      {/* Option #1 - Using State Hook w/Controlled Forms and a Submit Method */}
      <form onSubmit={handleSubmit}>
        <input
          // className="form-control"
          type="email"
          placeholder="Email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          // className="form-control"
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        {/* <button className="btn btn-success" type="submit">Submit</button> */}
        <button type="submit">Submit</button>
      </form>
      
      {/* Option #2 - Using Ref */}
      {/* <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      /> */}

      <LoginForm/>
      {/* <SubmitButton onClick={() => handleClick()} />{<br></br>} */}
      <SubmitButton onClick={handleClick} />{<br></br>}
      <DialogBox />
        <Footer />
    </div>
  );
}
