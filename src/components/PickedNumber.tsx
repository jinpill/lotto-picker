import styled from "styled-components";

const Container = styled.div`
    width: 64px;
    height: 64px;

    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    position: relative;

    border-radius: 50%;
    border: 3px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props: {
        color: string
    }) => "#" + props.color};

    color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    font-weight: bold;
    user-select: none;

    &::after {
        width: 20px;
        height: 14px;

        content: "";

        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-7px, 7px) rotate(45deg);

        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

const PickedNumber = (props: {
    value: Numb
}) => {
    const COLORS = [
        "DAA520", // #DAA520
        "00BFFF", // #00BFFF
        "FF6347", // #FF6347
        "A9A9A9", // #A9A9A9
        "90EE90"  // #90EE90
    ];

    const number = Number(props.value);
    const index = Math.floor((number - 1) / 10);
    const color = COLORS[index];

    return (
        <Container color={color}>
            {number}
        </Container>
    );
}

export default PickedNumber;