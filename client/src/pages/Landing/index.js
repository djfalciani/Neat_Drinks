import React from "react";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import SubmitButton from "../../components/SubmitButton";
import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";


export default function Landing() {
  return (
    <div>
        <Logo />
        <LoginForm />
        <SubmitButton />
        <NewAccountButton />
        <Footer />
    </div>
  );
}
