import React from "react";
//import { Link } from "react-router-dom";
import { List, Container } from "semantic-ui-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUI from "../../layout/contact";
//import { Icon } from 'semantic-ui-react'


const Contact = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <ContactUI />
            <br />
            <Footer />

        </div>
    );
};

export default Contact;