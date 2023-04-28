import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const BackgroundBlue = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 255, 0.2);
`

export const Container = styled.div`
    height: 100%;
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: goldenrod;
        font-size: 40px;
        font-family: "DM Sans", sans-serif;
    }

    h2 {
        color: white;
        font-size: 25px;
        font-weight: 300;
        max-width: 70%;
        font-family: "DM Sans", sans-serif;
        margin-bottom: 20px;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 18px;
        }
    }
`