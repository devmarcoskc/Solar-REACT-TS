import styled from "styled-components";

type Props = {
    marginToChange?: boolean;
    isPageOnTop?: boolean;
}

export const Header = styled.header<Props>`
    height: 13vh;
    width: 100%;
    transition: height ease .7s;
    position: fixed;
    background-color:${props => props.isPageOnTop === true ? 'none' : 'rgb(2,3,129);'};
    z-index: 250;
`
export const Container = styled.div`
    max-width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 70px;
        width: 70px;
    }
`;

export const NavigationArea = styled.nav`
    flex: 1;
    display: flex;
    margin-left: 30px;
    justify-content: space-between;

    .login-anchor, span {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 700;
        transition: all ease .7s;
        text-decoration: none;
        color: white;

        &:hover {
            color: goldenrod;
        }
    }

    span {
        cursor: pointer;
    }
`;
export const MobileNavIcon = styled.div`
    svg {
        height: 25px;
        width: 25px;
        color: goldenrod;
        cursor: pointer;
    }
`

export const MobileNavigation = styled.nav<Props>`
    display: flex;
    position: fixed;
    transition: right ease .8s;
    top:0;
    right:${props => props.marginToChange === true ? '0' : '-60vw'};
    flex-direction: column;
    height: 100%;
    width: 60vw;
    align-items: center;
    background-color: #0000CD;
    z-index: 100;
    gap: 30px;


    svg {
        height: 25px;
        width: 25px;
        margin-top: 30px;
        color: goldenrod;
        cursor: pointer;
    }

    .login-anchor, span {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 700;
        transition: all ease .7s;
        text-decoration: none;
        color: white;

        &:hover {
            color: goldenrod;
        }
    }
`

