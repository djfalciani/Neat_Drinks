import React from "react";
// import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";


export default function Landing() {
  return (
    <div>
      {/* <Nav /> */}
        <Logo />
        <LoginForm />
        <NewAccountButton />
        <Footer />
    </div>
  );
}
