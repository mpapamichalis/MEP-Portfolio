import React from "react";
import Header from "../../components/Header";
import { Container, Image, Divider } from "semantic-ui-react";
import Marfa from "../../images/Marfa.jpg"

const Home = () => {
    return (
        <div>
            <Header />

            <h1>About Me</h1>
            <Container textAlign='center'>
                <b>Hello world and welcome! Below is a quick introduction on how I got started in web development.</b>
            </Container>
                <Divider />
            <Container textAlign='justified'>
            <Image rounded src={Marfa} size='medium' floated='right'/>
                <p>
                    My name is Mary Papamichalis and I work in operations and sales for a fine arts service company
                    in Dallas. If you dont know, fine art service companies are the very important but typically unsung
                    heros of the artworld. Similar to a stagehand in film/ theater, art handlers- pack, transport, and
                    install artwork. Simply put, we would not have the frequent exposure to creative expression from the
                    ever changing exhibitions our local museums offer without art handlers. As you may now have guessed,
                    I have an affinity for art. I graduated from UNT with a BFA in art history. Shortly after graduation 
                    I found myself working in a cut throat and fast paced environment where I had the priviledge of the 
                    very few who actually get to touch the art and other historical antiquities.
                </p>
                <p>
                    You may be asking yourself, why the shift from art history to web development? Well, I'll tell you!
                    Most likely a similar story to your own, after the COVID-19 pandemic hit the Unitied States in early 2020, I was
                    furloughed. For the first time in over a decade I had nothing to do. I was stuck at home with nothing to do and
                    no obliations leading to no direction. Shortly after quarantine began, I caught up on the growing lists I had made of shows and movies
                    on everyone's favorite streaming services. Weeks turned into months, Summer hit and the world realized that things were not going
                    to return to normal. Businesses began to close their doors and I worried what my future would look like after a pandemic. 
                    The world was filled with a growing sense of uncertainty but one thing was definite... coding! It was time for a real
                    change and a promise of sustainability. I sought a carreer path that would be resilient to outside forces and continue to grow
                    in demand as time went on. Oh, and working remotely is a definite perk! Thank you for visiting and come back soon to check out
                    updated content.
                </p>
            </Container>
        </div>

    );
};

export default Home;