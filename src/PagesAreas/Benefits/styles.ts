import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
    height: 100vh;
    width: 100%;
    margin-bottom: 80px;
    overflow-x: hidden;

    @media(max-width: 768px) {
        height: auto;
    }
`;

export const Container = styled.div`
    height: auto;
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    .flex-div {
        display: flex;
        width: 100%;
        height: 100%;
        margin-top: 40px;
    }

    @media(max-width: 768px) {
        .flex-div {
            flex-direction: column;
            gap: 20px;
        }
    }
`;

export const H1 = styled(motion.h1)`
    margin-top: 80px;
    color: #00BFFF;
    font-size: 30px;
    text-align: center;
`;

export const H2 = styled(motion.h2)`
    font-size: 20px;
    font-weight: 300;
    color: goldenrod;
    text-align: center;
    margin-bottom: 20px;
`

export const LeftSide = styled(motion.div)`
    display: flex;
    height: 350px;
    width: 50%;
    
    img {
        width: 90%;
    }

    @media(max-width: 768px) {
        width: 100%;
        height: 200px;
    }
`;

export const RightSide = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 100px;

    h1 {
        font-size: 23px;
        color: goldenrod;
        margin-bottom: 20px;
    }

    .check-and-resum {
        display: flex;
        width: 100%;
        align-items:center;

        svg {
            color: goldenrod;
            height: 30px;
            width: 30px;
        }

        p {
            margin-left: 10px;
            font-size: 17px;
            margin-bottom: 10px;
        }
    }

    @media(max-width: 768px) {
        margin-left: 0px !important;
    }
`
