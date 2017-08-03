import React from "react";
import { Card, Divider } from 'semantic-ui-react';

const Cards = () => {
    return (
        <Card.Group>
           <Card>
                <Card.Content>
                    <Card.Header><h1>4</h1></Card.Header>
                    <Card.Meta>/r/</Card.Meta>
                    <Card.Meta><b>hint:</b> four ends with r</Card.Meta>
                    <Divider />
                    <Card.Content>r, l (in colonel)</Card.Content>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>5</h1></Card.Header>
                    <Card.Meta>/l/</Card.Meta>
                    <Card.Meta><b>hint:</b> L is the Roman numeral for 50</Card.Meta>
                    <Divider />
                    <Card.Content>l (lowercase of L)</Card.Content>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>6</h1></Card.Header>
                    <Card.Meta>/tʃ/, /dʒ/, /ʃ/, /ʒ/</Card.Meta>
                    <Card.Meta><b>hint:</b> looks like flipped g</Card.Meta>
                    <Divider />
                    <Card.Content>
                        ch (in cheese and chef), j, soft g, sh, c (in cello and special),
                        cz (in Czech), s (in tissue and vision), sc (in fascist),
                        sch (in schwa and eschew), t (in ration and equation),
                        tsch (in putsch), z (in seizure)
                    </Card.Content>
                </Card.Content>
            </Card>
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
