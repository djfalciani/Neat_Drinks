import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import DialogBox from "../../components/Dialog";
import SubmitButton from "../../components/SubmitButton";
// import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";
import API from "../../utils/API";

export default function Landing() {
  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();

  function handleClick() {
    // textInput.current.focus();
    let test = textInput.current.value;
    console.log("btn Clicked");
    alert(test);
  }
  

  // Login Btn Method
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Sign Up Button Clicked");
    // API.createUser();
    console.log(e);
  };

  return (
    <div>
      <Logo />
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
      <LoginForm ref={textInput}/>
      {/* <SubmitButton onClick={() => handleClick()} />{<br></br>} */}
      <SubmitButton onClick={handleClick} />{<br></br>}
      <DialogBox />
      <Link to="/search">
        <Footer />
      </Link>
    </div>
  );
}
