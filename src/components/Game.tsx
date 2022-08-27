import styled from "styled-components";

import PickedNumber from "./PickedNumber";

const Container = styled.div`
    & + & {
        margin-top: 32px;
    }
`;

const Heading = styled.p`
    font-size: 20px;
`;

const Numbers = styled.ol`
    display: flex;
    gap: 16px;
    margin-top: 8px;
`;

const Game = (props: {
    index: number,
    numbers: PickedNumbers
}) => {
    return (
        <Container>
            <Heading>게임 {props.index + 1}</Heading>
            <Numbers>
                {props.numbers.map(number => (
                    <li key={number}>
                        <PickedNumber value={number} />
                    </li>
                ))}
            </Numbers>
        </Container>
    );
}

export default Game;