import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { CardDeck, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon, Button } from "semantic-ui-react";
import Bloodlines from "../../images/Bloodlines.png";
import CoronaSurvival from "../../images/CoronaSurvival.png";
import LinkUp from "../../images/LinkUp.png";
import Footer from "../../components/Footer";

const Portfolio = () => {
    return (
        <div>
            <Header />
            <h1>My Portfolio</h1>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={LinkUp} />
                    <Card.Body>
                        <Card.Title>LinkUp</Card.Title>
                        <Card.Text>
                            The state of the world today has people’s career trajectories evolving on the fly
                            resulting in an increase in city transplants. With connections made at your fingertips
                            this app will help the user #LinkUp and make in person connections.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button as={Link} to="https://github.com/mpapamichalis" color="teal" basic icon>
                            <Icon name="file code outline"></Icon>Repo</Button>
                        <Button as={Link} to="https://dashboard.heroku.com/apps" color="olive" basic icon>
                            <Icon name="eye"></Icon>Heroku</Button>
                        <br />
                        <small className="text-muted">March 2021</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Bloodlines} />
                    <Card.Body>
                        <Card.Title>Bloodlines App</Card.Title>
                        <Card.Text>Using MySql_db, this app allows users to register and log in as a local
                        bloodbank to add new donors and patients to their database. Tables are created to
                        store patient and donor credentials. All names are kept confidential in accordance
                            to HIPAA.</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button as={Link} to="https://github.com/mpapamichalis" color="teal" basic icon>
                            <Icon name="file code outline"></Icon>Repo</Button>
                        <Button as={Link} to="https://dashboard.heroku.com/apps" color="olive" basic icon>
                            <Icon name="eye"></Icon>Heroku</Button>
                        <br />
                        <small className="text-muted">January 2021</small>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={CoronaSurvival} />
                    <Card.Body>
                        <Card.Title>Corona Survival App</Card.Title>
                        <Card.Text>This Web Application is intended to help make your life in Quarantine
                        a tiny bit simpler by asking you some fun questions before recommending a movie and
                        food recipe for the night pulled from two different API's. The movie selection and
                        food recipe are choosen based on the answers choosen and will output a unique value
                        each time. The idea is to provide the user with new movie and recipe ideas that they
                            may not have orignally thought of on their own.</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button as={Link} to="https://github.com/mpapamichalis" color="teal" basic icon>
                            <Icon name="file code outline"></Icon>Repo</Button>
                        <Button as={Link} to="https://dashboard.heroku.com/apps" color="olive" basic icon>
                            <Icon name="eye"></Icon>Heroku</Button>
                        <br />
                        <small className="text-muted">November 2020</small>

                    </Card.Footer>
                </Card>
            </CardDeck>
            <br />
            <Footer />

        </div>


    );

};

export default Portfolio;






// import React from "react";
// import { Button, Card, Container, Image, Icon, } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import Header from "../../components/Header";

// const Portfolio=() => {
//     return (
//         <div>
//             <Header />
//             <h1>My Portfolio</h1>
//             <Grid columns='three' divided>
//             <Grid.Row>
//                 <Grid.Column>
//                     <Card.Group doubling itemsPerRow={3} stackable>
//                         {_.map(cards, (card) => (
//                             <Card key={card.header}>
//                             <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
//                                 <Card.Content>                                
//                                         <>
//                                             <Card.Header>{card.header}</Card.Header>
//                                             <Card.Meta>{card.date}</Card.Meta>
//                                             <Card.Description>{card.description}</Card.Description>
//                                         </>                                
//                                 </Card.Content>

//                                 <Card.Content extra>
//                                     <Button as={Link} to="https://github.com/mpapamichalis" color="teal" basic icon>
//                                     <Icon name="file code outline"></Icon>
//                                     Code
//                                     </Button>
//                                     <Button as={Link} to="https://dashboard.heroku.com/apps" color="olive" basic icon>
//                                     <Icon name="eye"></Icon>
//                                     Heroku App
//                                     </Button>
//                                 </Card.Content>
//                             </Card>
//                         ))};
//                     </Card.Group>
//                 </Grid.Column>
//             </Grid.Row>
//             </Grid>


//             <Link to="/">Go Back</Link>
//             <br/>
//             <Link to="/home/contact">Contact Me!</Link>

//         </div>
//         );
//     };

//         // const Card = [
//         //     {
//         //         index: "",
//         //         date: 'October 2020',
//         //         header: 'Hello World',
//         //         description: 'First App',
//         //     },
//         //     {
//         //         index: "",
//         //         date: 'Decmeber 2020',
//         //         header: 'Corona Survival App',
//         //         description: 'Dont be bored at home during quarantine.',
//         //     },
//         //     {
//         //         index: "",
//         //         date: 'January 2021',
//         //         header: 'Bloodlines App',
//         //         description: 'MySql Bloodbank App',
//         //     },
//         // ]




// export default Portfolio;