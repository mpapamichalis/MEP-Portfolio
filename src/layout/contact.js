import React from "react";
import { Form, Input, TextArea, Button, Segment, Grid } from 'semantic-ui-react'


const ContactUI = () => {
    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}></Grid.Column>
                <Segment>
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
                            label='Comments'
                            placeholder='Message'
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
                </Segment>
            </Grid>

        </div>
    );
};

export default ContactUI;