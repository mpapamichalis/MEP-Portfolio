// import React from "react";
// import { Button, Card, Grid, Image, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import Header from "../../components/Header";

// const PortfolioCard=() => {
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
//                                     <Button as={Link} to="" color="teal" basic icon>
//                                     <Icon name="file code outline"></Icon>
//                                     Code
//                                     </Button>
//                                     <Button as={Link} to="" color="olive" basic icon>
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

// export default PortfolioCard;

