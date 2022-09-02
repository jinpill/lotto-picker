import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 160px;
    height: 40px;

    display: flex;
    flex-direction: column;

    > div {
        height: 2px;
        position: relative;

        &:last-child {
            &::before,
            &::after {
                content: "";
                position: absolute;
                bottom: 0;
            }

            &::before {
                width: 100%;
                height: 1px;
                background-color: #D3D3D3;
            }

            &::after {
                width: 0%;
                height: 100%;

                background-color: #1E90FF;

                transition: width 0.2s;
            }
        }
    }

    &:focus-within {
        > div:last-child::after {
            width: 100%;
        }
    }
`;

const Input = styled.input`
    flex: 1 1 auto;
    display: block;
    padding: 0;

    border-radius: 0;
    border: none;
    background: none;
    outline: none;

    font-size: 16px;
    text-align: center;
    letter-spacing: 2px;

    &::placeholder {
        color: #ACACAC;
        transition: opacity 0.2s;
    }

    &:focus::placeholder {
        opacity: 0;
    }

    &[type=number] {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            margin: 0;
            -webkit-appearance: none;
        }
    }
`;

const Field = (props: {
    value?: string,
    type?: "text" | "number",
    title?: string,
    placeholder?: string,
    onChange?: (value: string) => void
}) => {
    const [value, setValue] = useState<string>(props.value ?? "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            const MAXIMUM = 20;
            const MINIMUM = 1;

            const value = Number(event.target.value);
            const nextValue = Math.max(Math.min(value, MAXIMUM), MINIMUM).toString();

            setValue(nextValue);
            props.onChange(nextValue);
        }
    }

    return (
        <Container>
            <div />
            <Input
                value={value}
                type={props.type}
                title={props.title}
                placeholder={props.placeholder}
                onChange={handleChange}
            />
            <div />
        </Container>
    );
}

export default Field;