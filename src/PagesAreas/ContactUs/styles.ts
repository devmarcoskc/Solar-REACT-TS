import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    height: 70vh;
    width: 100%;
    background-color:rgb(2,3,129);

    @media(max-width: 768px) {
        height: auto;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 80%;
    margin: auto;
`

export const H1 = styled(motion.h1)`
    color: white;
    font-size: 30px;
    text-align: center;
    margin-top: 40px;
`;

export const H2 = styled.h2`
    font-size: 20px;
    font-weight: 300;
    color: goldenrod;
    text-align: center;
`;

export const InformationsContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    gap: 10px;
    margin-top: 20px;

    h1 {
        color: goldenrod;
    }
    .slogan-and-title {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
        }
        h1 {
            color: goldenrod;
            margin-left: 10px;
        }
    }
    p {
        color: white;
        font-size: 13px;
    }

    @media(max-width: 768px) {
        width: 100%;
        margin-left: 0px !important;
    }
`;

export const SocialMediaArea = styled.div`
    flex: 1;
    display: flex;
    gap: 40px;
    margin-top: 40px;

    svg {
        color: goldenrod;
        height: 50px;
        width: 50px;
    }

    @media(max-width: 768px) {
        gap: 0px;
        justify-content: space-between;
        margin-bottom: 40px;
    }
`