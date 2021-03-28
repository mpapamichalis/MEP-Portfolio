
import React from "react";
import { List, Container } from "semantic-ui-react";
//import { Link, useLocation } from "react-router-dom";


const Footer = () => {
    return (


        <Container>
            <List.Item horizonal icon='mail'
                content={<a href="mailto:mary.papamichalis@gmail.com"> Email</a>} />
            <List.Item icon='linkedin'
                content={<a href="https://www.linkedin.com/in/mary-papamichalis/">LinkedIn</a>} />
            <List.Item icon='github'
                content={<a href="https://github.com/mpapamichalis">Github</a>} />
        </Container>
    );
};

export default Footer;