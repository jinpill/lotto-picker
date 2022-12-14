import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
    box-sizing: border-box;

    position: sticky;
    bottom: 0;

    @media all and (max-width: 480px) {
        height: auto;
    }

    > * {
        flex: none;
    }
`;

const Panel = (props: {
    children: React.ReactNode
}) => (
    <Container>
        {props.children}
    </Container>
);

export default Panel;