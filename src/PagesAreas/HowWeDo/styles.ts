import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    height: 80vh;
    width: 100%;

    @media(max-width: 768px) {
        height: auto;
    }
`;

export const TitleAndSubtitle = styled.div`
    overflow-x: hidden;
    max-width: 90%;
    margin: auto;

    h1 {
        color: #00BFFF;
        font-size: 40px;
        text-align:center;
        margin-top: 100px;
    }

    h2 {
        color: goldenrod;
        font-size:20px;
        font-weight: 300;
        text-align:center;
    }
`;

export const CardsContainer = styled.div`
    max-width: 85%;
    height: auto;
    margin: auto;
    display: flex;
    margin-top: 40px;
    gap: 30px;

    @media(max-width: 768px) {
        height: 100%;
        max-width: 80%;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;

export const CardItem = styled(motion.div)`
    width: 200px;
    height: 300px;

    &:hover > .card{
        cursor: pointer;
        transform: rotateY(180deg);
    }
    
    .card {
        height: 100%;
        width: 100%;
        position: relative;
        transition: transform 1500ms;
        transform-style: preserve-3d;
    
        .front-card, .back-card {
            height: 100%;
            width:100%;
            position: absolute;
            backface-visibility: hidden;
        }
    
        .front-card {
            background-size: cover;
            background-position: center;
            z-index: 10;

            .background-black {
                background-color: rgba(0,0,0, 0.8);
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                gap: 15px;
            }
    
            img {
                height: 70px;
                width: 70px;
            }
            span, h4 {
                color: white;
                font-weight: bold;
                max-width: 70%;
            }
        }
    
        .back-card {
            padding: 15px;
            color: white;
            font-size: 15px;
            background: linear-gradient(to bottom, #00308F, #007FFF);
            transform: rotateY(180deg);
            z-index: 11;

            p {
                max-width: 60%;
            }
        }
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`;



