import styled from "styled-components";

const Container = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    color: #808080;
    font-size: 20px;
    font-weight: 100;

    strong {
        font-weight: 400;
    }
`;

const Empty = () => (
    <Container>
        <Text>
            <strong>추가하기 버튼</strong>을
            <wbr /> 눌러주세요!
        </Text>
    </Container>
);

export default Empty;