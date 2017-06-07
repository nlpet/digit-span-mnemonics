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
        <Card>
            <Card.Content>
                <Card.Header><h1>5</h1></Card.Header>
                <Card.Meta>/l/</Card.Meta>
                <Card.Description>l (lowercase of L)</Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header><h1>6</h1></Card.Header>
                <Card.Meta>/tʃ/, /dʒ/, /ʃ/, /ʒ/</Card.Meta>
                <Card.Description>
                    ch (in cheese and chef), j, soft g, sh, c (in cello and special),
                    cz (in Czech), s (in tissue and vision), sc (in fascist),
                    sch (in schwa and eschew), t (in ration and equation),
                    tsch (in putsch), z (in seizure)
                </Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header><h1>7</h1></Card.Header>
                <Card.Meta>/k/, /ɡ/</Card.Meta>
                <Card.Description>k, hard c, q, ch (in loch), hard g</Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header><h1>8</h1></Card.Header>
                <Card.Meta>/f/, /v/</Card.Meta>
                <Card.Description>f, ph (in phone), v, gh (in laugh)</Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header><h1>9</h1></Card.Header>
                <Card.Meta>/p/, /b/</Card.Meta>
                <Card.Description>p, b, gh (in hiccough)</Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header><h1>Unassigned</h1></Card.Header>
                <Card.Meta>
                    /h/, /j/, /w/,
                    <a href="https://en.wikipedia.org/wiki/English_phonology#Vowels"> <u>vowel sounds</u></a>
                </Card.Meta>
                <Card.Description>p, b, gh (in hiccough)</Card.Description>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Card.Header><h1>(2, 27 or 7)</h1></Card.Header>
                <Card.Meta>/ŋ/</Card.Meta>
                <Card.Description>ng, n before k, hard c, q, hard g or x</Card.Description>
            </Card.Content>
        </Card>

    </Card.Group>
);

export default Cards;
