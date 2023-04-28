import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding: 30px;
    background-size: cover;
    background-position: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px goldenrod;

    img {
        height: 100px;
        width: 100px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 22px;
        transition: all ease .7s;

        &:hover {
            color: goldenrod;
        }
    }
    
    .login-container, .register-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 768px) {
        width: 90%;
    }
`;

export const TextsArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    h1 {
        color: white;
        font-weight: 300;
    }

    .login-and-signin {
        display: flex;
        gap: 10px;

        p {
            color: goldenrod;
        }

        span {
            color: white;
            text-decoration: underline;
            cursor: pointer;
        }
    }  

    @media(max-width: 768px) {
        .login-and-signin {
            flex-direction: column;
        }
    }
`;

export const Form = styled.form`
    margin-top: 10px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
        color: goldenrod;
        font-size: 19px;
        font-weight: 300;
        margin-top: 10px;
    }

    input {
        width: 100%;
        padding: 10px;
        outline: 0;
        margin-top: 5px;
    }

    .error-condition {
        font-weight: bold;
        color: red;
        font-size: 15px;
    }

    button {
        width: 100%;
        border: none;
        background-color: goldenrod;
        color: white;
        padding: 10px;
        margin-top: 20px;
        font-size: 18px;
        cursor: pointer;
        transition: all ease .7s;

        &:hover {
            background-color: orange;
        }
    }
`





