import styled from "styled-components";

const Container = styled.button`
    width: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 0 8px;
    box-sizing: border-box;

    border-radius: 3px;
    border: none;
    background-color: #1E90FF;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.95);
    }

    &:focus {
        outline: 3px solid rgba(30, 144, 255, 0.3);
    }

    @media all and (max-width: 480px) {
        width: 0px;
        height: 50px;
        flex: 1 1 0px;
    }

    * {
        flex: none;
    }
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;

    display: block;

    object-fit: contain;
    object-position: center;
`;

const Text = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    letter-spacing: 2px;
`;

const Button = (props: {
    icon?: string,
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(event);
        }
    }

    return (
        <Container onClick={handleClick}>
            {props.icon ? <Icon src={props.icon} /> : null}
            <Text>{props.children}</Text>
        </Container>
    );
}

export default Button;