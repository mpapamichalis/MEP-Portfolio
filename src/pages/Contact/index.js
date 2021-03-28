import React from "react";
import { Link } from "react-router-dom";
import { List, Container } from "semantic-ui-react";
import Header from "../../components/Header";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


const Contact = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                    />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Opinion'
                    placeholder='Opinion'
                />
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                />
            </Form>
            <Container>
                <List.Item icon='mail'
                    content={<a href="mailto:mary.papamichalis@gmail.com"> Email</a>} />
                <List.Item icon='linkedin'
                    content={<a href="https://www.linkedin.com/in/mary-papamichalis/">LinkedIn</a>} />
                <List.Item icon='github'
                    content={<a href="https://github.com/mpapamichalis">Github</a>} />
            </Container>


        </div>
    );
};

export default Contact;