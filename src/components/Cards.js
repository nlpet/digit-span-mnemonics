import React from "react";
import { Card, Divider } from 'semantic-ui-react';

const Cards = () => {
    return (
        <Card.Group>
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
