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