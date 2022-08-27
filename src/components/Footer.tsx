import styled from "styled-components";

const Container = styled.footer`
    flex: none;
    padding: 32px 20px;

    background-color: #d8d8d8;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1) inset;
`;

const Wrapper = styled.ul`
    width: 100%;
    max-width: 400px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px 16px;
    margin: 0 auto;

    li {
        color: #808080;
        font-size: 14px;
        white-space: nowrap;
        user-select: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const Footer = () => (
    <Container>
        <Wrapper>
            <li>이진필</li>
            <li><a href="https://github.com/jinpill" target="__blank">깃허브</a></li>
            <li><a href="mailto:jinpill.93@gmail.com" target="__blank">이메일</a></li>
            <li>Copyright 2022. All rights reserved by Jinpill Lee.</li>
        </Wrapper>
    </Container>
);

export default Footer;