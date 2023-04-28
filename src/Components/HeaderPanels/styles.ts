import styled from "styled-components";

type Props = {
    showCartItem?: boolean;
    marginToChange?: boolean;
}

export const Header = styled.header`
    height: 10vh;
    width: 100%;
    background-color: blue;
    overflow-x: hidden !important;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 80%;
    margin: auto;

    .flex-nav {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
    }

    .home-and-icon {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a {
        font-size: 18px;
        font-weight: bold;
        color: white;
        text-decoration: none;
        transition: all ease .7s;

        &:hover {
            color: goldenrod;
        }
    }

    p {
        font-size: 18px;
        font-weight: bold;
        color: white;
    }
    
    .contact-us-href {
        text-decoration: underline;

        &:hover {
            color: white;
        }
    }

    #logout {
        font-size: 18px;
        font-weight: bold;
        color: white;
        cursor: pointer;
        transition: all ease .7s;

        &:hover {
            color: goldenrod;
        }
    }

    img {
        height: 60px;
        width: 60px;
    }

    .cart-and-status {
        display: flex;
        align-items: center;
        gap: 20px;

        .cartItems {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
        }

        span {
            font-size: 18px;
            font-weight: bold;
            color: goldenrod;
            cursor: pointer;
        }

        svg {
            height: 40px;
            width: 40px;
            color: goldenrod;
            cursor: pointer;
        }
    }

    svg {
        height: 25px;
        width: 25px;
        color: goldenrod;
        cursor: pointer;
    }
`;

export const MobileNav = styled.div<Props>`
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
    border-left: 1px solid goldenrod;
    color: white;

    svg {
        height: 25px;
        width: 25px;
        color: goldenrod;
        cursor: pointer;
        margin-top: 30px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .contact-us-href {
        text-decoration: underline;
    }

    .cart-and-status {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .cartItems {
            display: flex;
            flex-direction: column;

            svg {
                height: 50px;
                width: 50px;
            }
        }
    }
    
`;


export const AsideCart = styled.aside<Props>`
    height: 100vh;
    width: 30vw;
    transition: right ease .8s;
    position: fixed;
    background-color: #00008B;
    right: ${props => props.showCartItem === true ? '-60vw' : '0'}; 
    z-index: 200;
    top: 0;
    overflow: hidden;

    @media(max-width: 768px) {
        width: 60vw;
    }
`;

export const AsideContainer = styled.div`
    height: 100%;
    max-width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .cart-and-closeMark {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;

         svg {
            height: 50px;
            width: 50px;
            color: goldenrod;
         }

         #closemarkId {
            cursor: pointer;
            transition: all ease .7s;
            
            &:hover {
                color: #00BFFF;
            }
         }
    }


    h1, h2 {
        color: white;
    }

    p {
        color: goldenrod;
    }

    button {
        padding: 12px 20px;
        background-color: goldenrod;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 5px;
        margin-top: 5px;
        transition: all ease .7s;
        font-size: 15px;

        &:hover {
            background-color: #00BFFF;
        }
    }

`