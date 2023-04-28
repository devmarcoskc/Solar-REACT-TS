import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    height: auto;
    width: 100%;
    background-color: #005284;
    overflow-x: hidden;
`;

export const Container = styled.div`
    height: 100%;
    max-width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    
    h2 {
        text-align: center;
        color: goldenrod;
        font-size: 20px;
        font-weight: 300;
    }

    .loading-area {
        height: 80vh;
        width: 100%;

        h5 {
            color: white;
            font-size: 20px;
            margin-top: 30px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 60px;

        label {
            color: goldenrod;
            font-weight: bold;
            font-size: 24px;
            margin-top: 20px;
        }

        input {
            height: 40px;
            width: 60%;
            padding: 10px;
            margin-top: 5px;
            outline: 0;
            font-size: 16px;
        }

        p {
            color: white;
            font-size: 12.5px;
            margin-top: 5px;
        }

        .error-condition {
            font-weight: bold;
            color: #8B0000;
            font-size: 15px;
        }

        .latitude-and-longitude {
            display: flex;
            width: 100%;

            .inputs-lat-lon {
                display: flex;
                flex-direction: column;
                width: 27.5%;

                input {
                    width: 100%;
                    font-size: 14px;
                }
            }

            
        }

        button {
            margin-top: 20px;
            width: 60%;
            background-color: goldenrod;
            height: 50px;
            color: white;
            border: none;
            font-size: 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: all ease .7s;

            &:hover {
                background-color: #00BFFF;
            }
        }
    }

    @media(max-width: 768px) {
        form {

            input {
                width: 100%;
            }

            .latitude-and-longitude {
                flex-direction: column;
                .inputs-lat-lon {
                    width: 100%;
                    margin-left: 0px !important;
                }
            }

            button {
                width: 100%;
            }
        }
    }
`;

export const H1 = styled(motion.h1)`
    text-align: center;
    color: white;
    margin-top: 60px;
`

export const ResultToShowDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
    gap: 20px;
    margin-bottom: 60px;

    h1 {
        color: white;
        margin-top: 70px;
    }

    h4 {
        color: goldenrod;
        font-size: 20px;
        font-weight: 300;

        @media(max-width: 768px) {
            font-size: 18px;
        }
    }

    h5 {
        color: white;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 300;
    }

    span {
        color: #00BFFF;
        margin-left: 5px;
    }

    .panels-and-results {
        display: flex;
        width: 100%;
    }

    .results-panel {
        display: flex;
        flex-direction: column;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
            padding: 20px 20px;
            background-color: goldenrod;
            text-decoration: none;
            color: white;
            border-radius: 15px;
            transition: all ease .7s;
    
            &:hover {
                background-color: #00BFFF;
            }
        }
    }

    .title-and-result {
        display: flex;

        a {
            text-decoration: underline;
            color: goldenrod;
        }
    }

    button {
        width: 150px;
        border: none;
        border-radius: 15px;
        color: white;
        font-size: 15px;
        padding: 15px;
        background-color: goldenrod;
        cursor: pointer;
        transition: all ease .7s;

        &:hover {
            background-color: #00BFFF;
        }
    }

    @media(max-width: 768px) {
        width: 100%;

        .panels-and-results {
            flex-direction: column;
        }

        .results-panel {
            margin-left: 0px !important;
            margin-top: 20px;
        }
    }
`
