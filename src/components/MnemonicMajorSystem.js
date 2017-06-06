import React from "react";
import { Table } from "semantic-ui-react";

const MnemonicMajorSystem = () => {
    return (
        <div>
            <h2>Mnemonic major system</h2>
            <p>
                The major system (also called the phonetic number system,
                phonetic mnemonic system, or Herigone's mnemonic system) is a
                mnemonic technique used to aid in memorizing numbers.
            </p>
            <p>
                The system works by converting numbers into consonant sounds,
                then into words by adding vowels. The system works on the principle
                that images can be remembered more easily than numbers.
            </p>
            <h2>The system</h2>
            <p>
                Each numeral is associated with one or more consonants.
                Vowels and the consonants w, h, and y are ignored. These can
                be used as "fillers" to make sensible words from the resulting
                consonant sequences. A standard mapping is:
            </p>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Numeral</Table.HeaderCell>
                        <Table.HeaderCell>Commonly associated letters</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>s, soft c, z, x (in xylophone)</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>t, d, (th in thing and this)</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>n</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>m</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>r, l (in colonel)</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell>l</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>6</Table.Cell>
                        <Table.Cell>
                            ch (in cheese and chef), j, soft g, sh, c
                            (in cello and special), cz (in Czech), s
                            (in tissue and vision), sc (in fascist),
                            sch (in schwa and eschew), t (in ration and equation),
                            tsch (in putsch), z (in seizure)
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>7</Table.Cell>
                        <Table.Cell>k, hard c, q, ch (in loch), hard g</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>8</Table.Cell>
                        <Table.Cell>f, ph (in phone), v, gh (in laugh)</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>9</Table.Cell>
                        <Table.Cell>p, b, gh (in hiccough)	</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Unassigned</Table.Cell>
                        <Table.Cell>
                            h, y, w, a, e, i, o, u, silent letters,
                            c (in packet and chutzpah), d (in judge),
                            j (in Hallelujah and jalapeno), ll (in tortilla),
                            the first p in sapphire, t (in match), one of doubled
                            letters in most contexts
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>(2, 27 or 7)</Table.Cell>
                        <Table.Cell>ng, n before k, hard c, q, hard g or x</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
};

export default MnemonicMajorSystem;
