import React from "react";
// import Nav from "../../components/Nav";
import LogoText from "../../components/LogoText";
import SearchForm from "../../components/SearchForm";
import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";


export default function Landing() {
  return (
    <div>
        <LogoText />
        <SearchForm />
        
        <Footer />
    </div>
  );
}
