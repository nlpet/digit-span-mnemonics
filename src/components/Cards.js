import React from "react";
import { Card, Divider } from 'semantic-ui-react';

const Cards = () => {
    return (
        <Card.Group>
           <Card>
                <Card.Content>
                    <Card.Header><h1>7</h1></Card.Header>
                    <Card.Meta>/k/, /ɡ/</Card.Meta>
                    <Card.Meta><b>hint:</b> k look like two small 7s on their sides</Card.Meta>
                    <Divider />
                    <Card.Content>k, hard c, q, ch (in loch), hard g</Card.Content>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>8</h1></Card.Header>
                    <Card.Meta>/f/, /v/</Card.Meta>
                    <Card.Meta>
                        <b>hint:</b> script f looks like a figure-8
                    </Card.Meta>
                    <Divider />
                    <Card.Content>f, ph (in phone), v, gh (in laugh)</Card.Content>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>9</h1></Card.Header>
                    <Card.Meta>/p/, /b/</Card.Meta>
                    <Card.Meta>
                        <b>hint:</b> p looks like 9 flipped horizontally,
                                     b looks like the 9 turned 180°
                    </Card.Meta>
                    <Divider />
                    <Card.Content>p, b, gh (in hiccough)</Card.Content>
                </Card.Content>
            </Card>

        </Card.Group>
    );
};

export default Cards;
