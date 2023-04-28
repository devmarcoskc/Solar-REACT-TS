import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 80%;
    margin: auto;

    h1 {
        color: goldenrod;
        font-size: 24px;
        margin-top: 20px;
    }

    p {
        font-size: 17px;
        margin-top: 10px;
    }
`;

export const HightlightArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    margin-top: 10px;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const HightlightItem = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    gap: 15px;
    border-bottom: 1px solid goldenrod;

    .left-side-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: 2px solid goldenrod;
        margin-bottom: 10px;

        svg {
            height: 30px;
            width: 30px;
            color: goldenrod;
        }
    }

    .right-side-icon-desc {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-left: 10px;
        margin-bottom: 15px;

        h4 {
            color: goldenrod;
            font-size: 19px;
        }

        p {
            font-size: 16px;
            font-weight: bold;
        }
    }
`;

export const TechnicalInfosArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 70%;
    height: auto;
    margin-bottom: 70px;

    h1 {
        padding:10px;
        color: black;
        width: 100%;
        background-color: goldenrod;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        box-shadow: 0 0 15px goldenrod;
    }

    thead tr {
        background-color: rgb(105,105,105);
        color: white;
        text-align: left;
        border: none;
        font-weight: bold;
    }
    
    th, td {
        padding: 10px; 10px;
    }

    tbody, tr {
        border-bottom: 1px solid rgb(105,105,105);
    }

    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    @media(max-width: 768px) {
        width: 100%;

        h1 {
            margin-top: 30px;
        }
    }
`