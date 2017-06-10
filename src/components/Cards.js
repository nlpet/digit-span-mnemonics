import React from "react";
import { Card, Divider } from 'semantic-ui-react';

const Cards = () => {
    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header><h1>0</h1></Card.Header>
                    <Card.Meta><b>hint:</b> zero vertical strokes</Card.Meta>
                    <Divider />
                    <Card.Content>s, soft c, z, x (in xylophone)</Card.Content>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>1</h1></Card.Header>
                    <Card.Meta><b>hint:</b> one vertical stroke</Card.Meta>
                    <Divider />
                    <Card.Content>t, d, (th in thing and this)</Card.Content>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>2</h1></Card.Header>
                    <Card.Meta><b>hint:</b> two vertical strokes</Card.Meta>
                    <Divider />
                    <Card.Description>n</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>3</h1></Card.Header>
                    <Card.Meta><b>hint:</b> three vertical strokes</Card.Meta>
                    <Divider />
                    <Card.Description>m</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>4</h1></Card.Header>
                    <Card.Meta><b>hint:</b> four ends with r</Card.Meta>
                    <Divider />
                    <Card.Description>r, l (in colonel)</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>5</h1></Card.Header>
                    <Card.Meta><b>hint:</b> L is the Roman numeral for 50</Card.Meta>
                    <Divider />
                    <Card.Description>l (lowercase of L)</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>6</h1></Card.Header>
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
                    <Card.Meta><b>hint:</b> k look like two small 7s on their sides</Card.Meta>
                    <Divider />
                    <Card.Description>k, hard c, q, ch (in loch), hard g</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>8</h1></Card.Header>
                    <Card.Meta>
                        <b>hint:</b> script f looks like a figure-8
                    </Card.Meta>
                    <Divider />
                    <Card.Description>f, ph (in phone), v, gh (in laugh)</Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Card.Header><h1>9</h1></Card.Header>
                    <Card.Meta>
                        <b>hint:</b> p looks like 9 flipped horizontally,
                                     b looks like the 9 turned 180°
                    </Card.Meta>
                    <Divider />
                    <Card.Description>p, b, gh (in hiccough)</Card.Description>
                </Card.Content>
            </Card>

        </Card.Group>
    );
}

export default Cards;
