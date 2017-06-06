import React from "react";
import { Card } from 'semantic-ui-react';

// TODO: finish the Cards

const Cards = () => (
    <Card.Group>
        <Card>
            <Card.Content>
                <Card.Header><h1>0</h1></Card.Header>
                <Card.Meta>	/s/, /z/</Card.Meta>
                <Card.Description>s, soft c, z, x (in xylophone)</Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Card.Content>
                <Card.Header><h1>1</h1></Card.Header>
                <Card.Meta>/t/, /d/, (/θ/, /ð/)</Card.Meta>
                <Card.Description>t, d, (th in thing and this)</Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Card.Content>
                <Card.Header><h1>2</h1></Card.Header>
                <Card.Meta>/n/</Card.Meta>
                <Card.Description>n</Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Card.Content>
                <Card.Header><h1>3</h1></Card.Header>
                <Card.Meta>/m/</Card.Meta>
                <Card.Description>m</Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Card.Content>
                <Card.Header><h1>4</h1></Card.Header>
                <Card.Meta>/r/</Card.Meta>
                <Card.Description>r, l (in colonel)</Card.Description>
            </Card.Content>
        </Card>

    </Card.Group>
);

export default Cards;
