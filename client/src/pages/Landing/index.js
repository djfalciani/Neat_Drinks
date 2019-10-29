import React from "react";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import DialogBox from "../../components/Dialog";
import SubmitButton from "../../components/SubmitButton";
import Footer from "../../components/Footer";

export default function Landing() {
  return (
    <div>
      <Logo />
      <LoginForm />
      <SubmitButton />{<br></br>}
      <DialogBox />
      <Footer />
    </div>
  );
}
