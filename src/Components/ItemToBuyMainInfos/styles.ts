import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: auto;
    max-width: 80%;
    margin: auto;
    margin-top: 20px;

    img {
        width: 45%;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        img {
            width: 60%;
            height: 250px;
        }
    }
`
export const RightSideDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    gap: 15px;
    flex: 1;

    h1 {
        color: goldenrod;
        margin-top: 40px;
        font-size: 25px;
    }

    span {
        font-size: 17px;
        text-decoration: line-through;
    }

    h2 {
        color: green;
        fot-size: 20px;
    }

    p {
        font-size: 18px;
    }

    button {
        border: none;
        margin-top: 20px;
        text-align: center;
        text-decoration: none;
        border-radius: 15px;
        width: 50%;
        padding: 10px;
        color: white;
        font-size: 18px;
        background-color: goldenrod;
        transition: all ease .7s;
        cursor: pointer;

        &:hover {
            background-color: #00BFFF;
        }
    }

    @media(max-width: 768px) {
        gap: 5px;
        margin-left: 0px !important;
    }
`