import React from "react";
import { Table } from "semantic-ui-react";

const Reference = () => {
    return (
        <div>
            <h2>The Mnemonic Major System (in a nutshell)</h2>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Numeral</Table.HeaderCell>
                        <Table.HeaderCell>
                            <a href="https://en.wikipedia.org/wiki/English_phonology#Consonants">Sounds</a>
                            <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet"> (IPA)</a>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <a href="https://en.wikipedia.org/wiki/English_orthography#Consonants">
                                Commonly associated letters
                            </a>
                        </Table.HeaderCell>
                        <Table.HeaderCell>Mnemonic and remarks</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>/s/, /z/</Table.Cell>
                        <Table.Cell>s, soft c, z, x (in xylophone)</Table.Cell>
                        <Table.Cell>
                            Zero begins with z (and /z/). Upper case S and Z, as well as lower
                            case s and z, have zero vertical strokes each, as with the numeral 0.
                            The alveolar fricatives /s/ and /z/ form a voiceless and voiced pair.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>/t/, /d/, (/θ/, /ð/)</Table.Cell>
                        <Table.Cell>t, d, (th in thing and this)</Table.Cell>
                        <Table.Cell>
                            Upper case T and D, as well as lower case t and d have one vertical
                            stroke each, as with the numeral 1. The alveolar stops /t/ and /d/
                            form a voiceless and voiced pair, as do the similar-sounding dental
                            fricatives /θ/ and /ð/, though some variant systems may omit the latter pair.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>/n/</Table.Cell>
                        <Table.Cell>n</Table.Cell>
                        <Table.Cell>
                            Upper case N and lower case n each have two vertical strokes
                            and two points on the baseline.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>/m/</Table.Cell>
                        <Table.Cell>m</Table.Cell>
                        <Table.Cell>
                            Lower case m has three vertical strokes. Both upper case M and lower
                            case m each have three points on the baseline and look like the
                            numeral 3 on its side.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>/r/</Table.Cell>
                        <Table.Cell>r, l (in colonel)</Table.Cell>
                        <Table.Cell>Four ends with r (and /r/ in rhotic accents).</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell>/l/</Table.Cell>
                        <Table.Cell>l</Table.Cell>
                        <Table.Cell>
                            L is the Roman numeral for 50. Among the five digits of one's
                            left hand, the thumb and index fingers also form an L.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>6</Table.Cell>
                        <Table.Cell>/tʃ/, /dʒ/, /ʃ/, /ʒ/</Table.Cell>
                        <Table.Cell>
                            ch (in cheese and chef), j, soft g, sh, c
                            (in cello and special), cz (in Czech), s
                            (in tissue and vision), sc (in fascist),
                            sch (in schwa and eschew), t (in ration and equation),
                            tsch (in putsch), z (in seizure)
                        </Table.Cell>
                        <Table.Cell>
                            Upper case G and lower case g look like the numeral 6 flipped
                            horizontally and rotated 180° respectively. Lower case script j
                            tends to have a lower loop, like the numeral 6. In some serif fonts,
                            upper case CH, SH and ZH each have six serifs. The postalveolar
                            affricates /tʃ/ and /dʒ/ form a voiceless and voiced pair, as do
                            the similar-sounding postalveolar fricatives /ʃ/ and /ʒ/.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>7</Table.Cell>
                        <Table.Cell>/k/, /ɡ/</Table.Cell>
                        <Table.Cell>k, hard c, q, ch (in loch), hard g</Table.Cell>
                        <Table.Cell>
                            Both upper case K and lower case k look like two small 7s on
                            their sides. In some fonts, the lower-right part of the upper
                            case G looks like a 7. The velar stops /k/ and /g/ form a
                            voiceless and voiced pair.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>8</Table.Cell>
                        <Table.Cell>/f/, /v/</Table.Cell>
                        <Table.Cell>f, ph (in phone), v, gh (in laugh)</Table.Cell>
                        <Table.Cell>
                            Lower case script f, which tends to have an upper and lower loop,
                            looks like a figure-8. The labiodental fricatives /f/ and /v/
                            form a voiceless and voiced pair.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>9</Table.Cell>
                        <Table.Cell>/p/, /b/</Table.Cell>
                        <Table.Cell>p, b, gh (in hiccough)	</Table.Cell>
                        <Table.Cell>
                            Upper case P and lower case p look like the numeral 9 flipped
                            horizontally. Lower case b looks like the numeral 9 turned 180°.
                            The labial stops /p/ and /b/ form a voiceless and voiced pair.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Unassigned</Table.Cell>
                        <Table.Cell>/h/, /j/, /w/, vowel sounds</Table.Cell>
                        <Table.Cell>
                            h, y, w, a, e, i, o, u, silent letters,
                            c (in packet and chutzpah), d (in judge),
                            j (in Hallelujah and jalapeno), ll (in tortilla),
                            the first p in sapphire, t (in match), one of doubled
                            letters in most contexts
                        </Table.Cell>
                        <Table.Cell>
                            Vowel sounds, semivowels (/j/ and /w/) and /h/ do not correspond
                            to any number. They can appear anywhere in a word without changing
                            its number value.
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>(2, 27 or 7)</Table.Cell>
                        <Table.Cell>/ŋ/</Table.Cell>
                        <Table.Cell>ng, n before k, hard c, q, hard g or x</Table.Cell>
                        <Table.Cell>
                            Variant systems differ about whether /ŋ/ should encode 2 and classified
                            together with /n/, 7 and classified together with /k/ and /g/ or
                            even 27 (e.g. ring could be 42, 47 or 427). When a /k/ and /g/ is
                            pronounced separately after the /ŋ/, variant systems that chose /ŋ/ to
                            be 27 also disagree if an extra 7 should be written (e.g. finger could
                            be 8274 or 82774, or if /ŋ/ is chosen to be 7, 8774).
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        <p>
            Fore more information, have a look at the
            <a href="https://en.wikipedia.org/wiki/Mnemonic_major_system"> wiki article</a>.
        </p>
        <p>
            Also consider taking Memrise's
            <a href="https://www.memrise.com/course/43909/the-mnemonic-major-system/"> course </a>
            for learning the The Mnemonic Major System (requires registration).
        </p>
        </div>
    )
};

export default Reference;
