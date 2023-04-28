import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
    height: auto;
    width: 100%;
    overflow-x: hidden !important;
`;

export const Container = styled.div`
    max-width: 80%;
    margin: auto;
    height: 100%;

    .h1-title {
        text-align: center;
        color: #00BFFF;
        font-size: 40px;
        margin-top: 40px;
    }

    .h2-title {
        color: goldenrod;
        font-size: 20px;
        font-weight: 300;
        text-align: center;
    }

    @media(max-width: 768px) {
        max-width: 90%;
    }
`;

export const ShopArea = styled.div`
    display: flex;
    flex-direction: column;
    height:auto;
    margin-top: 40px;
    margin-bottom: 100px;
    width: 80%;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const ProductArea = styled(motion.div)`
    height: auto;
    display: flex;
    width: 100%;
    margin-top: 15px;

    @media(max-width: 768px) {
        margin-top: 30px;
    }
`;

export const LeftSideImg = styled.div`
    width: 40%;
    height: 300px;

    img {
        height: 100%;
    }

    @media(max-width: 768px) {
        width: 50%;
        height: 200px;
    }
    
    @media(max-width: 380px) {
        width: 40%;
        height: 150px;
    }
 `;

export const RightSideTexts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0px !important;

    h1 {
        color: goldenrod;
        font-size: 20px;
        max-width: 95%;
    }

    span {
        margin-top: 20px;
        text-decoration: line-through;
    }

    h2 {
        color: green;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        width: 150px;
        height: 50px;
        background-color: goldenrod;
        margin-top: 40px;
        color: white;
        text-decoration: none;
        transition: all ease .7s;

        &:hover {
            background-color: #00BFFF;
        }
    }

    @media(max-width: 768px) {
        width: 50%;
        height: auto;
        h1 {
            font-size: 17px;
        }

        a {
            margin-top: 10px;
            width: 100px;
            font-size: 13px;
        }

        span {
            font-size: 14px;
        }

        h2 {
            font-size: 16px;
        }

    }

`
