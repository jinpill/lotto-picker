import styled from "styled-components";

import PickedNumber from "./PickedNumber";

const Container = styled.div`
    padding: 0 20px;

    @keyframes appearance {
        from {
            transform: translate(-100%);
        }

        to {
            transform: translateX(0%);
        }
    }

    animation: appearance 1s ease-in-out;

    & + & {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #e8e8e8;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`;

const Heading = styled.div`
    width: 80px;
    flex: none;
`;

const Title = styled.p`
    font-size: 14px;
`;

const TimeStamp = styled.p`
    color: #acacac;
    font-size: 12px;
    letter-spacing: 1px;
    white-space: nowrap;
`;

const Numbers = styled.ol`
    display: flex;
    gap: 16px;
`;

const Deleter = styled.button`
    width: 40px;
    height: 40px;

    display: block;
    padding: 0;

    position: relative;

    border: none;
    background: none;

    cursor: pointer;

    &::before,
    &::after {
        width: 50%;
        height: 2px;

        display: block;
        content: "";
        box-sizing: border-box;

        position: absolute;
        top: 50%;
        left: 50%;

        border-radius: 1px;
        background-color: #acacac;

        pointer-events: none;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

const Game = (props: {
    index: number,
    id: number,
    timestamp: Date,
    numbers: PickedNumbers,
    onDelete: (id: number) => void
}) => {
    const convertNumber = (number: number) => {
        return ("0" + number).slice(-2);
    }

    const getTimeStamp = (timestamp: Date) => {
        const month = convertNumber(timestamp.getMonth() + 1);
        const day = convertNumber(timestamp.getDate());
        const hours = convertNumber(timestamp.getHours());
        const minutes = convertNumber(timestamp.getMinutes());

        return `${month}/${day}-${hours}:${minutes}`;
    }

    const handleDelete = () => {
        props.onDelete(props.id);
    }

    return (
        <Container>
            <div>
                <Heading>
                    <Title>게임 {props.index + 1}</Title>
                    <TimeStamp>{getTimeStamp(props.timestamp)}</TimeStamp>
                </Heading>
                <Numbers>
                    {props.numbers.map(number => (
                        <li key={number}>
                            <PickedNumber value={number} />
                        </li>
                    ))}
                </Numbers>
                <Deleter onClick={handleDelete} />
            </div>
        </Container>
    );
}

export default Game;