import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
    position: relative;
    height: auto;
    width: 100%;

    .custom-shape-divider-top-1681579043 {
        position: absolute;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index:100;
    }
    
    .custom-shape-divider-top-1681579043 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 63px;
    }
    
    .custom-shape-divider-top-1681579043 .shape-fill {
        fill: white;
    }


    .custom-shape-divider-top-1681583149 {
        position: absolute;
        bottom:-75px;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
        z-index:0;
        background-color:#4169E1;

        @media(max-width: 768px) {
            display: none;
        }
    }
    
    .custom-shape-divider-top-1681583149 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 150px;
        
        @media(max-width: 768px) {
            height: 75px;
        }
    }
    
    .custom-shape-divider-top-1681583149 .shape-fill {
        fill: #00BFFF;
    }

`;

export const FirstSection = styled.div`
    display: flex;
    background-color: #00BFFF;
    height: auto;
    width: 100%;
    margin-bottom:60px;

    .title-and-video {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
    
    h1 {
        margin-top: 150px;
        color: white;
        font-size: 35px;
        max-width: 30%;
        text-align: center;
    }

    video {
        margin-bottom: 40px;
        height: 350px;
        width: 600px;
    }

    @media(max-width: 768px) {
        margin-bottom: 0px;

        .title-and-video {
            max-width: 80%;
            margin: auto;
            margin-bottom: 120px;

            h1 {
                max-width: 100%;
                text-align: left !important;
                font-size: 25px;
            }
        }
        video {
            width: 100%;
            height: 300px;
            margin-bottom: 70px;
        }
        
    }

`;

export const LeftSideImg = styled.img`
    position: absolute;
    bottom:0;
    left:0;
    z-index:50;


    @media(max-width: 768px) {
        bottom: -4vh;
        width: 180px;
        left: 0vw;
    }
`;

export const RightSideImg = styled.img`
    position: absolute;
    bottom:0;
    right:0;
    z-index:50;
    transform: scaleX(-1);

    @media(max-width: 768px) {
        bottom: -4vh;
        width: 180px;
        right: 0vw;
    }
`;


