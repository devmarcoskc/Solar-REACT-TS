import * as C from './styles';
import CompanyIcon from '../../assets/CompanySlogan.png';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import Links from '../Links';
import { Link } from 'react-router-dom';
import { SelectedPage } from '../../Types/types';
import useMediaQuery from '../../Hooks/useMediaQuery';
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../Contexts/Context';
import * as React from 'react';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const HeaderNav = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const [loginArea, setLoginArea] = useState<boolean>(false);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isDesktopScreen = useMediaQuery('(min-width: 1060px)');
  const {state, dispatch} = useContext(Context);

  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if(!isDesktopScreen) {
      let handler = (e:any) => {
        if(!ref.current?.contains(e.target)) {
          setIsMenuToggled(false);
        }
      };
      document.addEventListener('mousedown', handler);
    }
  }, []);

  const handleLogout = (e:React.MouseEvent<HTMLSpanElement>) => {
    dispatch({
      type: 'CHANGE_LOG',
      payload: {
          isLogged: false
      }
    });
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: ''
      }
    });
  }
  return (
    <C.Header isPageOnTop={isTopOfPage}>
        <C.Container>
            <img src={CompanyIcon}/>
            {isDesktopScreen &&
            <C.NavigationArea>
                <Links 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="About Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}    
                />
                <Links 
                  page="How we Work"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}    
                />
                <Links
                  page="Solar Panels"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}    
                />
                <Links
                  page="Simulation"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}  
                />
                <Links
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}  
                />
                {!state.user.isLogged &&
                  <Link to="/Login" className='login-anchor'>Login</Link>
                }
                {state.user.isLogged &&
                  <span onClick={handleLogout}>Logout</span>
                }
            </C.NavigationArea>

            }
            {!isDesktopScreen &&
              <C.MobileNavIcon>
                <FaBars onClick={() => setIsMenuToggled(!isMenuToggled)}/>
              </C.MobileNavIcon>
            }
        </C.Container>

        {!isDesktopScreen && (
          <C.MobileNavigation marginToChange={isMenuToggled} ref={ref}>
                <AiOutlineClose onClick={() => setIsMenuToggled(!isMenuToggled)}/>
                <Links 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="About Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}    
                />
                <Links 
                  page="How we Work"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}    
                />
                <Links
                  page="Solar Panels"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}    
                />
                <Links
                  page="Simulation"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}  
                />
                <Links
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}  
                />
                {!state.user.isLogged &&
                  <Link to="/Login" className='login-anchor'>Login</Link>
                }
                {state.user.isLogged &&
                  <span onClick={handleLogout}>Logout</span>
                }
          </C.MobileNavigation>
        )}
    </C.Header>
  )
}

export default HeaderNav
