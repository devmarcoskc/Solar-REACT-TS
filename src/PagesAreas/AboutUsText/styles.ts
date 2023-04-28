import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutUsTextSection = styled(motion.div)`
    height: auto;
    width: 100%;
    background-color: #4169E1;
    position: relative;

    .custom-shape-divider-bottom-1681600646 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }
    
    .custom-shape-divider-bottom-1681600646 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 100px;

        @media(max-width: 768px) {
            height: 60px;
        }
    }
    
    .custom-shape-divider-bottom-1681600646 .shape-fill {
        fill: #FFFFFF;
    }
`;

export const AboutUsContainer = styled.div`
    height: auto;
    max-width: 80%;
    margin: auto;
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`

export const LeftSideImgArea = styled(motion.div)`
    margin-top: 60px;
    width: 50%;
    height: 450px;

    img {
        width: 90%;
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

export const RightSideTextArea = styled(motion.div)`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;

    h1 {
        color: white;
        font-size: 40px;
    }
    p {
        color: white;
    }

    @media(max-width: 768px) {
        margin-bottom: 100px;
    }
`