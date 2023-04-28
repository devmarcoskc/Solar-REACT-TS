import React, { useState } from 'react';
import * as C from './styles';
import { Link } from 'react-router-dom';
import CompanyIcon from '../../assets/CompanySlogan.png';
import {BsFillCartCheckFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useContext } from 'react';
import { Context } from '../../Contexts/Context';
import { UserDataInfoType } from '../../Types/types';
import {FaBars} from 'react-icons/fa';
import useMediaQuery from '../../Hooks/useMediaQuery';


type Props = {
    nameItem: string;
}

const HeaderPanels = ({nameItem}: Props) => {
  const {state, dispatch} = useContext(Context);
  const [cartItemClosed, setCarItemClosed] = useState(true);
  const [cartItemsList, setCartItemsList] = useState<string[]>([]);
  const isDesktopScreen = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const handleLogout = (e:React.MouseEvent<HTMLSpanElement>) => {
    dispatch({
        type: 'CHENGE_LOG',
        payload: {
            isLogged: false
        }
    });
    window.location.reload();
  }

  const showCarItems = (e:React.MouseEvent<HTMLDivElement>) => {
        let Users:UserDataInfoType[] = JSON.parse(localStorage.getItem('Users') || '[]');

        const checkIndex = (element:UserDataInfoType, index: number, array:UserDataInfoType[]) => {
            return element.name === state.user.name
        }
        let elementIndex = Users.findIndex(checkIndex);

        let newCartList = [];
        for(let i in Users[elementIndex].cartItem) {
            newCartList.push(
                Users[elementIndex].cartItem[i]
            );
        }

        if(!isDesktopScreen) {
            setIsMenuToggled(!isMenuToggled);
        }

        setCartItemsList(newCartList);
        setCarItemClosed(false);
  }


  return (
    <div>
        <C.Header>
            <C.HeaderContainer>
                <div className='home-and-icon'>
                    <Link to="/">
                        <img src={CompanyIcon}/>
                    </Link>
                    {isDesktopScreen &&
                        <Link to="/">Home</Link>
                    }
                </div>
                {state.user.name !== '' && isDesktopScreen &&
                    <p>Welcome, {state.user.name}</p>
                }
                {!state.user.isLogged && isDesktopScreen &&
                    <p>Contact us, <a href='#contactus' className='contact-us-href'>here</a></p>
                }
                <div className='cart-and-status'>
                    {state.user.isLogged === false && isDesktopScreen &&
                        <Link to="/Login">Login or Sign up</Link>
                    }
                    {state.user.isLogged === true && isDesktopScreen &&
                        <span id='logout' onClick={handleLogout}>Logout</span>
                    }
                    {state.user.isLogged === true && isDesktopScreen &&
                        <div className='cartItems' onClick={showCarItems}>
                            <span>Items</span>
                                <BsFillCartCheckFill/>
                        </div>
                    }
                </div>
                {!isDesktopScreen &&
                    <FaBars onClick={() => setIsMenuToggled(!isMenuToggled)}/>
                }
            </C.HeaderContainer>
        </C.Header>

        <C.MobileNav marginToChange={isMenuToggled}>
            <AiOutlineClose onClick={() => setIsMenuToggled(!isMenuToggled)}/>
            {state.user.name !== '' && !isDesktopScreen &&
                <p>Welcome, {state.user.name}</p>
            }
            {!state.user.isLogged && !isDesktopScreen &&
                <p>Contact us, <a href='#contactus' className='contact-us-href'>here</a></p>
            }
            <div className='cart-and-status'>
                {state.user.isLogged === false && !isDesktopScreen &&
                    <Link to="/Login">Login or Sign up</Link>
                }
                {state.user.isLogged === true && !isDesktopScreen &&
                    <span id='logout' onClick={handleLogout}>Logout</span>
                }
                {state.user.isLogged === true && !isDesktopScreen &&
                    <div className='cartItems' onClick={showCarItems}>
                        <span>Items</span>
                        <BsFillCartCheckFill/>
                    </div>
                }
            </div>
        </C.MobileNav>
        
        <C.AsideCart showCartItem={cartItemClosed}>
            <C.AsideContainer>
                <div className='cart-and-closeMark'>
                    <BsFillCartCheckFill/> 
                    <AiFillCloseCircle 
                        id='closemarkId'
                        onClick={() => setCarItemClosed(true)}
                    />
                </div>
                <h1>Your items: {cartItemsList?.length !== undefined ? 
                    cartItemsList.length : 
                    cartItemsList?.length+1 
                }
                </h1>
                <h2>Names:</h2>
                {cartItemsList?.map((cartItem, index) => (
                    <div key={index}>
                        <p key={index}>
                            {cartItem}
                        </p>
                        <button>Complete your buy</button>
                    </div>
                ))}
            </C.AsideContainer>
        </C.AsideCart>
    </div>
  )
}

export default HeaderPanels