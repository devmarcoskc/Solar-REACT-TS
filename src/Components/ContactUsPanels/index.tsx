import * as C from './styles';
import CompanyIcon from '../../assets/CompanySlogan.png';
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai';

const ContactUsPanels = () => {
  return (
    <C.Section
        id="contactus"
    >
        <C.Container>
            <C.H1>
                CONTACT US
            </C.H1>
            <C.H2>We take less than 24 hours to respond.</C.H2>

            <C.InformationsContainer>
                <C.InfoArea>
                    <div className='slogan-and-title'>
                        <img src={CompanyIcon}/>
                        <h1>Our Company:</h1>
                    </div>
                    <p>
                       Aut minima totam sed aliquam impedit et corrupti explicabo sit 
                       quae voluptatem id recusandae rerum ea error tempore ut quia ipsa. 
                       Aut dolore assumenda aut quos laborum id quasi sunt sed laudantium voluptatem.
                    </p>
                    <p>Phone Number: 00 00000-0000</p>
                    <p>Email: random@gmail.com</p>
                </C.InfoArea>
                <C.InfoArea style={{marginLeft: '150px'}}>
                    <h1>Learn more:</h1>
                    <p>About our group</p>
                    <p>Services</p>
                    <p>Solar calculator</p>
                    <p>Privacy rules</p>
                </C.InfoArea>
            </C.InformationsContainer>
            <C.SocialMediaArea>
                <AiOutlineInstagram/>
                <AiOutlineWhatsApp/>
                <AiOutlineLinkedin/>
                <AiOutlineTwitter/>
            </C.SocialMediaArea>
        </C.Container>
    </C.Section>
  )
}

export default ContactUsPanels