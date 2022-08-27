import styled from "styled-components";

const Container = styled.header`
    height: 70px;

    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    position: sticky;
    top: 0;
    z-index: 1;

    background-color: white;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    color: #808080;
    font-size: 24px;
    font-weight: 100;

    span {
        color: #337cdd;
        font-weight: 400;
    }
`;

const Header = () => (
    <Container>
        <Title>
            <span>Lotto</span> Picker
        </Title>
    </Container>
);

export default Header;