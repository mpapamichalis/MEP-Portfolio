import React from "react";
import { Container, Icon, Link } from "semantic-ui-react";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div>
            <Footer />
            <Container textAlign='left'>
                <Link to="/">Go Back</Link>
            </Container>
            <Container textAlign='right'>
                <Link to="/home/contact">Leave a comment</Link>
            </Container>
            <Container textAlign='center'><Icon name="copyright outline" className="text-muted">2021</Icon></Container>
        </div>

    );
};
export default Footer;