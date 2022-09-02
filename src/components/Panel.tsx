import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
    padding: 0 20px;
    box-sizing: border-box;

    position: sticky;
    bottom: 0;

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